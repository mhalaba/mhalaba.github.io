import { readFileSync, writeFileSync } from 'node:fs';
const src = JSON.parse(readFileSync(process.argv[2],'utf8'));
const pick = v => v ? { lo:v.lo, hi:v.hi, raw:v.raw, ...(v.system?{system:1}:{}) } : null;
const out = {
  meta: {
    generated: new Date().toISOString().slice(0,10),
    source: 'assets/taxonomy-DWKbz4yx.js (Atlas Dronów 2026)',
    fx: { EUR: 1.08, UAH: 1/41 },
    note: {
      pl: 'Wartości liczbowe wyprowadzone automatycznie z pól tekstowych atlasu; oryginalny zapis zachowany w polu raw i pokazywany w podpowiedzi.',
      en: 'Numeric values derived automatically from the atlas text fields; the original wording is kept in raw and shown in the tooltip.'
    }
  },
  domains: src.domains,
  theaters: src.theaters.map(t => ({ id:t.id, name:t.name, blurb:t.blurb })),
  types: src.types.map(t => ({ id:t.id, name:t.name, short:t.short, domain:t.domain, range:t.range })),
  drones: src.rows.map(r => ({
    id:r.id, name:r.name, typeId:r.typeId, domain:r.domain, theaters:r.theaters,
    year:r.year, origin:r.origin, image:r.image, featured:r.featured, role:r.role,
    cost:pick(r.cost), range:pick(r.range), speed:pick(r.speed), mtow:pick(r.mtow),
  })),
};
writeFileSync(process.argv[3], JSON.stringify(out));
const c = k => out.drones.filter(d=>d[k]).length;
console.log(`drony ${out.drones.length} · koszt ${c('cost')} · zasięg ${c('range')} · prędkość ${c('speed')} · masa ${c('mtow')}`);
console.log('typy', out.types.length, '· teatry', out.theaters.length);
console.log('rozmiar', (JSON.stringify(out).length/1024).toFixed(1), 'kB');
