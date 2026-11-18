/**
 * Google Scholar live box for Dr. Rana Salman Anwar's Google Site
 * ---------------------------------------------------------------
 * What it does
 *   - Once a day, reads the public Google Scholar profile below.
 *   - Saves citations, h-index, i10-index and the paper list.
 *   - Serves two small web pages you embed in Google Sites:
 *       <web-app-url>?view=stats   -> citation / h-index / i10 boxes
 *       <web-app-url>?view=papers  -> list of papers with citation counts
 *   - If Google Scholar blocks a read on some day, the last good numbers stay on the site.
 *
 * One-time setup (about 10 minutes)
 *   1. Go to script.google.com > New project. Name it "Scholar Box".
 *   2. Replace everything in Code.gs with this file.
 *   3. Click + next to Files > HTML, name it "Widget", paste Widget.html.
 *   4. Choose the function "setup" in the toolbar and press Run. Allow the permissions.
 *   5. Deploy > New deployment > type "Web app".
 *        Execute as: Me    Who has access: Anyone
 *      Copy the Web app URL.
 *   6. In Google Sites: Insert > Embed > By URL, paste the URL followed by ?view=stats
 *      Repeat with ?view=papers on the Publications page.
 */

const SCHOLAR_ID = 'uxLhFRUAAAAJ';
const PROFILE_URL = 'https://scholar.google.com/citations?user=' + SCHOLAR_ID +
                    '&hl=en&cstart=0&pagesize=100&sortby=pubdate';

/** Run once: fetches now and schedules a daily refresh. */
function setup() {
  ScriptApp.getProjectTriggers().forEach(t => ScriptApp.deleteTrigger(t));
  ScriptApp.newTrigger('updateScholar').timeBased().everyDays(1).atHour(3).create();
  updateScholar();
}

/** Reads the Scholar profile and stores the results. */
function updateScholar() {
  const res = UrlFetchApp.fetch(PROFILE_URL, {
    muteHttpExceptions: true,
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124 Safari/537.36',
      'Accept-Language': 'en-US,en;q=0.9'
    }
  });
  const html = res.getContentText();
  if (res.getResponseCode() !== 200 || html.indexOf('gsc_rsb_std') === -1) {
    console.warn('Scholar did not return the profile today (code ' + res.getResponseCode() + '). Keeping previous data.');
    return;
  }

  // Citation indices: [citations all, since, h all, h since, i10 all, i10 since]
  const nums = [...html.matchAll(/<td class="gsc_rsb_std">(\d+)<\/td>/g)].map(m => +m[1]);
  const sinceYear = (html.match(/Since (\d{4})/) || [])[1] || '';

  // Papers
  const rows = html.split('<tr class="gsc_a_tr">').slice(1);
  const papers = rows.map(r => {
    const title = clean((r.match(/class="gsc_a_at"[^>]*>([\s\S]*?)<\/a>/) || [])[1]);
    const grays = [...r.matchAll(/<div class="gs_gray">([\s\S]*?)<\/div>/g)].map(m => clean(m[1]));
    const cites = +((r.match(/class="gsc_a_ac[^"]*"[^>]*>(\d*)<\/a>/) || [])[1] || 0);
    const year = clean((r.match(/class="gsc_a_h gsc_a_hc[^"]*">(\d{4})?<\/span>/) || [])[1] || '');
    return { t: title, a: grays[0] || '', v: (grays[1] || '').replace(/,\s*\d{4}$/, ''), c: cites, y: year };
  }).filter(p => p.t);

  const data = {
    citations: nums[0], citationsSince: nums[1],
    h: nums[2], hSince: nums[3],
    i10: nums[4], i10Since: nums[5],
    since: sinceYear, papers: papers,
    updated: Utilities.formatDate(new Date(), 'Asia/Karachi', 'd MMMM yyyy')
  };
  save(data);
  console.log('Updated: ' + data.citations + ' citations, h-index ' + data.h + ', ' + papers.length + ' papers.');
}

function clean(s) {
  return (s || '').replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/&#39;/g, "'")
                  .replace(/&quot;/g, '"').replace(/\s+/g, ' ').trim();
}

/* Script properties hold up to 9 KB each, so the data is stored in chunks. */
function save(obj) {
  const props = PropertiesService.getScriptProperties();
  const json = JSON.stringify(obj), size = 8000, n = Math.ceil(json.length / size), out = {};
  for (let i = 0; i < n; i++) out['d' + i] = json.substr(i * size, size);
  out.n = String(n);
  props.deleteAllProperties();
  props.setProperties(out);
}
function load() {
  const props = PropertiesService.getScriptProperties(), n = +(props.getProperty('n') || 0);
  if (!n) return null;
  let json = '';
  for (let i = 0; i < n; i++) json += props.getProperty('d' + i);
  return JSON.parse(json);
}

/** Serves the embeddable box. */
function doGet(e) {
  const t = HtmlService.createTemplateFromFile('Widget');
  t.view = (e && e.parameter && e.parameter.view) || 'stats';
  t.data = load();
  t.profile = 'https://scholar.google.com/citations?user=' + SCHOLAR_ID + '&hl=en';
  return t.evaluate()
          .setTitle('Google Scholar')
          .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
