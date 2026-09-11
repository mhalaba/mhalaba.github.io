# Atlas Dronów 2026

Dwujęzyczny atlas OSINT głównych modeli bezzałogowców na froncie ukraińskim i innych teatrach (styczeń–wrzesień 2026). TTH, wymiary, zdjęcia, raport i PDF.

**Adres:** [https://atlas.halaba.online](https://atlas.halaba.online)

Bilingual OSINT atlas of representative UAV types — Ukraine front and other theaters, January–September 2026.

## DNS (Cloudflare)

`atlas.halaba.online` already resolves through Cloudflare, but the origin has no vhost for this host (HTTP 403). Point the subdomain at GitHub Pages:

| Type | Name | Target | Proxy |
| --- | --- | --- | --- |
| CNAME | `atlas` | `mhalaba.github.io` | DNS only (grey cloud), or Proxied with SSL Full |

Wait a few minutes. GitHub issues HTTPS for the custom domain after the CNAME is live.

Zdjęcia: źródła otwarte (Wikimedia i podobne). Treść atlasu: opracowanie na podstawie źródeł otwartych.
