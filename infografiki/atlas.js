/* Atlas Dronów 2026 — wspólny moduł plansz infograficznych.
   Bez zależności zewnętrznych. Język dzielony z aplikacją atlasu
   (?lang= oraz localStorage 'atlas-lang'). */

const LANG_KEY = 'atlas-lang';

export const PLATES = [
  { n: '01', slug: 'koszt',          pl: 'Ekonomia asymetrii',   en: 'The economics of asymmetry' },
  { n: '02', slug: 'zasieg',         pl: 'Drabina zasięgu',      en: 'The ladder of reach' },
  { n: '03', slug: 'masa-predkosc',  pl: 'Morfologia',           en: 'Morphology' },
  { n: '04', slug: 'klasy',          pl: 'Szesnaście klas',      en: 'Sixteen classes' },
  { n: '05', slug: 'teatry',         pl: 'Teatry i rozprzestrzenianie', en: 'Theatres and proliferation' },
];

/* paleta — wartości identyczne z style.css i PALETA.md */
export const PAL = {
  cat: ['#ad8a2a', '#5d92d8', '#c4698f'],
  seq: ['#655221', '#82692a', '#9f8134', '#bd9b40', '#dbb64d'],
  brass: '#c4a35a', brassDim: '#8a7340', line: '#2a332e',
  ink: '#0e1412', muted: '#9aa396', paper: '#f1e6d0', fg: '#e8e4d8',
};
export const DOMAIN_COLOR = { air: PAL.cat[0], sea: PAL.cat[1], ground: PAL.cat[2] };

/* ───────────────────────────── język ───────────────────────────── */

export function initialLang() {
  const q = new URLSearchParams(location.search).get('lang');
  if (q === 'pl' || q === 'en') return q;
  try {
    const s = localStorage.getItem(LANG_KEY);
    if (s === 'pl' || s === 'en') return s;
  } catch { /* prywatny tryb — zostaje domyślny */ }
  return 'pl';
}

export let lang = initialLang();
const langSubs = new Set();

export function setLang(next) {
  lang = next;
  document.documentElement.lang = next;
  try { localStorage.setItem(LANG_KEY, next); } catch { /* bez utrwalenia */ }
  document.querySelectorAll('.lang-toggle button').forEach(b => {
    b.setAttribute('aria-pressed', String(b.dataset.lang === next));
  });
  langSubs.forEach(fn => fn(next));
}
export function onLang(fn) { langSubs.add(fn); }

/** Wybiera wariant językowy z pola {pl, en}. */
export const T = o => (o == null ? '' : typeof o === 'string' ? o : (o[lang] ?? o.pl ?? ''));

/* ───────────────────────────── formaty ───────────────────────────── */

const loc = () => (lang === 'en' ? 'en-GB' : 'pl-PL');
export const nf = (v, d = 0) =>
  new Intl.NumberFormat(loc(), { minimumFractionDigits: d, maximumFractionDigits: d }).format(v);

/* Kwoty: poniżej 10 tys. pełną liczbą, wyżej w tysiącach, od miliona w milionach. */
const dec = n => (Math.abs(n - Math.round(n)) < 0.05 ? 0 : 1);   /* ułamek tylko gdy potrzebny */
function usdScale(v) {
  if (v >= 1e6) return [1e6, lang === 'en' ? ' M' : ' mln'];
  if (v >= 1e4) return [1e3, lang === 'en' ? ' k' : ' tys.'];
  return [1, ''];
}
export function usd(v) {
  const [k, u] = usdScale(v);
  return '$' + nf(v / k, dec(v / k)) + u;
}
/** Widełki ze wspólną jednostką: „$30–50 tys.”, nie „$30 tys.–$50 tys.”.
    Jednostkę dyktuje wartość górna, żeby para nie rozjechała się na progu. */
export function usdSpan(lo, hi) {
  if (lo === hi) return usd(lo);
  const [k, u] = usdScale(hi);
  const d = Math.max(dec(lo / k), dec(hi / k));
  return '$' + nf(lo / k, d) + '–' + nf(hi / k, d) + u;
}
/* ── jednostki ──────────────────────────────────────────────────────
   Dane trzymamy zawsze metrycznie. Wersja angielska pokazuje miary
   imperialne (mile, mph, funty) z metryczną w nawiasie — czytelnik
   anglojęzyczny dostaje jednostkę, którą zna, nie skrót „tys.”.      */

export const imperial = () => lang === 'en';

export const LEN = {                       /* km */
  to: v => (imperial() ? v * 0.621371 : v),
  from: v => (imperial() ? v / 0.621371 : v),
  unit: () => (imperial() ? 'mi' : 'km'),
};
export const SPD = {                       /* km/h */
  to: v => (imperial() ? v * 0.621371 : v),
  from: v => (imperial() ? v / 0.621371 : v),
  unit: () => (imperial() ? 'mph' : 'km/h'),
};
export const MASS = {                      /* kg */
  to: v => (imperial() ? v * 2.2046226 : v),
  from: v => (imperial() ? v / 2.2046226 : v),
  unit: () => (imperial() ? 'lb' : 'kg'),
};

const rnd = v => nf(v, 0);
const rSmart = v => nf(v, dec(v));

/** Odległość, w jednostce czytelnika. */
export function len(v) { return rnd(LEN.to(v)) + ' ' + LEN.unit(); }
/** Odległość z metryczną w nawiasie — do podpowiedzi i tabel. */
export function lenBoth(v) { return imperial() ? `${rnd(LEN.to(v))} mi (${rnd(v)} km)` : `${rnd(v)} km`; }
export function lenSpan(lo, hi) {
  if (lo === hi) return lenBoth(lo);
  return imperial()
    ? `${rnd(LEN.to(lo))}–${rnd(LEN.to(hi))} mi (${rnd(lo)}–${rnd(hi)} km)`
    : `${rnd(lo)}–${rnd(hi)} km`;
}

/** Prędkość. */
export function spd(v) { return rnd(SPD.to(v)) + ' ' + SPD.unit(); }
export function spdBoth(v) { return imperial() ? `${rnd(SPD.to(v))} mph (${rnd(v)} km/h)` : `${rnd(v)} km/h`; }
export function spdSpan(lo, hi) {
  if (lo === hi) return spdBoth(lo);
  return imperial()
    ? `${rnd(SPD.to(lo))}–${rnd(SPD.to(hi))} mph (${rnd(lo)}–${rnd(hi)} km/h)`
    : `${rnd(lo)}–${rnd(hi)} km/h`;
}

/** Masa: gramy/kilogramy/tony metrycznie, uncje/funty/tony krótkie po angielsku. */
export function mass(v) {
  if (imperial()) {
    const lb = v * 2.2046226;
    if (lb < 1) return nf(lb * 16, 1) + ' oz';
    if (lb < 2000) return rSmart(lb) + ' lb';
    const t = lb / 2000;
    return nf(t, dec(t)) + (t >= 2 ? ' tons' : ' ton');
  }
  if (v < 1) return rnd(v * 1000) + ' g';
  if (v >= 1000) return nf(v / 1000, v % 1000 ? 1 : 0) + ' t';
  return rSmart(v) + ' kg';
}
export function massBoth(v) {
  if (!imperial()) return mass(v);
  const metric = v < 1 ? `${rnd(v * 1000)} g` : v >= 1000 ? `${nf(v / 1000, v % 1000 ? 1 : 0)} t` : `${rSmart(v)} kg`;
  return `${mass(v)} (${metric})`;
}
export function massSpan(lo, hi) {
  if (lo === hi) return massBoth(lo);
  return `${mass(lo)} – ${massBoth(hi)}`;
}

/** Podziałka osi masy: jedna jednostka na całej osi, żeby „1 000 lb” nie sąsiadowało z „5 ton”. */
export const massTick = dv => nf(dv) + ' ' + MASS.unit();

/** Podziałki 1–2–5 × dekada w podanym przedziale (w jednostkach wyświetlania). */
export function ticks125(lo, hi, max = 7) {
  const out = [];
  for (let e = Math.floor(Math.log10(lo)); e <= Math.ceil(Math.log10(hi)); e++) {
    for (const m of [1, 2, 5]) {
      const v = m * 10 ** e;
      if (v >= lo && v <= hi) out.push(v);
    }
  }
  /* przerzedzamy, gdy podziałek za dużo na oś */
  while (out.length > max) {
    for (let i = out.length - 1; i >= 0; i--) if (String(out[i])[0] === '2') out.splice(i, 1);
    if (out.length > max) for (let i = out.length - 1; i >= 0; i--) if (String(out[i])[0] === '5') out.splice(i, 1);
    break;
  }
  return out;
}

/* Zgodność wsteczna dla plansz operujących wprost na metrycznych polach. */
export const km = len;
export const kmh = spd;
export const kg = mass;
export const span = (v, f) => (v.lo === v.hi ? f(v.lo) : `${f(v.lo)} – ${f(v.hi)}`);

/* ───────────────────────────── skale ───────────────────────────── */

export function logScale(d0, d1, r0, r1) {
  const l0 = Math.log10(d0), l1 = Math.log10(d1);
  const s = v => r0 + ((Math.log10(Math.max(v, d0)) - l0) / (l1 - l0)) * (r1 - r0);
  s.invert = p => 10 ** (l0 + ((p - r0) / (r1 - r0)) * (l1 - l0));
  s.domain = [d0, d1];
  s.range = [r0, r1];
  /* pełne dekady w dziedzinie, np. 1e2, 1e3, 1e4 */
  s.ticks = () => {
    const out = [];
    for (let e = Math.ceil(l0); e <= Math.floor(l1); e++) out.push(10 ** e);
    return out;
  };
  return s;
}
export function linScale(d0, d1, r0, r1) {
  const s = v => r0 + ((v - d0) / (d1 - d0)) * (r1 - r0);
  s.domain = [d0, d1]; s.range = [r0, r1];
  return s;
}
export const extent = (arr, f) => {
  let lo = Infinity, hi = -Infinity;
  for (const x of arr) { const v = f(x); if (v == null || !isFinite(v)) continue; if (v < lo) lo = v; if (v > hi) hi = v; }
  return [lo, hi];
};

/* ───────────────────────────── SVG ───────────────────────────── */

const NS = 'http://www.w3.org/2000/svg';
export function el(name, attrs = {}, parent = null) {
  const n = document.createElementNS(NS, name);
  for (const [k, v] of Object.entries(attrs)) {
    if (v == null) continue;
    if (k === 'text') n.textContent = v;
    else n.setAttribute(k, String(v));
  }
  if (parent) parent.appendChild(n);
  return n;
}
export const clear = node => { while (node.firstChild) node.removeChild(node.firstChild); };

/* ───────────────────────────── podpowiedź ───────────────────────────── */

let tipEl = null;
export const Tip = {
  show(html, ev) {
    if (!tipEl) {
      tipEl = document.createElement('div');
      tipEl.className = 'tip';
      tipEl.setAttribute('role', 'status');
      document.body.appendChild(tipEl);
    }
    tipEl.innerHTML = html;
    tipEl.dataset.show = '1';
    this.move(ev);
  },
  move(ev) {
    if (!tipEl || !ev) return;
    const pad = 14, r = tipEl.getBoundingClientRect();
    let x = ev.clientX + pad, y = ev.clientY + pad;
    if (x + r.width > innerWidth - 8) x = ev.clientX - r.width - pad;
    if (y + r.height > innerHeight - 8) y = ev.clientY - r.height - pad;
    tipEl.style.left = Math.max(8, x) + 'px';
    tipEl.style.top = Math.max(8, y) + 'px';
  },
  hide() { if (tipEl) tipEl.dataset.show = '0'; },
};

/** Składa treść podpowiedzi: tytuł, nadtytuł, wiersze i cytat źródłowy. */
export function tipHTML({ title, sub, rows = [], raw }) {
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  return (
    `<p class="tip__t">${esc(title)}</p>` +
    (sub ? `<p class="tip__s">${esc(sub)}</p>` : '') +
    rows.map(([k, v]) => `<div class="tip__row"><span>${esc(k)}</span><b>${esc(v)}</b></div>`).join('') +
    (raw ? `<p class="tip__raw">${esc(raw)}</p>` : '')
  );
}

/* ───────────────────────── nagłówek i stopka ───────────────────────── */

const NAV = [
  { href: '/', pl: 'Przegląd', en: 'Overview' },
  { href: '/katalog', pl: 'Katalog', en: 'Catalogue' },
  { href: '/raport', pl: 'Raport', en: 'Report' },
  { href: '/infografiki/', pl: 'Plansze', en: 'Plates' },
  { href: '/zrodla', pl: 'Źródła', en: 'Sources' },
];

function renderChrome(activeHref) {
  const head = document.querySelector('.site-head__in');
  if (head) {
    head.innerHTML =
      `<a class="brandmark" href="/">
         <span class="brandmark__kicker" data-i="kicker"></span>
         <span class="brandmark__title" data-i="brand"></span>
       </a>
       <nav class="site-nav" aria-label="${lang === 'en' ? 'Main' : 'Główna'}">
         ${NAV.map(i => `<a href="${i.href}" data-nav="${i.href}"${i.href === activeHref ? ' aria-current="page"' : ''}></a>`).join('')}
         <span class="lang-toggle">
           <button type="button" data-lang="pl" aria-pressed="false">PL</button>
           <button type="button" data-lang="en" aria-pressed="false">EN</button>
         </span>
       </nav>`;
    head.querySelectorAll('.lang-toggle button').forEach(b =>
      b.addEventListener('click', () => setLang(b.dataset.lang)));
  }
  const foot = document.querySelector('.site-foot__in');
  if (foot) {
    foot.innerHTML =
      `<p data-i="footA"></p>
       <p data-i="footB"></p>
       <p><a href="/">atlas.halaba.online</a> · <a href="/zrodla" data-i="footSrc"></a></p>`;
  }
}

const CHROME = {
  kicker: { pl: 'Atlas Dronów', en: 'Drone Atlas' },
  brand: { pl: 'Plansze', en: 'Plates' },
  footA: {
    pl: 'Opracowanie na podstawie źródeł otwartych, styczeń–wrzesień 2026.',
    en: 'Compiled from open sources, January–September 2026.',
  },
  footB: {
    pl: 'Liczby wyprowadzone z pól tekstowych atlasu — oryginalny zapis widoczny w podpowiedzi każdego znacznika.',
    en: 'Figures derived from the atlas text fields — the original wording is shown in each mark’s tooltip.',
  },
  footSrc: { pl: 'Źródła', en: 'Sources' },
};

function paintChrome() {
  document.querySelectorAll('[data-nav]').forEach(a => {
    const i = NAV.find(x => x.href === a.dataset.nav);
    if (i) a.textContent = i[lang];
  });
  for (const [k, v] of Object.entries(CHROME)) {
    document.querySelectorAll(`[data-i="${k}"]`).forEach(n => { n.textContent = v[lang]; });
  }
}

/* ───────────────────────── tabela danych ───────────────────────── */

/** Widok tabelaryczny — wymagany kanał dostępu do tych samych liczb co wykres. */
export function dataTable(host, { caption, cols, rows }) {
  const btn = document.createElement('button');
  btn.className = 'table-toggle';
  btn.type = 'button';
  btn.setAttribute('aria-expanded', 'false');
  const wrap = document.createElement('div');
  wrap.className = 'data-table';
  wrap.hidden = true;

  const paint = () => {
    btn.textContent = wrap.hidden
      ? (lang === 'en' ? 'Show the data table' : 'Pokaż tabelę danych')
      : (lang === 'en' ? 'Hide the data table' : 'Ukryj tabelę danych');
    const c = cols();
    const r = rows();
    wrap.innerHTML =
      `<table><caption>${T(caption)}</caption><thead><tr>` +
      c.map(x => `<th scope="col">${x.label}</th>`).join('') +
      `</tr></thead><tbody>` +
      r.map(row => '<tr>' + c.map((x, i) =>
        `<td class="${x.num ? 'num' : ''}${row[i] === '—' ? ' dim' : ''}">${row[i]}</td>`).join('') + '</tr>').join('') +
      `</tbody></table>`;
  };

  btn.addEventListener('click', () => {
    wrap.hidden = !wrap.hidden;
    btn.setAttribute('aria-expanded', String(!wrap.hidden));
    paint();
  });
  onLang(paint);
  paint();
  host.append(btn, wrap);
}

/* ───────────────────────────── start ───────────────────────────── */

/** Wczytuje dane, rysuje chrome i uruchamia planszę. draw() woła się ponownie
    przy zmianie języka i przy zmianie szerokości okna. */
export async function boot({ active, draw }) {
  document.documentElement.lang = lang;
  renderChrome(active);
  paintChrome();
  onLang(() => { paintChrome(); paintI18n(); draw(); });

  /* teksty statyczne malujemy przed pobraniem danych — strona ma być
     czytelna nawet gdyby data.json nie dojechał */
  paintI18n();

  const res = await fetch(new URL('data.json', import.meta.url));
  if (!res.ok) throw new Error('data.json ' + res.status);
  const data = await res.json();

  window.__atlas = data;
  draw(data);

  let w = innerWidth, t;
  addEventListener('resize', () => {
    if (Math.abs(innerWidth - w) < 40) return;
    w = innerWidth;
    clearTimeout(t);
    t = setTimeout(() => draw(data), 150);
  });
  return data;
}

/* Teksty statyczne strony: <span data-tpl="pl|en"> nie wystarcza przy atrybutach,
   więc elementy z data-pl/data-en dostają treść stąd. */
export function paintI18n(root = document) {
  root.querySelectorAll('[data-pl]').forEach(n => {
    const v = n.dataset[lang];
    if (v != null) n.textContent = v;
  });
  root.querySelectorAll('[data-pl-html]').forEach(n => {
    const v = n.dataset[lang + 'Html'];
    if (v != null) n.innerHTML = v;
  });
  root.querySelectorAll('[data-pl-aria]').forEach(n => {
    const v = n.dataset[lang + 'Aria'];
    if (v != null) n.setAttribute('aria-label', v);
  });
}
