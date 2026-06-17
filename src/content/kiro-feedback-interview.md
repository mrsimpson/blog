# Voice of Pioneers – Kiro Feedback Interview
*Hypothetisches Interview zwischen einem Kiro Product Manager und Oliver Jägle (Senior Software Engineer, DB)*

---

## Frage 1

**Interviewer** Oliver, du bist Senior Software Engineer und schreibst regelmäßig über Engineering-Themen. Was hat dich dazu gebracht, Kiro auszuprobieren – und was war dein erster Eindruck?

**Oliver:** Was mich an Kiro neugierig gemacht hat, war die Kombination aus Agent, Vorgehensmodell und IDE in einem Produkt. Dass es überhaupt einen minimalen Workflow gibt – also Spec-Driven Development als eingebettetes Vorgehensmodell – das hat mir sofort ein Gefühl von Kontrolle gegeben. Das ist bei anderen Tools der damaligen Zeit wie Cursor oder Claude Code nicht so: Die sind im Kern mächtige Assistenten, aber ohne strukturierten Prozess.

Eher besonders interessant fand ich, dass die Specs ausführbar sind – also direkt in der IDE in Code überführt werden können. Das ist konzeptuell stark, weil es die Lücke zwischen "was ich will" und "was der Agent tut" sichtbar macht. Aber ob das in der Praxis wirklich funktioniert – dazu kommen wir wahrscheinlich gleich noch.

---

## Frage 2

**Interviewer** Kiro hat das Konzept von Spec-Driven Development – also dass man vor dem Coden erst Requirements, Design und Tasks strukturiert ausarbeitet. Wie siehst du das im Vergleich zu deinem normalen Arbeitsablauf?

**Oliver:** SDD ist ein Workflow – aber nicht der einzige, und aus meiner Sicht auch nicht immer der richtige. Er ist stark angelehnt ans V-Modell: erst vollständig spezifizieren, dann implementieren. Das hat seinen Platz, aber es ist ein bestimmtes Weltbild über Softwareentwicklung.

Was ich in der Zusammenarbeit mit Agenten viel wertvoller finde, sind explorative oder interaktionsfördernde Workflows – wie Anthropics Explore-Plan-Code-Commit-Muster. Der Grund: Problemraum und Lösungsraum sind oft nicht von Anfang an klar. Sie erschließen sich iterativ, im Dialog, durch Ausprobieren. Wenn ich schon zu Beginn eine vollständige Spec schreiben soll, tue ich so, als ob ich das Problem bereits vollständig verstehe – was in der Praxis selten stimmt.

SDD funktioniert gut für Aufgaben, bei denen Anforderungen tatsächlich vorab klar sind. Aber für explorative Entwicklung, für Architekturentscheidungen unter Unsicherheit, für Prototypen – da ist ein schwergewichtiger Spec-Prozess eher hinderlich als hilfreich. Kiro müsste da meiner Meinung nach klarer positionieren: Wann ist SDD der richtige Ansatz – und wann nicht?

---

## Frage 3

**Interviewer** Du hast Specs in Kiro benutzt – oder vielleicht auch bewusst nicht. Was funktioniert dabei gut, und wo hattest du das Gefühl, dass etwas fehlt oder sich unnatürlich anfühlt?

**Oliver:** Kiro erzeugt wirklich beeindruckende Specs. Die sind vollständig, strukturiert, gut formuliert. Das ist handwerklich stark.

Aber genau das ist auch das Problem: Die Specs überwältigen mich. Ich lese sie nicht wirklich durch – und ich kann sie schon gar nicht auf Vollständigkeit prüfen. Zu viel Text, zu viel Information auf einmal. Was sich nach Kontrolle anfühlt, ist in Wirklichkeit eine Illusion von Kontrolle. Der Agent hat eine Spec produziert, ich habe sie abgenickt, und damit ist die Verantwortung scheinbar übergeben. Aber niemand hat wirklich geprüft, ob die Spec das richtige Problem löst.

Das ist übrigens dasselbe Problem wie bei Low-Code-Plattformen: Sie erzeugen schnell ein Ergebnis, das gut aussieht – aber die eigentliche Komplexität, nämlich ob die Entscheidungen darin richtig sind, bleibt unsichtbar.

---

## Frage 4

**Interviewer** Wenn du an Autonomie denkst – also wie viel der Agent selbst entscheidet versus wie viel du steuerst – wo sollte Kiro deiner Meinung nach auf diesem Spektrum stehen?

**Oliver:** Erstmal eine Prämisse, die ich für wichtig halte: Ich gehe davon aus, dass AWS mit Kiro – sowohl IDE als auch CLI – Engineers adressiert. Keine Citizen Developer, keine Business-Analysten, sondern Leute, die professionell Software bauen und Verantwortung für das tragen, was sie abliefern. Die wollen nicht einfach nur "viben" – die wollen verantwortungsvoll arbeiten.

Das hat Konsequenzen für die Frage der Autonomie.

Die IDE ist für viele ein leichter Einstieg, nicht zuletzt weil VS Code als Basis vertraut ist. Dort hat Kiro enormes Potenzial für niedrige Autonomie mit hoher Transparenz: Diffs, grafische Workflows, formatierte Dokumente – das sind Mittel, die dem Engineer helfen, Entscheidungen nachzuvollziehen und zu übernehmen. Aber damit das wirklich funktioniert, müssten viel kleinere Inkremente gefördert werden. Aktuell produziert Kiro große Schritte – vollständige Specs, ganze Implementierungswellen – das überfordert die menschliche Reviewfähigkeit.

Die CLI ist ein anderer Fall. Sie verlangt dem Engineer mehr ab – neues Methodenwissen, eine andere Arbeitsweise. Das ist zumutbar für diese Zielgruppe, aber dann muss das Tool auch dabei helfen. Höhere Autonomie – Human on the Loop – kann hier sinnvoll sein, aber nur wenn die Workflows, die den Agenten steuern, besser integriert sind. SDD als einziger Prozess reicht nicht. Es braucht mental aligned workflows – explorative, iterative Ansätze, die dem Engineer helfen, Problemraum und Lösungsraum gemeinsam mit dem Agenten zu erschließen. Ich habe dazu selbst ein Plugin für Opencode entwickelt, das Workflows aus codemcp.github.io/workflows unterstützt – das könnte ich bei Interesse gerne teilen.

---

## Frage 5

**Interviewer** In einem Enterprise-Kontext gibt es immer jemanden, der am Ende die Verantwortung trägt – für Architektur, für Bugs, für Compliance. Wie passt ein KI-Agent in diese Verantwortungsstruktur?

**Oliver:** Das ist für mich eine der zentralen ungeklärten Fragen bei allen Coding Agents – nicht nur bei Kiro. Wenn ich an eine RACI-Struktur denke: Der Agent kann "Responsible" sein – er führt aus. Aber "Accountable" bleibt immer ein Mensch. Das ist keine philosophische Frage, das ist Unternehmensrealität. Jemand unterschreibt den Architekturentscheid. Jemand erklärt dem Kunden, warum der Bug passiert ist. Jemand haftet bei einem Compliance-Verstoß.

Das bedeutet: Je autonomer ein Agent agiert, desto größer wird das Problem der Accountability. Wer erklärt hinterher, warum der Agent diese Entscheidung getroffen hat?

Kiro hat durch SDD eigentlich einen Ansatz, um das zu adressieren – Specs dokumentieren Entscheidungen und schaffen Nachvollziehbarkeit. Aber wie gesagt: Wenn niemand die Spec wirklich liest, löst das das Problem nur auf dem Papier.

Was ich mir vorstellen würde: Eine explizite Verbindung zwischen Intent – also dem "Warum" hinter einer Aufgabe – und Architecture Decision Records. Der Mensch müsste nicht jeden Schritt abnicken, aber an den wirklich relevanten Entscheidungspunkten aktiv Stellung beziehen, nicht nur bestätigen. Wie genau das in der UX aussehen sollte, weiß ich ehrlich gesagt noch nicht – aber ich bin überzeugt, dass simples "Approve" auf eine Spec nicht reicht. Es braucht einen Mechanismus, der echte Auseinandersetzung fördert, nicht nur Durchklicken.

---

## Frage 6

**Interviewer** Kiro hat Mechanismen wie Hooks, Skills und Steering Files – also Wege, den Agenten zu konfigurieren und anzupassen. Hast du damit gearbeitet, und was war dein Eindruck von diesem Konfigurationsmodell?

**Oliver:** Ja, ich habe damit gearbeitet – und ich finde den Ansatz grundsätzlich richtig. Steering Files, Skills, Hooks: Das sind die richtigen Bausteine für Harness Engineering.

Die Frage ist, ob diese Bausteine als kohärentes System funktionieren oder als loser Werkzeugkasten. Mein Eindruck: noch eher letzteres.

Die einzelnen Mechanismen sind gut gedacht. Die Inclusion Modes in Steering Files – `always`, `fileMatch`, `auto`, `manual` – sind konzeptuell genau richtig, weil sie eine Informationshierarchie ermöglichen: Was ist immer im Kontext? Was wird situativ geladen? Was on-demand? Das ist exakt das Prinzip von Progressive Disclosure, das gutes Harness Engineering ausmacht.

Aber Kiro erklärt nicht explizit, wie man diese Hierarchie aufbaut. Es fehlen Opinions. Kiro könnte – und sollte meiner Meinung nach – dem Engineer klar sagen: Steering Files mit `always` sind dein Process. Skills sind deine Conventions, die du bei Bedarf lädst. Dokumentation kommt on-demand via Sub-Agents oder `manual`-Steering. Das wäre ein echtes mentales Modell, das Nutzern hilft, den Harness richtig zu strukturieren – statt alles irgendwie reinzuwerfen und zu hoffen, dass es funktioniert. Mehr Meinung wäre hier eine Stärke, keine Einschränkung.

---

## Frage 7

**Interviewer** Wenn du einem neuen Teammitglied erklären müsstest, wie man mit Kiro effektiv arbeitet – was würdest du als erstes sagen? Und was ist schwer zu vermitteln?

**Oliver:** Ehrlich gesagt würde ich derzeit davon abraten, SDD zu nutzen. Nicht weil das Konzept falsch ist, sondern weil die Specs so viel Output produzieren, dass ein normaler Engineer sie nicht sinnvoll reviewen kann. Das schafft eine falsche Sicherheit – und die ist gefährlicher als gar kein Prozess.

Der Supervised Mode rettet das auch nicht wirklich. Der hilft vielleicht einem sehr akribischen Kollegen, einem Review-Nerd, der wirklich jeden Diff liest. Für die meisten ist es aber dasselbe Problem in kleinerem Maßstab: zu viel Information, zu wenig echte Auseinandersetzung.

Was ich einem neuen Teammitglied stattdessen sagen würde: Fang mit dem Chat an. Versteh, wie der Agent denkt. Nutze Kiro für klar umrissene, kleine Aufgaben. Bau ein Gefühl dafür auf, wo du dem Agenten vertrauen kannst – und wo du selbst denken musst. Der Rest kommt dann von alleine.

Was schwer zu vermitteln ist: dass Kiro nicht das Denken abnimmt, sondern das Denken voraussetzt. Wer das nicht verinnerlicht hat, wird von der Geschwindigkeit des Tools in die falsche Richtung getragen.

---

## Frage 8

**Interviewer** Stell dir vor, dein Team soll Kiro in einem laufenden Projekt einführen – mit bestehendem Code, bestehenden Konventionen, bestehender Architektur. Was wären deine größten Bedenken?

**Oliver:** Das größte Problem ist der Kontext. Ein laufendes Projekt hat implizites Wissen – Entscheidungen, die irgendwann getroffen wurden, Konventionen, die sich organisch entwickelt haben, Architektur-Kompromisse, die aus guten Gründen so sind wie sie sind. Dieses Wissen steckt nicht im Code, es steckt in den Köpfen der Leute.

Kiro kann nur mit dem arbeiten, was man ihm gibt. Wenn ich das implizite Wissen nicht explizit mache, arbeitet der Agent auf einem falschen Bild des Projekts. Was ich mir von Kiro wünschen würde: Werkzeuge, die helfen, Entscheidungen retrospektiv herauszuarbeiten. Nicht vollautomatisiert – sondern mit einem geführten Workflow, der das Team Schritt für Schritt durch die wichtigsten impliziten Entscheidungen führt und sie explizit macht.

Das zweite Bedenken betrifft den Harness selbst: Wenn verschiedene Teammitglieder unterschiedliche Tools nutzen – Kiro, Cursor, Claude Code – haben sie potenziell unterschiedliche Konfigurationen und damit unterschiedliche mentale Modelle. Kiro kocht da leider seine eigene Suppe. Eine harness-agnostische Konfigurationsschicht, die im Repo lebt und tool-unabhängig ist, wäre für Teams deutlich wertvoller.

---

## Frage 9

**Interviewer** Architekturentscheidungen sind oft komplex und haben langfristige Konsequenzen. Kannst du dir vorstellen, Kiro bei solchen Entscheidungen einzusetzen – und wenn ja, in welcher Rolle?

**Oliver:** Ja, aber ausschließlich als Denkpartner – nicht als Entscheider. Das ist ein wichtiger Unterschied.

Bei Architekturentscheidungen geht es nicht darum, Code zu schreiben. Es geht darum, Alternativen zu durchdenken, Trade-offs zu benennen, Konsequenzen abzuschätzen. Da kann ein Agent enorm hilfreich sein: Er kann Optionen strukturieren, Argumente pro und contra ausformulieren, blinde Flecken aufzeigen. Aber die Entscheidung selbst – und vor allem die Verantwortung dafür – muss beim Menschen bleiben.

Was ich mir konkret vorstellen könnte: Ein Workflow in Kiro, der explizit auf Architekturentscheidungen ausgelegt ist. Nicht "generiere mir ein Design-Dokument", sondern ein iterativer Prozess: Was ist das Problem? Welche Optionen gibt es? Was haben wir verworfen und warum? Das Ergebnis wäre ein ADR – kein Code, sondern eine dokumentierte Entscheidung. Das würde SDD sinnvoll ergänzen, weil es das "Warum" vor dem "Was" verankert.

Aktuell fehlt mir dieser Modus in Kiro vollständig. Der Agent springt zu schnell zum Code.

---

## Frage 10

**Interviewer** Was fehlt dir heute in Kiro am meisten – etwas, das deine Arbeit als Engineer wirklich grundlegend verändern würde?

**Oliver:** Vor allem: kleinere Inkremente. Der Agent tut zu viel auf einmal. Ich brauche keinen vollständigen Spec-Wasserfall – ich brauche einen Gesprächspartner, der mir hilft, das Problem zu durchdenken, und dann einen nächsten kleinen Schritt vorschlägt, den ich wirklich beurteilen kann.

Und dann würde ich mir wünschen, dass klassische Engineering-Werkzeuge zur statischen und dynamischen Analyse besser integriert sind – und damit echte Backpressure entstehen kann. Linter, Analyzer, Testframeworks, Sicherheitsscanner: nicht als nachgelagerter Schritt, sondern als integrierter Teil des Workflows, der den Agenten automatisch bremst, wenn etwas nicht stimmt. Das wäre eine Form von Qualitätssicherung, die nicht vom Menschen abhängt – und die dem Engineer echte Sicherheit gibt, statt einer Illusion davon.

---

## Frage 11

**Interviewer** Wenn du Kiro in einem Jahr betrachtest – was müsste sich verändert haben, damit du sagst: "Das ist jetzt ein unverzichtbares Tool in meinem Engineering-Workflow"?

**Oliver:** Kiro müsste aufgehört haben, ein Spec-Generator zu sein – und stattdessen ein Engineering-Partner geworden sein. Der Unterschied ist grundlegend.

Ein Engineering-Partner hilft mir, besser zu denken: kleinere Schritte, klarere Entscheidungen, echte Nachvollziehbarkeit. Er zwingt mich nicht, eine vollständige Spec abzunicken, bevor er loslegt. Er unterstützt mich dabei, das "Warum" zu dokumentieren – nicht nur das "Was". Und er bremst sich selbst, wenn statische Analyse, Tests oder Linter anzeigen, dass etwas nicht stimmt.

Kurz: Wenn Kiro mir das Gefühl gibt, dass ich als Engineer wirklich die Kontrolle habe – nicht die Illusion davon – dann ist es unverzichtbar.

---

# Voice of Pioneers – Kiro Feedback Interview (English)
*Hypothetical interview between a Kiro Product Manager and Oliver Jägle (Senior Software Engineer, DB)*

---

## Question 1

**Interviewer:** Oliver, you're a Senior Software Engineer and you write regularly about engineering topics. What led you to try Kiro – and what was your first impression?

**Oliver:** What made me curious about Kiro was the combination of agent, workflow model, and IDE in a single product. The fact that there's a minimal workflow at all – Spec-Driven Development as an embedded process model – immediately gave me a sense of control. That's not the case with tools at that time like Cursor or Claude Code: those are powerful assistants at their core, but without any structured process.

What I found particularly interesting was that the specs are executable – they can be directly turned into code within the IDE. That's conceptually strong, because it makes the gap between "what I want" and "what the agent does" visible. But whether that actually works in practice – we'll get to that later, probably.

---

## Question 2

**Interviewer:** Kiro has the concept of Spec-Driven Development – meaning you first structure requirements, design, and tasks before writing any code. How do you see that compared to your normal workflow?

**Oliver:** SDD is a workflow – but not the only one, and in my view not always the right one. It's strongly inspired by the V-model: fully specify first, then implement. That has its place, but it embodies a particular worldview about software development.

What I find much more valuable when working with agents are exploratory or interaction-driven workflows – like Anthropic's Explore-Plan-Code-Commit pattern. The reason: the problem space and solution space are often not clear from the start. They reveal themselves iteratively, through dialogue, through experimentation. If I'm expected to write a complete spec at the beginning, I'm pretending I already fully understand the problem – which is rarely true in practice.

SDD works well for tasks where requirements are genuinely clear upfront. But for exploratory development, for architectural decisions under uncertainty, for prototypes – a heavyweight spec process is more of a hindrance than a help. Kiro should, in my opinion, be clearer about positioning: when is SDD the right approach – and when is it not?

---

## Question 3

**Interviewer:** You've used specs in Kiro – or perhaps deliberately avoided them. What works well, and where did you feel something was missing or felt unnatural?

**Oliver:** Kiro generates truly impressive specs. They're complete, structured, well-written. That's technically strong work.

But that's exactly the problem: the specs overwhelm me. I don't really read them – and I certainly can't check them for completeness. Too much text, too much information at once. What feels like control is in reality an illusion of control. The agent produced a spec, I clicked approve, and responsibility has seemingly been handed over. But nobody actually checked whether the spec solves the right problem.

This is, incidentally, the same problem as with low-code platforms: they quickly produce something that looks good – but the real complexity, namely whether the decisions embedded in it are correct, remains invisible.

---

## Question 4

**Interviewer:** When you think about autonomy – how much the agent decides on its own versus how much you steer – where should Kiro sit on that spectrum, in your view?

**Oliver:** First, a premise I think is important: I assume AWS is targeting Engineers with Kiro – both IDE and CLI. Not citizen developers, not business analysts, but people who build software professionally and bear responsibility for what they deliver. They don't just want to "vibe" – they want to work responsibly.

That has consequences for the autonomy question.

The IDE is an easy entry point for many, not least because VS Code is a familiar base. There, Kiro has enormous potential for low autonomy with high transparency: diffs, visual workflows, formatted documents – these are tools that help the engineer understand and own decisions. But for that to really work, much smaller increments would need to be encouraged. Right now Kiro produces large steps – complete specs, entire implementation waves – which exceeds human review capacity.

The CLI is a different case. It demands more from the engineer – new methodological knowledge, a different way of working. That's reasonable for this audience, but then the tool needs to support them in doing so. Higher autonomy – Human on the Loop – can make sense here, but only if the workflows governing the agent are better integrated. SDD as the sole process isn't enough. What's needed are mentally aligned workflows – exploratory, iterative approaches that help the engineer work through the problem and solution space together with the agent. I've built a plugin for Opencode that supports workflows from codemcp.github.io/workflows – I'd be happy to share that if there's interest.

---

## Question 5

**Interviewer:** In an enterprise context, there's always someone who ultimately bears responsibility – for architecture, for bugs, for compliance. How does an AI agent fit into that accountability structure?

**Oliver:** This is, for me, one of the central unresolved questions for all coding agents – not just Kiro. Thinking in terms of a RACI structure: the agent can be "Responsible" – it executes. But "Accountable" always remains a human. That's not a philosophical question, it's organizational reality. Someone signs off on the architectural decision. Someone explains to the customer why the bug happened. Someone is liable for a compliance violation.

That means: the more autonomously an agent acts, the larger the accountability problem becomes. Who explains afterwards why the agent made that particular decision?

Kiro's SDD actually has an approach to address this – specs document decisions and create traceability. But as I said: if nobody really reads the spec, that only solves the problem on paper.

What I'd envision: an explicit connection between intent – the "why" behind a task – and Architecture Decision Records. The human wouldn't need to approve every step, but at the genuinely important decision points they would need to actively engage, not just confirm. How exactly that should look in the UX, I honestly don't know yet – but I'm convinced that simply clicking "Approve" on a spec isn't enough. It needs a mechanism that encourages genuine engagement, not just clicking through.

---

## Question 6

**Interviewer:** Kiro has mechanisms like hooks, skills, and steering files – ways to configure and customize the agent. Have you worked with these, and what was your impression of this configuration model?

**Oliver:** Yes, I have – and I think the approach is fundamentally right. Steering files, skills, hooks: these are the right building blocks for harness engineering.

The question is whether these building blocks function as a coherent system or as a loose toolbox. My impression: still more the latter.

The individual mechanisms are well designed. The inclusion modes in steering files – `always`, `fileMatch`, `auto`, `manual` – are conceptually exactly right, because they enable an information hierarchy: what's always in context? What's loaded situationally? What's on-demand? That's precisely the principle of progressive disclosure that good harness engineering requires.

But Kiro doesn't explicitly explain how to build this hierarchy. Opinions are missing. Kiro could – and should, in my view – clearly tell the engineer: steering files with `always` are your process. Skills are your conventions, loaded when needed. Documentation comes on-demand via sub-agents or `manual` steering. That would be a genuine mental model helping users structure their harness properly – rather than throwing everything in and hoping it works. More opinionation here would be a strength, not a limitation.

---

## Question 7

**Interviewer:** If you had to explain to a new team member how to work effectively with Kiro – what would you say first? And what's hard to convey?

**Oliver:** Honestly, I'd currently advise against using SDD. Not because the concept is wrong, but because the specs produce so much output that a normal engineer can't meaningfully review them. That creates false confidence – and that's more dangerous than no process at all.

Supervised mode doesn't really save that either. It might help a very meticulous colleague, a review nerd who genuinely reads every diff. But for most people it's the same problem on a smaller scale: too much information, too little genuine engagement.

What I'd tell a new team member instead: start with the chat. Understand how the agent thinks. Use Kiro for well-defined, small tasks. Build a feeling for where you can trust the agent – and where you need to think for yourself. The rest follows from there.

What's hard to convey: that Kiro doesn't take thinking away, it requires thinking. Those who haven't internalized that will be carried in the wrong direction by the speed of the tool.

---

## Question 8

**Interviewer:** Imagine your team needs to introduce Kiro into a running project – with existing code, existing conventions, existing architecture. What would your biggest concerns be?

**Oliver:** The biggest problem is context. A running project has implicit knowledge – decisions made at some point, conventions that developed organically, architectural trade-offs that are the way they are for good reasons. That knowledge isn't in the code, it's in people's heads.

Kiro can only work with what you give it. If I don't make the implicit knowledge explicit, the agent works from a false picture of the project. What I'd want from Kiro: tools that help surface decisions retrospectively. Not fully automated – but with a guided workflow that leads the team step by step through the most important implicit decisions and makes them explicit.

The second concern is about the harness itself: if different team members use different tools – Kiro, Cursor, Claude Code – they potentially have different configurations and therefore different mental models. Kiro unfortunately cooks its own soup here. A harness-agnostic configuration layer that lives in the repo and is tool-independent would be far more valuable for teams.

---

## Question 9

**Interviewer:** Architectural decisions are often complex and have long-term consequences. Can you imagine using Kiro for such decisions – and if so, in what role?

**Oliver:** Yes, but exclusively as a thinking partner – not as a decision-maker. That's an important distinction.

Architectural decisions aren't about writing code. They're about thinking through alternatives, naming trade-offs, estimating consequences. An agent can be enormously helpful here: it can structure options, articulate arguments for and against, surface blind spots. But the decision itself – and above all the responsibility for it – must remain with the human.

What I could concretely envision: a workflow in Kiro explicitly designed for architectural decisions. Not "generate me a design document," but an iterative process: what is the problem? What options exist? What have we ruled out and why? The output would be an ADR – not code, but a documented decision. That would meaningfully complement SDD, because it anchors the "why" before the "what."

Currently that mode is completely missing from Kiro. The agent jumps to code too quickly.

---

## Question 10

**Interviewer:** What do you miss most in Kiro today – something that would genuinely transform your work as an engineer?

**Oliver:** Above all: smaller increments. The agent does too much at once. I don't need a complete spec waterfall – I need a thinking partner who helps me work through the problem, and then proposes a next small step I can actually evaluate.

And then I'd want classical engineering tools for static and dynamic analysis to be better integrated – enabling genuine backpressure. Linters, analyzers, test frameworks, security scanners: not as a downstream step, but as an integrated part of the workflow that automatically slows the agent down when something isn't right. That would be a form of quality assurance that doesn't depend on the human – and that gives the engineer real confidence instead of an illusion of it.

---

## Question 11

**Interviewer:** Looking at Kiro a year from now – what would need to have changed for you to say: "This is now an indispensable tool in my engineering workflow"?

**Oliver:** Kiro would need to have stopped being a spec generator – and become an engineering partner instead. The difference is fundamental.

An engineering partner helps me think better: smaller steps, clearer decisions, genuine traceability. It doesn't force me to click approve on a complete spec before it starts. It helps me document the "why" – not just the "what." And it slows itself down when static analysis, tests, or linters signal that something isn't right.

In short: if Kiro gives me the feeling that I as an engineer genuinely have control – not the illusion of it – then it's indispensable.
