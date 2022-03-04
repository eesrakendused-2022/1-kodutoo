# 1-kodutoo
## Tähtaeg 06.03.2022 23:59
* Autor : Kristo Põlluvee
* Eriala : Informaatika BA, TA suund
* Projekti algus : 23.02.2022
* Projekti lõpp : TBD


# Intro

Lõin veebirakenduse, kus kuvatakse kasutajale seinakella, kõrval ka nn digitaalne kell.

Veebirakenduse funktsioonid:

* Kella 21st kuni kella 08ni on "nighttime" background, ülejäänud ajal "daytime".
* Seinakell. Kõik seierid liiguvad vastavalt ajale, seierid loodud kasutades CSS-is "linear-gradient"-i. Seinakellal saab muuta tausta valikus "Change Style"
* Side panel. Kuvatakse kellaaega kui isik seiereid lugeda ei oska vms :D. Samuti kuvatakse ka kuupäeva.
* Muusika pleier. Edasi-tagasi liikumise nupud, keskmine nupp paneb pausile laulu. Kuvatakse ka laulu autorit ja laulu nime.
* Personal logo. Hover'i et see highlight'da ja kuvada veebilehe autori nimi. Logole klikkimine viib GitHubi reposse.
* Leht loodi kasutades Node-i ja Vite-t, aka forki/pulli see, ava VSC-s ja kirjuta terminali "npm run dev" ja saad vaadata kuidas asi toimib.
* Maybe more, who knows...

### Pildid 

Pilt üldisest screenist:
![lahe pilt](/pictures/sc_1.png)

Pilt logost, hoveri korral näidetakse nime, clicki korral avatakse leht GitHub repo-sse:
![lahe pilt](/pictures/sc_2.png)

Pilt kellastiili muutmisest, hover toob esile:
![lahe pilt](/pictures/sc_3.png)

Pilt music player'st, nupud saadavad kas eelmisele või järgmisele laulue; keskmine nupp paneb pausile;
alumine nupp vahetab ekraanil olevate elementide "change style" ja sidebar-i taustavärvi:
![lahe pilt](/pictures/sc_4.png)


## Ülesanne:

Kujunda elektroonilise kella näide vastavalt maitsele või kindlale teemale, mahutades kella täisekraanile, et saaks kasutada lauakella või ekraanisäästja asemel. Selleks, et see sobiks paljudele ekraanidele, kasuta kujunduse loomisel protsendilisi väärtusi (nt width: 100%; ) või nt võimalda kella suurust kasutajal muuta.

## Nõuded

1. Veebirakendus töötab. Näitab kella, kuupäeva, nädalapäeva ja aastat. - DONE
1. Vastavalt kasutaja tegevusele on võimalik muuta **kolme** lauakella atribuuti muuta. - DONE
1. Kasutatud on eventListener'e ja funktsioone. - DONE
1. Kell on originaalne ning kasutajaliides on maitsekalt kujundatud kasutades CSS-i - peab olema ise kirjutatud. - DONE
1. Autori ees- ja perenimi on lehel välja toodud - DONE(veidi peidus[hover the logo])
1. Lehel on viide rakenduse repositooriumile - DONE(veidi peidus[click the logo])
1. `README.md` failis on välja toodud autori nimi, ekraanipilt rakendusest ja kirjeldatud funktsionaalsus - DONE

## Mõned ideed võimalikeks täiendusteks (lihtsalt, et mõte hakkaks jooksma)

* Vahetuda võivad taustapildid, taustal võib mängida muusika - DONE
* Taustale klikkides muudetakse kella taustaväri - differently DONE
* Kellale klõpsides muudetakse numbrite värvi või numbrite suurust;
* Iga numbri suurust saab eraldi muuta
* Nooleklahvidega saab kella ekraanil liigutada
* Küsi enne kella näitamise alustamist kasutajalt tema lemmikvärv ja tee sellest lähtudes midagi
* Muuda kella ja tausta värvi vastavalt ajale (päev/öö) - DONE
* Kella suurus ja asukoht sõltuvad hiire asukohast ekraanil
* Kirjatüüpi saab ka muuta, [google.com/fonts](https://www.google.com/fonts) - too much freedon for end-user
* Kasutaja saab lisada või kasutajaöe näidatakse mitu kellaaega erinevatest maailma kohtadest - TBD
* Elemendid muudavad asukohta teatud kasutaja käitumise peale.
* Saab vahetada keelt, kellaformaati vms. - DONE

