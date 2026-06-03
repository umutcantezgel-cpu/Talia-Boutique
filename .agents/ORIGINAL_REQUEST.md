# Original User Request

## Initial Request — 2026-06-03T08:38:23Z

# Teamwork Project Prompt — Draft

> Status: Launched

Integriere lokale Videos aus dem Ordner "Videos" in das Lookbook, füge sie als stumme Autoplay-Videos (GIF-ähnlich) in die Instagram-Grid-Sektion der Startseite ein. Generiere zudem ansprechende Bilder für das Journal und maximiere die lokale SEO-Performance (Wetzlar und Umgebung) durch technische Optimierungen (Schema.org, Meta-Tags) und 2-3 neue, lokal fokussierte Blogbeiträge für maximale Google Search Console Sichtbarkeit.

Working directory: /Users/umurey/antigravity/Nur Kopie
Integrity mode: development

## Requirements

### R1. Video-Integration Lookbook
Kopiere die MP4-Dateien aus `./Videos` in den öffentlichen Ordner (z.B. `./public/videos/`). Überarbeite die Lookbook-Seite (`app/lookbook/page.tsx`), sodass man durch die neuen Videos scrollen kann (Vollbild- oder responsives Layout).

### R2. Videos als GIFs auf der Startseite
Ersetze die statischen Bild-Platzhalter in der bestehenden Instagram-Grid/Galerie-Sektion der Startseite durch die neuen Videos. Diese sollen stumm, in Endlosschleife und automatisch abspielen (`autoplay loop muted playsinline`), sodass sie wie GIFs wirken.

### R3. Lokale SEO (Wetzlar) & Journal-Content
Implementiere LocalBusiness Schema.org JSON-LD (für Wetzlar) im Root-Layout oder auf der Startseite. Ergänze wichtige SEO Meta-Tags. Erstelle 2-3 neue Blog-Einträge im Journal, die thematisch auf "Hochzeitsmode / Abendkleider in Wetzlar" abgestimmt sind. Nutze die Agenten-Tools (`generate_image`), um passende Bilder für diese Journal-Beiträge zu generieren und einzubinden.

## Acceptance Criteria

### Lookbook & Startseite
- [ ] Die MP4-Dateien liegen korrekt im `public`-Ordner und werden fehlerfrei geladen (keine 404 Fehler).
- [ ] Auf der Startseite sind die statischen Instagram-Bilder durch `<video autoplay loop muted playsinline>` Tags ersetzt worden.
- [ ] Das Lookbook enthält die Videos in einem ansprechenden Layout zum Durchscrollen.

### SEO & Journal
- [ ] Ein gültiges Schema.org `LocalBusiness` JSON-LD Snippet ist im Quellcode vorhanden und listet den Standort Wetzlar.
- [ ] Die `lib/mock-data.ts` (oder wo das Journal gespeichert wird) enthält 2-3 neue Blogbeiträge mit SEO-fokussierten Titeln (z.B. Wetzlar, Boutique, Hochzeitskleider).
- [ ] Es wurden neue Bilder mit `generate_image` erstellt, im Projekt gespeichert und den neuen Beiträgen zugewiesen.
