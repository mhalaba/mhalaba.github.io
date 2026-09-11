# Atlas Dronów 2026

Dwujęzyczny atlas OSINT głównych modeli bezzałogowców na froncie ukraińskim i innych teatrach (styczeń–wrzesień 2026). TTH, wymiary, zdjęcia, raport i PDF.

**Live:** [https://atlas.halaba.online](https://atlas.halaba.online)  
**GitHub Pages:** served from [`mhalaba.github.io`](https://github.com/mhalaba/mhalaba.github.io)

## DNS (Cloudflare)

Strona jest już opublikowana na GitHub Pages z CNAME `atlas.halaba.online`. Subdomena nadal leci na stary origin (403). W Cloudflare dodaj **konkretny** rekord (nadpisze wildcard):

| Type | Name | Target | Proxy |
| --- | --- | --- | --- |
| CNAME | `atlas` | `mhalaba.github.io` | DNS only (szara chmurka) |

Potem GitHub wystawi HTTPS. Jak przy [poradnik.punktodpornosci.pl](https://poradnik.punktodpornosci.pl/).

Zdjęcia: źródła otwarte. Treść: opracowanie na podstawie źródeł otwartych.
