/* =====================================================================
   SITE BEHAVIOUR — you normally do not need to edit this file.
   Content lives in data.js (publications, gallery, numbers) and
   index.html (page text).
   ===================================================================== */
(function () {
  const S = window.SITE || {};
  const $ = (q, el = document) => el.querySelector(q);
  const $$ = (q, el = document) => [...el.querySelectorAll(q)];
  const esc = t => String(t ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

  /* ---------- headline numbers (data.js), then live Google Scholar data ---------- */
  if (S.metrics) $$('[data-metric]').forEach(b => { if (S.metrics[b.dataset.metric]) b.textContent = S.metrics[b.dataset.metric]; });
  let scholar = null;
  const norm = t => String(t || '').toLowerCase().replace(/<[^>]+>/g, '').replace(/[^a-z0-9]+/g, '');
  function citesFor(title) {
    if (!scholar || !scholar.papers) return null;
    const k = norm(title).slice(0, 60);
    const hit = scholar.papers.find(p => { const n = norm(p.title); return n.slice(0, 60) === k || n.startsWith(k.slice(0, 45)) || k.startsWith(n.slice(0, 45)); });
    return hit ? hit.citations : null;
  }
  function fmtDate(d) { try { return new Date(d + 'T00:00:00').toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }); } catch (e) { return d; } }
  async function loadScholar() {
    const host = location.hostname, urls = [];
    if (host.endsWith('.github.io')) urls.push(`https://raw.githubusercontent.com/${host.split('.')[0]}/${host}/main/data/scholar.json`);
    urls.push('data/scholar.json?v=' + Date.now());
    for (const u of urls) {
      try {
        const r = await fetch(u, { cache: 'no-store' });
        if (!r.ok) continue;
        const d = await r.json();
        if (d && d.citations) return d;
      } catch (e) { /* try next */ }
    }
    return null;
  }
  loadScholar().then(d => {
    if (!d) return;
    scholar = d;
    const set = (k, v) => { const el = $(`[data-metric="${k}"]`); if (el && v != null) el.textContent = Number(v).toLocaleString('en-US'); };
    set('citations', d.citations); set('hIndex', d.hIndex);
    const src = $('#scholar-src');
    if (src) src.textContent = `Live from Google Scholar · i10-index ${d.i10Index} · updated ${fmtDate(d.updated || d.checked)}`;
    renderP();
  });

  /* ---------- publications ---------- */
  const P = (S.publications || []).slice().sort((a, b) => b.year - a.year);
  const bold = a => esc(a).replace(/(Anwar, R\. ?S\.|Rana, S\. ?A\.)/g, '<span class="me">$1</span>');
  $$('[data-count]').forEach(e => e.textContent = P.length);
  const allBtn = $('#pf [data-f="all"]'); if (allBtn) allBtn.textContent = `All (${P.length})`;
  let pf = 'all', pq = '';
  function renderP() {
    const L = P.filter(p => {
      const f = pf === 'all' || pf === 'cited' || (pf === 'A' && (p.tags || []).includes('ABDC A')) || (pf === 'first' && p.firstAuthor) ||
        (pf === 'aw' && p.award) || (pf === '2026' && p.year === 2026) || (pf === '2025' && p.year === 2025) || (pf === 'older' && p.year <= 2024);
      const q = !pq || `${p.title} ${p.authors} ${p.journal}`.toLowerCase().includes(pq);
      return f && q;
    });
    if (pf === 'cited') L.sort((a, b) => (citesFor(b.title) || 0) - (citesFor(a.title) || 0));
    $('#pcount').textContent = `Showing ${L.length} of ${P.length} journal articles` + (scholar ? ' · citation counts from Google Scholar' : '');
    $('#pubs').innerHTML = L.map(p => {
      const link = p.doi ? `<a href="https://doi.org/${esc(p.doi)}" target="_blank" rel="noopener">doi.org/${esc(p.doi)} ↗</a>`
        : (p.link ? `<a href="${esc(p.link)}" target="_blank" rel="noopener">Article ↗</a>` : '');
      const tags = (p.tags || []).map(t => `<span class="${t === 'ABDC A' ? 'A' : ''}">${esc(t)}</span>`).join('');
      const c = citesFor(p.title);
      const cb = c ? `<span class="cites">Cited by ${c}</span>` : '';
      return `<li><div class="yr">${esc(p.year)}</div><div><span class="t">${esc(p.title)}</span><div class="au">${bold(p.authors)}</div><div class="jr">${esc(p.journal)}</div><div class="meta">${cb}${p.award ? `<span class="aw">${esc(p.award)}</span>` : ''}${tags}${p.firstAuthor ? '<span>First author</span>' : ''}${link}</div></div></li>`;
    }).join('');
  }
  $('#pf').addEventListener('click', e => { const b = e.target.closest('button'); if (!b) return; pf = b.dataset.f; $$('#pf button').forEach(x => x.classList.toggle('on', x === b)); renderP(); });
  $('#psearch').addEventListener('input', e => { pq = e.target.value.trim().toLowerCase(); renderP(); });
  renderP();

  /* ---------- gallery ---------- */
  const G = S.gallery || [];
  let gcat = 'all', cur = [];
  function renderG() {
    cur = G.filter(g => gcat === 'all' || g.category === gcat);
    $('#masonry').innerHTML = cur.map((g, i) =>
      `<figure data-i="${i}"><img loading="lazy" src="img/${esc(g.file)}" alt="${esc(g.caption)}" style="object-position:${esc(g.crop || 'center')}"><figcaption>${esc(g.caption)}</figcaption></figure>`).join('');
  }
  $('#gf').addEventListener('click', e => { const b = e.target.closest('button'); if (!b) return; gcat = b.dataset.c; $$('#gf button').forEach(x => x.classList.toggle('on', x === b)); renderG(); });
  renderG();

  /* ---------- lightbox ---------- */
  const lb = $('#lb'), lbi = $('img', lb), lbp = $('p', lb);
  let list = [], ci = 0;
  const show = () => { lbi.src = list[ci].src; lbi.alt = list[ci].cap; lbp.textContent = list[ci].cap; };
  const open = (items, i) => { list = items; ci = i; show(); lb.classList.add('show'); };
  const step = d => { ci = (ci + d + list.length) % list.length; show(); };
  $('#masonry').addEventListener('click', e => { const f = e.target.closest('figure'); if (f) open(cur.map(g => ({ src: 'img/' + g.file, cap: g.caption })), +f.dataset.i); });
  $$('img[data-cap]').forEach(img => img.addEventListener('click', () => {
    const group = $$('img[data-cap]', img.closest('.photo-row,.flyers'));
    open(group.map(x => ({ src: x.getAttribute('src'), cap: x.dataset.cap })), group.indexOf(img));
  }));
  $('.x', lb).onclick = () => lb.classList.remove('show');
  $('.pv', lb).onclick = () => step(-1);
  $('.nx', lb).onclick = () => step(1);
  lb.addEventListener('click', e => { if (e.target === lb) lb.classList.remove('show'); });
  document.addEventListener('keydown', e => {
    if (!lb.classList.contains('show')) return;
    if (e.key === 'Escape') lb.classList.remove('show');
    if (e.key === 'ArrowLeft') step(-1);
    if (e.key === 'ArrowRight') step(1);
  });

  /* ---------- page routing (#home, #about, ...) ---------- */
  const V = ['home', 'about', 'experience', 'research', 'publications', 'training', 'gallery', 'contact'];
  function route() {
    const h = (location.hash || '#home').slice(1), v = V.includes(h) ? h : 'home';
    V.forEach(n => $('#v-' + n).classList.toggle('show', n === v));
    $$('nav.primary a').forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + v));
    $('#nav').classList.remove('open');
    window.scrollTo(0, 0);
  }
  addEventListener('hashchange', route); route();
  $('#burger').onclick = () => $('#nav').classList.toggle('open');

  /* ---------- "Request a training" button scrolls to the form ---------- */
  $$('[data-scroll]').forEach(a => a.addEventListener('click', e => {
    const t = document.getElementById(a.dataset.scroll);
    if (t && location.hash === a.getAttribute('href')) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth' }); }
    else if (t) setTimeout(() => t.scrollIntoView({ behavior: 'smooth' }), 80);
  }));

  /* ---------- enquiry forms: sent straight to your inbox via FormSubmit ---------- */
  const email = S.email || 'rana.salman@nu.edu.pk';
  const endpoint = 'https://formsubmit.co/ajax/' + encodeURIComponent(S.formKey || email);
  $$('form.enq-form').forEach(form => {
    const note = $('.note', form), btn = $('button[type=submit]', form), label = btn.textContent;
    const say = (cls, html) => { note.className = 'note show ' + cls; note.innerHTML = html; };
    form.addEventListener('submit', async e => {
      e.preventDefault();
      const d = Object.fromEntries(new FormData(form));
      if (d._honey) return;                                   // spam bot
      if (!d.name || !d.email || !d.msg) { say('err', 'Please fill in your name, email and message.'); return; }
      if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(d.email)) { say('err', 'Please enter a valid email address.'); return; }
      delete d._honey;
      const topic = d.topic || d.type || 'General enquiry';
      const payload = Object.assign({
        _subject: `Website enquiry: ${topic} | ${d.name}`,
        _template: 'table', _captcha: 'false', _replyto: d.email,
        'Sent from': form.dataset.source || 'Website'
      }, d);
      btn.disabled = true; btn.textContent = 'Sending…'; say('', 'Sending your message…');
      try {
        const r = await fetch(endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }, body: JSON.stringify(payload) });
        const j = await r.json().catch(() => ({}));
        if (r.ok && (j.success === true || j.success === 'true')) {
          form.reset();
          say('ok', `<strong>Thank you, ${esc(d.name.split(' ')[0])}.</strong> Your message has been sent. You will receive a reply at ${esc(d.email)}.`);
          btn.textContent = 'Sent';
          setTimeout(() => { btn.disabled = false; btn.textContent = label; }, 6000);
          return;
        }
        throw new Error(j.message || 'Not delivered');
      } catch (err) {
        const body = Object.entries(d).map(([k, v]) => `${k}: ${v}`).join('\n');
        const href = `mailto:${email}?subject=${encodeURIComponent('Website enquiry: ' + topic)}&body=${encodeURIComponent(body)}`;
        say('err', `Sorry, the message could not be sent just now. Please email <a href="${href}">${esc(email)}</a> or WhatsApp +92 323 6521686.`);
        btn.disabled = false; btn.textContent = label;
      }
    });
  });
})();
