import{K as e,W as t,f as n,n as r}from"./i18n-D34KA294.js";import{r as i}from"./index-dfb31a3f.js";import{a,i as o,n as s,o as c,r as l}from"./taxonomy-63bf3d3b.js";import{a as u,i as d,n as f,r as p,t as m}from"./report-e4b007c5.js";var h=e(t()),g=n();function _(){let e=i.useSearch(),t=r(),n=e.lang??t.lang,_=e=>typeof e==`string`?e:e[n];(0,h.useEffect)(()=>{e.lang&&e.lang!==t.lang&&t.setLang(e.lang)},[e.lang,t]);let y=n===`en`;return(0,g.jsxs)(`div`,{className:`druk-root bg-paper text-ink`,children:[(0,g.jsx)(`style`,{children:v}),(0,g.jsxs)(`section`,{className:`cover`,children:[(0,g.jsxs)(`div`,{className:`cover-top`,children:[(0,g.jsx)(`p`,{className:`kicker`,children:_(d.classification)}),(0,g.jsxs)(`p`,{className:`kicker`,children:[_(d.issued),` · `,_(d.period)]})]}),(0,g.jsxs)(`div`,{className:`cover-mid`,children:[(0,g.jsx)(`p`,{className:`year`,children:`2026`}),(0,g.jsx)(`h1`,{children:y?(0,g.jsxs)(g.Fragment,{children:[`Drone`,(0,g.jsx)(`br`,{}),`atlas`]}):(0,g.jsxs)(g.Fragment,{children:[`Atlas`,(0,g.jsx)(`br`,{}),`dronów`]})}),(0,g.jsx)(`p`,{className:`lede`,children:_(d.subtitle)})]}),(0,g.jsxs)(`dl`,{className:`meta`,children:[(0,g.jsxs)(`div`,{children:[(0,g.jsx)(`dt`,{children:y?`Models`:`Modele`}),(0,g.jsxs)(`dd`,{children:[o.length,` `,y?`representative types`:`modeli reprezentatywnych`]})]}),(0,g.jsxs)(`div`,{children:[(0,g.jsx)(`dt`,{children:y?`Types`:`Typy`}),(0,g.jsxs)(`dd`,{children:[l.length,` `,y?`tactical classes`:`klas taktycznych`]})]}),(0,g.jsxs)(`div`,{children:[(0,g.jsx)(`dt`,{children:y?`Theatres`:`Teatry`}),(0,g.jsx)(`dd`,{children:y?`Ukraine, Middle East, Africa, East Asia, NATO`:`Ukraina, Bliski Wschód, Afryka, Azja Wsch., NATO`})]}),(0,g.jsxs)(`div`,{children:[(0,g.jsx)(`dt`,{children:y?`Method`:`Metoda`}),(0,g.jsx)(`dd`,{children:_(d.pagesHint)})]})]})]}),(0,g.jsxs)(`section`,{className:`page-break`,children:[(0,g.jsx)(`h2`,{children:y?`Contents`:`Spis treści`}),(0,g.jsxs)(`ol`,{className:`toc`,children:[m.map(e=>(0,g.jsxs)(`li`,{children:[(0,g.jsx)(`span`,{className:`num`,children:e.num}),_(e.title)]},e.id)),(0,g.jsxs)(`li`,{children:[(0,g.jsx)(`span`,{className:`num`,children:`A`}),y?`Model sheets — specifications and photographs`:`Karty modeli — TTH i zdjęcia`]}),(0,g.jsxs)(`li`,{children:[(0,g.jsx)(`span`,{className:`num`,children:`B`}),y?`Sources`:`Źródła`]})]}),(0,g.jsx)(`div`,{className:`facts`,children:p.map(e=>(0,g.jsxs)(`div`,{className:`fact`,children:[(0,g.jsx)(`strong`,{children:e.k}),(0,g.jsx)(`span`,{children:_(e.v)})]},e.k))})]}),m.map(e=>(0,g.jsxs)(`section`,{className:`chapter`,children:[(0,g.jsx)(`p`,{className:`kicker`,children:e.num}),(0,g.jsx)(`h2`,{children:_(e.title)}),e.body.map(e=>(0,g.jsx)(`p`,{children:_(e)},e.pl.slice(0,48))),e.id===`metoda`?(0,g.jsxs)(`table`,{children:[(0,g.jsx)(`thead`,{children:(0,g.jsxs)(`tr`,{children:[(0,g.jsx)(`th`,{children:y?`Type`:`Typ`}),(0,g.jsx)(`th`,{children:y?`Domain`:`Środowisko`}),(0,g.jsx)(`th`,{children:y?`Range`:`Zasięg`}),(0,g.jsx)(`th`,{children:y?`Role`:`Rola`})]})}),(0,g.jsx)(`tbody`,{children:l.map(e=>(0,g.jsxs)(`tr`,{children:[(0,g.jsx)(`td`,{children:_(e.name)}),(0,g.jsx)(`td`,{children:e.domain===`air`?y?`air`:`powietrze`:e.domain===`sea`?y?`sea`:`morze`:y?`ground`:`ląd`}),(0,g.jsx)(`td`,{children:_(e.range)}),(0,g.jsx)(`td`,{children:_(e.role)})]},e.id))})]}):null,e.id===`curios`?(0,g.jsx)(`div`,{className:`facts`,style:{marginTop:`8mm`},children:f.map(e=>(0,g.jsxs)(`div`,{className:`fact`,children:[(0,g.jsx)(`strong`,{style:{fontSize:`14px`},children:_(e.title)}),(0,g.jsx)(`span`,{children:_(e.body)})]},e.id))}):null]},e.id)),(0,g.jsxs)(`section`,{className:`chapter page-break`,children:[(0,g.jsx)(`p`,{className:`kicker`,children:`A`}),(0,g.jsx)(`h2`,{children:y?`Model sheets`:`Karty modeli`}),(0,g.jsx)(`p`,{children:y?`Each sheet lists open-source dimensions and performance. Figures often diverge — ranges are given. Photographs are illustrative.`:`Każda karta zbiera wymiary i osiągi ze źródeł otwartych. Liczby bywają rozbieżne — podano widełki. Zdjęcia są poglądowe.`}),o.map(e=>{let t=l.find(t=>t.id===e.typeId),n=c.filter(t=>e.specs[t]);return(0,g.jsxs)(`article`,{className:`sheet`,children:[(0,g.jsx)(`img`,{src:e.image,alt:_(e.name)}),(0,g.jsxs)(`div`,{children:[(0,g.jsxs)(`p`,{className:`kicker`,children:[t?_(t.name):e.typeId,` · `,e.year]}),(0,g.jsx)(`h3`,{children:_(e.name)}),e.aka?(0,g.jsx)(`p`,{className:`aka`,children:_(e.aka)}):null,(0,g.jsx)(`p`,{className:`role`,children:_(e.role)}),(0,g.jsxs)(`p`,{className:`origin`,children:[_(e.origin),` · `,_(e.operators)]}),(0,g.jsx)(`table`,{children:(0,g.jsx)(`tbody`,{children:n.map(t=>(0,g.jsxs)(`tr`,{children:[(0,g.jsx)(`th`,{children:_(a[t])}),(0,g.jsx)(`td`,{children:_(e.specs[t])})]},t))})}),(0,g.jsx)(`p`,{className:`note`,children:_(e.note)}),(0,g.jsx)(`p`,{className:`theaters`,children:e.theaters.map(e=>_(s.find(t=>t.id===e)?.name??{pl:e,en:e})).join(` · `)})]})]},e.id)})]}),(0,g.jsxs)(`section`,{className:`chapter`,children:[(0,g.jsx)(`p`,{className:`kicker`,children:`B`}),(0,g.jsx)(`h2`,{children:y?`Sources`:`Źródła`}),(0,g.jsx)(`ol`,{className:`sources`,children:u.map(e=>(0,g.jsxs)(`li`,{children:[(0,g.jsxs)(`strong`,{children:[_(e.t),`.`]}),` `,_(e.d)]},e.t.pl))}),(0,g.jsx)(`p`,{className:`fine end`,children:y?`Drone Atlas 2026 · open sources · not military advice. Platform figures often diverge among maker, intelligence and the field.`:`Atlas Dronów 2026 · otwarte źródła · nie stanowi porady wojskowej. Parametry platform bywają rozbieżne między producentem, wywiadem i polem walki.`})]})]})}var v=`
  .druk-root {
    font-family: "IBM Plex Sans", sans-serif;
    color: #1a1814;
    background: #f1e6d0;
    padding: 18mm 16mm 20mm;
    line-height: 1.5;
  }
  .druk-root h1, .druk-root h2, .druk-root h3 {
    font-family: "IBM Plex Serif", serif;
    font-weight: 600;
    text-wrap: balance;
  }
  .cover { min-height: 248mm; display: flex; flex-direction: column; justify-content: space-between; padding: 6mm 0 10mm; border-bottom: 2px solid #c4a35a; }
  .cover-top { display: flex; justify-content: space-between; gap: 12px; }
  .year { font-family: "IBM Plex Serif", serif; font-size: 92px; line-height: 0.85; color: #c4a35a; margin: 0 0 8px; letter-spacing: -0.04em; }
  .cover h1 { font-size: 58px; line-height: 0.95; margin: 0 0 12px; color: #0e1412; }
  .kicker { font-family: "IBM Plex Mono", monospace; font-size: 10px; letter-spacing: 0.22em; text-transform: uppercase; color: #8a7340; margin: 0; }
  .lede { font-size: 18px; max-width: 140mm; color: #2a4a3c; margin: 0 0 28px; }
  .meta { display: grid; grid-template-columns: 1fr 1fr; gap: 8px 24px; margin: 0; max-width: 140mm; }
  .meta dt { font-family: "IBM Plex Mono", monospace; font-size: 9px; letter-spacing: 0.16em; text-transform: uppercase; color: #8a7340; }
  .meta dd { margin: 2px 0 0; font-size: 13px; }
  .fine { font-size: 11px; color: #5c584e; margin-top: 28px; }
  .page-break { break-before: page; padding-top: 8mm; }
  .chapter { margin-top: 10mm; }
  .chapter h2 { font-size: 26px; margin: 6px 0 10px; }
  .chapter p { font-size: 11.5px; line-height: 1.55; margin: 0 0 8px; text-align: justify; }
  .toc { list-style: none; padding: 0; }
  .toc li { display: flex; gap: 12px; padding: 6px 0; border-bottom: 1px solid #d9ccb0; font-size: 14px; }
  .toc .num { font-family: "IBM Plex Mono", monospace; color: #8a7340; width: 28px; }
  .facts { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 16px; }
  .fact { border: 1px solid #c4a35a; padding: 10px 12px; background: #f7f0de; }
  .fact strong { display: block; font-family: "IBM Plex Serif", serif; font-size: 22px; color: #8a7340; }
  .fact span { font-size: 11px; color: #3a3832; }
  table { width: 100%; border-collapse: collapse; font-size: 9px; margin: 8px 0 10px; }
  th { text-align: left; font-family: "IBM Plex Mono", monospace; font-size: 8px; letter-spacing: 0.08em; text-transform: uppercase; color: #8a7340; border-bottom: 1px solid #c4a35a; padding: 3px 5px; }
  td { border-bottom: 1px solid #e0d3b8; padding: 4px 5px; vertical-align: top; }
  .sheet { display: grid; grid-template-columns: 62mm 1fr; gap: 8mm; padding: 6mm 0; border-top: 1px solid #c4a35a; break-inside: avoid; page-break-inside: avoid; }
  .sheet img { width: 62mm; height: 42mm; object-fit: cover; background: #d9ccb0; }
  .sheet h3 { font-size: 16px; margin: 2px 0 2px; }
  .sheet .aka, .sheet .role, .sheet .origin { font-size: 10px; margin: 0 0 3px; color: #3a3832; }
  .sheet table th { width: 38%; border-bottom: 1px solid #e0d3b8; }
  .sheet .note { font-size: 9.5px; line-height: 1.4; margin: 4px 0 0; text-align: justify; }
  .sheet .theaters { font-family: "IBM Plex Mono", monospace; font-size: 8px; letter-spacing: 0.08em; text-transform: uppercase; color: #8a7340; margin: 4px 0 0; }
  h3 span { font-family: "IBM Plex Mono", monospace; font-size: 9px; color: #8a7340; font-weight: 400; }
  .sources { padding-left: 16px; font-size: 10px; }
  .sources li { margin-bottom: 6px; }
  .end { margin-top: 16px; border-top: 1px solid #c4a35a; padding-top: 8px; }
  @media print {
    .druk-root { padding: 0; background: white; }
    .cover { min-height: 240mm; }
  }
`;export{_ as component};