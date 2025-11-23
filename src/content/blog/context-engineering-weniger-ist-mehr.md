---
title: "Nicht nur rein, sondern auch raus: Manchmal ist bei Context-Engineering weniger mehr"
pubDate: 2025-11-22
description: "Context-Engineering bedeutet nicht nur, den richtigen Content in den Kontext zu bringen - sondern auch, unnötigen Noise draußen zu halten. Wie quiet-shell die dritte Säule für saubere Agent-Kontexte bildet."
tags: ['ai', 'development', 'context-engineering', 'mcp', 'quiet-shell', 'tooling']
---

# Nicht nur rein, sondern auch raus: Manchmal ist bei Context-Engineering weniger mehr

> tl;dr: "Context-Engineering hat zwei Seiten: Den richtigen Content einbringen UND unnötigen Content fernhalten. Während responsible-vibe und agentic-knowledge die erste Seite adressieren, hatte ich bisher keine gute Lösung für den zweiten Aspekt – bis vergangene Woche."

Letztens saß ich vor meinem Editor und beobachtete, wie ein AI-Agent fleißig Tests ausführte. Zeile für Zeile scrollte der Output vorbei. Test 1 passed. Test 2 passed. Test 3 passed. Ich wartete. Und wartete. Nach etwa 50 passing tests kam ich mir vor wie jemand, der einen Livestream von trocknender Farbe schaut - nur dass hier nicht meine Zeit verschwendet wurde, sondern wertvoller Context-Window-Space.

Ich unterbrach den Agenten. "Das reicht", dachte ich mir. "Du musst nicht jeden einzelnen passing test aufzählen. Zeig mir einfach, was schiefläuft."

Und dann wurde mir klar: **Ich hatte die ganze Zeit über Context-Engineering nur halb verstanden.**

## Context-Engineering: Die vergessene Hälfte

In meinen letzten Posts habe ich viel über Context-Engineering geschrieben - darüber, wie wichtig es ist, LLMs mit dem richtigen Kontext zu versorgen. [responsible-vibe-mcp](https://github.com/mrsimpson/responsible-vibe-mcp) sorgt für strukturierte Prozesse und phasenspezifischen Kontext. [agentic-knowledge-mcp](https://github.com/mrsimpson/agentic-knowledge-mcp) ermöglicht intelligente Navigation durch Dokumentation statt ineffizientem RAG.

Beide Tools haben etwas gemeinsam: Sie bringen den **richtigen** Content in den Kontext. Process Memory, Requirements, aktuelle Dokumentation - alles wichtig, alles relevant.

Aber ich hatte die andere Hälfte der Gleichung übersehen: **Wie halte ich den falschen Content draußen?**

Denn während wir uns bemühen, Agenten mit wertvollen Informationen zu füttern, überschwemmen wir sie gleichzeitig mit Noise. Tausende Zeilen Test-Output. Endlose Build-Logs. Lint-Warnungen en masse. Alles landet im Context Window. Alles verbraucht Tokens. Alles kostet Geld. Und das Schlimmste: Alles **verdrängt die wirklich relevanten Informationen**.

## Das Problem: Wenn Erfolg zum Rauschen wird

Lass mich konkret werden. Stell dir vor, du arbeitest mit einem AI-Agenten an einem TypeScript-Projekt. Er führt deine Test-Suite aus - 52 Tests mit Vitest. Das Ergebnis:

```
✓ test/auth.test.ts > login > should accept valid credentials
✓ test/auth.test.ts > login > should hash passwords correctly
✓ test/auth.test.ts > logout > should clear session
... (47 weitere passing tests)
✖ test/api.test.ts > POST /users > should validate email format
  Expected: true
  Received: false
✖ test/api.test.ts > PUT /users/:id > should handle concurrent updates
  Error: Timeout exceeded

Test Files: 8 passed, 8 total
Tests: 50 passed, 2 failed, 52 total
Time: 5.2s
```

**Das relevante Information-Budget für den Agenten:**
- Exit Code: 1 (Tests failed)
- 2 failing tests mit Error-Details
- Summary-Zeile

Das sind vielleicht 10-15 Zeilen relevanter Output.

**Was der Agent tatsächlich bekommt:**
Hunderte Zeilen Ausgaben. Jeder einzelne Test. Jeder Setup. Jeder Teardown. Jeder passing test mit ✓ Symbol. File-Namen. Time-Stamps. Coverage-Hinweise. Log-Ausgaben.

**Die Rechnung:**
- 500 Zeilen × ~10 Tokens pro Zeile = ~5.000 Tokens
- Bei Claude 3.5: ~5.000 × €0.003 = 1,5 Cent pro Test-Run
- Bei 20 Test-Runs in einer Session: 30 Cent
- 200 Sessions pro Monat (professioneller Nutzer): 60€ - nur für Test-Output!

Aber die Kosten sind nicht mal das Hauptproblem. Das eigentliche Problem ist: **Die 10 relevanten Zeilen gehen im Noise unter.** Der Agent muss erst durch 490 Zeilen Rauschen waten, um zu den 10 Zeilen zu kommen, die ihm sagen, was er fixen muss.

![Ein Agent, überflutet mit zu viel Information](./images/13-robot-information-overload.png)

## Bisherige Lösungen: Instructions und ihre Grenzen

"Kein Problem", dachte ich mir anfangs. "Ich schreibe einfach eine Instruction."

```
When running tests, pipe output to /dev/null and only show the return code.
Only if the return code indicates failure, run the tests again to see the errors.
```

Clever, oder? Der Agent führt Tests still aus. Wenn der Return Code 0 ist: super, weitermachen. Wenn nicht: nochmal mit Output laufen lassen.

**Das Problem:**
1. **Instructions werden nach einer Zeit ignoriert.** LLMs haben tausende von Kontextzeilen zu verarbeiten. Eine Instruction, die vor 200 Zeilen kam, verliert an Gewicht.
2. **Doppelte Test-Runs.** Wenn Tests fehlschlagen, müssen sie zweimal laufen. Das verdoppelt die Zeit.
3. **Der innere Konflikt des LLMs.** "Sei ruhig" vs. "Zeig mir Fehler" - das LLM muss ständig abwägen. Manchmal wählt es falsch.

Ich erinnere mich an eine Session, in der ich einem Agenten genau diese Instruction gegeben hatte. Er führte Tests aus. Sie failten. Er schaute auf den Return Code. Und dann... führte er die Tests **nochmal** aus. Und nochmal. Drei Mal. Weil er dachte: "Vielleicht war es ein Fluke?"

Nein, war es nicht. Und ich hatte gerade zwei Minuten und ~15.000 Tokens verschwendet.

## Die Erkenntnis: Tools müssen Context-aware sein

An diesem Punkt wurde mir klar: **Instructions sind das falsche Werkzeug.**

Wenn ich einem Agenten sage "Pipe die Ausgabe weg", dann nehme ich ihm die Möglichkeit, intelligent zu reagieren. Wenn ich ihm sage "Zeig mir alles", dann überflute ich ihn mit Information.

Was ich wirklich brauche, ist ein Tool, das versteht:
- **Bei Erfolg:** Zeig mir nur "✓ Tests passed"
- **Bei Fehlern:** Zeig mir die Fehler und die Summary

Nicht der Agent soll entscheiden, was relevant ist. Das Tool soll es wissen.

Das war die Geburtsstunde von [quiet-shell-mcp](https://github.com/mrsimpson/quiet-shell-mcp).

## Die Lösung: Tool-spezifische Filterung

quiet-shell ist ein MCP Server, der Shell-Commands ausführt und dabei intelligent filtert. Die Idee ist simpel:

**Statt dem Agenten zu sagen, was er ignorieren soll, filtert das Tool selbst - basierend auf dem Kommando-Typ.**

### Wie es funktioniert

quiet-shell arbeitet mit **Templates**. Jedes Template definiert:
1. **include_regex**: Welche Zeilen sind wichtig? (z.B. Zeilen mit "FAIL", "ERROR", "✖")
2. **tail_paragraphs**: Wie viele Paragraphen am Ende (meist die Summary) sollen erhalten bleiben?

**Beispiel-Template für Vitest:**
```yaml
vitest:
  description: "Vitest test output - shows only failures and summary"
  include_regex: "(FAIL|ERROR|✖|❯.*failed|Test Files\\s+\\d+|Tests\\s+\\d+)"
  tail_paragraphs: 2
```

**Was passiert:**
1. Agent ruft `execute_command("npm test", template: "vitest")`
2. quiet-shell führt den Command aus
3. **Filtering-Algorithmus:**
   - Parse Output in Paragraphen (Zeilen-Gruppen getrennt durch Leerzeilen)
   - Behalte alle Zeilen, die `include_regex` matchen (Fehler, Failures)
   - Behalte die letzten N Paragraphen (Summary)
   - Kombiniere und dedupliziere
4. Agent bekommt: Exit Code + gefilterter Output

**Vorher:** 500 Zeilen
```
✓ test 1 passed
✓ test 2 passed
... (48 more)
✖ test 51 failed
  Expected: true, Received: false
✖ test 52 failed
  Error: timeout

Tests: 50 passed, 2 failed, 52 total
```

**Nachher:** ~10 Zeilen
```
✖ test 51 failed
  Expected: true, Received: false
✖ test 52 failed
  Error: timeout

Tests: 50 passed, 2 failed, 52 total
Time: 5.2s
```

**Der Unterschied zu Instructions:**
- **Instructions:** "Sei ruhig" (vage, inkonsistent, vom Agent interpretiert)
- **quiet-shell:** "Zeige mir Fehler + Summary" (präzise, vorhersagbar, vom Tool ausgeführt)

### In der Praxis

**Bei erfolgreichen Tests** bleibt der Kontext sauber:

```json
{
  "result": "success",
  "exit_code": 0,
  "output": "Command completed successfully (output suppressed - exit code 0)",
  "template_used": null
}
```

Der Agent bekommt nur die Information, dass alles funktioniert hat - keine hunderte Zeilen mit passing tests.

**Bei Fehlern** sieht er genau, was schiefgelaufen ist:

```json
{
  "result": "failure",
  "exit_code": 1,
  "output": "@codemcp/quiet-shell-core:test:  ❯ src/executor/command-executor.test.ts (12 tests | 1 failed)
  @codemcp/quiet-shell-core:test: ⎯⎯⎯⎯⎯⎯⎯ Failed Tests 1 ⎯⎯⎯⎯⎯⎯⎯
  @codemcp/quiet-shell-core:test:  FAIL  src/executor/command-executor.test.ts > executeCommand > will fail
  @codemcp/quiet-shell-core:test:  Test Files  1 failed | 6 passed (7)
  @codemcp/quiet-shell-core:test:       Tests  1 failed | 72 passed (73)
   Tasks:    1 successful, 3 total
  Cached:    1 cached, 3 total
    Time:    1.696s",
  "template_used": "vitest"
}
```

Nur die fehlgeschlagenen Tests, die Summary - und nichts mehr. Von 73 Tests werden nur die relevanten Zeilen übermittelt.

### Built-in Templates

quiet-shell kommt mit Templates für meine häufigsten Tools:
- **tsc**: TypeScript Compiler - zeigt Type Errors + Summary
- **vitest**: Test Framework - zeigt Failed Tests + Summary
- **maven-build**: Maven Build - zeigt Build Errors + Summary
- **maven-test**: Maven Tests - zeigt Test Failures + Summary

Und das Beste: **Custom Templates sind möglich.** Einfach eine `.quiet-shell/config.yaml` im Projekt ablegen:

```yaml
templates:
  jest:
    description: "Jest test output"
    include_regex: "(FAIL|●|✕)"
    tail_paragraphs: 2
```

Die Konfiguration wird versioniert, ins Repo committed und vom ganzen Team genutzt.

## Das größere Bild: Die drei Säulen des Context-Engineering

Jetzt, mit quiet-shell, ist das Bild komplett. Context-Engineering hat drei Säulen:

### 1. **responsible-vibe: Prozess-Struktur**
→ Den richtigen Content zur richtigen Zeit  
→ Phasenspezifische Instructions und Process Memory  
→ "Was braucht der Agent JETZT?"

### 2. **agentic-knowledge: Intelligente Navigation**
→ Das richtige Wissen finden  
→ Navigation durch Dokumentation statt RAG  
→ "Wo findet der Agent die Antworten?"

### 3. **quiet-shell: Output-Filterung**
→ Unnötigen Noise vermeiden  
→ Tool-spezifische Filterung von Command-Output  
→ "Was braucht der Agent NICHT?"

**Zusammen bilden sie ein Ökosystem für saubere, effiziente Agent-Kontexte.**

responsible-vibe und agentic-knowledge bringen den richtigen Content **rein**.
quiet-shell hält den falschen Content **raus**.

Beide Aspekte sind gleich wichtig. Ein Context Window ist wie ein gut gepackter Koffer für eine Reise: Du willst alles Wichtige dabeihaben - aber genauso wichtig ist, was du NICHT mitnimmst.

## Fazit: Context-Engineering ist Noise-Cancelling

Die Erkenntnis, die ich aus dieser Reise mitgenommen habe: **Context-Engineering bedeutet nicht nur, den richtigen Content bereitzustellen. Es bedeutet genauso, den falschen Content zu eliminieren.**

LLMs werden immer besser. Context Windows werden größer. Aber das ist kein Freifahrtschein für Verschwendung. Jedes Token, das für Noise draufgeht, ist ein Token weniger für Signal.

quiet-shell ist meine Antwort auf dieses Problem - ein Tool, das Context-aware ist, damit der Agent es nicht sein muss.

**Signal-to-Noise Ratio** ist nicht nur ein technisches Konzept aus der Signalverarbeitung. Es ist die Essenz von gutem Context-Engineering.

---

**Neugierig geworden?**  
[quiet-shell auf GitHub](https://github.com/mrsimpson/quiet-shell-mcp)

Installiere es, probiere es aus, und sag mir, ob auch du weniger Noise in deinem Context haben willst. Ich freue mich auf Feedback und Erfahrungsberichte!

Welche Tools nutzt ihr, um eure Agent-Kontexte sauber zu halten? Ich bin gespannt auf den Austausch! 🎯
