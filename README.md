# Atlas Dronów 2026

Dwujęzyczny atlas OSINT głównych modeli bezzałogowców na froncie ukraińskim i innych teatrach (styczeń–wrzesień 2026). TTH, wymiary, zdjęcia, raport i PDF.

**Live:** [https://atlas.halaba.online](https://atlas.halaba.online)  
**GitHub Pages:** serwowane z [`mhalaba.github.io`](https://github.com/mhalaba/mhalaba.github.io)

## Plansze infograficzne

`/infografiki/` — pięć interaktywnych plansz zbudowanych na danych katalogu, dwujęzycznych, bez zależności zewnętrznych:

| | Plansza | Forma |
| --- | --- | --- |
| 01 | [Ekonomia asymetrii](https://atlas.halaba.online/infografiki/koszt/) | drabina kosztu jednostkowego, skala logarytmiczna |
| 02 | [Drabina zasięgu](https://atlas.halaba.online/infografiki/zasieg/) | wachlarz promieniowy z pierścieniami dekadowymi |
| 03 | [Morfologia](https://atlas.halaba.online/infografiki/masa-predkosc/) | rozrzut masa × prędkość, wielkość znacznika = zasięg |
| 04 | [Szesnaście klas](https://atlas.halaba.online/infografiki/klasy/) | siatka klas z kopertą zasięgu każdej |
| 05 | [Teatry i proliferacja](https://atlas.halaba.online/infografiki/teatry/) | macierz pochodzenie × teatr |

### Skąd biorą się liczby

Atlas zapisuje dane taktyczno-techniczne zdaniami, nie polami liczbowymi
(`1000–2500 km (90 kg: ~650 km)`, `ok. 6 t`, `30–50 tys. USD (wytworzenie)`).
Skrypty w `infografiki/_tools/` wyciągają z każdego takiego zapisu pierwszą parę
liczba–jednostka wraz z widełkami i zapisują ją obok oryginału do
`infografiki/data.json`.

Gdzie atlas podaje wyłącznie opis słowny (`strefa OPL`, `kilka kilometrów`,
`dane niejawne`), liczby nie ma i model nie pojawia się na danej planszy.
Nic nie jest szacowane ani dopisywane spoza katalogu. Oryginalny zapis jest
widoczny w podpowiedzi każdego znacznika i w tabeli danych pod każdym wykresem.

Pokrycie: zasięg 48/54, prędkość 49/54, masa 40/54, cena jednostkowa 19/54.

### Jednostki

Wersja polska: kilometry, kilogramy, km/h. Wersja angielska przelicza na mile,
funty i mph, z wartością metryczną w nawiasie. Kwoty w dolarach; przeliczenia
z euro i hrywny po kursie zapisanym w `data.json`.

### Kolory

Paleta wykresów jest udokumentowana i zwalidowana — patrz [`infografiki/PALETA.md`](infografiki/PALETA.md).

### Przebudowa danych

```bash
node infografiki/_tools/parse.mjs <dump-taksonomii.json> parsed.json
node infografiki/_tools/build-data.mjs parsed.json infografiki/data.json
```

## DNS

`atlas.halaba.online` → CNAME `mhalaba.github.io`, DNS only (szara chmurka w Cloudflare).
Konkretny rekord nadpisuje wildcard `*.halaba.online`, który kierował subdomenę na stary origin.

Zdjęcia: źródła otwarte. Treść: opracowanie na podstawie źródeł otwartych.
