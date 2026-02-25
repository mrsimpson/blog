---
title: "Agent Skills – Fähigkeiten in handlichem Paket"
pubDate: 2026-02-24
description: "Skills sind leichtgewichtige, modulare Pakete für Agent-Fähigkeiten. Progressive Disclosure macht sie effizient, Modularität macht sie mächtig."
tags:
  ["ai", "agents", "context-engineering", "skills", "mcp", "team-conventions"]
---

# Agent Skills – Fähigkeiten in handlichem Paket

![Ein Agent öffnet ein Paket. Drinnen liegen ein Werkzeug und eine Anleitung. Er freut sich.](./images/41-skill-package.png)

> tl;dr: "Skills sind ein leichtgewichtiger, offener Standard, um Agent-Fähigkeiten paketiert zu teilen. Durch Progressive Disclosure bleiben sie effizient, durch Modularität mächtig. Konzeptionell brillant - aber mit praktischen Herausforderungen."

In der Interaktion mit Agenten geht alles um den Kontext. Das wissen wir alle.

Wie ich schon in [Context is all you need](/blog/context-is-all-you-need) schrieb: Context Engineering ist die Kunst, dem LLM die Informationen zur richtigen Zeit zu geben. Es gibt hier keine geheime Zutat, es ist alles nur Nudelsuppe, wie auch Poe in Kung-Fu Panda lernt. Es geht nur darum, wann man was rein wirft.

Aber eine Frage hatte ich dort nicht beantwortet: **Wie mache ich wertvollen Kontext wiederverwendbar?**

Stell dir vor: Du bringst einem Agenten mühsam bei, wie man professionelle PowerPoint-Präsentationen erstellt. Der Agent lernt das Layout, die Formatierung, die Best Practices. Nach zwei Stunden Iterationen funktioniert es perfekt.

Am nächsten Tag sitzt dein Kollege am Schreibtisch. Anderer Agent, gleiche Aufgabe. Und der Agent? **Fängt bei Null an.**

Das ist, als würde jeder Koch in einem Restaurant täglich neu herausfinden müssen, wie man Nudelsuppe kocht. Funktioniert. Aber ineffizient.

Klar, es gibt [Prompts](/blog/prompts-als-code). Die kann man parametrisieren, versionieren, wiederverwenden. Aber der **Anwender muss sie selbst auswählen** - der Agent weiß nicht, welcher Prompt gerade passt. Und Prompts sind nur Text, keine Möglichkeit, Tools zu paketieren, die ihre Fähigkeiten erweitern.

Offen blieb bisher die Antwort zum Gedanken **Was, wenn Agenten Fähigkeiten wie Module importieren könnten - und selbst entscheiden, wann sie welche brauchen?**

## Das Problem: Die Trade-offs bisheriger Ansätze

Wenn du heute einem Agenten neue Fähigkeiten geben willst, hast du verschiedene Optionen. Aber alle haben Trade-offs.

### MCP Remote Server: Mächtig, aber schwergewichtig

Das Model Context Protocol (MCP) ist fantastisch für Tools. Du baust einen Server, der Agent verbindet sich, bekommt neue Werkzeuge.

**Das Problem:** Remote Server bedeuten:

- Separate Server-Prozesse
- Deployment-Overhead
- Infrastruktur-Management
- Nicht trivial für schnelles Prototyping

Für Enterprise-Setups perfekt. Für "Hey, ich möchte meinem Agenten beibringen, wie wir im Team Code reviewen"? Overkill.

### MCP STDIO Server: Leichtgewichtig im Deployment, aber...

STDIO-basierte MCP Server sind weniger komplex - sie laufen lokal, kein separater Prozess nötig.

**Das Problem:** Der MCP-Kontrakt ist umfangreich:

- Server-Implementierung schreiben
- Protocol Handling
- Error Management
- Nicht mal eben in 10 Minuten gemacht

Leichtgewichtig im **Deployment**, aber nicht leichtgewichtig in der **Bereitstellung**.

### Prompts: Leichtgewichtig, aber limitiert

Wie ich in [Prompts als Code](/blog/prompts-als-code) beschrieb: Prompts sind wiederverwendbare Anweisungen. Aber sie sind nur **Text**. Keine Scripts, keine Assets, keine modulare Paketierung.

### Copy-Paste: Das Anti-Pattern

Und dann gibt es natürlich Copy-Paste. "Hey, benutze diese Instructions für Code Reviews." Funktioniert. Aber:

- Keine Versionierung
- Team-Konventionen gehen verloren
- Jeder macht es anders
- Iterative Verbesserung? Vergiss es.

### Was fehlt?

Was wir wirklich brauchen:

- **Leichtgewichtig** wie Prompts
- **Einfach bereitzustellen** (keine komplexe Server-Implementierung)
- **Modular** (Instructions + Scripts + Assets zusammen paketiert)
- **Versionierbar** (Git, nicht Chat-Historie)
- **Team-fähig** (Konventionen teilen)

Genau hier kommen **Agent Skills** ins Spiel.

## Die Lösung: Agent Skills

Agent Skills sind - konzeptionell betrachtet - genau diese Ideal-Lösung: Nicht zu schwer, nicht zu leicht. Genau richtig.

### Was sind Skills?

Ein Skill ist ein **Ordner mit einer `SKILL.md` Datei**. Das war's. Kein Server. Keine Infrastruktur. Nur Dateien.

**Beispiel:** Der [PowerPoint-Skill von Anthropic](https://github.com/anthropics/skills/tree/main/skills/pptx)

```
skills/pptx/
├── SKILL.md              # Instructions + Metadata
├── scripts/              # Python/Shell Scripts
├── editing.md            # Referenzen
├── pptxgenjs.md          # Dokumentation
└── LICENSE.txt
```

Die `SKILL.md` enthält YAML-Frontmatter und Markdown:

```markdown
---
name: powerpoint-expert
description: Create professional PowerPoint presentations with proper layouts and formatting
---

# PowerPoint Expert Skill

## When to use this skill

Use this skill when the user needs to create, modify, or review PowerPoint presentations...

## How to create a presentation

1. Start with the template in references/design-guide.md
2. Use scripts/create_pptx.py for programmatic generation
3. Follow our team's layout conventions...
```

Das ist alles. Einfach. Deklarativ. Portabel.

### Progressive Disclosure: Der Kern-Vorteil

Hier wird es interessant. Skills nutzen **Progressive Disclosure** - und das ist ihr größter Vorteil gegenüber MCP Tools.

**Wie es funktioniert:**

![Ablauf von progressive Disclosure](./images/42-progressive-disclosure.png)

1. **Discovery Phase**: Beim Start lädt der Agent nur `name` und `description` aller verfügbaren Skills
   - Minimaler Context Footprint
   - Der Agent "weiß", welche Skills existieren
   - Aber lädt noch nicht die vollen Instructions

2. **Activation Phase**: Wenn eine Aufgabe zu einem Skill passt, lädt der Agent die volle `SKILL.md`
   - Jetzt bekommt der Agent die detaillierten Instructions
   - Plus Zugriff auf Scripts und Referenzen
   - Context wächst nur bei Bedarf

3. **Execution Phase**: Der Agent nutzt die Instructions und führt optional Scripts aus
   - Kann Scripts aufrufen (`scripts/create_pptx.py`)
   - Kann Referenzen lesen (`editing.md`, `pptxgenjs.md`)
   - Kann Assets nutzen

**Das ist fundamental anders als MCP Tools:**

Mit MCP Tools bekommt der Agent alle Tool-Definitionen auf einmal. Mit Skills bekommt er nur die Namen - und lädt Details on-demand.

Bei 50 Skills bedeutet das:

- **Mit MCP:** 50 komplette Tool-Definitionen im Context
- **Mit Skills:** 50 kurze Beschreibungen → Eine volle Skill-Anleitung bei Bedarf

Das ist **Context-effizient**.

## Mehr als nur Context

Skills sind nicht nur ein cleveres Context-Engineering-Tool. Sie sind **paketiertes, wiederverwendbares Wissen**.

Der Skill liegt im Git-Repo. Versioniert. Reviewbar. "**Wir** machen Code Reviews so" statt "**Ich** mache Code Reviews so."

Und ja: Skills bringen **neue Zutaten** zur Nudelsuppe:

- **Scripts:** Nicht nur "erkläre, wie es geht", sondern "führe aus"
- **Modulare Prompts:** Instructions in verdaulichen Häppchen
- **Assets:** Templates, Beispiele, Referenzen - zusammen paketiert

## Konzeptionelle Einordnung

Skills sind konzeptionell etwas Neues in der Landschaft des Context-Engineering.

In meinen früheren Posts habe ich über Tools geschrieben, die **vorhandenen Context managen**:

- [responsible-vibe-mcp](https://github.com/mrsimpson/responsible-vibe-mcp): Prozess-Struktur & phasenspezifischer Context
- [agentic-knowledge-mcp](https://github.com/mrsimpson/agentic-knowledge-mcp): Intelligente Navigation durch Dokumentation
- [quiet-shell-mcp](https://github.com/mrsimpson/quiet-shell-mcp): Noise-Filtering bei Command-Output

**Skills sind anders:**

Skills **bringen nicht nur modulare Prompts**, sondern ganze **Fähigkeiten**.

Sie sind nicht nur ein weiteres Tool zur Context-Optimierung. Sie sind ein konzeptioneller Ansatz für **wiederverwendbares Agent-Wissen**.

Und das Beste: **Das Format ist offen.**

Initiiert von Anthropic, aber als [offener Standard](https://agentskills.io) veröffentlicht. Die Community kann beitragen, erweitern, eigene Skills bauen. Skills sind keine proprietäre Lösung, sondern ein **offenes Ökosystem**, das auch in autonomen Werkzeugen (wie bspw. OpenClaw) eine große Anwendung findet.

## Die Realität: Das Teilen ist die Schwäche

Soweit die Theorie. Konzeptionell sind Skills echt cool.

Die Praxis? **Client-Abhängigkeit.**

Skills müssen in **client-spezifische Ordner** installiert werden:

- Cursor: `~/.cursor/skills/`
- Claude Desktop: `~/.claude/skills/`
- VSCode: `.vscode/skills/`

Dein Team nutzt unterschiedliche Clients? Wo leben die Team-Skills? Wie werden sie synchronisiert?

Das **konzeptionelle Versprechen** ("portabel, wiederverwendbar") trifft auf eine **praktische Hürde**, nämlich eine client-spezifische Installation.

### Progressive Disclosure, anders gedacht

Ich fragte mich also: Kann man Progressive Disclosure nicht auch **anders** implementieren und dabei den mächtigen Standard nutzen?

Letztlich müssen die `descriptions` doch nur irgendwie in den Kontext - und dann bei Bedarf "verlängert" werden mit den vollen Instructions. Da geht doch was.

Und wenn man das schon neu denkt, kann man dabei auch gleich die Team-Sharing-Schwäche angehen...

Aber das ist Teil des nächsten Posts. #cliffhanger

## Fazit: Handliches Paket, praktische Hürde

Am Ende ist alles Nudelsuppe. Aber mit den **richtigen Zutaten** (Skills: Instructions + Scripts + Assets) und der **richtigen Zubereitung** (Progressive Disclosure) wird es eine gute Suppe.

Skills sind konzeptionell brillant: Leichtgewichtig, modular, portabel.

Die Client-Abhängigkeit ist real. Aber lösbar.

**Links:**

- [Skills-Spezifikation](https://agentskills.io)
- [Beispiel-Skills](https://github.com/anthropics/skills)

Im nächsten Post zeige ich, wie man Progressive Disclosure von Skills effizient implementieren kann - und dabei gleich das Team-Sharing-Problem löst.

---

**Frage an dich:** Nutzt du Skills? Wie teilst du Agent-Wissen im Team? Ich freue mich auf den Austausch!

---

# 🇬🇧 Agent Skills – Capabilities in a Neat Package

![An agent opens a package. Inside: a tool and an instruction manual. It's delighted.](./images/41-skill-package.png)

> tl;dr: "Skills are a lightweight, open standard for packaging agent capabilities. Progressive disclosure keeps them efficient, modularity makes them powerful. Conceptually brilliant – with some practical challenges."

When working with agents, it's all about context. We all know that by now.

As I wrote in [Context is all you need](/blog/context-is-all-you-need): Context engineering is the art of feeding your LLM the right information at the right time. There's no secret ingredient here – it's all just noodle soup, as Po learns in Kung Fu Panda. It's just about what you toss in when.

But one question I left unanswered back then: **How do I make valuable context reusable?**

Picture this: You painstakingly teach an agent how to create professional PowerPoint presentations. The agent learns layouts, formatting, best practices. After two hours of iteration, it works perfectly.

Next day, your colleague sits down. Different agent, same task. And the agent? **Starts from scratch.**

That's like every chef in a restaurant having to figure out how to make noodle soup from scratch every single day. Works. But inefficient.

Sure, there are [prompts](/blog/prompts-als-code). You can parameterize them, version them, reuse them. But the **user has to pick them** – the agent doesn't know which prompt fits the task. And prompts are just text, no way to package tools that extend their capabilities.

So the question remained: **What if agents could import capabilities like modules – and decide on their own when they need which one?**

## The Problem: Trade-offs of Current Approaches

If you want to give an agent new capabilities today, you've got options. But they all come with trade-offs.

### MCP Remote Servers: Powerful, but Heavy

The Model Context Protocol (MCP) is fantastic for tools. You build a server, the agent connects, gets new capabilities.

**The problem:** Remote servers mean:

- Separate server processes
- Deployment overhead
- Infrastructure management
- Not trivial for quick prototyping

Perfect for enterprise setups. For "Hey, I want to teach my agent how our team does code reviews"? Overkill.

### MCP STDIO Servers: Lightweight in Deployment, but...

STDIO-based MCP servers are less complex to handle – they run locally, no separate process needed.

**The problem:** The MCP contract is substantial:

- Writing a server implementation
- Protocol handling
- Error management
- Not something you whip up in 10 minutes

Lightweight in **deployment**, but not lightweight in **development**.

### Prompts: Lightweight, but Limited

As I described in [Prompts as Code](/blog/prompts-als-code): Prompts are reusable instructions. But they're just **text**. No scripts, no assets, no modular packaging.

### Copy-Paste: The Anti-Pattern

And then there's good old copy-paste. "Hey, use these instructions for code reviews." Works. But:

- No versioning
- Team conventions get lost
- Everyone does it differently
- Iterative improvement? Forget it.

### What's Missing?

What we really need:

- **Lightweight** like prompts
- **Easy to provide** (no complex server implementation)
- **Modular** (instructions + scripts + assets packaged together)
- **Versionable** (Git, not chat history)
- **Team-ready** (share conventions)

This is exactly where **Agent Skills** come in.

## The Solution: Agent Skills

Agent Skills are – conceptually speaking – exactly this ideal solution: Not too heavy, not too light. Just right.

### What Are Skills?

A skill is a **folder with a `SKILL.md` file**. That's it. No server. No infrastructure. Just files.

**Example:** Anthropic's [PowerPoint skill](https://github.com/anthropics/skills/tree/main/skills/pptx)

```
skills/pptx/
├── SKILL.md              # Instructions + Metadata
├── scripts/              # Python/Shell Scripts
├── editing.md            # References
├── pptxgenjs.md          # Documentation
└── LICENSE.txt
```

The `SKILL.md` contains YAML frontmatter and Markdown:

```markdown
---
name: powerpoint-expert
description: Create professional PowerPoint presentations with proper layouts and formatting
---

# PowerPoint Expert Skill

## When to use this skill

Use this skill when the user needs to create, modify, or review PowerPoint presentations...

## How to create a presentation

1. Start with the template in references/design-guide.md
2. Use scripts/create_pptx.py for programmatic generation
3. Follow our team's layout conventions...
```

That's all there is to it. Simple. Declarative. Portable.

### Progressive Disclosure: The Key Advantage

Here's where it gets interesting. Skills use **progressive disclosure** – and that's their biggest advantage over MCP tools.

**How it works:**

![Progressive disclosure flow](./images/42-progressive-disclosure.png)

1. **Discovery Phase**: At startup, the agent loads only `name` and `description` of all available skills
   - Minimal context footprint
   - The agent "knows" which skills exist
   - But doesn't load full instructions yet

2. **Activation Phase**: When a task matches a skill, the agent loads the full `SKILL.md`
   - Now the agent gets detailed instructions
   - Plus access to scripts and references
   - Context grows only on demand

3. **Execution Phase**: The agent uses the instructions and optionally runs scripts
   - Can invoke scripts (`scripts/create_pptx.py`)
   - Can read references (`editing.md`, `pptxgenjs.md`)
   - Can use assets

**This is fundamentally different from MCP tools:**

With MCP tools, the agent gets all tool definitions at once. With skills, it gets just the names – and loads details on demand.

With 50 skills, that means:

- **With MCP:** 50 complete tool definitions in context
- **With Skills:** 50 short descriptions → One full skill guide when needed

That's **context-efficient**.

## More Than Just Context

Skills aren't just a clever context engineering tool. They're **packaged, reusable knowledge**.

The skill lives in a Git repo. Versioned. Reviewable. "**We** do code reviews this way" instead of "**I** do code reviews this way."

And yes: Skills bring **new ingredients** to the noodle soup:

- **Scripts:** Not just "explain how it's done" – actually "do it"
- **Modular prompts:** Instructions in digestible chunks
- **Assets:** Templates, examples, references – packaged together

## Conceptual Framing

Skills are conceptually something new in the context engineering landscape.

In earlier posts, I've written about tools that **manage existing context**:

- [responsible-vibe-mcp](https://github.com/mrsimpson/responsible-vibe-mcp): Process structure & phase-specific context
- [agentic-knowledge-mcp](https://github.com/mrsimpson/agentic-knowledge-mcp): Intelligent documentation navigation
- [quiet-shell-mcp](https://github.com/mrsimpson/quiet-shell-mcp): Noise filtering for command output

**Skills are different:**

Skills don't just bring **modular prompts** – they bring entire **capabilities**.

They're not just another tool for context optimization. They're a conceptual approach for **reusable agent knowledge**.

And the best part: **The format is open.**

Initiated by Anthropic, but published as an [open standard](https://agentskills.io). The community can contribute, extend, build their own skills. Skills aren't a proprietary solution – they're an **open ecosystem** that's also gaining traction in autonomous tools (like OpenClaw, for example).

## Reality Check: Sharing Is the Weakness

So much for theory. Conceptually, skills are pretty cool.

In practice? **Client dependency.**

Skills need to be installed in **client-specific directories**:

- Cursor: `~/.cursor/skills/`
- Claude Desktop: `~/.claude/skills/`
- VSCode: `.vscode/skills/`

Your team uses different clients? Where do team skills live? How do you sync them?

The **conceptual promise** ("portable, reusable") hits a **practical hurdle**: client-specific installation.

### Progressive Disclosure, Reimagined

So I asked myself: Can you implement progressive disclosure **differently** while leveraging the powerful standard?

After all, the `descriptions` just need to get into the context somehow – and then be "extended" with full instructions on demand. That should be doable.

And if you're rethinking it anyway, you might as well tackle the team-sharing weakness while you're at it...

But that's for the next post. #cliffhanger

## Conclusion: Neat Package, Practical Hurdle

In the end, it's all noodle soup. But with the **right ingredients** (Skills: Instructions + Scripts + Assets) and the **right preparation** (Progressive Disclosure), it becomes a really good soup.

Skills are conceptually brilliant: Lightweight, modular, portable.

The client dependency is real. But solvable.

**Links:**

- [Skills specification](https://agentskills.io)
- [Example skills](https://github.com/anthropics/skills)

In the next post, I'll show how you can implement progressive disclosure of skills effectively – and solve the team-sharing problem along the way.

---

**Question for you:** Are you using skills? How do you share agent knowledge across your team? I'd love to hear about it!
