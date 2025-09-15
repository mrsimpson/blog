# Development Plan: blog (main branch)

*Generated on 2025-08-24 by Vibe Feature MCP*
*Workflow: [greenfield](https://mrsimpson.github.io/responsible-vibe-mcp/workflows/greenfield)*

## Goal
Erstellung eines professionellen Online-Lebenslaufs für einen Senior Software-Entwickler/Architekten mit 30+ Jahren Erfahrung. **Ziel: Sichtbarmachung von Fähigkeiten/Qualifikationen für interessante interne Aufgaben** - kein Jobwechsel geplant. Fokus auf technische Kompetenz und unternehmerische Erfahrung aus internen Ventures. Mit Export-Funktionalität und potentieller CLI-Integration.

## Ideation
### Tasks
- [x] Berufliche Ziele und Zielgruppe des Lebenslaufs klären
- [x] Persönliche Informationen und Karriereverlauf erfassen
- [x] Gewünschtes Format und Design-Präferenzen definieren
- [x] 2011er Lebenslauf als Referenz analysieren
- [x] Anforderungsdokument erstellen

### Completed
- [x] Created development plan file

## Architecture

### Phase Entrance Criteria:
- [x] Die Anforderungen wurden gründlich definiert
- [x] Zielgruppe und Zweck des Lebenslaufs sind klar  
- [x] Design-Präferenzen und Format sind dokumentiert

### Tasks
- [x] Tech-Stack für Web-Terminal Interface evaluieren
- [x] Terminal-Library und Framework-Optionen bewerten  
- [x] Hosting- und Deployment-Strategien analysieren
- [x] Performance- und Accessibility-Anforderungen definieren
- [x] Export-Funktionalitäten (PDF, JSON, MD) architektonisch planen
- [x] Responsive Design und Mobile-Optimierung konzeptionieren
- [x] Astro-Integration mit bestehender Site analysieren
- [x] Architecture-Dokument erstellen (im Plan integriert)

### Completed
- [x] Tech-Stack gewählt: Astro + Vue.js + xterm.js
- [x] Hosting-Strategie: GitHub Pages (bestehend beibehalten)
- [x] Mobile-Strategie: Card-Navigation statt Terminal
- [x] Integration-Strategie: Nahtlos in bestehende Astro-Site
- [x] Performance-Ziele definiert (< 2s Load, < 100ms Response)

## Plan

### Phase Entrance Criteria:
- [x] Technische Entscheidungen (Format, Tools, Template) sind getroffen
- [x] Architektur des Lebenslaufs ist definiert
- [x] Alternativen wurden evaluiert und dokumentiert

### Tasks
- [x] Implementierungsreihenfolge und Dependencies definieren
- [x] GitHub Pages Deployment-Pipeline planen
- [x] Component-Architektur detaillieren
- [x] Data-Structure für Lernreise finalisieren
- [x] Testing-Strategie entwickeln
- [x] Code-Tasks für Implementation strukturieren
- [x] Deployment-Strategie für CV-First korrigiert

### Completed
*None yet*

## Code

### Phase Entrance Criteria:
- [x] Detaillierter Implementierungsplan liegt vor
- [x] Aufgaben sind in logische Schritte unterteilt
- [x] Abhängigkeiten sind identifiziert

### Tasks (Implementierungsreihenfolge)

**Phase 0: Deployment Foundation (Priority: Critical)**
- [ ] GitHub Actions Workflow erstellen (`.github/workflows/deploy.yml`)
- [ ] Astro Config für GitHub Pages anpassen (site: `mrsimpson.github.io`, base: `/`)
- [ ] Package.json Build-Scripts erweitern
- [ ] Initial Deployment testen - **CV als Hauptseite**
- [ ] Repository Pages aktivieren (mrsimpson.github.io/cv → Root-Domain)

**Phase 1: Development Setup (2-3h)**
- [ ] Vue.js Integration in astro.config.mjs aktivieren
- [ ] Dependencies installieren (Vue, xterm.js, TypeScript)
- [ ] CV-Route erstellen (`src/pages/cv.astro`)
- [ ] Navigation um "CV" Link erweitern (`Layout.astro`)

**Phase 2: Terminal Infrastructure (4-6h)**
- [ ] Terminal Vue Component erstellen (`src/components/Terminal.vue`)
- [ ] xterm.js Integration mit client:load Hydration
- [ ] Command Parser System implementieren
- [ ] CLI-Command Struktur (`cv --lernreise`, `cv --skills`) aufbauen

**Phase 3: Content Integration (4-5h)**
- [ ] Lernreise-JSON Datenstruktur in `/src/data/` integrieren
- [ ] Timeline-Renderer für Lernphasen entwickeln
- [ ] Skills-Filter und Context-Views implementieren
- [ ] Growth-Milestones interaktiv darstellen

**Phase 4: Export Functionality (3-4h)**
- [ ] PDF-Export mit jsPDF + html2canvas implementieren
- [ ] JSON-Export (native Datenstruktur) bereitstellen
- [ ] Markdown-Export via Template-Engine entwickeln
- [ ] Export-Commands in CLI integrieren (`cv --export --format=pdf`)

**Phase 5: Mobile Optimization (3-4h)**
- [ ] Responsive Detection implementieren (Desktop vs. Mobile)
- [ ] Card-Navigation Component für Mobile erstellen
- [ ] Touch-optimierte Alternative zur Terminal-Ansicht
- [ ] Smooth Transition zwischen Desktop/Mobile Views

**Phase 6: Styling & Performance (2-3h)**
- [ ] Terminal-Styling konsistent mit Blog-Theme gestalten
- [ ] Performance-Optimierung (Code-Splitting, Lazy Loading)
- [ ] Dark/Light Theme Toggle implementieren
- [ ] WCAG 2.1 Accessibility (Keyboard Navigation, Screen Reader)

**Phase 7: Testing & Polish (2-3h)**
- [ ] Responsive Testing auf verschiedenen Devices
- [ ] Performance-Tests (< 2s Load, < 100ms Terminal Response)
- [ ] Cross-Browser Kompatibilität validieren
- [ ] SEO-Optimierung (Meta-Tags, Structured Data)

### Completed
*None yet*

## Finalize

### Phase Entrance Criteria:
- [ ] Kern-Implementation ist abgeschlossen
- [ ] Lebenslauf ist funktional und vollständig
- [ ] Alle Anforderungen sind erfüllt

### Tasks
- [ ] *To be added when this phase becomes active*

### Completed
*None yet*

## Key Decisions
- **Zielgruppe**: Interne Stakeholder für interessante technische Projekte (kein Jobwechsel)
- **Fokus**: Technische Expertise + unternehmerische Kompetenz aus internen Ventures
- **Format**: Online-Version als Hauptformat mit Export-Möglichkeiten
- **Design**: **Developer Portfolio Style + Web-Terminal Interface**
  - Moderne, interaktive Website (Option 1)
  - Web-Terminal/Console-ähnliche Optik als Hauptinterface (Option 3)
  - CLI-Commands als Navigation (`cv --experience`, `cv --ventures`)
  - **Business Impact**: Weniger prominent - ist bei DB/Enterprise normal
  - Technologie-Filter und interaktive Features

## Gesammelte Informationen

### Grunddaten (Korrigiert)
- **2011er Lebenslauf** als Referenz vorhanden (erfolgreiche Bewerbung)
- **Seit 2012 bei DB Systel** → heute 12+ Jahre
- Ca. 30+ Jahre Gesamtberufserfahrung
- **Zielgruppe**: Interne Stakeholder für interessante technische Aufgaben

### Karrierechronologie seit 2012

**2012-heute: DB Systel GmbH (IT-Dienstleister Deutsche Bahn, ~7000 MA)**

**2014-2019: Lead Architekt SAP-Eigenentwicklung**
- Internationale Projektleitung (Deutschland/Indien, bis 12 Entwickler)
- SAP ABAP Entwicklung from Scratch für Gleisoberbau-Disposition
- 80 Mio € Jahresumsatz über entwickeltes System
- Einführung agiler Prozesse und iteratives Projektvorgehen

**2019-2024: Internes Venture "Conversational AI"**
- Venture-Gründung: Wissen aus Gruppenchats extrahieren
- Full-Stack Entwicklung: MongoDB, Meteor, Blaze Templating, JavaScript
- Open Source Contributions zu Rocket.Chat (weltweit relevant)
- Vollspektrum: Produktgestaltung, Marktanalyse, Architektur, Marketing, Finanzen, Partner-Management
- Plattform: OpenShift

**2022-2024: Internes Venture "Mikromobilität für Kommunen"**
- Datenplattform für Städte/Gemeinden (Roller, Fahrräder, Mopeds)
- Architektur & Entwicklung: TypeScript, Node.js, Java (Spring Boot), Vue.js
- Product Owner: Taktische Produktentwicklung
- Event-Stream-Processing: Apache Flink, Kafka
- Plattform: AWS

**2024-heute: Event-Stream-Processing & GenAI**
- PoCs: Fahrzeugortung, Geospatial-Formate, Geofencing mit Flink
- Contribution zu bolt.diy (bolt.new Open Source Variante)
- Wissenstransfer GenAI-Tools und -Methoden

### Zusätzliche Expertise & Aktivitäten

**SAP Training & Speaking (2017-2018)**
- SAP BOPF-Experte und Trainer für SAP (verschiedene Unternehmen)
- Speaker SAP TechEd 2017
- Speaker DSAG (Deutsche SAP Anwendergruppe) 2018

**Open Source Contributions**
- Rocket.Chat: Features und Bugfixes
- bolt.diy: Architektur und LLM-Unabhängigkeit

**Technisches Profil**
- **Selbstbezeichnung**: "Fullest Stack Developer" mit Event-Stream-Processing Spezialisierung
- **Flink-Expertise**: Java Streaming API, State Management, Timers, Checkpoints
- **Sprachen**: Deutsch, Englisch, Französisch
- **Philosophie**: Kompetenz über Zertifizierungen

**CLI-Konzept Inspiration**
- `--skills --tech-stack` Filterung als möglicher Ansatz
- Klassifizierung nach Bereichen

### 2011er Lebenslauf Analyse

**Bewährte Struktur:**
- **Deckblatt**: Professionelles Bewerbungsfoto, klare Positionierung ("Experte technische Architektur JEE")
- **Chronologischer Aufbau**: Berufserfahrung → Studium → Sonstige Tätigkeiten → Schule → Kenntnisse
- **Detaillierte Projektbeschreibungen**: Konkrete Aufgaben und Technologien pro Position
- **Technische Skills kategorisiert**: Programmierung/Modellierung mit Kenntnisstand-Bewertung
- **Sprachen explizit**: Englisch (fließend), Französisch (sehr gut)

**2011 vs. Heute - Entwicklung:**
- **Damals**: SAP-Fokus (ABAP OO, ByD Financials), bis Senior Developer
- **Heute**: "Fullest Stack" + Event-Stream-Processing, Venture-Gründer, Open Source Contributor
- **Kontinuität**: SAP-Expertise bleibt relevant, internationale Teams bereits 2004-2007
- **Sprung**: Von Entwickler zu Architekt/Venture-Builder mit 80M€ Business Impact

**Übertragbare Elemente:**
- Klare technische Positionierung im Titel
- Projekt-fokussierte Beschreibungen mit Business Context
- Kategorisierte Skill-Darstellung
- Professionelle, sachliche Darstellung

## Vollständige Anforderungsspezifikation

### Kernfunktionalitäten

**1. Web-Terminal Interface**
- Terminal/Console-ähnliche Hauptoberfläche
- CLI-Command Navigation: `cv --experience`, `cv --ventures`, `cv --skills`, `cv --about`
- Tab-Completion und Command-History
- Typewriter-Effekt für Ausgaben
- Dark/Light Theme Toggle

**2. Content-Bereiche (Lernorientiert strukturiert)**
- **Learning**: Skill-Entwicklung Timeline - "Was ich wann wie gelernt habe"
- **Context**: Projekt/Venture-Kontexte als Lernumgebungen
- **Skills**: Kategorisierte Kompetenzen mit Lernkontext und -zeitraum
- **Growth**: Entwicklungsphasen und Wendepunkte (ABAP → Full Stack → Event-Processing)
- **Sharing**: Wissenstransfer (Speaking, Open Source, Mentoring)
- **About**: Lernphilosophie, Sprachen, kontinuierliche Weiterbildung

**Beispiel-Darstellung:**
```
cv --learning --skill="event-stream-processing"
> Kontext: Mikromobilität-Venture 2022-2024
> Challenge: Real-time Geodaten von Mobility-Providern verarbeiten
> Gelernt: Apache Flink, Kafka, stateful Stream Processing
> Angewendet: Fahrzeugortung, Geofencing, Geospatial-Processing
> Vertieft: Java Streaming API, State Management, Checkpointing
```

**3. Export-Funktionalitäten**
- PDF-Export (klassisches CV-Format)
- JSON-Export (maschinenlesbar)
- Markdown-Export
- CLI-Command: `cv --export --format=pdf`

**4. Technische Features**
- Responsive Design (Mobile-First)
- Fast Loading / Performance
- SEO-Optimiert
- Analytics (optional)

### Positionierung & Tonalität

**Titel**: "Fullest Stack Developer | Event-Stream-Processing | Venture Builder"

**🎯 KERN-ANFORDERUNG: Lernorientierte Darstellung**
- **NICHT**: "Was ich gemacht habe" (rückwärtsgerichtet)
- **SONDERN**: "Was ich wann und wie gelernt habe" (kompetenzorientiert)
- **Fokus**: Lernkontexte, Skill-Entwicklung, Wissenstransfer
- **Beispiel**: "Event-Stream-Processing mit Flink gelernt durch Mikromobilität-Projekt 2022-2024"

**Tonalität**: 
- Technisch kompetent aber zugänglich
- Selbstbewusst ohne arrogant
- Fokus auf Kompetenz über Zertifizierungen
- Enterprise-Erfahrung natürlich einweben (nicht übertreiben)
- **Lernende Haltung** als Stärke zeigen

**Key Messages**:
1. Kontinuierlicher Lerner: Von ABAP zu Event-Stream-Processing
2. Praxisnahe Skill-Entwicklung durch konkrete Projektherausforderungen  
3. Wissenstransfer: Community Engagement + interner Mentor
4. Venture-Building als Lernumfeld für Business + Tech Skills

### Technische Anforderungen

**Performance**: < 2s Ladezeit, Terminal-Responsiveness
**Compatibility**: Moderne Browser (Chrome, Firefox, Safari, Edge)
**Accessibility**: Keyboard-Navigation, Screen-Reader-Support
**Mobile**: Responsive, Touch-optimiert für Terminal-Interface

## Strukturierte Lernreise (Rendering-Ready Format)

### Lernphasen & Kontexte

```json
{
  "lernreise": {
    "phasen": [
      {
        "zeitraum": "2001-2004",
        "kontext": "Studium BA Mannheim + IBM Deutschland",
        "umgebung": "Duales Studium in verschiedensten Projektumgebungen",
        "gelernt": {
          "kernkompetenz": "Schnelle Einarbeitung in unterschiedlichste Kontexte und Technologien",
          "technische_skills": ["Java", "XML", "SQL", "OOP Patterns", "Client-Server Architecture"],
          "methoden": ["ERP Integration", "Mobile Entwicklung", "Lotus Notes Development"],
          "soft_skills": ["Zeitnah Fortschritte zeigen", "Präsentationstechniken", "Requirements Engineering"],
          "projekte": ["Mobile Client-Server App", "XML-ERP Interface", "Lotus Notes Wissensdatenbank"]
        },
        "wachstums_erkenntnis": "Grundlage: Anpassungsfähigkeit und schnelle Lernkurve als Kernkompetenz"
      },
      {
        "zeitraum": "2004-2009", 
        "kontext": "SAP AG - Quality Specialist → Developer",
        "umgebung": "Enterprise Software Development mit internationalen Teams",
        "gelernt": {
          "kernkompetenz": "Hinter jedem Prozess steckt eine Idee - die Intention ist entscheidend",
          "technische_skills": ["ABAP OO", "SAP Business Object Model", "Test Automation"],
          "methoden": ["SAP Entwicklungsprozess", "Quality Assurance", "Design Reviews"],
          "soft_skills": ["Vermittlung zwischen unterschiedlichen Perspektiven", "Internationale Teamkoordination"],
          "leadership": ["Koordination indisches Entwicklungsteam"]
        },
        "wachstums_erkenntnis": "Transition: Von Prozessverständnis zu Entwicklungsfokus + Perspektivenwechsel"
      },
      {
        "zeitraum": "2009-2012",
        "kontext": "SAP AG - Senior Developer ByD Financials", 
        "umgebung": "Cloud-First Enterprise Platform",
        "gelernt": {
          "kernkompetenz": "Strukturiertes Vorgehen und Arbeiten auf hohem Abstraktionsniveau",
          "technische_skills": ["Metadata Architecture", "Business Configuration", "Fast Search", "Office Integration"],
          "methoden": ["Model-Based Development", "XML/Webservice APIs", "Enterprise Reporting"],
          "soft_skills": ["Architektur-Tradeoffs verstehen", "In großen Organisationen Gründe für alle Sichten finden"],
          "expertise": ["ByD Business Object Model", "Zentrale Architekturkonzepte"]
        },
        "wachstums_erkenntnis": "Spezialisierung: Architektur-Thinking + Organisationsverständnis"
      },
      {
        "zeitraum": "2012-2019",
        "kontext": "DB Systel - Lead Architekt SAP Eigenentwicklung",
        "umgebung": "Railway Industry + Internationale Teams (Deutschland/Indien)",
        "gelernt": {
          "kernkompetenz": "Mit Menschen sprechen, um zu verstehen, was sie wirklich im Geschäft tun ('there's nothing more illogical than business logic')",
          "technische_skills": ["ABAP from Scratch", "Large-Scale System Design", "Enterprise Architektur"],
          "methoden": ["Erstes Global Sourcing SAP-Projekt", "Erstes agiles Scrum-Projekt", "Prozessgestaltung"],
          "handwerk": ["Enterprise Anwendung from Scratch aufbauen"],
          "leadership": ["12 Entwickler führen", "Cross-Cultural Management", "Agile Transformation"],
          "business_impact": ["80M€ Jahresumsatz Systemverantwortung", "Gleisoberbau-Disposition"],
          "domäne": ["Bahninfrastruktur", "Material-Disposition", "Supply Chain"]
        },
        "wachstums_erkenntnis": "Leadership: Technische Architektur + Geschäftsverständnis + Menschenführung"
      },
      {
        "zeitraum": "2017-2018",
        "kontext": "SAP BOPF-Experte & Trainer + Speaking",
        "umgebung": "Knowledge Sharing Community + Content Creation",
        "gelernt": {
          "kernkompetenz": "Didaktische Fähigkeiten und interaktive Content-Erstellung",
          "technische_skills": ["BOPF Expertise", "Advanced Training Techniques"],
          "methoden": ["Conference Speaking", "Technical Training Development", "Blog-Serie statt Buch"],
          "community": ["SAP TechEd Präsentation", "DSAG Community Engagement"],
          "content": ["Interaktion mit Lesenden bringt bessere Ergebnisse als alles vorab zu beschreiben"],
          "anerkennung": ["Subject Matter Expert Status", "Externe Training-Mandate"]
        },
        "wachstums_erkenntnis": "Recognition: Industry Expert + Knowledge Multiplier + Content Creator"
      },
      {
        "zeitraum": "2019-2024",
        "kontext": "DB Systel - Internal Venture 'Assistify' (Conversational AI)",
        "umgebung": "Startup-like R&D + Open Source Community",
        "gelernt": {
          "kernkompetenz": "In einem Konzern ist es gar nicht so einfach, erfolgreich zu scheitern ('fail fast')",
          "technische_skills": ["MongoDB", "Meteor Framework", "JavaScript/Blaze", "Conversational AI"],
          "methoden": ["Venture Building", "Market Analysis", "Product Design", "Full-Stack Development"],
          "business_skills": ["Finance Management", "Partner Management", "Marketing Strategy"],
          "open_source": ["Rocket.Chat Contributions", "Global Open Source Community"],
          "platform": ["OpenShift Container Platform", "Cloud-Native Development"],
          "realität": ["Zufriedene Kunden aber wirtschaftliche Abwicklung trotzdem notwendig"],
          "vollspektrum": ["Produktgestaltung bis Marktanalyse über Architektur bis Marketing"]
        },
        "wachstums_erkenntnis": "Transformation: From Developer to Venture Builder + Konzern-Realitäten"
      },
      {
        "zeitraum": "2022-2024", 
        "kontext": "DB Systel - Internal Venture 'DB Curbside Management' (Mikromobilität)",
        "umgebung": "Event-Driven Architecture + Municipal Software + SaaS Marktdynamik",
        "gelernt": {
          "kernkompetenz": "Eine noch so gute technische Anwendung hilft nichts, wenn Konkurrenten Preisdumping machen können",
          "technische_skills": ["TypeScript", "Node.js", "Vue.js", "Spring Boot", "Apache Flink", "Kafka"],
          "methoden": ["Event Stream Processing", "Product Owner Role", "Tactical Product Development"],
          "architektur": ["Stateful Stream Processing", "Event-Driven Systems", "Real-time Data Processing"],
          "domäne": ["Geospatial Processing", "Mobility Data", "Municipal Technology"],
          "platform": ["AWS Cloud Services", "Event Stream Architecture"],
          "business_realität": ["SaaS: Monthly Recurring Revenue + Customer Lock-In vs. technische Exzellenz"],
          "produkt_management": ["Auch hier: Produktabwicklung trotz technischem Erfolg"]
        },
        "wachstums_erkenntnis": "Innovation: Event Stream Processing Expertise + SaaS Marktverständnis"
      },
      {
        "zeitraum": "2024-heute",
        "kontext": "DB Systel - Event Stream PoCs + GenAI Integration", 
        "umgebung": "Cutting-Edge Technology + KI-Revolution im Software Engineering",
        "gelernt": {
          "kernkompetenz": "Täglich lernen: Was ist wirklich Software Engineering und wo verläuft die Grenze zwischen 'KI kann das besser' und 'das sollte ein Engineer machen'",
          "technische_skills": ["Flink Java Streaming API", "State Management", "Checkpointing", "GenAI Integration"],
          "methoden": ["Proof of Concept Development", "Knowledge Transfer", "Technology Evangelism"],
          "spezialisierung": ["Vehicle Tracking", "Geofencing", "Geospatial Formats"],
          "open_source": ["bolt.diy Architektur", "LLM Independence"],
          "community": ["GenAI Tools & Methods Education"],
          "reflektion": ["KI-Grenzen im Software Engineering verstehen", "Menschliche vs. KI-Kompetenzen abgrenzen"]
        },
        "wachstums_erkenntnis": "Cutting Edge: GenAI + Advanced Stream Processing + Kontinuierliches Lernen"
      }
    ]
  }
}
```

### CLI-Commands für diese Struktur

```bash
cv --lernreise --timeline
cv --lernreise --zeitraum="2019-2024"
cv --lernen --skill="event-stream-processing"  
cv --lernen --kontext="venture-building"
cv --wachstum --meilensteine
cv --skills --gelernt-wann="2022-2024"
cv --expertise --domäne="geospatial"
cv --kernkompetenz --alle
cv --realitäten --konzern
```

### Narrative Darstellung (gut lesbar als Seitenansicht)

**Lernreise: Von der Anpassungsfähigkeit zur KI-Engineer-Grenze**

Meine berufliche Entwicklung ist geprägt von kontinuierlichem Lernen in unterschiedlichsten Kontexten. Dabei habe ich früh **Anpassungsfähigkeit** als Kernkompetenz entwickelt und diese über 23 Jahre immer weiter verfeinert.

**Grundstein: Schnelle Kontextwechsel beherrschen (2001-2004)**
Im dualen Studium bei IBM lernte ich meine wichtigste Fähigkeit: mich **schnell in unterschiedlichste Kontexte und Technologien einzuarbeiten** und zeitnah Fortschritte zu zeigen. Diese Fähigkeit wurde zur Basis aller weiteren Entwicklung.

**Prozessverständnis: Intention über Regeln (2004-2012)**
Bei SAP lernte ich als Quality Specialist, dass **hinter jedem Prozess eine Idee steht** - und dass beim Anwenden die Intention entscheidend ist. Als Vermittler zwischen unterschiedlichen Perspektiven entwickelte ich strukturiertes Vorgehen auf hohem Abstraktionsniveau. Wichtige Erkenntnis: In großen Organisationen gibt es für alle Sichten gute Gründe, und **Architektur-Tradeoffs** sind unvermeidlich.

**Menschen verstehen: Business Logic ist illogisch (2012-2019)**
Bei DB Systel führte mich von der reinen Technik zum Geschäftsverständnis. Beim Aufbau einer Enterprise-Anwendung from Scratch lernte ich das Wichtigste: **Mit Menschen zu sprechen, um zu verstehen, was sie wirklich im Geschäft tun**. Denn "there's nothing more illogical than business logic". Als erstes agiles SAP-Projekt und erstes Global Sourcing Projekt waren wir Pioniere - mit allen Herausforderungen.

**Wissen teilen: Interaktion über Monolog (2017-2018)**
Als SAP BOPF-Experte und Trainer entwickelte ich **didaktische Fähigkeiten**. Statt dem geplanten Buch entschied ich mich für eine Blog-Serie - die **Interaktion mit Lesenden** brachte bessere Ergebnisse als alles vorab zu beschreiben.

**Venture-Realitäten: Erfolg vs. Wirtschaftlichkeit (2019-2024)**
Im Venture "Assistify" lernte ich, dass es in einem Konzern **gar nicht so einfach ist, erfolgreich zu scheitern**. Trotz zufriedener Kunden wickelte ich das Produkt aus wirtschaftlichen Gründen ab. Bei "DB Curbside Management" die nächste harte Lektion: **Eine noch so gute technische Anwendung hilft nichts, wenn Konkurrenten Preisdumping machen können**. SaaS-Märkte funktionieren nach anderen Gesetzen als technische Exzellenz.

**KI-Grenze: Was bleibt menschlich? (2024-heute)**
Aktuell lerne ich täglich das Spannendste: **Was ist wirklich Software Engineering und wo verläuft die Grenze zwischen "KI kann das besser" und "das sollte ein Engineer machen"**. Event Stream Processing mit Flink kombiniert mit GenAI-Integration zeigt mir täglich neue Dimensionen dieser Frage.

## Technische Architektur-Erkenntnisse

### Bestehende Astro-Site Analyse

**Aktuelle Struktur:**
- **Framework:** Astro 5.1.6 mit MDX Integration
- **Content:** Blog-Posts in `/src/content/blog/`
- **Styling:** Vanilla CSS (system-ui fonts, responsive)  
- **Navigation:** Einfach (Home, Blog)
- **Theme:** Minimalistisch, GitHub Dark Code-Highlighting

**Integration-Strategie für CV:**
- **Route:** `/cv` als neue Astro-Seite
- **Vue Integration:** `@astrojs/vue` für Terminal-Component hinzufügen
- **Navigation:** "CV" Link zur bestehenden Navigation
- **Styling:** Konsistent mit bestehendem minimalistischem Design
- **Build:** Einheitlicher Build-Prozess über bestehende Astro-Config

**Vorteile der Mono-Repo Integration:**
✅ **Einheitliche Domain & Branding**  
✅ **Konsistentes Styling & Layout**  
✅ **Single Build & Deployment Pipeline**  
✅ **SEO-Vorteile durch Site-Kohärenz**  
✅ **Wartung in einem Repository**

**Architektur-Entscheidung:**
- **Desktop:** Astro + Vue.js + xterm.js Terminal  
- **Mobile:** Astro + responsive Card-Navigation
- **Hosting:** GitHub Pages - **CV First!** (`mrsimpson.github.io/cv`)
- **Integration:** Standalone CV, Blog-Integration später optional

**Deployment-Strategie (Korrigiert):**
✅ **Phase 0:** CV-Terminal als Hauptprojekt bei GitHub Pages  
✅ **Später:** Blog-Integration optional als `/blog` Unterseite

## Notes
*Additional context and observations*

---
*This plan is maintained by the LLM. Tool responses provide guidance on which section to focus on and what tasks to work on.*
