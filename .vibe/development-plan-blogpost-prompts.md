# Development Plan: blog (blogpost-prompts branch)

*Generated on 2025-12-01 by Vibe Feature MCP*
*Workflow: [posts](https://mrsimpson.github.io/responsible-vibe-mcp/workflows/posts)*

## Goal
LinkedIn-Post (kürzer als die anderen) über prompts-mcp: Von Prompt-Skeptiker zum Tool-Bauer

## Discovery

### Format
- **LinkedIn-Post** (kürzer als bisherige Posts, aber nicht 3-10 Zeilen - eher mittlere Länge)
- Fokus auf persönliche Erkenntnis und praktischen Nutzen

### Kernstory
**Von Skepsis zur Notwendigkeit:**
- Lange Prompts belächelt
- Dann ertappt: Trotz responsible-vibe-mcp wiederhole ich bestimmte Anweisungen
  - "Reviewe und prüfe auf..." (längerer Tuning-Prozess in Code-Phase)
  - "Schreibe einen Unit-Test nach BDD, der..." (spezialisierte Test-Anforderungen)
- **Persönliches Prinzip**: Was ich wiederhole → Werkzeug bauen → Qualität steigern
- Lösung: prompts-mcp

### Kern-Aspekte
1. **Wiederholbarkeit** - Stopp dem Copy-Paste aus alten Chats
2. **Qualität** - Prompts iterativ verbessern wie Code
3. **Versionierung** - Prompts im Git, nicht verloren in Chat-Historie
4. **Team-Sharing** - Beste Prompts mit dem Team teilen

### Zielgruppe
- Entwickler, die mit Claude/AI-Assistenten arbeiten
- Teams, die Prompt-Qualität systematisieren wollen
- MCP-Nutzer (aber auch für Neulinge verständlich)

### Technisches Detail (kurz)
- Markdown-Dateien mit YAML Frontmatter
- Handlebars Templates für Parameter
- Pre-shipped Prompt: "create-prompt" (meta! 🤓)

### Competitive Landscape
- Andere Posts waren: agentic-knowledge (Navigation), quiet-shell (Output-Filterung)
- Dieser ist **trivialer zu verstehen** → bewusst kürzer halten
- Fokus auf die AHA-Erkenntnis, nicht die technische Tiefe

### Konkrete Prompt-Beispiele (vereinfacht für Illustration)
1. **Code-Review**: "Reviewe den Code auf Performance, Lesbarkeit und Error-Handling"
2. **Test-Erstellung**: "Erstelle BDD-Tests für Edge Cases und Fehlerbehandlung"  
3. **Doku-Aufräumen**: "Bereinige veraltete TODOs und aktualisiere Code-Kommentare"

### Metapher: Handwerker-Prinzip
- **Passt perfekt zu Software-ENGINEERING** (User betont das immer)
- "Wenn ich den gleichen Handgriff 3x mache, baue ich eine Schablone"
- Von Ad-hoc zu systematisch
- Qualität durch Wiederholbarkeit

### Technische Tiefe (für LinkedIn)
- ✅ **Ein visuelles Beispiel**: Markdown-File mit Frontmatter zeigen
- ✅ **Konzept erklären**: Prompts als versionierbare Markdown-Dateien
- ❌ **Keine Installation-Details** → Link zur Doku
- ❌ **Keine Code-Beispiele** zur Server-Implementierung
- ⚡ **Visual für Wiederholung** statt langer Text-Beispiele

### Tasks
- [x] Format festgelegt (LinkedIn, mittlere Länge)
- [x] Kernstory definiert (Skepsis → Wiederholung → Tool)
- [x] Zielgruppe identifiziert
- [x] Abgrenzung zu anderen Posts
- [x] Konkrete Beispiele für wiederkehrende Prompts gesammelt
- [x] Technische Tiefe definiert (ein Visual, Konzept, kein Code)
- [x] Metapher festgelegt (Handwerker-Prinzip + Software-ENGINEERING)

### Completed
- [x] Created development plan file
- [x] Projekt-Code analysiert
- [x] Kernstory mit User abgestimmt
- [x] Alle Discovery-Fragen geklärt

## Story
### Phase Entrance Criteria:
- [x] Thema ist gründlich recherchiert und verstanden
- [x] Post-Format ist festgelegt (Kurz vs. Langform)
- [x] Zielgruppe und Plattform sind definiert
- [x] Persönliche Motivation und einzigartiger Blickwinkel sind klar
- [x] Wichtige Entscheidungen aus der Discovery-Phase sind dokumentiert

### Tasks
- [x] Story-Outline erstellt
- [x] Skeptizismus-Grund präzisiert (simpel vs. detailliert)
- [x] Timing-Aspekt integriert (VSCode Support, andere folgen)
- [x] Lernmoment richtig platziert (Agent zeigt Parameter während explorativer Entwicklung)
- [x] Variablen als Kernlösung hervorgehoben
- [x] Story-Outline mit User finalisiert ✅

### Completed
- [x] Story-Struktur mit 3-Akt-Aufbau erstellt
- [x] Narrative Arc angepasst: Dilemma → Problem → Lernmoment → Lösung → Timing
- [x] Alle Story-Elemente mit User abgestimmt

### Story Outline

#### 🎬 Anfang: Hook + Confession (Personal)
**Einstieg**: Persönliches Geständnis
- "Ich habe Prompts lange belächelt..."
- Warum? → Das Dilemma:
  - Entweder zu simpel (keine Tiefe, wenig Nutzen)
  - Oder zu detailliert (müssen ständig angepasst werden)
- **Aber dann**: Ertappt beim eigenen Widerspruch (wiederhole mich trotzdem)

#### 🔄 Mitte: Das Problem + Die Erkenntnis
**Problem visualisieren**:
- Trotz responsible-vibe-mcp (strukturiert Entwicklung) → wiederhole ich mich
- 3 konkrete Beispiele (kurz!):
  1. Code-Review mit gleichen Kriterien
  2. Spezialisierte Tests nach BDD
  3. Doku-Aufräumen nach gleichem Muster
  
**Die Erkenntnis** (Handwerker-Metapher):
- Software-ENGINEERING, nicht nur Software-Entwicklung
- Handwerker-Prinzip: "3x gleicher Handgriff → Schablone bauen"
- Von Ad-hoc zu systematisch
- **Persönliches Prinzip**: Wiederholung → Werkzeug → Qualität

#### 💡 Mitte-Ende: Die Lösung + Der AHA-Moment
**Was ich gebaut habe**:
- prompts-mcp: Prompts als Markdown-Dateien
- Frontmatter für Metadaten

**Der entscheidende Lernmoment**:
- Während explorativer Entwicklung mit responsible-vibe + Sonnet
- **Ein Agent zeigte mir**: Prompt-Parameter/Variablen!
- **AHA!** Das löst beide Probleme:
  - Nicht zu simpel (flexibel durch Variablen)
  - Nicht zu detailliert (Grundstruktur bleibt stabil)
- Templates mit Handlebars
- **Ein Visual**: Beispiel-Prompt-File mit `{{variablen}}` zeigen

**Warum das wichtig ist** (Benefits):
1. ✅ **Wiederverwendbar durch Variablen**: Ein Prompt, viele Kontexte
2. ✅ **Versionierung**: Prompts in Git, nicht verloren in Chat-Historie
3. ✅ **Qualität**: Iterativ verbessern wie Code
4. ✅ **Team-Sharing**: Beste Prompts mit Kollegen teilen

#### 🎯 Ende: Call-to-Action + Ausblick
**Timing ist gut**:
- MCP-Client-Support für Prompts war lange dürftig
- **Jetzt**: VSCode hat Prompts integriert, andere werden folgen
- → Warum nicht mal versuchen? 😉

**Meta-Moment**:
- Pre-shipped Prompt: "create-prompt" 🤓
- Das Tool hilft beim Erstellen neuer Prompts

**CTA**:
- Link zum Repo/Doku
- Frage an Community: "Welche Prompts wiederholt ihr?"

### Narrative Struktur (LinkedIn-optimiert)
- **Länge**: ~800-1200 Wörter (kürzer als sonst)
- **Ton**: Persönlich, konversationell, selbstironisch am Anfang
- **Struktur**: Absätze mit Emojis für Lesbarkeit
- **Visual**: 1 Code-Block (Markdown-Beispiel) + optional Illustration für Wiederholung

### Key Messages
1. **Hauptbotschaft**: Auch Skeptiker erkennen den Wert, wenn die eigene Praxis es zeigt
2. **Das Prompt-Dilemma**: Zu simpel vs. zu detailliert (bekanntes Problem)
3. **Praktisch**: Wiederholung ist ein Signal zum Systematisieren
4. **Der Lernmoment**: Agent zeigt Parameter → AHA! (explorativer Prozess mit responsible-vibe + Sonnet)
5. **Lösung**: Variablen machen Prompts wiederverwendbar + strukturiert
6. **Engineering-Mindset**: Qualität durch Werkzeuge, nicht Adhoc
7. **Timing**: MCP-Client-Support wird besser (VSCode hat's, andere folgen) → jetzt ausprobieren
8. **Team-Aspekt**: Geteiltes Wissen > individuelles Copy-Paste

### Completed
*None yet*

## Writing
### Phase Entrance Criteria:
- [x] Story-Outline ist vollständig mit Anfang, Mitte und Ende
- [x] Kernbotschaften sind identifiziert
- [x] Content-Scope ist klar definiert (was ist drin, was ist draußen)
- [x] Narrative Struktur passt zum gewählten Format
- [x] Einprägsame Metaphern/Beispiele sind geplant

### Tasks
- [x] Post-Content geschrieben (ca. 950 Wörter)
- [x] Dateiname festgelegt: `prompts-als-code.md`
- [x] Markdown-Frontmatter erstellt
- [x] Beispiel-Prompt-Code-Block erstellt (code-review mit Variablen)
- [x] Brücke von simpel → komplex → parametrisiert eingefügt (wie bei Code!)
- [x] `language` Parameter entfernt (LLM erkennt das selbst)
- [x] Content mit User reviewt und finalisiert

### Completed
- [x] Ersten Draft des Posts geschrieben
- [x] Story-Struktur befolgt: Dilemma → Problem → Lernmoment → Lösung → Timing
- [x] Persönlicher Ton mit Handwerker-Metapher integriert
- [x] Code-Beispiel mit Handlebars-Variablen eingefügt
- [x] 4 Benefits klar strukturiert
- [x] Meta-Moment (create-prompt) und CTA eingebaut
- [x] Parametrisierung wie bei Code erklärt (Version 1 → 2 → 3)
- [x] AHA-Moment: "Das geht auch mit MCP!" hervorgehoben
- [x] User-Anpassungen integriert (inkl. "release early" Hinweis)

## Illustration
### Phase Entrance Criteria:
- [x] Content ist vollständig geschrieben
- [x] Narrative folgt dem geplanten Story-Outline
- [x] Content-Länge passt zum gewählten Format
- [x] Persönliche Stimme und Stil sind konsistent
- [x] Konkrete Beispiele sind eingebaut

### Tasks
- [x] Beispiel-Prompt-Datei für Screenshot erstellt
- [x] User hat Screenshots gemacht
- [x] Screenshot MCP Inspector eingebunden (zeigt Auflösung der Parameter)
- [x] Prompt-Definition als Markdown-Code-Block (besser lesbar)
- [x] Alt-Texte für Accessibility hinzugefügt

### Completed
- [x] Visual-Konzept definiert (Screenshot-Ansatz)
- [x] Beispiel-Datei erstellt: `/src/content/blog/images/example-prompt-for-screenshot.md`
- [x] MCP Inspector Screenshot integriert (zeigt Parameter-Auflösung)
- [x] Zeigt Flow: Definition (Code) → Auflösung (Screenshot) → Verwendung

## Distribution
### Phase Entrance Criteria:
- [x] Visuelle Elemente sind erstellt und integriert
- [x] Bilder unterstützen den Content strategisch
- [x] Visuelle Dichte passt zum Format
- [x] Professionelles und konsistentes Erscheinungsbild
- [x] Barrierefreiheit ist berücksichtigt

### Tasks
- [x] SEO-Metadaten geprüft (title, description gut)
- [ ] LinkedIn-Teaser erstellen (kürzer, keine Emojis)
- [ ] Finale Qualitätsprüfung (Rechtschreibung, Links, Formatierung)
- [ ] Git commit & push
- [ ] Blog deployen
- [ ] LinkedIn-Post erstellen und veröffentlichen
- [ ] Optional: Weitere Plattformen (Twitter/X, Medium, etc.)

### Distribution-Strategie

#### Primär: LinkedIn
- Zielgruppe: Entwickler, die mit AI-Assistenten arbeiten
- Format: Link zum Blog-Post + kurzer Teaser
- Stil: Persönlich, ohne Emojis, direkt
- Timing: Wochentag, vormittags (bessere Sichtbarkeit)
- Hashtags: #MCP #AI #SoftwareEngineering #DeveloperTools

#### LinkedIn-Teaser (Entwurf)

```
Ich habe Prompts lange belächelt. Zu simpel oder zu detailliert.

Dann erwischte ich mich: Trotz strukturierter Workflows wiederholte ich die gleichen Anweisungen.

Als Software-ENGINEER gilt: 3x der gleiche Handgriff = Zeit für eine Schablone.

Das Ergebnis: prompts-mcp – Prompts wie Code behandeln. Parametrisiert, versioniert, wiederverwendbar.

Der Durchbruch kam während einer Session mit responsible-vibe-mcp: Ein Agent zeigte mir Prompt-Parameter. Das Prinzip aus der Code-Entwicklung funktioniert auch mit Prompts.

Release early: Noch Alpha, aber vielleicht hilft es schon heute.

[Blog-URL]

#MCP #AI #SoftwareEngineering #DeveloperTools
```

#### Blog (Astro)
- SEO-optimiert mit Metadaten
- Bereits integriert in bestehende Blog-Serie

### Completed
- [x] SEO-Metadaten geprüft

## Key Decisions

### Format & Zielgruppe
- **Plattform**: LinkedIn 
- **Länge**: Kürzer als bisherige Posts (mittlere Länge), da Thema trivialer zu verstehen
- **Zielgruppe**: Entwickler, die mit AI-Assistenten arbeiten; Teams für Prompt-Systematisierung

### Story-Kern
- **Hook**: Von Prompt-Skeptiker zur Notwendigkeit
- **Metapher**: Handwerker-Prinzip ("3x gleicher Handgriff → Schablone bauen")
- **Verbindung**: Software-ENGINEERING - systematisch statt Ad-hoc
- **Persönliches Prinzip**: Wiederholung → Werkzeug → Qualität

### Content-Scope
- ✅ **IN**: Persönliche Erkenntnis, 3 Prompt-Beispiele, Konzept (Markdown), Benefits (Versionierung, Sharing)
- ❌ **OUT**: Installation-Details, Server-Code, Handlebars-Syntax-Tutorial
- 📸 **Visual**: Ein Markdown-Beispiel mit Frontmatter

### Prompt-Beispiele (vereinfacht)
1. "Reviewe den Code auf Performance, Lesbarkeit und Error-Handling"
2. "Erstelle BDD-Tests für Edge Cases und Fehlerbehandlung"
3. "Bereinige veraltete TODOs und aktualisiere Code-Kommentare"

## Notes
*Additional context and observations*

---
*This plan is maintained by the LLM. Tool responses provide guidance on which section to focus on and what tasks to work on.*
