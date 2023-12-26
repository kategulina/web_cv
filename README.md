# CV website
## Popis
Tento projekt je součásti semetrální práce z předmětu Vývoj klientských aplikací v Javascriptu v letním semestru 22/23. 

## UPD.
Web is now not available because I'm looking for a better web hosting

[Odkaz na web](https://kate-gulina-cv.tode.cz)

### Původní zadání
Hlavním cílem mé SP je zachytit a sepsat veškeré (nejen) školní projekty, které jsem dělala (včetně získaných znalostí a dovedností) a které většinou nevejdou ve standardní životopis, v podobě hezkých designérských stránek s interaktivními elementy.  Při vyplnění své práce se budu orientovat na následující stránky (které považuji za velmi inspirativní):
- [https://www.rubens.design](https://www.rubens.design)
- [https://www.hugobazin.com](https://www.hugobazin.com)
- [https://davideperozzi.com](https://davideperozzi.com)

Stránky (spíš bude jenom jedna) mé SP budou obsahovat mimo jiné i formulář pro kontaktování, animace a budou využívat geolokaci. Pokud zbyde čas, bude SP rozšířena o mobilní verzi a verzi v angličtině.

### Co podle zadání bylo splněno
- udělala jsem soupis všech projektu, které stojí za zmínku a odkazy na jejích repozitáře (pokud jsou)
- web má hodně interaktivních elementů (animace, změna barvy pozadí v úvodní sekci, odkazy)
- web obsahuje formulář pro komunikaci přes meil
- web používá geolokaci pro zjištění geolokace uživatele a vypočet vzdalenosti této polohy od centra Prahy
- SP je adaptována pro mobilní zařízení
- Web má pouze rozhrání v anličtině (jediný rozdíl oproti zadání). Vyřešila jsem nechat pouze anglický jazyk

### Popis funkčnosti
- web je rozdělen do 6 sekcí: hlavní, pracovní zkušeností a odkazy na linkedin a github, seznam projektů, kontaktní formulář, mapa a footer s odkazem na 1. sekci
- každá sekce má alespoň jeden vlastní interaktivní element
- úplně na začátku web jsou odkazy na další sekce
- práce je napsaána primárně v jazycích HTML, CSS a JS za použitím jQuery a Bootstrapu

## Struktura repozitáře
- složka **resources** obsahuje ikonky a zvuk
- soubor **index.html** je hlavní (a jedinou) stránkou webu
- soubor **script.js** obsahuje veškeré potřebné skripty. Jelikož jsem ve své práci nepotřebovala třídy a nejaký složitý, dlouhý a souvislý JS kód, vyřešila jsem všechno napsat do jedného souboru
- soubor **styles.css** obsahuje styl stránky
