# Paleta plansz

Kolory wykresów nie są dobierane na oko. Każdy slot pochodzi z tego pliku, a cała
paleta przechodzi automatyczną walidację (pasmo jasności, próg nasycenia, rozdzielność
przy daltonizmie, kontrast wobec tła). Te same wartości są zapisane w `style.css`
(zmienne CSS) i w `atlas.js` (obiekt `PAL`) — przy zmianie trzeba poprawić wszystkie trzy.

## Powierzchnie i tekst

Przejęte bez zmian z systemu atlasu (`assets/styles-*.css`).

| Rola | Wartość |
| --- | --- |
| tło strony (`--ink`) | `#0e1412` |
| panel (`--ink-2`) | `#151c19` |
| panel wyróżniony (`--ink-3`) | `#1c2621` |
| tekst główny (`--fg`) | `#e8e4d8` |
| tekst drugorzędny (`--muted`) | `#9aa396` |
| nagłówki (`--paper`) | `#f1e6d0` |
| akcent (`--brass`) | `#c4a35a` |
| linie (`--line`) | `#2a332e` |

## Paleta kategoryczna — 3 sloty

Używana wyłącznie tam, gdzie kolor niesie tożsamość: środowisko bezzałogowca.

| Slot | Wartość | Znaczenie |
| --- | --- | --- |
| 1 | `#ad8a2a` | powietrze |
| 2 | `#5d92d8` | morze |
| 3 | `#c4698f` | ląd |

Trzy sloty to nie oszczędność, tylko granica metody: przy wykresach, na których
dowolne dwa znaczniki mogą sąsiadować (rozrzut, bąbelki, macierz), sprawdza się
**wszystkie pary**, a nie tylko sąsiednie. Przy tym teście żadne uporządkowanie
ośmiu barw nie przechodzi progu rozdzielności — dlatego wykresy, które musiałyby
nieść więcej kategorii, używają jednej barwy i skali, a nie ośmiu kolorów.

Wynik walidacji (tło `#0e1412`, tryb ciemny, `--pairs all`):

```
[PASS] Lightness band         all 3 inside L 0.48–0.67
[PASS] Chroma floor           all 3 >= 0.1
[PASS] CVD separation         worst all-pairs #c4698f↔#5d92d8 ΔE 11.9 (protan)
[PASS] Normal-vision floor    worst all-pairs #c4698f↔#ad8a2a ΔE 17.5 (normal)
[PASS] Contrast vs surface    all 3 >= 3:1
```

## Rampa sekwencyjna — 5 stopni

Jedna barwa (mosiądz), rosnąca jasność = rosnąca wartość. Używana w macierzy
teatrów, gdzie kolor niesie wielkość, nie tożsamość.

| Stopień | Wartość |
| --- | --- |
| 1 | `#655221` |
| 2 | `#82692a` |
| 3 | `#9f8134` |
| 4 | `#bd9b40` |
| 5 | `#dbb64d` |

```
[PASS] Lightness monotone     steps read light→dark
[PASS] Adjacent ΔL            all gaps >= 0.06
[PASS] Light-end contrast     #655221 at 2.47:1 vs surface
[PASS] Single hue             hue spread 2°
```

Najciemniejszy stopień ledwie przekracza próg kontrastu wobec tak ciemnego tła,
dlatego **każda komórka macierzy ma wypisaną liczbę**. Wartości nigdy nie zależą
od samego koloru — ani dla osoby z daltonizmem, ani przy wydruku.

## Zasady, które z tego wynikają

- Kolor kategoryczny przypisany jest do bytu (środowiska), nie do jego pozycji w rankingu;
  filtrowanie listy nie przemalowuje tego, co zostało.
- Wykres jednej wielkości (koszt, zasięg) używa jednej barwy — legenda jest wtedy
  zbędna, bo tytuł nazywa serię.
- Skala sekwencyjna to jedna barwa od ciemnej do jasnej. Nigdy tęcza.
- Przy dwóch seriach i więcej legenda jest zawsze, a do czterech serii dochodzi
  podpis bezpośredni — tożsamość nie opiera się wyłącznie na kolorze.
- Pod każdym wykresem jest widok tabelaryczny z tymi samymi liczbami.
