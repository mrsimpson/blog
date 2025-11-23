# Entwicklungsplan: blog (blogpost-quiet-shell branch)

*Erstellt am 2025-11-22 mit Vibe Feature MCP*
*Workflow: [posts](https://mrsimpson.github.io/responsible-vibe-mcp/workflows/posts)*

## Ziel
Blogpost über Kontextverschmutzung bei agentischer Entwicklung und die Lösung durch quiet-shell

## Discovery
### Aufgaben
- [x] Format festlegen: 1500 Wörter technischer Artikel
- [x] Zielgruppe definieren: Entwickler, die mit AI-Agenten arbeiten
- [x] Kernbotschaft formulieren: Context-Engineering hat zwei Aspekte - richtigen Content einbringen UND unnötigen Content fernhalten
- [x] Positionierung: quiet-shell als dritte Säule neben responsible-vibe und agentic-knowledge
- [x] Recherche zu existierendem Content: Code-Agenten haben Instructions, aber keine tool-spezifische Filterung
- [x] Persönliche Motivation artikulieren: Wunsch, sowohl ruhige Ausgaben als auch Fehlerdetails zu sehen
- [x] Referenzmaterialien sammeln: quiet-shell README, builtin templates (tsc, vitest, maven), Requirements Doc

### Abgeschlossen
- [x] Entwicklungsplan erstellt
- [x] Format und Zielgruppe definiert
- [x] Kernbotschaft und Positionierung geklärt
- [x] quiet-shell Repository analysiert
- [x] Discovery-Phase vollständig abgeschlossen

## Story

### Phase Eintrittskriterien:
- [x] Thema und Format des Blogposts sind klar definiert
- [x] Recherche zu existierendem Content ist durchgeführt
- [x] Zielgruppe und Plattformen sind identifiziert
- [x] Persönliche Motivation und einzigartiger Blickwinkel sind artikuliert
- [x] Referenzmaterialien sind gesammelt

### Aufgaben
- [x] Titel festlegen: "Nicht nur rein, sondern auch raus: Manchmal ist bei Context-Engineering weniger mehr"
- [x] Narrative Struktur entwickeln (Anfang, Mitte, Ende)
- [x] Zentrale Metapher definieren: Signal-to-Noise Ratio / Noise-Cancelling für Kontext
- [x] Konkretes Durchgangsbeispiel planen: 2000 Zeilen → 10 Zeilen mit quiet-shell
- [x] Content-Scope abgrenzen: Fokus auf Konzept, nicht auf Installation/Tutorial
- [x] Persönliche Geschichte einplanen: Der Konflikt zwischen "ruhig sein" und "Fehler zeigen"

### Story-Outline (1500 Wörter)

**ANFANG: Das Problem erkennen (300 Wörter)**
- Hook: Persönliche Szene - Unterbrechen eines Agenten bei endlosen Test-Ausgaben
- Erkenntnis: Context-Engineering ist nicht nur "richtigen Content rein", sondern auch "falschen Content raus"
- Verbindung: responsible-vibe und agentic-knowledge lösen den "rein"-Teil
- Transition: Aber was ist mit all dem Noise?

**MITTE: Das Problem vertiefen (600 Wörter)**
- Konkretes Beispiel: 2000 Zeilen für 2 failing tests unter 50 passing
  - Token-Verschwendung
  - Relevante Infos verdrängt
  - Steigende Kosten
- Bisherige Lösungen und Grenzen:
  - Instructions: "Pipe Ausgaben, zeige nur return code"
  - Problem: Werden ignoriert ODER führen zu doppelten Test-Runs
  - LLM-Dilemma: "ruhig sein" vs. "Fehler verstehen"
- Einsicht: Tools müssen Context-aware sein, nicht Instructions

**MITTELTEIL 2: Die Lösung (400 Wörter)**
- quiet-shell Konzept: Tool-spezifische Filterung
- Funktionsweise:
  - Templates (tsc, vitest, maven)
  - Regex für wichtige Zeilen + tail paragraphs für Summary
  - Beispiel-Transformation: 2000 → 20 Zeilen
- Der Unterschied:
  - Instructions: "Sei ruhig" (vage, inkonsistent)
  - quiet-shell: "Zeige Fehler + Summary" (präzise, vorhersagbar)

**ENDE: Das größere Bild (200 Wörter)**
- Die drei Säulen des Context-Engineering:
  1. responsible-vibe: Prozess-Struktur (richtiger Content zur richtigen Zeit)
  2. agentic-knowledge: Navigation statt RAG (richtiges Wissen finden)
  3. quiet-shell: Output-Filterung (unnötigen Noise vermeiden)
- Kernbotschaft: Context-Engineering bedeutet beides - rein UND raus
- Call-to-Action: Link zu quiet-shell, Einladung zum Ausprobieren

### Abgeschlossen
- [x] Titel festgelegt
- [x] Narrative Struktur mit klarem Anfang, Mitte, Ende
- [x] Zentrale Metaphern identifiziert
- [x] Content-Scope definiert
- [x] Story-Phase abgeschlossen

## Writing

### Phase Eintrittskriterien:
- [x] Detaillierte Story-Outline mit Anfang, Mitte, Ende ist erstellt
- [x] Kernbotschaften und einprägsame Metaphern/Beispiele sind identifiziert
- [x] Content-Scope ist klar abgegrenzt
- [x] Narrative Struktur passt zum gewählten Format
- [x] Plattform-Anpassungen sind geplant

### Aufgaben
- [x] Anfang schreiben: Hook und Problem-Erkenntnis (300 Wörter)
- [x] Mitte Teil 1 schreiben: Problem vertiefen mit konkreten Beispielen (600 Wörter)
- [x] Mitte Teil 2 schreiben: Die Lösung quiet-shell (400 Wörter)
- [x] Ende schreiben: Das größere Bild und CTA (200 Wörter)
- [x] Durchgang für Konsistenz und Flow
- [x] Wortanzahl prüfen: 1472 Wörter (Ziel: ~1500) ✓

### Abgeschlossen
- [x] Vollständiger Blogpost erstellt: `/Users/oliverjaegle/projects/privat/blog/src/content/blog/context-engineering-weniger-ist-mehr.md`
- [x] Content folgt der Story-Outline
- [x] Persönlicher, konversationeller Stil beibehalten
- [x] Konkrete Beispiele eingebaut (2000 → 10 Zeilen Transformation)
- [x] Metaphern verwendet (Signal-to-Noise, Noise-Cancelling, Koffer-Analogie)
- [x] Drei Säulen des Context-Engineering dargestellt
- [x] Call-to-Action mit GitHub Link
- [x] Wortanzahl im Zielbereich (1472 Wörter)

## Illustration

### Phase Eintrittskriterien:
- [x] Content ist vollständig geschrieben und folgt der Story-Outline
- [x] Narrative Flow und persönliche Stimme sind konsistent
- [x] Content-Länge entspricht dem gewählten Format
- [x] Konkrete Beispiele und Metaphern sind eingebaut
- [x] Klare Abschnittsstruktur ist vorhanden

### Aufgaben
- [x] Strategische Positionen für Visuals identifiziert
- [x] Visual-Ideen entwickelt für jede Position
- [x] Entschieden: Wiederverwendung + Code-Beispiele
- [x] Image für überladenen Agenten wiederverwenden (13-robot-information-overload.png)
- [x] JSON-Beispiele für success/failure formatiert und integriert
- [x] Visuals in den Blogpost integriert
- [x] Alt-Texte für Barrierefreiheit hinzugefügt

### Visual-Plan (Finalisiert)

**1. Überladener Agent (Wiederverwendung)**
- ✅ Position: Nach "Das Problem: Wenn Erfolg zum Rauschen wird"
- ✅ File: `13-robot-information-overload.png` (existing)
- ✅ Alt-Text: "Ein Agent, überflutet mit zu viel Information"
- Zeigt: Agent überflutet mit Information

**2. JSON Success Response (Code-Beispiel)**
- ✅ Position: Im "Die Lösung" Abschnitt, neuer Unterabschnitt "In der Praxis"
- ✅ Zeigt: quiet-shell success response (output suppressed)
- Gut formatiert als JSON code block

**3. JSON Failure Response (Code-Beispiel)**
- ✅ Position: Direkt nach erfolgreichem Test
- ✅ Zeigt: quiet-shell failure response mit gefiltertem Output (vitest template)
- Gut formatiert als JSON code block mit realem Beispiel

### Abgeschlossen
- [x] Strategische Positionen identifiziert
- [x] Visual-Konzepte entwickelt
- [x] Wiederverwendung vs. neu definiert
- [x] Überladener Agent Bild integriert
- [x] Code-Beispiele formatiert und eingebaut
- [x] Alt-Texte hinzugefügt
- [x] Illustration-Phase abgeschlossen

## Distribution

### Phase Eintrittskriterien:
- [x] Visuelle Elemente sind erstellt und strategisch platziert
- [x] Visuelle Dichte passt zum Format
- [x] Visuals unterstützen und verstärken den geschriebenen Content
- [x] Barrierefreiheit und Plattform-Kompatibilität sind berücksichtigt
- [x] Professionelle und konsistente visuelle Erscheinung

### Aufgaben
- [x] SEO-Optimierung geprüft: Titel, Description, Tags
- [x] Final Quality Review durchgeführt
- [x] Blog-Post committed (dd7e89c)
- [ ] LinkedIn-Post vorbereiten und publishen
- [ ] Optional: Image-Dateien committen (.crowd/, screenshots)

### Abgeschlossen
- [x] SEO Metadata analysiert und als gut befunden
- [x] Blogpost committed mit aussagekräftiger Message
- [x] Commit: "Add blog post: Context-Engineering output filtering with quiet-shell"

## Wichtige Entscheidungen

### Titel
**"Nicht nur rein, sondern auch raus: Manchmal ist bei Context-Engineering weniger mehr"**
- Spiegelt die Kernbotschaft direkt im Titel
- "Nicht nur... sondern auch" zeigt die Dualität
- "Manchmal ist weniger mehr" - einprägsam und paradox

### Format & Umfang
- **1500 Wörter** technischer Artikel (mittlere Tiefe)
- Ausreichend für technische Details, aber nicht zu umfangreich

### Zielgruppe
- Entwickler, die mit AI-Agenten arbeiten
- Bereits Vertrautheit mit Themen wie Context-Engineering, MCP, agentische Entwicklung

### Kernbotschaft
- **Context-Engineering hat zwei Aspekte:**
  1. Dafür sorgen, dass das Richtige in den Kontext kommt (responsible-vibe, agentic-knowledge)
  2. Dafür sorgen, dass Unnötiges draußen bleibt (quiet-shell) ← **NEU**

### Narrative Positionierung
- Drei Tools als zusammenhängendes Ökosystem (aber nicht sperrig formuliert)
- quiet-shell als "dritte Säule" oder "fehlendes Puzzleteil"
- Fokus: Das Problem der Kontextverschmutzung durch Build/Test/Lint-Ausgaben

### Zentrale Metapher
- **Signal-to-Noise Ratio**: Code-Agenten ertrinken im Noise
- **Noise-Cancelling für Kontext**: quiet-shell als technische Lösung

### Stil & Ton
- Persönlich und konversationell (wie in bisherigen Posts)
- Technisch fundiert, aber zugänglich
- Konkrete Beispiele und Metaphern
- Ehrlich über Probleme und Learnings

## Notizen

### quiet-shell Technische Details
- **Problem**: Test/Build/Lint-Ausgaben mit hunderten Zeilen verschmutzen den Kontext
- **Beispiel**: 50 passing + 2 failing tests = 500 Zeilen, aber nur ~10 Zeilen sind relevant
- **Lösung**: Intelligent filtering mit Regex + tail paragraphs
- **Built-in Templates**: tsc, vitest, maven-build, maven-test
- **Konfiguration**: `.quiet-shell/config.yaml` für custom templates

### Persönliche Geschichte
- Problem betrifft jeden, der agentisch entwickelt
- Bisheriger Ansatz: Instructions zum Pipen von Ausgaben
- Problem mit Instructions: Werden nach Zeit ignoriert oder führen zu doppelten Test-Runs
- Aha-Moment: "Ich will bei Tests SEHEN, was fehlschlägt, aber nicht die 50 passing tests"
- Lösung: Tool-spezifische Filterung statt generische Instructions

### Konkurrierende Ansätze
- Einige Code-Agenten haben Instructions zum Reduzieren von Ausgaben
- Aber: Diese filtern nicht tool-spezifisch
- quiet-shell: Filterung erfolgt im Tool selbst, nicht durch Instructions

### Distribution
- Primär: LinkedIn
- Sekundär: Blog (astro site)

### User Anpassungen
- Zahlen angepasst: 500 statt 2000 Zeilen (realistischer)
- Kosten-Rechnung aktualisiert: 30 Cent pro Session, 60€ pro Monat
- tl;dr angepasst: "bis vergangene Woche" - persönlicher
- GitHub Link korrigiert: quiet-shell-mcp statt mcp-server/quiet-shell
- "meine häufigsten Tools" statt "die häufigsten Tools" - persönlicher

---
*This plan is maintained by the LLM. Tool responses provide guidance on which section to focus on and what tasks to work on.*
