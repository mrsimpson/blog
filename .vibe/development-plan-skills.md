# Development Plan: blog (skills branch)

*Generated on 2026-02-24 by Vibe Feature MCP*
*Workflow: [posts](https://mrsimpson.github.io/responsible-vibe-mcp/workflows/posts)*

## Goal
Blogpost über Agent Skills (agentskills.io) schreiben, der zeigt:
- **Was ist agentskills.io?** Ein offenes Format für wiederverwendbare Agent-Fähigkeiten
- **Warum ist das wichtig?** Es ist nicht nur Context-Engineering, sondern auch Team-weite Konvention
- **Wie funktioniert es?** Progressive Disclosure: Discovery → Activation → Execution
- **Wie passt das zum Ökosystem?** Skills als vierte Säule neben responsible-vibe, agentic-knowledge, quiet-shell

**Zielgruppe:** Software-Entwickler und Bildschirmarbeiter, die KI bereits nutzen
**Ton:** Wie bisherige Posts - persönlich, erfahrungsbasiert, mit konkreten Beispielen

## Discovery
<!-- beads-phase-id: blog-4.1 -->
### Tasks

*Tasks managed via `bd` CLI*

## Story
<!-- beads-phase-id: blog-4.2 -->

### Phase Entrance Criteria:
- [ ] Thema und Zielgruppe sind klar definiert
- [ ] Recherche zu agentskills.io ist durchgeführt
- [ ] Kernbotschaft und Zielsetzung des Posts sind festgelegt
- [ ] Struktur und Schwerpunkte sind skizziert

### Tasks

*Tasks managed via `bd` CLI*

## Writing
<!-- beads-phase-id: blog-4.3 -->

### Phase Entrance Criteria:
- [ ] Die Story-Struktur ist ausgearbeitet (Intro, Hauptteil, Schluss)
- [ ] Narrative und Spannungsbogen sind definiert
- [ ] Schlüsselbotschaften für jeden Abschnitt sind klar
- [ ] Beispiele und Use Cases sind identifiziert

### Tasks

*Tasks managed via `bd` CLI*

## Illustration
<!-- beads-phase-id: blog-4.4 -->

### Phase Entrance Criteria:
- [ ] Der Blogpost-Text ist vollständig geschrieben
- [ ] Alle inhaltlichen Abschnitte sind ausformuliert
- [ ] Stellen, die visuelle Unterstützung benötigen, sind identifiziert
- [ ] Der Text ist Korrektur gelesen

### Tasks

*Tasks managed via `bd` CLI*

## Distribution
<!-- beads-phase-id: blog-4.5 -->

### Phase Entrance Criteria:
- [ ] Der Blogpost ist vollständig (Text + visuelle Elemente)
- [ ] Alle Bilder/Grafiken sind erstellt und eingebunden
- [ ] Formatierung und Layout sind final
- [ ] Meta-Daten (Titel, Beschreibung, Tags) sind definiert
- [ ] Der Post ist bereit zur Veröffentlichung

### Tasks
- [ ] Squash WIP commits: `git reset --soft <first commit of this branch>. Then, Create a conventional commit. In the message, first summarize the intentions and key decisions from the development plan. Then, add a brief summary of the key changes and their side effects and dependencies

*Tasks managed via `bd` CLI*

## Key Decisions

### Discovery-Phase
- **Kernbotschaft:** Skills sind mehr als nur Context-Engineering - sie ermöglichen Team-weite Konventionen und Wissensteilung
- **Hauptunterschied zu bisherigen Tools:** Während responsible-vibe (Prozess), agentic-knowledge (Navigation) und quiet-shell (Noise-Filtering) den Context managen, ermöglichen Skills die **Wiederverwendung von Fähigkeiten und Expertise**
- **Progressive Disclosure:** Das Konzept von "nur laden, was gebraucht wird" passt perfekt zum Context-Engineering-Narrativ
- **Positionierung:** Skills als vierte Säule im Context-Engineering-Ökosystem

### Illustration-Phase
- **Reale Skill-Struktur:** PowerPoint-Skill von Anthropic verlinkt und reale Ordnerstruktur gezeigt
- **Progressive Disclosure Diagramm:** Bild erstellt und eingefügt (images/42-progressive-disclosure.png)
- **Titelbild:** Roboter öffnet Paket, findet Werkzeug + Anleitung (images/41-skill-package.png)
- **Korrekturlesung:** Tippfehler behoben (Werkzeug, doppeltes "rein"), Formulierungen geschärft, Link-Formatierung korrigiert
- **Status:** Abgeschlossen - alle visuellen Elemente eingefügt, Text korrigiert
- **Datei erstellt:** `src/content/blog/agent-skills-wiederverwendbares-wissen.md`
- **Titel angepasst:** "Agent Skills – Fähigkeiten in handlichem Paket" (fokussiert auf modulares Wissen, nicht "voneinander lernen")
- **Description gekürzt:** Auf Kern reduziert (Progressive Disclosure, Modularität)
- **Struktur umgesetzt:** Alle 6 Abschnitte geschrieben und gekürzt
- **Abschnitt 4 stark gekürzt:** Von ~600 auf ~100 Wörter - Teilen als Schwäche erkannt
- **Ausblick als Mystery:** Lösung nur angedeutet, nicht gezeigt - "Kann man Progressive Disclosure nicht anders implementieren?" - perfekter Cliffhanger
- **Ton:** Persönlich, erfahrungsbasiert, mit PowerPoint-Skill Beispiel
- **Länge:** ~1300 Wörter (deutlich kürzer, fokussierter)
- **Nudelsuppe-Metapher:** Durchgängig als roter Faden
- **Progressive Disclosure:** Ausführlich erklärt als Kern-Vorteil
- **Cliffhanger:** Perfekt - Problem benannt, Denkrichtung angedeutet, Lösung für nächsten Post reserviert
- **Anknüpfung:** An "Context is all you need" Post anknüpfen - das Nudelsuppen-Narrativ fortsetzen
- **Metapher "Nudelsuppe":** Alles ist letztlich Context/Nudelsuppe, aber man kann effizienter kochen
- **Zentrale Differenzierung:** 
  - **Progressive Disclosure bei Skills:** Name/Description initial → volle Instructions bei Bedarf (lightweight, portabel)
  - **Progressive Disclosure bei responsible-vibe:** Dynamische Tool-Rückgaben als Prompts (mächtig, aber komplexer)
  - **Vorteil von Skills:** Scripts + modulare Prompts paketieren = leichtgewichtige, mächtige Erweiterungen
- **Vorteil gegenüber MCP Tools:** 
  - MCP Remote Server: Schwergewichtig (Prozesse, Deployment)
  - MCP STDIO Server: Leichtgewichtig im Deployment, aber umfangreicher Kontrakt (nicht leicht bereitzustellen)
  - MCP Tools: Nur ein Aspekt, nicht modularisiert
  - Skills: Leichtgewichtig UND einfach bereitzustellen (nur Dateien)
- **Beispiel:** PowerPoint-Skill (anthropics/skills/pptx) statt PDF
- **Fokus:** Konzeptionelle Ebene, KEINE konkrete Lösung/Implementierung in diesem Post
- **Hook am Ende:** Skills sind konzeptionell super, ABER es gibt Einschränkungen (Client-Abhängigkeit für Discoverability) → Teaser für nächsten Post (mcp-server/agent-skills als Lösung)
- **Story-Arc:** Von "Context is all you need" → "Aber wie verteilen wir nützlichen Context?" → Skills als konzeptionelle Antwort → Ausblick auf praktische Herausforderungen

## Notes

### Recherche-Ergebnisse zu agentskills.io:
- **Format:** Einfach - nur `SKILL.md` mit YAML-Frontmatter + Markdown-Instructions
- **Adoption:** Breite Unterstützung (30+ Tools inkl. Cursor, Claude, VSCode, JetBrains Junie, GitHub)
- **Kernkonzept:** Progressive Disclosure - nur Name/Description initial, dann full instructions bei Bedarf
- **Struktur:** `my-skill/` mit `SKILL.md` (required), `scripts/`, `references/`, `assets/` (optional)
- **Analogie zu prompts-mcp:** Beide sind "Prompts as Code", aber Skills sind umfassender (können Scripts/Assets beinhalten)

### Verbindung zu bisherigen Posts:
- **context-is-all-you-need:** "Alles ist Nudelsuppe" - Context Engineering als Kernkompetenz
- **context-engineering-weniger-ist-mehr:** Noise-Filtering mit quiet-shell
- **prompts-als-code:** Prompts als strukturierte, versionierte Artefakte
- **alignment-responsible-vibe:** Kontext für besseres Alignment

### Story-Struktur (ausgearbeitet):

#### 1. Hook & Anknüpfung (Intro)
- **Einstieg:** Referenz zu "Context is all you need" - Nudelsuppe-Metapher
- **Problem-Formulierung:** Context ist wichtig, aber wie *teilen* wir wertvollen Context?
- **Szenario:** Ein Agent lernt mühsam, wie man Präsentationen erstellt. Nächster Agent? Muss es wieder lernen.
- **Die Frage:** Was, wenn Agents Fähigkeiten wie Module importieren könnten?

#### 2. Das Problem vertiefen (Hauptteil I)
- **Bisherige Lösungen und ihre Trade-offs:**
  - **MCP Remote Server:** Schwergewichtig - Server-Prozesse, Deployment-Overhead
  - **MCP STDIO Server:** Leichtgewichtig im Deployment, aber umfangreicher Kontrakt → nicht einfach bereitzustellen
  - **MCP Tools:** Nur ein Aspekt (keine modulare Paketierung von Wissen + Code)
  - **Prompts:** Lightweight, aber begrenzt (nur Text, keine Scripts/Assets)
  - **Copy-Paste:** Team-Konventionen gehen verloren
- **Was fehlt:** Leichtgewichtig UND einfach bereitzustellen UND modular

#### 3. Die Lösung: Agent Skills (Hauptteil II)
- **Was sind Skills:** `SKILL.md` + optional Scripts/Assets - nur Dateien, kein Server
- **Progressive Disclosure erklärt:**
  - Discovery: Nur Name/Description geladen (minimaler Context-Footprint)
  - Activation: Volle Instructions bei Bedarf
  - Execution: Scripts ausführen, Referenzen nutzen
- **Konkretes Beispiel:** PowerPoint-Skill (anthropics/skills/pptx)
  ```
  pptx/
  ├── SKILL.md (name, description, instructions)
  ├── scripts/create_presentation.py
  └── references/...
  ```
- **Konzeptionelle Ebene:** Wie Skills *prinzipiell* funktionieren - keine konkrete Implementierung
- **Vergleich zu responsible-vibe:** Beide nutzen Progressive Disclosure, aber unterschiedlich:
  - responsible-vibe: Dynamische Tool-Rückgaben (mächtig, projektspezifisch, zur Laufzeit)
  - Skills: Statische Pakete (portabel, wiederverwendbar, deklarativ)

#### 4. Warum das mehr ist als Context-Engineering (Hauptteil III)
- **Team-Konventionen:** Nicht nur "wie mache ich X", sondern "wie machen WIR X"
- **Portabilität:** Skill funktioniert in Cursor, Claude, VSCode - überall (theoretisch)
- **Versionierung:** Skills im Git, reviewbar, iterativ verbesserbar
- **Ökosystem:** 30+ Tools unterstützen bereits Skills
- **Die neuen Zutaten zur Suppe:** Scripts + modulare Prompts = mächtige, leichtgewichtige Pakete
- **Konzept vs. Implementierung:** Auf konzeptioneller Ebene bleiben

#### 5. Das größere Bild: Konzeptionelle Einordnung (Schluss I)
- **Nicht "Die vier Säulen"** - zu lösungsorientiert für diesen Post
- **Stattdessen:** Skills als konzeptioneller Ansatz für wiederverwendbares Agent-Wissen
- **Unterschied zu bestehenden Tools:** Skills bringen *neuen* Context (Fähigkeiten), nicht nur Management von vorhandenem Context
- **Offenheit:** Das Skills-Format ist offen, von Anthropic initiiert, aber Community-getrieben

#### 6. Hook für nächsten Post (Schluss II)
- **"Alles ist Nudelsuppe":** Ja, aber mit den richtigen Zutaten wird es eine gute Suppe
- **Skills sind konzeptionell super, ABER:**
  - **Problem:** Client-Abhängigkeit - Skills müssen in Client-spezifische Ordner installiert werden
  - **Challenge:** Teams mit unterschiedlichen Clients (Cursor, Claude, VSCode) → keine zentrale Discoverability
  - **Teaser:** "Ich habe da schon eine Lösung dafür (mcp-server/agent-skills), aber das ist Inhalt des nächsten Posts..."
- **Call-to-Action für DIESEN Post:** Skills-Format verstehen, Konzept verinnerlichen

### Schlüsselbotschaften pro Abschnitt:
1. **Intro:** Context teilen ist genauso wichtig wie Context nutzen
2. **Problem:** Bisherige Lösungen haben Trade-offs (Schwergewicht ODER eingeschränkt ODER nicht modular)
3. **Lösung:** Skills sind leichtgewichtig, modular UND einfach (nur Dateien) - Progressive Disclosure als Kern
4. **Tiefe:** Skills sind Team-Werkzeug, nicht nur Einzel-Hack (Konventionen, Versionierung)
5. **Einordnung:** Konzeptionell neue Kategorie - wiederverwendbare Fähigkeiten, nicht nur Context-Management
6. **Ausblick:** Konzept ist super, Praxis hat Haken (Client-Abhängigkeit) → nächster Post

---
*This plan is maintained by the LLM and uses beads CLI for task management. Tool responses provide guidance on which bd commands to use for task management.*
