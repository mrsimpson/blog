# Development Plan: blog (harness-enginnering branch)

*Generated on 2026-03-18 by Vibe Feature MCP*
*Workflow: [posts](https://mrsimpson.github.io/responsible-vibe-mcp/workflows/posts)*

## Goal
Einen bewussten **Zweiteiler** über Harness Engineering schreiben:

**Post 1: "Harness Engineering braucht eine Informationshierarchie"**
- Harness Engineering als Konzept einführen (aufbauend auf HumanLayer/Viv)
- Die konzeptionelle Lücke aufzeigen: Harness Engineering ist ignorant gegenüber Informationshierarchie
- Die Dumb Zone (Dex Horthy) als Beweis, warum flaches Konfigurieren nicht reicht
- Progressive Disclosure als Lösung auf allen Ebenen (nicht nur Skills)
- Drei-Schichten-Modell: Process → Conventions → Documentation

**Post 2: "ADE — Harness Engineering skalieren"**
- Das mentale Modell von ADE: Mapping von Konfigurationsoptionen und Praktiken auf die Informationshierarchie
- Wie man Harness Engineering reproduzierbar, teilbar und versionierbar macht
- Praktische Implementierung der Informationsarchitektur

## Discovery
<!-- beads-phase-id: blog-6.1 -->
### Tasks

- [ ] Understand the harness engineering concept from the HumanLayer blog post
- [ ] Explore the ADE tool thoroughly (architecture, catalog, harness writers, etc.)
- [ ] Identify the unique angle / thesis for our blog post
- [ ] Gather key references and prior art
- [ ] Understand the blog's existing format, style, and tech stack

*Tasks managed via `bd` CLI*

## Story
<!-- beads-phase-id: blog-6.2 -->

### Phase Entrance Criteria:
- [ ] The harness engineering concept is well understood
- [ ] The ADE tool has been thoroughly explored
- [ ] Key references and prior art are gathered
- [ ] A unique angle/thesis for the post is identified
- [ ] The blog's existing format and tech stack are understood

### Tasks

- [ ] Define the narrative arc of the post
- [ ] Identify target audience
- [ ] Draft post outline with sections and key points
- [ ] Decide on tone, depth, and examples to include

*Tasks managed via `bd` CLI*

## Writing
<!-- beads-phase-id: blog-6.3 -->

### Phase Entrance Criteria:
- [ ] A narrative arc and outline are agreed upon
- [ ] Target audience is defined
- [ ] Key sections and examples are planned
- [ ] Tone and depth are decided

### Tasks

- [ ] Write the blog post following the agreed outline
- [ ] Include code examples and diagrams where appropriate
- [ ] Add proper frontmatter for the blog's tech stack
- [ ] Review and refine prose

*Tasks managed via `bd` CLI*

## Illustration
<!-- beads-phase-id: blog-6.4 -->

### Phase Entrance Criteria:
- [ ] Blog post draft is complete
- [ ] Sections requiring visual support are identified

### Tasks

- [ ] Identify where diagrams or illustrations would help
- [ ] Create or source appropriate visuals
- [ ] Integrate illustrations into the post

*Tasks managed via `bd` CLI*

## Distribution
<!-- beads-phase-id: blog-6.5 -->

### Phase Entrance Criteria:
- [ ] Blog post is finalized with illustrations
- [ ] Post has been reviewed for accuracy and readability

### Tasks
- [ ] Squash WIP commits: `git reset --soft <first commit of this branch>`. Then, create a conventional commit. In the message, first summarize the intentions and key decisions from the development plan. Then, add a brief summary of the key changes and their side effects and dependencies

*Tasks managed via `bd` CLI*

## Key Decisions
- **Sprache**: Deutsch (ggf. mit englischer Übersetzung)
- **Format**: Bewusster Zweiteiler — Post 1 konzeptionell (Informationshierarchie), Post 2 praktisch (ADE)
- **Post 1 ohne ADE**: ADE wird maximal als Ausblick angeteasert, nicht erklärt — das stärkt die konzeptionelle Botschaft
- **Kernthese Post 1**: Gutes Alignment entsteht, wenn wir Agenten so briefen, wie wir Menschen briefen würden — in einer natürlichen Informationshierarchie (Process → Conventions → Documentation). Das ist zutiefst menschlich und lässt sich daher gut alignen.
- **Narrativer Bogen Post 1**: (1) Harness Engineering ist da, (2) Mehr ist nicht besser [kurz!], (3) Mental Alignment als Erkenntnis, (4) Menschliche Informationshierarchie als Lösung, (5) Ausblick → Post 2
- **Sektion 2 kurz halten**: ETH-Zürich + Kohärenzverlust nur als knappe Überleitung, nicht auswalzen
- **Zielgruppe**: Entwickler, Architekten, Knowledge-Engineers — Leute die mit Coding-Agents arbeiten und deren Konfiguration optimieren wollen
- **Tiefe**: Kompakt, fokussiert (~150-200 Zeilen deutsch)
- **Sprache**: Deutsch mit englischer Übersetzung am Ende

## Notes
### Quellen
- **HumanLayer blog**: [Skill Issue: Harness Engineering for Coding Agents](https://www.humanlayer.dev/blog/skill-issue-harness-engineering-for-coding-agents) by Kyle, March 12, 2026
- **Dex Horthy Talk**: [No Vibes Allowed: Solving Hard Problems in Complex Codebases](https://www.youtube.com/watch?v=rmvDxxNubIg) — AI Engineer, Dez. 2025
- **Viv Trivedy**: [Harness as a Service](https://www.vtrivedy.com/posts/claude-code-sdk-haas-harness-as-a-service), [Anatomy of an Agent Harness](https://blog.langchain.com/the-anatomy-of-an-agent-harness/)
- **ADE tool**: `~/projects/privat/codemcp/ade` — für Post 2
- **Eigene Posts**: [Agent Skills](/blog/agent-skills-wiederverwendbares-wissen), [Context Engineering — weniger ist mehr](/blog/context-engineering-weniger-ist-mehr), [Claude Code als Plattform](/blog/claude-code-als-plattform)

### Kernkonzepte für Post 1
- **coding agent = AI model(s) + harness** (HumanLayer)
- **Kohärenzverlust**: Mehr Kontext/Konfiguration ≠ besseres Verhalten — Dumb Zone nur eine Ausprägung
- **Mental Alignment**: Wir nehmen Inferenz als "gut" wahr, wenn sie unsere Erwartungen trifft. Dafür brauchen wir ein mentales Modell, das auch bei Menschen funktioniert.
- **Informationshierarchie ist zutiefst menschlich**: Neuer Mitarbeiter lernt Prozess → Konventionen → zieht Docs bei Bedarf heran
- **Progressive Disclosure**: ergibt sich natürlich aus der menschlichen Hierarchie
- **Drei-Schichten-Modell**: Process → Conventions → Documentation (gerichtet komponierend)
- **Skills als konkretes Beispiel** für Progressive Disclosure — aber nicht das einzige

### Post 2 — Detaillierter Outline
1. Einstieg: Offene Frage aus Post 1 — wie formalisiert man die Informationshierarchie?
2. **Das mentale Modell (KERN)**: Menschen denken in Facetten (sich ausschließende vs. ergänzende Optionen), nicht in Informationshierarchien. Daraus resultieren implizit Handlungsweisen/Wissensquellen. ADE als Brücke: Mensch wählt Facetten → ADE übersetzt in Informationshierarchie für den Agenten.
3. Agent-agnostisch: Nudelsuppe bleibt Nudelsuppe (System-Prompt, Conversation, Tools). Komfort-Magie der Hersteller zerstört Alignment durch Intransparenz. Deshalb harness-agnostische Lösung wertvoll.
4. Team-Skalierung: Alignment wird wichtiger, nicht unwichtiger. Vier-Augen-Prinzip beim Merge — ohne Alignment verpufft Geschwindigkeit. Config im Repo = geteilte Hierarchie.
5. Ausblick: Shared context over personal configuration, Open Source

### ADE Key Concepts (für Post 2)
- Catalog-basiertes Facet-System für interaktives Setup
- LogicalConfig als agent-agnostische Zwischenrepräsentation
- 9 Harness Writers für verschiedene Coding Agents
- Lock File für Reproduzierbarkeit (wie package-lock.json)
- Provisions: atomare Config-Einheiten, die auf Writer abbilden

---
*This plan is maintained by the LLM and uses beads CLI for task management. Tool responses provide guidance on which bd commands to use for task management.*
