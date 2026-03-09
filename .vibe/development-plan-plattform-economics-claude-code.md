# Entwicklungsplan: Blog (plattform-economics-claude-code Branch)

*Erstellt am 2026-03-08 mit Vibe Feature MCP*
*Workflow: [posts](https://mrsimpson.github.io/responsible-vibe-mcp/workflows/posts)*

## Ziel
Blogpost über die Erkenntnis schreiben: Die Anwendung von Plattform-Ökonomie auf das, was gerade mit agentischer Software-Entwicklung passiert.

## Discovery
<!-- beads-phase-id: blog-5.1 -->
### Aufgaben

*Aufgaben werden über `bd` CLI verwaltet*

## Story
<!-- beads-phase-id: blog-5.2 -->

### Eintrittskriterien
- [ ] Das Thema und die Kernaussage des Posts sind klar definiert
- [ ] Recherche zu Plattform-Ökonomie und agentischer SW-Entwicklung ist abgeschlossen
- [ ] Zielgruppe und Tonalität sind festgelegt
- [ ] Referenzen und Quellen sind identifiziert

### Aufgaben

*Aufgaben werden über `bd` CLI verwaltet*

## Writing
<!-- beads-phase-id: blog-5.3 -->

### Eintrittskriterien
- [ ] Die Story-Struktur (Aufbau, Spannungsbogen, Kernargumente) steht
- [ ] Die Analogien und Metaphern sind ausgearbeitet
- [ ] Der rote Faden ist klar erkennbar

### Aufgaben

*Aufgaben werden über `bd` CLI verwaltet*

## Illustration
<!-- beads-phase-id: blog-5.4 -->

### Eintrittskriterien
- [ ] Der Blogpost-Text ist vollständig geschrieben
- [ ] Der Post wurde inhaltlich überprüft und ggf. überarbeitet
- [ ] Stellen, die von Illustrationen profitieren, sind identifiziert

### Aufgaben

*Aufgaben werden über `bd` CLI verwaltet*

## Distribution
<!-- beads-phase-id: blog-5.5 -->

### Eintrittskriterien
- [ ] Der Post ist inhaltlich und visuell finalisiert
- [ ] Metadaten (Titel, Tags, Beschreibung) sind festgelegt
- [ ] Der Post ist im Blog-Format korrekt formatiert

### Aufgaben
- [ ] WIP-Commits zusammenfassen: `git reset --soft <erster Commit dieses Branches>`. Dann einen konventionellen Commit erstellen. In der Nachricht zuerst die Absichten und wichtigen Entscheidungen aus dem Entwicklungsplan zusammenfassen, dann eine kurze Zusammenfassung der wichtigsten Änderungen.

*Aufgaben werden über `bd` CLI verwaltet*

## Wichtige Entscheidungen
- **Format**: Awareness-Post, kein Deep-Dive. Ziel: Einen Denkanstoß geben.
- **Zielgruppe**: Business Nerds – tech-affine Menschen mit Business-Verständnis
- **Sprache**: Deutsch (+ spätere englische Übersetzung)
- **Kernthese**: Claude Code ist nicht einfach ein Coding-Tool, sondern eine Plattform im Sinne der Plattform-Ökonomie. Anthropic wird zum Software-Entwickler – nicht durch eigene Software, sondern als Plattform-Anbieter für Peer-Producer (Entwickler) und Partner (z.B. DevOps-on-Demand).
- **Referenz-Framework**: Boundaryless.io Platform Design Toolkit (PDT)
- **Vorgänger-Post**: "Agent Skills – Fähigkeiten in handlichem Paket" (2026-02-24) – Skills als Contribution-Mechanismus für Partner
- **Long Tail**: Fokus auf Nischenprodukte – sogar Enterprise-Standardsoftware (SAP etc.) sind in der Realität Schneeflocken (individuell customized). Standard-SW-Hersteller sind auch Low-/No-Code-Plattformen zur Individualisierung. Hier liegt massives Long-Tail-Potential.
- **Konkrete Partner**: Supabase, DigitalOcean, Grafana Cloud, AWS, Google Cloud
- **Abgrenzung Claude Code vs. Google**: Claude Code hat stärkste vertikale Integration für Entwickler. Google hat weiter reichendes Angebot (Hosting, Auth, Observability), will aber alles im Closed Ecosystem halten. Anthropic fokussiert die eigentliche Schöpfung und löst den Rest über offenes Plattform-Modell.
- **Monetarisierung (KEY INSIGHT!)**: Nicht über Take-Rate auf Skills, sondern über Token-Verbrauch. Skills und MCP sind offene Standards (kein Alleinstellungsmerkmal). Aber: Anthropic optimiert Werkzeuge (Claude Code) mit Instruktionen zur optimalen Nutzung. Mächtige Skills (z.B. PowerPoint-Skill) sind sehr umfangreich → viel Token-Usage → mehr Revenue. Zusätzlich: proprietäre Erweiterungen und Plugins für Lock-In.
- **PDT-Shoutout**: Am Anfang des Posts Wertschätzung für PDT als Framework, das Mechanismen eine Sprache gibt. Namentlich: Simone Cicero und Luca Ruggeri.
- **Distribution**: Blog = Volltext. LinkedIn = Volltext (identisch). Später englische Übersetzung.

### Story-Struktur (finalisiert)
**Anfang – Die Frage, die mich nicht losließ**
- Persönlicher Einstieg: Was passiert gerade in der SW-Industrie?
- PDT-Shoutout: Das Toolkit gab mir die Sprache für das, was ich beobachte
- These: "Anthropic baut keinen besseren Hammer. Es baut eine Werkbank."

**Mitte – Die Plattform-Brille aufsetzen**
- Block 1: Was ist eine Plattform? (Pipeline vs. Plattform, 3 Value Propositions)
- Block 2: Claude Code durch die Plattform-Brille (Produkt + Extension + Marketplace) + Doppelrolle des Entwicklers (Producer UND Consumer). Zweiseitiger Markt: "Age of personal software" – jeder ist potentieller Peer-Consumer. Zweite Gruppe: fachliche IT-Abteilungen (Self-Service vs. IT-Dienstleister – offen). Optional: KI als neuartiger Kurator (ein Satz).
- Block 3: Der Long Tail – Enterprise-Schneeflocken (SAP, Transaktionskosten)
- Block 4: Die Monetarisierung – Token statt Take-Rate (offene Standards + Lock-In)
- Block 5: Claude Code vs. Google – Offen vs. Geschlossen

**Ende – Von Software zu allem**
- Block 6: Bekannte Parallelen (Uber/Airbnb/Amazon) + Software ist speziell (Wartung!) → Partner besonders wichtig
- Block 7: What's next – Co-Work für alle Wissensarbeiter. OpenAI vorne bei Consumer-Marketplace, Google mit G-Suite. Offene Frage als Cliffhanger.

**Kernbotschaften:**
1. "Anthropic baut keinen besseren Hammer. Es baut eine Werkbank."
2. "Jede SAP-Installation ist eine Schneeflocke."
3. "Die Wertschöpfung entsteht aus dem Wegfall der Intermediäre, nicht der Tätigkeit."

## Notizen
### PDT-Recherche (abgeschlossen)

#### Die 7 Prinzipien der Plattform-Gestaltung (relevant für den Post)
1. **Potenzial an der Edge erkennen** – Kleine Akteure haben heute wachsendes Potenzial (→ Entwickler mit Claude Code)
2. **Für Emergenz gestalten** – Plattformen schaffen kein Ökosystem, sie helfen einem bestehenden zu gedeihen
3. **Selbstorganisation für Mass Customization** – Nur durch Peer-Production entsteht echte Individualisierung
4. **Kontinuierliches Lernen ermöglichen** – "Wenn du bei uns mitmachst, lernst du schneller als draußen"
5. **Für Ungehorsam gestalten** – Emergente Verhaltensweisen erkennen und institutionalisieren
6. **Für Vernetzung gestalten** – Beziehungen zwischen Peers statt Kunde-Lieferant
7. **Identität loslassen** – Sich mit dem Ganzen identifizieren, nicht nur mit sich selbst

#### Die 6 Platform Plays (C→Z Transformation)
1. **PP1**: Personalisierung zurückbringen (→ Claude Code: kontextbewusste Hilfe für JEDES Projekt)
2. **PP2**: Producer auf Top der Wertschöpfungskette bringen (→ DevOps-Experten aus Consulting-Firmen befreien)
3. **PP3**: Transaktionen standardisieren (→ Skill-Format als Standard-Interface)
4. **PP4**: Komplexe Geschäftsprozesse in SaaS einbetten (→ DevOps-Workflows als Skills)
5. **PP5**: Identität, Reputation, Vertrauen ermöglichen (→ Skill-Ratings, Nutzungsmetriken)
6. **PP6**: Nachfrage aggregieren (→ Alle Entwickler-Nachfrage nach DevOps an einem Ort)

#### Die 3 Value Propositions einer Plattform
1. **Product/Service Bundle** (SaaS) → Claude Code CLI selbst (Single-Player-Mode zum Bootstrappen)
2. **Marketplace** → Skills-Marktplatz (Entwickler ↔ Partner)
3. **Extension Platform** → MCP-Protokoll (Dritte erweitern das Produkt)
**Evolution**: SaaS → Extension Platform → Marketplace (= Claude Code's Trajectory, analog Shopify!)

#### Die zwei Wert-Motoren
- **Transactions Engine**: Kanäle und Kontexte für Interaktionen (→ Skill Install = standardisierte Transaktion)
- **Learning Engine**: Support-Services für kontinuierliches Lernen (→ Claude Code's KI-gestütztes Coaching = Moat!)

#### Analogie-Mapping (zentral für den Post)
| PDT-Konzept | Claude Code Ökosystem |
|---|---|
| Plattform-Anbieter | Anthropic |
| Peer-Producer | Software-Entwickler |
| Partner | DevOps-on-Demand, MCP-Server-Anbieter, Tool-Vendors |
| Peer-Consumer | Teams/Unternehmen, die Software brauchen |
| Transactions Engine | Skills-Marketplace, MCP-Protokoll |
| Learning Engine | KI-gestütztes kontextuelles Coaching (struktureller Vorteil!) |
| Long Tail | Unendliche Vielfalt domänenspezifischer Automatisierungen |
| Netzwerkeffekte | Mehr Skills → mehr Nutzer → mehr Skill-Autoren |
| C→Z Transformation | Von "Anthropic liefert alles" zu "Ökosystem liefert alles" |
| Chicken-and-Egg | Claude Code ist bereits excellent ohne Skills (Single-Player-Mode) |
| Canonical Unit | Skills als kleinstes transaktionsfähiges Einheit |

#### Wo die Analogie BRICHT oder ANDERS funktioniert (wichtig für ehrlichen Post!)
- **Multi-Tenanting-Risiko**: Skills/MCP sind offene Standards → portierbar zu anderen AI-Agents
- **Monetarisierung ist indirekt**: Kein Take-Rate auf Skills, sondern Token-Revenue. Mächtige Skills = mehr Tokens = mehr Umsatz. Das ist ein fundamental anderes Modell als Uber/Airbnb!
- **Reputation-System fehlt**: Noch keine Ratings, keine Qualitätssignale
- **Managed vs. Open Marketplace**: Claude Code empfiehlt Skills kontextuell (eher Uber-Modell)
- **Lock-In über Optimierung, nicht über Standard**: Anthropic optimiert Claude Code für beste Nutzung von Skills → andere Agents unterstützen den Standard, aber weniger gut
- **Proprietäre Erweiterungen als Defensibility**: Plugins und proprietäre Spec-Erweiterungen als klassischer Platform-Lock-In
- **Enterprise-Schneeflocken als Long-Tail**: SAP-Customizing etc. zeigt, dass der Long Tail schon immer da war – Plattformen wie Claude Code machen ihn nur effizienter adressierbar

### Quellen
- Boundaryless.io PDT Toolkit (CC BY-SA 4.0)
- PDT Opportunity Exploration Guide v1.1
- PDT Strategy Design Canvases
- 7 Blog-Artikel von Boundaryless.io zu PDT, Growth, Value Propositions
- Vorheriger Blog-Post: "Agent Skills – Fähigkeiten in handlichem Paket" (2026-02-24)

---
*Dieser Plan wird vom LLM gepflegt und nutzt die beads CLI für Aufgabenverwaltung. Tool-Antworten geben Hinweise, welche bd-Befehle für die Aufgabenverwaltung zu verwenden sind.*
