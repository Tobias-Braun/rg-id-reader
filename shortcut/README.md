# Get RG-ID — Apple Shortcut (iOS / iPadOS / macOS)

*[English](#english) · [Deutsch](#deutsch)*

iPhones and iPads can't run the Chrome extension, but this **Apple Shortcut**
gives you the same RG-ID from the Safari **Share Sheet**: open a player profile,
tap **Share → Get RG-ID**, and the RG-ID is shown and copied to your clipboard.

> ℹ️ Apple no longer allows importing a hand-made shortcut *file* — current iOS/macOS
> only import shortcuts via signed **iCloud links**. So you build this once in the
> Shortcuts app (about 2 minutes, steps below), then use **Share → Copy iCloud Link**
> to get a link you can send to anyone.

`get-rg-id.js` contains the script to paste in step 2.
`Get-RG-ID.source.plist` is a reference spec of the exact actions/parameters.

---

## English

### Build it in the Shortcuts app

1. Open **Shortcuts** → **+** (new shortcut) and name it **Get RG-ID**.
2. Add the action **Run JavaScript on Web Page**. Tap its code area and paste the
   contents of [`get-rg-id.js`](get-rg-id.js).
3. Add the action **Copy to Clipboard**. Its input should be the **JavaScript
   Result** from step 2 (Shortcuts links this automatically).
4. Add the action **Show Result** and set its text to: `RG-ID:` followed by the
   **JavaScript Result** variable. *(Optional — skip if you only want it copied.)*
5. Open the shortcut's settings (the ⓘ / details tab) and turn on
   **Show in Share Sheet**. Under **Share Sheet Types**, keep **Safari web pages**
   (and **URLs**) enabled.
6. Done. Test it: in Safari open
   <https://playerzone.roundnetgermany.de/players/6320-tobias-ww>, tap **Share →
   Get RG-ID**. You should see `RG-ID: TOB6320` and have it on your clipboard.

### Share it with others

In the Shortcuts app, open the shortcut → **Share** (the share icon) →
**Copy iCloud Link**. Send that link to anyone; opening it adds the shortcut to
their library. (On macOS you can also right-click the shortcut → **Share → Copy
iCloud Link**.)

---

## Deutsch

iPhones und iPads können die Chrome-Erweiterung nicht ausführen, aber dieser
**Apple-Kurzbefehl** liefert dieselbe RG-ID über das Safari-**Teilen-Menü**:
Spielerprofil öffnen, **Teilen → Get RG-ID** antippen — die RG-ID wird angezeigt
und in die Zwischenablage kopiert.

> ℹ️ Apple erlaubt das Importieren einer selbst erstellten Kurzbefehl-*Datei* nicht
> mehr — aktuelle iOS/macOS-Versionen importieren Kurzbefehle nur über signierte
> **iCloud-Links**. Du erstellst ihn also einmal in der Kurzbefehle-App (ca. 2
> Minuten, Schritte unten) und nutzt dann **Teilen → iCloud-Link kopieren**, um
> einen Link zu erhalten, den du an alle weitergeben kannst.

### In der Kurzbefehle-App erstellen

1. Öffne **Kurzbefehle** → **+** (neuer Kurzbefehl) und nenne ihn **Get RG-ID**.
2. Füge die Aktion **JavaScript auf Webseite ausführen** hinzu. Tippe in den
   Code-Bereich und füge den Inhalt von [`get-rg-id.js`](get-rg-id.js) ein.
3. Füge die Aktion **In die Zwischenablage kopieren** hinzu. Ihre Eingabe sollte
   das **JavaScript-Ergebnis** aus Schritt 2 sein (wird automatisch verknüpft).
4. Füge die Aktion **Ergebnis anzeigen** hinzu und setze den Text auf `RG-ID:`
   gefolgt von der Variable **JavaScript-Ergebnis**. *(Optional — weglassen, wenn
   nur kopiert werden soll.)*
5. Öffne die Einstellungen des Kurzbefehls (Tab ⓘ / Details) und aktiviere **Im
   Teilen-Menü anzeigen**. Lass unter **Teilen-Menü-Typen** **Safari-Webseiten**
   (und **URLs**) aktiviert.
6. Fertig. Test: Öffne in Safari
   <https://playerzone.roundnetgermany.de/players/6320-tobias-ww> und tippe auf
   **Teilen → Get RG-ID**. Es sollte `RG-ID: TOB6320` erscheinen und in der
   Zwischenablage liegen.

### An andere weitergeben

Öffne in der Kurzbefehle-App den Kurzbefehl → **Teilen** (Teilen-Symbol) →
**iCloud-Link kopieren**. Sende diesen Link an beliebige Personen; beim Öffnen
wird der Kurzbefehl zu deren Mediathek hinzugefügt. (Unter macOS: Rechtsklick auf
den Kurzbefehl → **Teilen → iCloud-Link kopieren**.)
