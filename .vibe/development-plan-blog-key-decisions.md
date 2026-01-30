# Development Plan: blog (blog-key-decisions branch)

*Generated on 2026-01-30 by Vibe Feature MCP*
*Workflow: [posts](https://mrsimpson.github.io/responsible-vibe-mcp/workflows/posts)*

## Goal
Blog post about agentic decisions and task management - exploring how responsible-vibe-mcp integrated beads CLI for task management, comparing it with other approaches (like beads standalone), and discussing the crucial role of decision documentation in engineering processes.

## Discovery
<!-- beads-phase-id: blog-2.1 -->
### Tasks

*Tasks managed via `bd` CLI*

## Story
<!-- beads-phase-id: blog-2.2 -->

### Phase Entrance Criteria:
- [ ] The core themes and key insights are identified
- [ ] Target audience and their pain points are clear
- [ ] The unique angle and value proposition is defined
- [ ] Research on beads, responsible-vibe, and decision documentation is complete

### Tasks

*Tasks managed via `bd` CLI*

## Writing
<!-- beads-phase-id: blog-2.3 -->

### Phase Entrance Criteria:
- [ ] The narrative arc and story structure are defined
- [ ] Key messages and takeaways are clear
- [ ] The flow from problem to insight to solution is established
- [ ] Personal experiences and examples are identified

### Tasks

*Tasks managed via `bd` CLI*

## Illustration
<!-- beads-phase-id: blog-2.4 -->

### Phase Entrance Criteria:
- [ ] The blog post draft is complete
- [ ] Key concepts that need visualization are identified
- [ ] The writing flow and structure are solid
- [ ] Code examples or technical concepts are ready

### Tasks

*Tasks managed via `bd` CLI*

## Distribution
<!-- beads-phase-id: blog-2.5 -->

### Phase Entrance Criteria:
- [ ] The blog post content is finalized
- [ ] Visuals and illustrations are integrated
- [ ] The post is polished and ready for publishing
- [ ] Technical accuracy is verified

### Tasks

*Tasks managed via `bd` CLI*

## Key Decisions

### Meta-Documentation Strategy
**Decision**: Use the actual creation of this blog post as the primary example
- **Why**: More powerful than hypothetical examples - reader sees it working in real-time
- **How**: Screenshots throughout showing beads CLI usage, Key Decisions accumulating, tasks progressing
- **Evidence**: The reader is literally watching the system prove itself
- **Impact**: Transforms from "here's a concept" to "here's proof it works"

### Writing Approach
**Decision**: Write in German (matching blog's language)
- **Structure**: 5-act narrative with meta-example as proof
- **Tone**: Conversational, technical but accessible, show-don't-tell
- **Length**: ~2000 words (medium-form, enough depth without being exhaustive)
- **Key inclusions**:
  - Real `bd list --tree` output from this post's development
  - Actual Key Decisions excerpt from this plan file
  - Side-by-side comparison table: Tasks vs Decisions
  - Git log workflow explanation
- **Focus**: Stay on the insight (engineering = decisions), use beads as case study, don't deep-dive into implementation
- **Example consistency**: Changed entry example from "beads research" to "JWT auth" for better thematic consistency with the deeper JWT decision example later in the post

### Illustration Selection & Positioning (Fixed)
**Decision**: Use real screenshots from writing this post, repositioned correctly to match narrative flow
- **Problem section**: Text-based illustration (checkbox list without context) — shows the chaos/pain
- **Solution section**: 
  - Screenshot 33: Initial plan setup (beads phases + entrance criteria) — shows structure that fixes chaos
  - Screenshot 35: Phase transition creates tasks incrementally — shows workflow in practice
- **Problem analysis section**: Screenshot 34 (notes as context) — what's missing in task-only systems
- **Meta-proof section**: Screenshots 36-37 (real beads tree + key decisions from interaction) — living proof
- **Key principle**: Problem section must show pain/chaos FIRST, Solution section shows how it's fixed. Don't put solution image in problem section.

### Narrative Arc
**Story Structure**: Problem → Discovery → Insight → Solution → Meta-Example

**Act 1: The Problem (Hook)**
- Open with relatable frustration: "My markdown task lists keep growing, agents keep losing context"
- Reference beads popularity: 13.6k stars, clearly solving real pain
- But something's missing... tasks without context = busy work without understanding

**Act 2: The Discovery**
- Explored beads: Brilliant for task management (git-backed, dependencies, agent-friendly)
- But noticed the gap: Where do the WHYs live?
- Personal realization: Engineering IS decision-making, not task completion
- Example contrast: "Implement JWT auth" (task) vs "Use JWT because: stateless, mobile-friendly, horizontally scalable" (decision)

**Act 3: The Insight**
- Tasks = WHAT to do (atomic, closable, assignable)
- Decisions = WHY we chose it (narrative, persistent, contextual)
- The problem with task-only systems: Future you (or future AI) doesn't know WHY
- ADRs are too heavy for 90% of decisions (process choices, not architecture)

**Act 4: The Solution**
- Responsible-vibe + beads integration: Best of both worlds
- During development: beads for tasks, markdown "Key Decisions" for reasoning
- At commit: Decisions flow into git commit messages
- Git log becomes searchable memory: `git log --grep="JWT"` → finds decision + code changes

**Act 5: The Meta-Example (PRIMARY NARRATIVE DEVICE)**
- **This very blog post is being written using this system** - not hypothetical!
- Real screenshots throughout: beads CLI in action, Key Decisions section growing, task management happening
- Show the live `.vibe/development-plan-blog-key-decisions.md` as it evolves
- Reader watches the system work in real-time:
  - Discovery phase: `bd create` tasks, research documented in Notes
  - Story phase: `bd close` tasks, narrative arc captured in Key Decisions
  - Writing phase: Tasks for sections, decisions about tone/structure
- The dogfooding proves the concept: "I'm not just describing it, you're watching it work"

**Conclusion: The Bigger Picture**
- It's not about tools, it's about recognizing what engineering really is
- Tasks track work; decisions capture thinking
- Git log can be more than diffs - it can be your project's memory

### Content Scope Boundaries
**IN SCOPE:**
- Task management limitations (checkbox fatigue, lost context)
- Decision documentation problem (where does the WHY live?)
- Beads as case study (what it does well, what it lacks)
- Responsible-vibe integration approach (plugin system)
- Git log as memory workflow
- Tasks vs decisions distinction

**OUT OF SCOPE:**
- Beads technical deep-dive (installation, commands) - link to docs
- Responsible-vibe MCP implementation details - focus on concept
- ADR format comparison - just mention briefly
- Other task management tools - stay focused on the insight
- Workflow orchestration - covered in previous posts

**Target Length**: Medium-form (1500-2000 words) - enough depth for insight, not exhaustive reference

### Key Messages & Metaphors
**Core Message**: "Engineering is about decisions, not just tasks. Your task manager should know the difference."

**Supporting Messages**:
1. "Tasks are checkboxes; decisions are the story of why we checked them"
2. "Git log can be your project's memory, not just its changelog"
3. "ADRs for architecture; commit messages for process decisions"
4. **NEW**: "You're watching this principle in action right now - as I write this post"

**Metaphors to Develop**:
- **Task list as GPS route**: Tells you where to go, not why that's the best path
- **Decisions as breadcrumbs**: Help you retrace your thinking, explain to others
- **Git log as time capsule**: Not just what changed, but why we thought it was worth changing

**Visual Evidence Strategy**:
- Screenshots of `bd list`, `bd create`, `bd close` commands throughout
- Show the Key Decisions section accumulating insights
- Display the beads task hierarchy: blog-2.1 (Discovery) → blog-2.2 (Story) → blog-2.3 (Writing)
- Capture the "living document" nature of the development plan

**Tone**: Conversational but insightful, personal but generalizable, technical but accessible, **show-don't-just-tell**

### Beads Research Findings
**Decision**: Use beads as case study for task management limitations
- **What beads does well**: Git-backed tasks, dependency tracking, agent-friendly JSON output, hierarchical IDs, auto-ready detection
- **What beads lacks**: Cross-task notes, decision documentation, process decision tracking
- **Why this matters**: Engineering is about decisions (WHY), not just tasks (WHAT)

### Responsible-Vibe Integration Approach  
**Decision**: Integrate beads as task backend while maintaining Key Decisions section
- **Architecture**: Plugin system with zero core knowledge of beads - uses PluginHooks interface
- **Key benefit**: Best of both worlds - structured tasks (beads) + decision memory (vibe markdown)
- **Implementation**: TASK_BACKEND=beads environment variable, automatic phase task creation
- **Technical details**:
  - BeadsPlugin registers lifecycle hooks: `afterPlanFileCreated`, `afterInstructionsGenerated`
  - Automatically creates project epic and phase tasks with dependencies
  - Plan file gets `<!-- beads-phase-id: X -->` comments for phase linkage
  - Instructions guide AI to use `bd CLI` exclusively for tasks, markdown for decisions
- **Backwards compatible**: Falls back to markdown checkboxes if beads unavailable

### Examples: Tasks vs Decisions
**Tasks (WHAT to do)** - Tracked in beads:
- "Implement user authentication endpoint"
- "Add validation for email field"
- "Write unit tests for AuthService"
- "Update API documentation"

**Decisions (WHY we chose this)** - Tracked in Key Decisions:
- "Use JWT over sessions because: stateless, scales horizontally, works with mobile apps"
- "Email validation on client AND server - client for UX, server for security"
- "Decided against OAuth initially - adds complexity, YAGNI for MVP"
- "Chose bcrypt over argon2 - team familiarity, adequate security for use case"

**Why Separation Matters**:
- **Tasks are atomic**: Can be done independently, have dependencies, can be reassigned
- **Decisions are narrative**: Need context, have trade-offs, affect multiple tasks
- **Tasks get closed**: Once done, they're history
- **Decisions persist**: They inform future work, explain constraints, guide new contributors

**The Problem with Task-Only Systems** (like pure beads):
- Task: "Use JWT for auth" ← *But WHY? What were the alternatives? What trade-offs?*
- Without decision context, future developers (human or AI) might undo good choices
- Or spend time re-evaluating decisions that were already carefully considered

## Notes

### Target Audience & Pain Points
**Primary Audience**: 
- Developers using AI coding agents (Claude, Copilot, Cursor, etc.)
- Engineering teams building agentic systems
- Technical leaders coordinating human-AI collaboration

**Pain Points**:
1. **Task list overwhelm**: As projects grow, markdown checkboxes become unmanageable
2. **Lost context**: Agents lose track of WHY decisions were made, only see WHAT tasks remain
3. **Decision amnesia**: Process decisions (the real engineering) have no persistent home
4. **Coordination challenges**: Multiple agents or team members working on same project lose shared understanding
5. **Git log underutilization**: Commit messages are documentation opportunity being wasted

**Desired Outcome**: A system that tracks both tasks (structured, dependency-aware) AND decisions (narrative, contextual) throughout development

### Git Log as Memory Workflow
**Core Concept**: Transform git history into searchable project memory by capturing decision context in commit messages

**The Workflow**:
1. **During Development**: 
   - Tasks tracked in beads (WHAT to do)
   - Decisions documented in responsible-vibe markdown "Key Decisions" section (WHY we chose this approach)
   - Process decisions accumulate as work progresses

2. **At Commit Time**:
   - AI synthesizes relevant decisions from the markdown document
   - Decision context flows into commit message WHY section
   - Git commit becomes a snapshot of both CODE (diff) and REASONING (message)

3. **Future Access**:
   - `git log --grep="decision keyword"` finds relevant context
   - New AI agents can understand project evolution by reading git history
   - Human developers get narrative understanding, not just code changes

**Why This Works**:
- **ADRs are too heavy**: For long-term architectural records, yes. But 90% of decisions are smaller process choices
- **Markdown too ephemeral**: Gets lost or outdated if not committed somewhere permanent
- **Git log is searchable**: Already part of every developer's workflow, already committed to the repo
- **Commit messages have context**: They're tied to specific code changes, making decisions concrete

**Key Insight**: The git log becomes a time-series database of both "what changed" (diff) and "why we changed it" (decision-enriched message)

---
*This plan is maintained by the LLM and uses beads CLI for task management. Tool responses provide guidance on which bd commands to use for task management.*
