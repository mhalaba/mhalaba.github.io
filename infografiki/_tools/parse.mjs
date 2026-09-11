import { readFileSync, writeFileSync } from 'node:fs';
const d = JSON.parse(readFileSync(process.argv[2],'utf8'));
const MUL = { 'tys.':1e3,'tys':1e3,'mln':1e6,'mld':1e9 };
const num = s => parseFloat(s.replace(/\s/g,'').replace(',','.'));
const N = String.raw`\d[\d\s.,]*`;          // liczba
const Q = String.raw`[+]?`;                  // 40+ km
const M = String.raw`(?:(tys\.?|mln|mld)\s*)?`;

// pierwsze w kolejności wystąpienia dopasowanie liczba(+zakres)+jednostka
function scan(txt, units) {
  if (!txt || txt === '—') return null;
  const alt = units.map(u=>u.re).join('|');
  const re = new RegExp(
    String.raw`(${N})${Q}(?:\s*[–—-]\s*(${N})${Q})?\s*${M}(${alt})`, 'gi');
  let m;
  while ((m = re.exec(txt)) !== null) {
    const unit = units.find(u => new RegExp(`^(?:${u.re})$`,'i').test(m[4]));
    if (!unit) continue;
    const k = (MUL[(m[3]||'').toLowerCase()] ?? 1) * unit.k;
    const lo = num(m[1])*k;
    const hi = m[2] ? num(m[2])*k : lo;
    return { lo, hi, raw: txt };
  }
  return null;
}
const FX = { USD:1, EUR:1.08, UAH:1/41 };
const SYSTEM = /kompleks|komplek|za kompleks|systemu/i;   // cena zestawu, nie egzemplarza
function parseCost(txt) {
  if (!txt || txt==='—') return null;
  const cur = (txt.match(/USD|EUR|UAH/)||[])[0];
  if (!cur) return null;
  const r = scan(txt, [{re:String.raw`(?:USD|EUR|UAH)`, k:1}]);
  if (!r) return null;
  const fx = FX[cur];
  return { lo:Math.round(r.lo*fx), hi:Math.round(r.hi*fx), cur, system:SYSTEM.test(txt), raw:txt };
}
const parseKm  = t => scan(t, [{re:String.raw`km(?!/h)`, k:1}]);
const parseKmh = t => scan(t, [{re:String.raw`km/h`,     k:1}]);
const parseMass= t => scan(t, [{re:String.raw`kg`,k:1},{re:String.raw`t\b`,k:1000},{re:String.raw`g\b`,k:0.001}]);

const rows = d.drones.map(x => ({
  id:x.id, name:x.name, typeId:x.typeId, domain:x.domain, theaters:x.theaters,
  year:x.year, origin:x.origin, image:x.image, featured:!!x.featured,
  role:x.role, note:x.note, specs:x.specs,
  cost:parseCost(x.specs?.cost?.pl), range:parseKm(x.specs?.range?.pl),
  speed:parseKmh(x.specs?.speed?.pl), mtow:parseMass(x.specs?.mtow?.pl),
}));
writeFileSync(process.argv[3], JSON.stringify({rows,types:d.types,theaters:d.theaters,domains:d.domains,specLabels:d.specLabels},null,2));

console.log('=== AUDYT: MASA (surowy → kg) ===');
for (const r of rows) if (r.specs?.mtow?.pl) console.log(r.id.padEnd(16), String(r.mtow?(r.mtow.lo===r.mtow.hi?r.mtow.lo:r.mtow.lo+'–'+r.mtow.hi):'—').padEnd(14), '«'+r.specs.mtow.pl.slice(0,50)+'»');
