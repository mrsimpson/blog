# Development Plan: blog (blogpost-agentic-knowledge branch)

*Generated on 2025-11-18 by Vibe Feature MCP*
*Workflow: [posts](https://mrsimpson.github.io/responsible-vibe-mcp/workflows/posts)*

## Goal
Write a blog post about long-term memory in software development, highlighting the limitations of RAG and introducing the agentic search solution implemented in the agentic-knowledge MCP server.

## Discovery
### Tasks

### Completed
- [x] Review competitive landscape (Nicolas Bustamante's "RAG Obituary", other agentic search content)
- [x] Final review of Nicolas Bustamante's article for key quotes/insights to acknowledge
- [x] Created development plan file
- [x] Decided on post format: Medium-length insight piece (1000-2000 words)
- [x] Defined target audience: Developers using AI coding assistants (Claude, Cursor), AI practitioners
- [x] Analyzed agentic-knowledge implementation and key insights
- [x] Reviewed context-is-all-you-need blog post and slides
- [x] Identified unique angle: Continuation of responsible-vibe story - solving the external docs problem
- [x] Defined personal motivation: Tried building RAG, discovered intransparency, validated by Nicolas's article
- [x] Identified "aha moment": Watching agents navigate local docs brilliantly with grep/search
- [x] Found transparency problem example: RAG ranking scores (0.71-0.75) barely distinguishable
- [x] Identified references: Nicolas Bustamante (validation), mcp-ragdocs (inspiration, not competition)
- [x] Confirmed target platforms: LinkedIn, Dev.to, Hacker News

## Story
### Phase Entrance Criteria:
- [x] Topic is thoroughly researched and understood
- [x] Post format has been decided (length, depth, style)
- [x] Target audience is clearly defined
- [x] Unique angle and personal perspective is articulated
- [x] Competitive landscape has been analyzed to avoid duplication

### Tasks

### Completed
- [x] Create detailed story outline with sections and flow
- [x] Define content scope boundaries (what NOT to cover)
- [x] Plan platform-specific adaptations (LinkedIn primary, only platform)
- [x] Identify key metaphors and examples for each section
- [x] Validate narrative arc with user
- [x] Refine opening: problem first, then learning journey
- [x] Document narrative flow: Problem → Traditional solution → Learning → Discovery → Observation → Insight → Solution

## Writing
### Phase Entrance Criteria:
- [x] Story outline is complete with clear beginning, middle, and end
- [x] Key messages and metaphors are identified
- [x] Content scope boundaries are defined
- [x] Narrative arc matches chosen format
- [x] Personal voice and conversational style is established

### Tasks

### Completed
- [x] Write Act 1: The Problem and Traditional Solution (350-400 words)
- [x] Write Act 2: The Observation (300-350 words)
- [x] Write Act 3: The Solution and Implications (350-400 words)
- [x] Review full draft for narrative flow
- [x] Check word count (target: 1000-1150 words) - actual: ~1030 words
- [x] Validate tone and voice consistency
- [x] Refocus tl;dr on Knowledge-Cut-Off problem
- [x] Balance references (gitmcp.io, ragdocs, Cursor)
- [x] Clarify MCP tool description guides LLM to choose search terms
- [x] Emphasize team collaboration aspect of YAML config
- [x] Reduce RAG criticism, focus on problem/solution
- [x] Refocus closing on predictable inference principle, not personal discovery process
- [x] Connect to responsible-vibe's core principle: understandable, predictable excellence over magic

### Completed
*None yet*

## Illustration
### Phase Entrance Criteria:
- [x] Written content is complete and follows story outline
- [x] Content maintains consistent narrative flow
- [x] All planned examples and metaphors are included
- [x] Section structure with appropriate headings is in place

### Tasks

### Completed
- [x] Identify strategic locations for visual elements
- [x] Review existing images in blog/images folder
- [x] Determine which existing visuals can be reused
- [x] Plan visual integration and placement
- [x] User added agentic-knowledge screenshots (26, 27)
- [x] User created library comic visuals (28, 29)
- [x] Integrate all visuals into blog post with captions
- [x] Write German captions for all visuals
- [x] Adjust visual placement: moved agentic-comic to "Wie es funktioniert" section
- [x] Structure "Wie es funktioniert" into 3 clear steps: 1) Expert defines docsets, 2) MCP gives navigation instructions, 3) Agent navigates intelligently

### Visual Metaphor Concept Decided

**Library Comic Strip - Two Panels:**

**Panel 1: Retrieval (RAG)**
- Librarian standing still with stack of photocopied fragments
- Speech bubble: "Ich habe das für dich zusammengefasst - hier sind 50 relevante Seiten!"
- Scattered pages floating, each with similarity scores (0.71, 0.72, 0.73...)
- Person looking confused at disconnected fragments
- Caption: "Retrieval: Zusammengefasste Fragmente ohne Zusammenhang"

**Panel 2: Navigation (Agentic)**  
- Düsengetriebener Agent (jetpack/rocket) zooming through library
- Checking index → grabbing book → opening to page → following reference → next book
- Speech trails showing the path: "Index checken → Buch B3 → Hooks Kapitel → Cross-Reference Note 12 →"
- Person following along, understanding the journey
- Caption: "Navigation: Intelligente Führung durch den gesamten Kontext"

**Visual Style:**
- Simple, clean comic/cartoon style
- Playful (jetpack agent is fun!)
- Clear contrast between static (librarian) vs. dynamic (agent)
- German text in speech bubbles
- Side-by-side or top/bottom layout
*None yet*

## Distribution
### Phase Entrance Criteria:
- [x] Visual elements are created and integrated
- [x] Visual density matches the chosen format
- [x] Visuals support and enhance the written content
- [x] Content is visually polished and professional

### Tasks

### Completed
- [x] Review title and description for SEO/LinkedIn optimization
- [x] Check frontmatter metadata (tags, date, description)
- [x] Final content polish and proofreading
- [x] Validate all image paths and references
- [x] User made final adjustments and published to LinkedIn
- [x] Post live at: https://www.linkedin.com/pulse/langzeitgedächtnis-durch-navigation-nicht-retrieval-oliver-jägle-4x1re
- [x] Updated local version with LinkedIn changes
- [x] Committed to git: Blog post, images, development plan

### Final Metrics
- **Word count**: ~1,250 words
- **Images**: 4 (2 library comics, 2 technical screenshots)
- **LinkedIn engagement**: 5 likes, 6 comments within hours
- **Notable commenter**: Ralf D. Müller (arc42 creator)

## Key Decisions

### Format & Scope
- **Format**: Medium-length insight piece (1000-2000 words)
- **Focus**: Paradigm shift from RAG to Agentic Search
- **Narrative Arc**: Continuation of responsible-vibe story
- **Platforms**: LinkedIn, Dev.to, Hacker News

### Final Story Outline

**Act 1: The Problem and Traditional Solution** (350-400 words)
- Opening: Layer 3 gap - external docs problem
- Everyone says RAG
- Built RAG to understand it (learning mindset)
- Discovery: Documentation chunks look similar (0.71-0.75 scores)
- Intransparency: cascading failures, can't explain WHY
- The nuance: RAG works great for structured data, struggles with docs

**Act 2: The Observation** (300-350 words)
- While building responsible-vibe: watched agents excel with text
- Built-in tools: grep (50 years refined), ripgrep, file reading
- Purpose-built for text navigation
- Context revolution makes it practical (8K → 200K → 2M tokens)
- Nicolas's insight: "Claude Code doesn't retrieve. It investigates"

**Act 3: The Solution and Implications** (350-400 words)
- The insight: Agents need guidance, not retrieval
- agentic-knowledge: simple navigation instructions
- Completes the three-layer framework
- Right tool for right job: RAG for data, navigation for docs
- Open source, community exploration

**Target Length**: 1000-1150 words
**Tone**: Conversational, humble, learning-focused
**Platform**: LinkedIn only

**Opening Hook - Problem First:**
- Start with the Layer 3 gap: responsible-vibe solved Layers 1 & 2, but external docs remained
- The real problem: Your project's docs are solved, but what about React? TypeScript? All dependencies?
- Traditional answer: "Everyone said RAG..."
- THEN: "I like to understand how things work, so I built RAG from scratch"

**Narrative Flow:**
1. Problem (Layer 3 gap) → 2. Traditional solution (RAG) → 3. Learning journey (built it) → 4. Discovery (wrong tool for docs) → 5. Observation (agents have better tools) → 6. Insight (guidance not retrieval)

**Building RAG Journey - Key Framing:**
- "Everyone keeps talking about RAG, so I built it to understand"
- Often results in throwing it away and using what others built - that's okay!
- This time, building revealed the subtle difficulties
- Learning through implementation, not criticism

**RAG's Actual Use Case (Important Nuance):**
- **RAG is NOT great for documentation**: Docs chunks look similar (API references, guides, tutorials all blend together)
- **RAG IS great for structured context**: Warehousing data, sales information, customer profiles, structured databases
- The problem: We've been applying RAG to the wrong domain (documentation)

**The Agent Advantage:**
- Agents have built-in tools specifically designed for text navigation
- grep, ripgrep, file reading - evolved over decades for this exact purpose
- They excel at what they were built for: finding and reading text
- Why rebuild when the tools already exist?

**Revised Core Message:**
"It's not that RAG is bad - it's solving the right problem (structured data access) but we've been misapplying it to documentation. For text-based docs, agents' native tools work better."
- **Opening Hook**: responsible-vibe solved internal project memory (Layer 1 & 2), but what about Layer 3 - external documentation?
- **The Gap**: Dependencies, frameworks, external APIs - info needed but not in your project
- **Traditional Solution**: RAG (with its problems: complexity, opacity, fragmentation)
- **Key Observation**: While building responsible-vibe, noticed agents use their own tools brilliantly when they have access to docs
- **The Insight**: Don't retrieve fragments → Provide navigation instructions
- **The Solution**: agentic-knowledge as simple MCP server bringing external docs into local context

### Core Message
Long-term memory isn't about storage or retrieval - it's about **intelligent navigation**. Agents already have the tools (grep, file reading, massive context). They just need guidance to the right information.

## Notes

### Three Layers of Context Engineering (from slides)
1. **Conversation Memory**: Systematic thinking and organized problem analysis
2. **Process Memory**: Phase-aware development plans and progress tracking
3. **Long-term Memory**: Requirements, Documentation, RAG, Rules

responsible-vibe addresses Layers 1 & 2. agentic-knowledge addresses Layer 3.

### Key Technical Insights from agentic-knowledge
- Zero AI dependency - pure logic-based guidance
- Sub-10ms response times vs RAG's 300-2000ms
- Zero infrastructure (no vector DBs, embeddings, rerankers)
- Works with agent's existing tools (grep, ripgrep, file reading)
- Leverages massive context windows (200K+ tokens)
- Provides navigation instructions, not fragments

### Key Quotes from Nicolas's Article (for acknowledgment)
- "RAG was a clever workaround for a context-poor era... it was always a band-aid"
- "Claude Code doesn't retrieve. It investigates"
- "Grep was invented in 1973. It's so... primitive. And that's the genius of it"
- "We are entering the post-retrieval age"
- "In hindsight, RAG will look like training wheels. Useful, necessary, but temporary"

### The RAG Intransparency Problem (concrete examples)
1. **Ranking Opacity**: Used mcp-ragdocs, top k=10 results showed similarity scores 0.71-0.75 - barely distinguishable
2. **Cascading Failures**: Chunking → Embedding → BM25 → Hybrid fusion → Reranking - each stage compounds errors
3. **Black Box Results**: Can't explain WHY certain chunks were retrieved
4. **Missing Context**: Nicolas's example - $500M reported, $5.1B actual (missed 10x due to fragmentation)

### Implementation Complexity (from building RAG)
- Chunking destroys relationships (split tables, broken cross-references)
- Semantic search fails on numbers and terminology
- Infrastructure burden: Elasticsearch, vector DBs, rerankers
- Maintenance nightmare: re-indexing takes 48-72 hours
- Cost multiplication: Cohere Rerank $2/1K search units
- Chunking destroys document relationships
- Embeddings fail on precise terminology
- Similarity search misses exact matches
- Context fragmentation loses coherence
- Infrastructure burden is massive
- Intransparent - hard to debug why certain results were retrieved

### Personal Motivation & Aha Moment
**The Journey:**
1. Built responsible-vibe (Layers 1 & 2 of context engineering)
2. Realized external docs problem remained (dependencies, frameworks)
3. Attempted to build RAG solution from scratch
4. Discovered how tricky and intransparent RAG is (embeddings, ranking, chunking)
5. Found Nicolas Bustamante's "RAG Obituary" - validated all my frustrations
6. Used existing RAG tools like mcp-ragdocs (great tool!)
7. Checked ranking scores: top k=10 results showed 0.71-0.75 similarity - barely distinguishable
8. **The Aha Moment**: Watched agents brilliantly navigate local docs using grep/search
9. **The Insight**: "Why retrieve fragments when you can guide navigation?"

**The Epiphany**: Agents already have the tools. They just need guidance, not retrieval.

### References & Inspiration
- **Nicolas Bustamante's "RAG Obituary"**: https://www.nicolasbustamante.com/p/the-rag-obituary-killed-by-agents - Articulated the fundamental problems with RAG that matched my coding experience
- **mcp-ragdocs**: https://github.com/rahulretnan/mcp-ragdocs - Great RAG-based MCP server, inspired by same problem space
- Position these as **inspiration and validation**, not competition. We're all solving the same problem, just with different approaches.

---
*This plan is maintained by the LLM. Tool responses provide guidance on which section to focus on and what tasks to work on.*
