# Roundnet RG-ID Banner

*[English](#english) · [Deutsch](#deutsch)*

---

## English

A small Chrome extension that shows a player's **RG-ID** whenever you open their
[PlayerZone](https://playerzone.roundnetgermany.de) profile page.

![RG-ID banner](docs/banner.png)

### What is the RG-ID?

The RG-ID is built from the player's profile URL:

```
https://playerzone.roundnetgermany.de/players/6320-tobias-ww
                                              └┬─┘ └─┬──┘
                                              id   first name

RG-ID = first 3 letters of first name (UPPER CASE) + id  =>  TOB6320
```

The extension reads the id and first name from the URL and displays
`RG-ID: TOB6320` in a banner. The banner updates automatically as you move
between profiles, and stays out of the way of clicks.

### Installation

Chrome does not (yet) ship this on the Web Store, so you install it manually as
an "unpacked" extension. This takes about a minute.

### 1. Download the extension

- Go to the repository's main page on GitHub.
- Click the green **Code** button, then **Download ZIP**.
- Unzip the downloaded file. You'll get a folder named something like
  `rg-id-extension`.

  > 💡 Keep this folder somewhere permanent (e.g. your Documents). If you delete
  > or move it, the extension stops working.

  *Alternatively, if you use git:* `git clone <repo-url>`

### 2. Load it into Chrome

1. Open Chrome and go to `chrome://extensions` (type it into the address bar).
2. Turn on **Developer mode** using the toggle in the top-right corner.
3. Click **Load unpacked**.
4. Select the unzipped `rg-id-extension` folder.

That's it — you should now see "Roundnet RG-ID Banner" in your extensions list.

### 3. Try it

Open any player profile, for example:
<https://playerzone.roundnetgermany.de/players/6320-tobias-ww>

You should see the `RG-ID:` banner appear on the page.

### Installing on a phone

**Android** can run this extension using a Chromium browser that supports
extensions — the regular Chrome app does **not**. The easiest option is
[Kiwi Browser](https://play.google.com/store/apps/details?id=com.kiwibrowser.browser)
(free); Microsoft **Edge Canary** works too.

1. Install **Kiwi Browser** from the Play Store and open it.
2. In Kiwi, open the repository page on GitHub, tap **Code → Download ZIP**, and
   save the file.
3. Unzip it with your phone's *Files* app (tap the ZIP → **Extract**). Remember
   the folder you extracted to.
4. In Kiwi, open the menu (⋮) → **Extensions**.
5. Turn on **Developer mode** (toggle, top-right).
6. Tap **+ (from .zip/.crx/folder)** and select the unzipped `rg-id-extension`
   folder (or the ZIP directly).
7. Open a profile such as
   <https://playerzone.roundnetgermany.de/players/6320-tobias-ww> — the banner
   appears just like on desktop.

> 📱 **iPhone / iPad:** Chrome and Safari on iOS cannot load this kind of
> extension, so there is currently no iOS option.

### Updating

When a new version is released, download the ZIP again (or `git pull`), replace
the old folder, then go to `chrome://extensions` and click the **reload** icon
on the extension's card.

### Browser support

Works in any Chromium-based browser that supports Manifest V3 unpacked
extensions, including **Chrome**, **Edge**, **Brave**, and **Opera**.

### Privacy

The extension runs only on `playerzone.roundnetgermany.de` profile pages. It
reads nothing but the page URL, sends no data anywhere, and stores nothing.

---

## Deutsch

Eine kleine Chrome-Erweiterung, die die **RG-ID** eines Spielers anzeigt, sobald
du seine [PlayerZone](https://playerzone.roundnetgermany.de)-Profilseite öffnest.

![RG-ID-Banner](docs/banner.png)

### Was ist die RG-ID?

Die RG-ID wird aus der Profil-URL des Spielers gebildet:

```
https://playerzone.roundnetgermany.de/players/6320-tobias-ww
                                              └┬─┘ └─┬──┘
                                              ID   Vorname

RG-ID = erste 3 Buchstaben des Vornamens (GROSSBUCHSTABEN) + ID  =>  TOB6320
```

Die Erweiterung liest ID und Vorname aus der URL und zeigt `RG-ID: TOB6320` in
einem Banner an. Das Banner aktualisiert sich automatisch, wenn du zwischen
Profilen wechselst, und blockiert keine Klicks auf der Seite.

### Installation

Chrome bietet die Erweiterung (noch) nicht im Web Store an, daher installierst du
sie manuell als „entpackte" Erweiterung. Das dauert etwa eine Minute.

#### 1. Erweiterung herunterladen

- Öffne die Hauptseite des Repositorys auf GitHub.
- Klicke auf den grünen Button **Code** und dann auf **Download ZIP**.
- Entpacke die heruntergeladene Datei. Du erhältst einen Ordner mit einem Namen
  wie `rg-id-extension`.

  > 💡 Bewahre diesen Ordner an einem festen Ort auf (z. B. in „Dokumente"). Wenn
  > du ihn löschst oder verschiebst, funktioniert die Erweiterung nicht mehr.

  *Alternativ, falls du git nutzt:* `git clone <repo-url>`

#### 2. In Chrome laden

1. Öffne Chrome und gehe zu `chrome://extensions` (in die Adressleiste eingeben).
2. Aktiviere oben rechts den **Entwicklermodus**.
3. Klicke auf **Entpackte Erweiterung laden**.
4. Wähle den entpackten Ordner `rg-id-extension` aus.

Fertig — „Roundnet RG-ID Banner" sollte jetzt in deiner Erweiterungsliste
erscheinen.

#### 3. Ausprobieren

Öffne ein beliebiges Spielerprofil, zum Beispiel:
<https://playerzone.roundnetgermany.de/players/6320-tobias-ww>

Das `RG-ID:`-Banner sollte nun auf der Seite erscheinen.

### Installation auf dem Smartphone

**Android** kann die Erweiterung mit einem Chromium-Browser ausführen, der
Erweiterungen unterstützt — die normale Chrome-App **nicht**. Am einfachsten geht
es mit dem
[Kiwi Browser](https://play.google.com/store/apps/details?id=com.kiwibrowser.browser)
(kostenlos); auch Microsoft **Edge Canary** funktioniert.

1. Installiere **Kiwi Browser** aus dem Play Store und öffne ihn.
2. Öffne in Kiwi die Repository-Seite auf GitHub, tippe auf **Code → Download
   ZIP** und speichere die Datei.
3. Entpacke sie mit der *Dateien*-App deines Handys (ZIP antippen → **Extrahieren**).
   Merke dir den Ordner, in den du entpackt hast.
4. Öffne in Kiwi das Menü (⋮) → **Erweiterungen**.
5. Aktiviere oben rechts den **Entwicklermodus**.
6. Tippe auf **+ (aus .zip/.crx/Ordner)** und wähle den entpackten Ordner
   `rg-id-extension` (oder direkt die ZIP-Datei).
7. Öffne ein Profil wie
   <https://playerzone.roundnetgermany.de/players/6320-tobias-ww> — das Banner
   erscheint genau wie am Desktop.

> 📱 **iPhone / iPad:** Chrome und Safari unter iOS können diese Art von
> Erweiterung nicht laden, daher gibt es derzeit keine iOS-Möglichkeit.

### Aktualisieren

Wenn eine neue Version erscheint, lade die ZIP-Datei erneut herunter (oder
`git pull`), ersetze den alten Ordner, gehe dann zu `chrome://extensions` und
klicke auf das **Neu-laden**-Symbol auf der Karte der Erweiterung.

### Browser-Unterstützung

Funktioniert in jedem Chromium-basierten Browser, der entpackte Manifest-V3-
Erweiterungen unterstützt, darunter **Chrome**, **Edge**, **Brave** und **Opera**.

### Datenschutz

Die Erweiterung läuft ausschließlich auf Profilseiten von
`playerzone.roundnetgermany.de`. Sie liest nichts außer der Seiten-URL, sendet
keine Daten irgendwohin und speichert nichts.
