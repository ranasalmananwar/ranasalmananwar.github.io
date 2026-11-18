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

  /* ---------- headline numbers / live Scholar box ---------- */
  if (S.metrics) $$('[data-metric]').forEach(b => { if (S.metrics[b.dataset.metric]) b.textContent = S.metrics[b.dataset.metric]; });
  const live = (S.scholarWidgetUrl || '').trim();
  if (live) {
    const sep = live.includes('?') ? '&' : '?';
    $('#scholar-stats').innerHTML = `<iframe class="scholar-frame" style="height:190px" src="${esc(live + sep)}view=stats" title="Google Scholar citation indices" loading="lazy"></iframe>`;
    $('#metrics').style.display = 'none';
    $('#scholar-papers').innerHTML = `<iframe class="scholar-frame" style="height:900px" src="${esc(live + sep)}view=papers" title="Google Scholar publication list" loading="lazy"></iframe>`;
    $('#scholar-live').style.display = 'block';
    const src = $('.src'); if (src) src.textContent = 'Live from Google Scholar, updated daily.';
  }

  /* ---------- publications ---------- */
  const P = (S.publications || []).slice().sort((a, b) => b.year - a.year);
  const bold = a => esc(a).replace(/(Anwar, R\. ?S\.|Rana, S\. ?A\.)/g, '<span class="me">$1</span>');
  $$('[data-count]').forEach(e => e.textContent = P.length);
  const allBtn = $('#pf [data-f="all"]'); if (allBtn) allBtn.textContent = `All (${P.length})`;
  let pf = 'all', pq = '';
  function renderP() {
    const L = P.filter(p => {
      const f = pf === 'all' || (pf === 'A' && (p.tags || []).includes('ABDC A')) || (pf === 'first' && p.firstAuthor) ||
        (pf === 'aw' && p.award) || (pf === '2026' && p.year === 2026) || (pf === '2025' && p.year === 2025) || (pf === 'older' && p.year <= 2024);
      const q = !pq || `${p.title} ${p.authors} ${p.journal}`.toLowerCase().includes(pq);
      return f && q;
    });
    $('#pcount').textContent = `Showing ${L.length} of ${P.length} journal articles`;
    $('#pubs').innerHTML = L.map(p => {
      const link = p.doi ? `<a href="https://doi.org/${esc(p.doi)}" target="_blank" rel="noopener">doi.org/${esc(p.doi)} ↗</a>`
        : (p.link ? `<a href="${esc(p.link)}" target="_blank" rel="noopener">Article ↗</a>` : '');
      const tags = (p.tags || []).map(t => `<span class="${t === 'ABDC A' ? 'A' : ''}">${esc(t)}</span>`).join('');
      return `<li><div class="yr">${esc(p.year)}</div><div><span class="t">${esc(p.title)}</span><div class="au">${bold(p.authors)}</div><div class="jr">${esc(p.journal)}</div><div class="meta">${p.award ? `<span class="aw">${esc(p.award)}</span>` : ''}${tags}${p.firstAuthor ? '<span>First author</span>' : ''}${link}</div></div></li>`;
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

  /* ---------- contact form (opens the visitor's email app) ---------- */
  const email = S.email || 'rana.salman@nu.edu.pk';
  $('#cform').addEventListener('submit', e => {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(e.target));
    const subject = `Enquiry: ${d.type} | ${d.name}`;
    const body = `Name: ${d.name}\nEmail: ${d.email}\nInstitution: ${d.org || '-'}\nEnquiry type: ${d.type}\nFormat: ${d.format}\nPreferred dates: ${d.dates || '-'}\n\n${d.msg}`;
    const href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    const n = $('#cnote');
    n.innerHTML = `Your message is ready. <a href="${href}">Open it in your email app</a>, or send it to <strong>${esc(email)}</strong>. <button type="button" class="btn outline" id="cp" style="padding:6px 12px;margin-left:6px">Copy message</button>`;
    n.classList.add('show');
    $('#cp').onclick = () => navigator.clipboard.writeText(`To: ${email}\nSubject: ${subject}\n\n${body}`).then(() => $('#cp').textContent = 'Copied').catch(() => {});
  });
})();
