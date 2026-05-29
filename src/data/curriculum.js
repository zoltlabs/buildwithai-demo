// Full course content, synced from curriculum.md (one-time import).
// The home-page week cards read `cardTopics`; the course week pages read everything.

export const weeks = [
  {
    num: "01",
    slug: "1",
    tag: "Foundations",
    capability: "Reads & reasons",
    capabilityLine:
      "By the end of this week, your agent can read any codebase and reason about it.",
    title: "Build Your",
    titleEm: "First Agent",
    desc: "Write your first working agent in an afternoon. The agent loop, system prompts, and model routing: the primitives everything else is built on.",
    wow: "You paste a GitHub URL. It reads the code, runs the tests, tells you what broke.",
    videoUrl: null,
    cardTopics: [
      "The agent loop: maxSteps is the runtime",
      "CLAUDE.md / AGENTS.md and system prompts",
      "File reading + shell execution",
      "Model routing: fast vs. reasoning",
    ],
    mainProject: {
      summary:
        "A personal agent CLI that reads files, runs shell commands, and holds a conversation. You point it at any GitHub repo URL and ask it questions in plain English. It figures out the rest.",
      deliverable:
        "my-agent running locally. You can paste in a GitHub URL and get real, accurate answers about unfamiliar code.",
    },
    topics: [
      "Tooling landscape: Claude Code vs. Codex vs. Cursor/Antigravity, and how to pick your primary tool",
      "SDK landscape: LangGraph (stateful graph orchestration), Vercel AI SDK (streaming + UI), Claude Code SDK (agentic coding), and when to roll your own",
      "Setting up the Vercel AI SDK: generateText, system prompts, CoreMessage[]",
      "The agent loop: maxSteps is the entire runtime, no framework needed",
      "File reading + shell tools: how an agent touches the real world",
      "CLAUDE.md / AGENTS.md: the most important file in the project; progressive disclosure to keep it token-efficient",
      "Model selection: fast/cheap vs. reasoning models (gpt-5.4-mini vs. gpt-5.4), and cost modeling before you ship",
      "The Plan / Execute / Clear loop: the core pattern of the course",
      "Live demo: point the agent at a real GitHub repo, ask it to read the code and run the tests",
    ],
    assignments: [
      {
        title: "Write Your AGENTS.md",
        body: "Write the steering document that defines what your agent is for. This is not a README; it's the system prompt that runs every session. It should encode your role, your stack, your rules, and your preferences. Keep it token-efficient: use progressive disclosure so the agent surfaces detailed instructions only when they're relevant, instead of front-loading everything into every session. Use the Claude Code CLAUDE.md docs, plus gstack and the compound engineering plugin, as reference implementations of what a mature steering document looks like.",
        deliverable:
          "A committed AGENTS.md that a teammate could read and immediately understand what your agent is for and how it behaves.",
        hints: [
          "Keep it short. Only things that are always true belong here. Push detailed, situational instructions into separate files that load only when relevant.",
          "Encode your role, your stack, and the hard rules the agent must never break, not a list of features.",
          "Write it so a new teammate could read it and understand what the agent is for and how it behaves.",
          "Revisit it whenever the agent does something you did not want. The correction usually belongs in this file.",
        ],
        example: {
          label: "A filled-in AGENTS.md",
          format: "code",
          content: `You are a personal AI agent running in the terminal for Maya, a staff engineer on a payments team.

You can read files, list directories, and run shell commands.

## Rules
- Think step by step before using a tool.
- Confirm before any destructive command (rm, git push, git reset --hard, database migrations).
- When asked about a codebase, list the directory structure before reading individual files.
- Be concise. One paragraph unless the task needs more.
- Never modify anything under /infra without asking first. That is production.

## About me
- Role: staff engineer on payments. I own the billing service and its tests.
- Stack: TypeScript, Node, Postgres, the Vercel AI SDK. Tests in Vitest.
- I value clear diffs, tests that actually run, and small reversible changes.
- I dislike large rewrites and dependencies added without a stated reason.

## Detailed guides (read these only when the task calls for them)
- Billing conventions: ./docs/billing.md
- How we write tests: ./docs/testing.md
- Release and rollback process: ./docs/release.md`,
        },
      },
      {
        title: "Playground Prototype",
        body: "Use Claude Code's plan mode to vibe-code a throwaway prototype of a possible feature from a codebase you care about. The goal is speed and exploration, not production quality.",
        deliverable:
          "A working (or mostly working) prototype + a 2–3 sentence note on what you learned from building it this way vs. the traditional approach.",
        hints: [
          "Start in plan mode. Read the plan and correct it before any code is written. That is where you do the steering.",
          "Scope it to something you can finish in one session. A single screen or one endpoint is enough.",
          "It is throwaway, so optimize for learning how the workflow feels, not for production quality.",
          "Afterward, note where directing the agent was faster than writing the code yourself, and where it was slower.",
        ],
        example: {
          label: "Example prototype and reflection",
          format: "prose",
          content:
            "Prototype: a related-tickets panel for an internal triage tool. I pointed Claude Code at the repo in plan mode and asked it to add a sidebar that, given the open ticket, lists three similar past tickets by title match. It planned the component, a data hook, and a mock endpoint. I removed an over-engineered caching step from the plan, then let it build. It was working in about 25 minutes.\n\nReflection: directing the agent was much faster for the boilerplate, the component, its props, and the wiring. It was slower whenever I was vague about the matching logic, because it guessed and I had to redirect it. The lesson is that a precise plan up front is worth more than fast typing.",
        },
      },
    ],
    optional: [
      {
        title: "Meeting transcript reader",
        time: "~1 hr",
        body: "Add a /summarize command to your REPL. When you paste a meeting transcript (or point it at a .txt file), it reads the content and returns a structured summary: decisions made, action items with owners, open questions. No MCP needed, just file reading and a good prompt. AGENTS.md should describe your role so the summary is prioritized for what matters to you.",
      },
      {
        title: "Internal docs explorer",
        time: "~1 hr",
        body: 'Point your agent at a folder of internal docs, a Notion export, or a company wiki dump. Ask it questions in plain English. The goal: answer "how does X work here?" without digging through 40 pages manually. Works with any folder of markdown or text files.',
      },
    ],
    concepts: [
      ["Agent", "An LLM paired with a tool-use loop: it calls tools, observes results, and decides what to do next"],
      ["Tooling landscape", "The field of agentic coding tools (Claude Code, Codex, Cursor/Antigravity); each makes different tradeoffs, so pick a primary and learn it deeply"],
      ["SDK landscape", "LangGraph for stateful graph orchestration, Vercel AI SDK for streaming/UI patterns, Claude Code SDK for agentic coding; pick by problem fit or roll your own"],
      ["generateText", "The Vercel AI SDK primitive: one model call that can run a tool loop automatically via maxSteps"],
      ["maxSteps", "The number of times the SDK will run the tool loop before stopping. This IS the agent runtime"],
      ["System prompt", "Instructions given to the model before every call. Sets the agent's identity, rules, and constraints"],
      ["System vs. user prompts", "System prompts set durable identity and rules; user prompts carry the per-turn request. Conflating them is a common source of failure"],
      ["Multimodal input", "Models process not just text but images and structured data; the same token budget and context limits apply across every modality"],
      ["AGENTS.md", "A plain-text file that becomes the system prompt. The most important file in the project; students configure it for their own use case"],
      ["Progressive disclosure", "Structuring agent instructions so detail surfaces only when relevant, keeping the always-on context (and token cost) small"],
      ["Tool use", "The mechanism by which a model calls external functions (file reads, shell commands, API calls, etc.)"],
      ["Plan / Execute / Clear loop", "The core course pattern: plan the work, execute it in context, clear context before it degrades"],
      ["Model routing", "Choosing which model to use based on task type: fast/cheap for simple tasks, reasoning models for complex ones"],
      ["Cost modeling", "Estimating token cost per task before you ship; pairs with model routing to keep cheap models on simple work and reasoning models on hard work"],
      ["Context window", "The maximum tokens a model can process in one call; cost, speed, and quality all depend on managing it well"],
      ["Tokens", "The units models think in, roughly 0.75 words each. Cost, limits, and performance are all measured in tokens"],
      ["Statelessness", "Models have no memory between calls. Every session starts fresh unless you explicitly pass history"],
      ["Failure-mode diagnosis", "Recognizing and fixing common breakdowns: hallucination, instruction drift, context overflow, and schema violations"],
      ["Structured outputs", "Constraining a model to return a typed schema (via Zod) instead of free text; makes output usable in code"],
      ["Zero-shot prompting", "Asking the model to do something with no examples"],
      ["Few-shot prompting", "Providing 2–5 examples of the desired input/output behavior before asking the model to perform the task"],
      ["Chain-of-thought", "Prompting the model to reason step by step before answering; improves accuracy on complex tasks"],
      ['The "smart zone"', "The range of context length and task complexity where a model performs reliably. Staying in it is an active management task"],
      ["Probabilistic vs. deterministic systems", "Traditional software always produces the same output for the same input. Agents don't; you set intent and constraints, the model navigates the path"],
    ],
    practices: [
      ["Check in your code.", "AGENTS.md, skills, and agent configs are source code. Version them."],
      ["Build on real codebases.", "Toy examples hide the friction. Use your actual work codebase from day one."],
      ["Clear context before it degrades.", "When a session gets long and answers get worse, that's your signal: start fresh."],
      ["Make mistakes on purpose.", "The best way to understand failure modes is to hit them deliberately."],
    ],
  },

  {
    num: "02",
    slug: "2",
    tag: "Tools",
    capability: "Takes action",
    capabilityLine:
      "By the end of this week, your agent can take real actions in the world, and other agents can call it as a tool.",
    title: "Build Your",
    titleEm: "Agent's Tools",
    desc: "Give your agent real capabilities wired to the services your team already uses. Then flip it: expose your agent as a tool that other agents can call.",
    wow: "You open Claude Code and call your own agent as a tool.",
    videoUrl: null,
    cardTopics: [
      "Structured skills with I/O contracts",
      "MCP: consume hosted servers",
      "Build and expose your own MCP server",
      "Context engineering in practice",
    ],
    mainProject: {
      summary:
        "Add structured skills and MCP integration to my-agent. The agent gains wired-up connections to services you actually use (GitHub, Linear, or your own API). Then you flip it: you expose your agent as an MCP server so Claude Code (and other agents) can call it as a tool.",
      deliverable:
        "my-agent with at least two structured skills, connected to one external service via MCP, and exposed as an MCP server. Run claude mcp add my-agent and demo calling your agent from Claude Code.",
    },
    topics: [
      "Structured skills: strict SkillInput/SkillOutput contracts with Zod schemas",
      "Context engineering: what the agent sees determines what it can do; budget your context window deliberately",
      "Plans as first-class artifacts: write a plan (or PRD) before you write code; multi-phase plans decompose a large feature into context-window-sized chunks across sessions",
      "MCP basics: what it is, why it emerged, client/server roles",
      "Consuming a hosted MCP server: GitHub or Linear in 5 lines of code",
      "Building your own MCP server: expose my-agent as a callable tool",
      "Compaction: what to do when a session grows long and quality degrades",
      "Handoff patterns: what the agent decides autonomously vs. what it escalates to a human",
      "Hooks (Claude Code): PreToolUse and PostToolUse for logging and guardrails",
    ],
    assignments: [
      {
        title: "The Skill for Writing Skills",
        body: "Write a skill that, given a description of what you want a skill to do, produces a well-formed skill with correct input/output contracts. This is a compounding artifact; every future skill you write will be faster because of it.",
        deliverable:
          "A working skill-writer skill. Test it by using it to generate one of the skills from the main project.",
        hints: [
          "Have the skill-writer settle the input and output shape first. A skill is only as good as its contract.",
          "Put a clear, specific description on every field. That text is what the model, and future you, will read.",
          "Generate the skill, then immediately run it on one real input. If the output does not parse against the schema, the contract is wrong, not the model.",
          "Keep one skill to one job. If the description needs the word 'and' twice, it is probably two skills.",
        ],
        example: {
          label: "Skill produced by the skill-writer",
          format: "code",
          content: `// Asked the skill-writer:
//   "A skill that turns a raw support email into a structured triage:
//    category, urgency, the team that should own it, and a summary."
//
// It produced this skill, following the project's conventions:

// src/skills/triage-email.ts
import { z } from "zod";
import { generateObject } from "ai";
import { openai } from "@ai-sdk/openai";

export const TriageEmailInputSchema = z.object({
  from: z.string().describe("Sender email address"),
  subject: z.string().describe("Email subject line"),
  body: z.string().describe("Full plain-text body of the email"),
});

export const TriageEmailOutputSchema = z.object({
  category: z
    .enum(["bug", "billing", "feature-request", "how-to", "other"])
    .describe("The single best-fit category"),
  urgency: z.number().int().min(1).max(5).describe("1 = drop everything, 5 = whenever"),
  owner: z.string().describe("Owning team: support, eng, or billing"),
  summary: z.string().describe("One sentence a busy person can act on"),
});

export type TriageEmailInput = z.infer<typeof TriageEmailInputSchema>;
export type TriageEmailOutput = z.infer<typeof TriageEmailOutputSchema>;

export async function triageEmail(input: TriageEmailInput): Promise<TriageEmailOutput> {
  const { from, subject, body } = TriageEmailInputSchema.parse(input);
  const { object } = await generateObject({
    model: openai("gpt-5.4-mini"),
    schema: TriageEmailOutputSchema,
    prompt: \`Triage this support email. Pick one category, set urgency 1-5,
name the owning team, and write a one-line summary.

From: \${from}
Subject: \${subject}

\${body}\`,
  });
  return object;
}

// Registered in src/skills/index.ts:
//   triageEmail: {
//     name: "triage-email",
//     description: "Turn a support email into a structured triage",
//     inputSchema: TriageEmailInputSchema,
//     outputSchema: TriageEmailOutputSchema,
//     run: triageEmail,
//   }`,
        },
        referencesNote:
          "In this course a skill is a typed function with a strict Zod input/output contract, like the skills in the main project. The guides below describe the same principles (clear descriptions, progressive disclosure, tight contracts, and testing before you trust it), even where their artifact format differs from a typed function.",
        references: [
          {
            label: "Anthropic: Skill authoring best practices",
            url: "https://platform.claude.com/docs/en/agents-and-tools/agent-skills/best-practices",
          },
          {
            label:
              "Anthropic: Equipping agents for the real world with Agent Skills",
            url: "https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills",
          },
          {
            label: "anthropics/skills: example skills on GitHub",
            url: "https://github.com/anthropics/skills",
          },
          {
            label: "agentskills.io: the open Agent Skills specification",
            url: "https://agentskills.io/specification",
          },
          {
            label:
              "OpenAI: Function calling guide (strict mode and structured outputs)",
            url: "https://platform.openai.com/docs/guides/function-calling",
          },
        ],
      },
      {
        title: "Computer Use with Playwright",
        body: "Configure the Playwright MCP (claude mcp add playwright npx @playwright/mcp@latest). Have your agent navigate to a real app you use, click through a user flow, take screenshots, and file a structured bug report on what it finds. Reference: Simon Willison's Playwright MCP setup walkthrough.",
        deliverable:
          "A markdown bug report produced entirely by your agent, with screenshots, filed against a real app.",
        hints: [
          "Set up the Playwright MCP first and confirm the agent can open a page before you ask it to walk a flow.",
          "Give it one specific user flow to follow, not 'test the app'. A single path produces a clear report.",
          "Ask it to capture a screenshot at each step and reference the files in the report. The screenshots are the evidence.",
          "Point it at a real app you use, on a flow you suspect is fragile. Real friction makes a better report than a toy site.",
        ],
        example: {
          label: "Example bug report (Markdown)",
          format: "code",
          content: `# Bug: "Add to cart" silently fails for out-of-stock variants

App: shop.example.com (staging)
Found by: my-agent via the Playwright MCP
Date: 2026-05-20
Severity: High. Blocks purchase with no feedback to the user.

## Steps to reproduce
1. Open the product page for "Trail Runner" (/products/trail-runner).
2. Select size "US 8", which is currently out of stock.
3. Click "Add to cart".

## Expected
The button is disabled, or an "Out of stock" message appears.

## Actual
The button shows a brief spinner and then nothing. The cart count stays at 0
and no error is shown. POST /api/cart returns 409, which the UI ignores.

## Evidence
- screenshot 01-variant-selected.png: size US 8 selected, button still enabled
- screenshot 02-after-click.png: cart still empty, no message shown
- console: "Uncaught (in promise) 409 Conflict" at cart.js:142

## Notes
In-stock variants add to cart correctly, so this is specific to the
out-of-stock path. The 409 handler appears to never have been wired to the UI.`,
        },
      },
    ],
    optional: [
      {
        title: "Meeting notes skill",
        time: "~2 hrs",
        body: "Add a summarize-meeting skill with a typed output schema: { decisions, actionItems, openQuestions, participants }. Connect to Notion MCP and add a post-to-notion skill that takes the output and creates a page automatically. Trigger: paste a transcript or point at a file. Result: structured notes appear in Notion without any manual work.",
      },
      {
        title: "Calendar pre-brief skill",
        time: "~2 hrs",
        body: "Connect to Google Calendar MCP (or Apple Calendar via a local MCP server). Add a generate-prebrief skill: for each meeting tomorrow, it reads the event details, finds any related docs or tickets you've linked, and writes a 3-bullet pre-brief. Run it every evening. Never walk into a meeting cold again.",
      },
      {
        title: "Research brief skill",
        time: "~2 hrs",
        body: "Add a research-brief skill that takes a topic and returns a structured brief: { summary, keyPoints, sources, gaps, recommendation }. Connect to a web search MCP (Brave Search MCP or Exa MCP, both have free tiers). Ask it to research anything and get a cited, structured brief instead of a chat response.",
      },
      {
        title: "Make your codebase AI-native",
        time: "~2 hrs",
        body: "Restructure a real codebase so agents can navigate it efficiently: a predictable directory layout, markdown docs for the non-obvious parts, and auto-generated documentation an agent can regenerate as the code changes. The payoff: every future agent session starts with better context and wastes fewer tokens rediscovering structure.",
      },
    ],
    concepts: [
      ["Skill", "A reusable, composable unit with a strict input/output contract: the AI equivalent of a function"],
      ["Input/output contract", "The explicit Zod schema defining what a skill expects and what it produces; enables validation and composability"],
      ["Context engineering", "Deliberately choosing what to include, exclude, and rank in a model's context window"],
      ["AI-native codebase", "A codebase organized for agent consumption: predictable structure, markdown docs for intent, and auto-generated docs that stay current"],
      ["Static vs. dynamic context", "Static context is always present (system prompt); dynamic context is injected per-request based on what's relevant"],
      ["Plan as artifact", "A written, structured plan produced by the model before execution; treated as a deliverable, not a side effect"],
      ["PRD / multi-phase plan", "A planning artifact that decomposes a large feature into context-window-sized phases, each executable in its own session"],
      ["Tracer bullet", "A minimal end-to-end implementation used to surface hidden assumptions before committing to a full build"],
      ["Compaction", "Strategies for a session that has grown too long: summarize, prune, or start fresh with a clean context"],
      ["Handoff pattern", "A defined condition under which work passes from AI to human (or vice versa), with clean context transfer"],
      ["MCP (Model Context Protocol)", "A standard for how agents discover and invoke external tools; defines client/server roles and communication patterns"],
      ["MCP server", "A server that exposes tools agents can discover and invoke; can be hosted (GitHub, Linear) or your own"],
      ["StreamableHTTP transport", "The MCP transport for connecting to hosted remote servers (GitHub, Linear). The alternative to stdio, which is for local processes"],
      ["Tool design", "Building APIs and tool descriptions optimized for LLM consumption; how you describe a tool matters as much as what it does"],
      ["Playwright MCP", "A tool that gives agents real browser control via the Playwright automation framework"],
      ["Accessibility tree", "A structured representation of a page's interactive elements; more reliable than screenshots for knowing what's clickable"],
      ["Screenshot feedback loop", "A pattern where an agent takes a screenshot of its own output, inspects it, and iterates until it looks right"],
      ["PreToolUse/PostToolUse hooks", "Claude Code-specific hooks that run before and after every tool call; useful for logging, validation, and guardrails"],
      ["Skill for writing skills", "A meta-skill that generates new skills from descriptions; a compounding artifact that makes all future skill creation faster"],
    ],
    practices: [
      ["Treat skills like code.", "Version them, review them, share them. A skill library is team infrastructure."],
      ["Write the plan before the code.", "A 10-minute planning session prevents 2-hour debugging sessions."],
      ["Document input/output contracts.", "If a skill's contract isn't written down, it will drift."],
      ["Build compounding artifacts.", "Every hour spent building something that makes future work faster is worth 10x the investment."],
      ["Design tools for the model, not the human.", "Verbose, ambiguous tool descriptions cause silent failures. Short, precise, example-rich descriptions produce reliable behavior."],
    ],
  },

  {
    num: "03",
    slug: "3",
    tag: "Memory + Subagents",
    capability: "Remembers",
    capabilityLine:
      "By the end of this week, your agent persists knowledge across sessions and delegates work to specialist subagents.",
    title: "Build Your",
    titleEm: "Agent's Brain",
    desc: "Make your agent remember across sessions and delegate to specialists. It gets smarter every time you use it, and faster when it works in parallel.",
    wow: "You come back Thursday. It remembers what you told it Monday.",
    videoUrl: null,
    cardTopics: [
      "Memory types: episodic, semantic, preferences",
      "Retrieval and context injection",
      "Subagents-as-tools via Vercel AI SDK",
      "Orchestrator + worker pattern",
    ],
    mainProject: {
      summary:
        "Add memory and subagents to my-agent. The agent gains persistent memory: it remembers your preferences, past decisions, and what it has learned across sessions. It also gains the ability to delegate: it spawns subagents as tools via the Vercel AI SDK and merges their results.",
      deliverable:
        "Run your agent twice. First run: tell it something about your project or preferences. Close it. Second run: it applies what it learned without being told. Show the memory file in between. Also demo a parallel subagent research task (give it a topic, watch multiple subagents work simultaneously).",
    },
    topics: [
      "Memory types: episodic (what happened), semantic (what's true), preferences (how I like things)",
      "Retrieval: scoring memories by relevance and injecting into context at the right moment",
      "When to store, when to forget, and how to compact memory that grows too large",
      "Subagents as tools: the Vercel AI SDK pattern for agents-calling-agents",
      "Orchestrator + worker: one agent keeps the plan, workers execute in parallel",
      "The critic agent pattern: a subagent that audits outputs before they're returned",
      "Sandboxing basics: running agents in isolated environments: E2B, Modal, Docker",
      "Multi-agent failure modes: when coordination adds complexity without value",
    ],
    assignments: [
      {
        title: "Research Brief Subagent",
        body: "Use your subagent setup to build a research brief generator. Give the orchestrator a topic. It should spin up multiple subagents (one per source/angle), each doing focused research, then synthesize results into a structured brief.",
        deliverable:
          "A research brief produced by parallel subagents. Show the individual subagent outputs and the final merged synthesis.",
        hints: [
          "Give each subagent one angle or source, not the whole topic. Parallel work only helps if the work is actually divided.",
          "Make the orchestrator's job synthesis, not research. It reads the subagent outputs and reconciles them, including where they disagree.",
          "Return a typed brief (summary, key points, sources, gaps, recommendation) so the output is usable, not a wall of text.",
          "Keep the subagent outputs visible. Being able to trace a claim back to the subagent that found it is the point.",
        ],
        example: {
          label: "Example research brief",
          format: "code",
          content: `# Research brief: should we adopt MCP for our internal tools?

The orchestrator was given the topic above. It ran three subagents in
parallel, one per angle, then synthesized their outputs into the brief below.

## Subagent outputs (run in parallel)

Subagent A: what MCP is and its current state
MCP is an open standard for how agents discover and call external tools. It is
now widely adopted across major agent platforms, with both hosted and
self-hosted servers available.

Subagent B: cost and effort to adopt for our stack
Connecting a hosted server is a few lines of code. Building our own server to
expose internal tools is a small project, not a large one. The main cost is
writing good tool descriptions, not the wiring.

Subagent C: risks and alternatives
The main risk is over-exposing internal actions to agents without guardrails.
The alternative, hand-written one-off integrations, is faster for a single
tool but does not compose and has to be rebuilt for every agent.

## Synthesis

Summary: adopting MCP is low-effort and high-leverage for our internal tools,
as long as we scope what each server is allowed to expose.

Key points:
- Consuming hosted servers is nearly free to try.
- Exposing our own tools as one server lets every agent reuse them.
- The real work is tool descriptions and access scoping, not plumbing.

Sources: subagent A (standard and adoption), B (effort), C (risks).

Gaps: no firsthand numbers on our specific tool latency under MCP. Worth a
small spike before committing.

Recommendation: run a one-week spike exposing two internal tools through one
MCP server, behind read-only scopes, then decide.`,
        },
      },
      {
        title: "Deploy to a Sandbox",
        body: "Get your agent running in an isolated environment it can't escape from. We recommend E2B, a cloud sandbox built for agents with a free tier. A local Docker container works as a no-account fallback, and Modal is an option if you prefer Python or need GPUs. Experience what real production agent infrastructure looks like before you need it.",
        deliverable:
          "An agent running in a sandbox you can invoke remotely. Document the setup in a README.",
        hints: [
          "Start the agent in the sandbox with the narrowest permissions that still let it do the task. You can always widen them later.",
          "Treat the sandbox as disposable. Boot it, run the task, tear it down. Do not keep state in it you cannot afford to lose.",
          "Get one remote invocation working end to end before adding anything else: send a prompt, run in the sandbox, return the result.",
          "Write the README as you go. The setup steps you had to work out are exactly what the deliverable documents.",
        ],
        example: {
          label: "Example setup README",
          format: "code",
          content: `# Running my-agent in an E2B sandbox

This documents how to run the agent inside an isolated cloud sandbox you can
invoke remotely, so an agent with shell access never runs unbounded on your
own machine.

## Why a sandbox
The agent can run shell commands. A sandbox bounds the blast radius: it is
isolated, disposable, and separate from your laptop.

## Prerequisites
- An E2B account and API key (the free tier includes credits).
- Node 18 or newer.

## 1. Install
   npm i e2b

## 2. Set your key
   export E2B_API_KEY=e2b_your_key_here

## 3. Boot a sandbox and run the agent inside it
   import { Sandbox } from "e2b";

   const sandbox = await Sandbox.create();      // isolated microVM, boots in ~200ms
   await sandbox.files.write("/agent/index.js", agentSource);
   const result = await sandbox.commands.run(
     "node /agent/index.js 'summarize the open issues in repo X'"
   );
   console.log(result.stdout);
   await sandbox.kill();

## 4. Invoke it remotely
Wrap the script above in a small endpoint, or a CLI you can run from anywhere.
You send a prompt, the sandbox runs the agent, and you get the result back.
The sandbox is torn down when the run finishes.

## Local fallback (no account)
If you would rather not sign up, run the same agent inside a local Docker
container instead:
   docker build -t my-agent .
   docker run --rm -e OPENAI_API_KEY my-agent "your prompt"
This gives you isolation but not the remote, production-like experience.

## Alternative
Modal is a good fit if you prefer Python or need GPUs. The idea is the same:
the agent runs in an isolated environment, not on your machine.`,
        },
      },
    ],
    optional: [
      {
        title: "Relationship memory",
        time: "~2 hrs",
        body: 'Add a memory category for people. When your agent hears you mention someone (a colleague, a stakeholder, a candidate), it stores their name, your relationship, and any commitments or context. Next session: ask "what do I know about Alex?" and it retrieves everything. Ask "who do I owe a follow-up?" and it surfaces them. The memory schema: { name, relationship, lastMentioned, commitments[], notes }.',
      },
      {
        title: "Research memory",
        time: "~2 hrs",
        body: "Extend your agent's memory to track topics you've researched. Every research brief it produces gets stored: topic, key findings, sources, date. Next time you ask about a related topic, it retrieves what it already knows before searching, avoids repeating itself, and flags when new information contradicts something it told you before. Compounding knowledge instead of starting from scratch every session.",
      },
    ],
    concepts: [
      ["Agent memory", "Mechanisms for persisting information across sessions; distinct from context, which resets each session"],
      ["Episodic memory", "Memory of specific past events and interactions; what happened in previous sessions"],
      ["Semantic memory", "Memory of general facts and knowledge the agent has accumulated; things it has learned, not just experienced"],
      ["Procedural / preference memory", "Memory of how to do things and how the user likes things done; stored skills, preferences, workflows"],
      ["Retrieval", "Scoring stored memories by relevance to the current task and injecting the top results into context"],
      ["Memory compaction", "Summarizing and pruning memory that has grown too large; the same principle as context compaction"],
      ["Subagent", "An agent spun up to handle a specific subtask, keeping the main context clean and focused"],
      ["Orchestrator", "An agent that coordinates other agents; assigns work, manages context handoffs, and merges results"],
      ["Subagents-as-tools", "The Vercel AI SDK pattern: one agent calls another by invoking it as a tool in the tool loop"],
      ["Critic agent", "A subagent whose sole purpose is to check another agent's output; a second opinion built into the pipeline"],
      ["Parallel fan-out", "Running multiple subagents simultaneously on different subtasks, then merging their outputs"],
      ["Claude Code subagents", "How Claude Code spins up subagents to keep the main context clean; same principle, different harness"],
      ["Sandboxing", "Running an agent in an isolated environment where its actions can't affect systems outside the defined scope"],
      ["Least-privilege access", "Giving an agent only the permissions it needs for the current task; no more"],
      ["E2B / Modal", "Cloud sandbox environments for running agents in isolation without risk to your local system"],
      ["Context bleed", "When one agent's context inappropriately influences another's; prevented by isolation and clean handoffs"],
    ],
    practices: [
      ["Treat memory like a database, not an afterthought.", "Decide what to remember, how long to keep it, and what triggers forgetting, before you wire up persistence, not after."],
      ["Always sandbox agents with shell access.", "If it can run arbitrary commands, it should run them somewhere the blast radius is bounded."],
      ["Log every tool call in multi-agent systems.", "When something misbehaves, the logs are the only way to understand what happened."],
      ["Don't add subagents for the sake of it.", "Subagents add real coordination overhead. Add them when isolation genuinely helps, not because it's architecturally interesting."],
    ],
  },

  {
    num: "04",
    slug: "4",
    tag: "Autonomy",
    capability: "Runs on its own",
    capabilityLine:
      "By the end of this week, your agent works while you sleep: long-running tasks, browser automation, background jobs, and a live streaming UI.",
    title: "Build Your",
    titleEm: "Async Agent",
    desc: "Make it work while you're not watching. Long-running tasks, browser automation, background jobs, and a live streaming UI: the full autonomous loop.",
    wow: "You give it a task, close your laptop, come back to a finished deliverable.",
    videoUrl: null,
    cardTopics: [
      "Async task queues + background jobs",
      "Playwright browser automation",
      "Streaming output to a React UI",
      "Long-running agent patterns",
    ],
    mainProject: {
      summary:
        "Make my-agent async and long-running. Add an async task queue, background job processing, and a Playwright browser subagent that can browse, screenshot, and extract from the web. Wrap it all in a React streaming UI (Vite + Express SSE) so results appear live as the agent works.",
      deliverable:
        'Type a prompt into the React UI, e.g., "research the top 3 AI coding tools and write a competitive brief." Close your terminal (not the server). Come back. The brief is waiting. Show the streaming UI update in real time during the demo.',
    },
    topics: [
      "Async task queues: fire a job, resume context, return the result later",
      "Background agent jobs: the agent works independently of the user session",
      "Remote coding agents: how ChatGPT Codex and Claude Code on the web run coding tasks remotely (dispatch a task, close your laptop, come back to a PR); the same fire-and-forget pattern you're building here, productized",
      "Playwright browser subagent: browse, click, screenshot, extract, at scale",
      "Streaming output via SSE: results appear in the React UI as they're generated (streamText)",
      "Security + threat modeling: prompt injection, privilege escalation, data leakage; know the attack surface",
      "The critic agent pattern (applied to security): audit every tool call before execution",
      "Guardrails: structured output validation at every step; fail gracefully, not silently",
      "HITL vs. YOLO: approval queues for high-risk actions, async pause/resume, and interfaces that give humans enough context to decide",
      "Halt-on-failure: recognizing when an agent is heading somewhere unrecoverable",
      "Evals and LLM-as-judge: custom rubrics, scoring pipelines, and the gotchas of judging output with a model",
      "Self-reflection: prompting the agent to critique its own output before returning results",
      "Operational efficiency: prompt caching, model routing per step, token budgeting",
      "Reliability: max-iteration limits and partial-completion recovery so a stuck agent fails fast and resumes cleanly",
      "Observability in production: end-to-end tracing of tool calls and I/O, incident response, and feeding failures back into your eval suite",
      "Org / team angle: shared scoped agent access, approval workflows that fit existing eng processes, and introducing agentic tools to a skeptical team",
    ],
    assignments: [
      {
        title: "AI Security CTF",
        body: "Attack a deliberately vulnerable agent setup. Your targets: prompt injection, goal manipulation, data exfiltration. Then fix everything you exploited. Reference: OWASP FinBot (\"the Juice Shop for agentic AI\") and Agent 0DIN by Mozilla.",
        deliverable:
          "A write-up documenting: (1) vulnerabilities found, (2) how you exploited them, (3) the fixes you implemented, and (4) one vulnerability you tried but couldn't exploit, and why.",
      },
      {
        title: "Productionize Your Stack",
        body: "Wire up observability to your running agent (Sentry, PostHog, or a simple structured log). Build an eval suite with at least 3 test cases against your agent using LLM-as-judge. Finalize your AGENTS.md and skills documentation.",
        deliverable:
          "A repo that a new teammate could clone, read the docs, and be productive with your agent setup within 30 minutes.",
      },
    ],
    optional: [
      {
        title: "Morning digest",
        time: "~3 hrs",
        body: "Add a scheduled job (cron or a simple setInterval on a server) that runs at 8am. It reads your calendar for the day, pulls any open Linear tickets assigned to you, and generates a plain-English briefing: what's on your plate, what needs attention, one thing to tackle first. Deliver it via iMessage using the macOS osascript shell command; no API needed if you're on a Mac.",
      },
      {
        title: "Weekly research digest",
        time: "~3 hrs",
        body: "Every Friday afternoon, your agent reads the week's content in your domain (RSS feeds, newsletters, Hacker News, whatever sources you configure), synthesizes what's worth your attention, and streams a digest to the React UI you built this week. The output: what matters, what you can skip, what contradicts something you believed last week.",
      },
    ],
    concepts: [
      ["Async task queue", "A system for accepting a job, processing it in the background, and returning the result when done; decouples submission from execution"],
      ["Long-running agent", "An agent that operates over minutes or hours, persists intermediate state, and can be resumed after interruption"],
      ["Remote coding agent", "A coding agent that executes in the cloud rather than on your machine (e.g. ChatGPT Codex, Claude Code on the web); you dispatch a task, it runs remotely, and returns a PR or result"],
      ["State persistence", "Storing agent progress so a long-running session can be resumed after interruption"],
      ["SSE (Server-Sent Events)", "A protocol for streaming server-to-client updates over HTTP; how the React UI receives live agent output"],
      ["streamText", "The Vercel AI SDK's streaming counterpart to generateText; emits tokens as they're generated"],
      ["Prompt injection", "An attack where malicious content in the environment tricks the agent into following instructions from an untrusted source"],
      ["Privilege escalation", "An agent gaining access to resources or actions it wasn't authorized for, often through tool misuse"],
      ["Threat modeling", "Systematically identifying what can go wrong in an agentic system before it goes wrong in production"],
      ["Guardrails", "Validation logic that checks an agent's outputs at each step; fails gracefully when something is wrong"],
      ["Halt-on-failure", "A pattern where the agent stops and requests human input rather than continuing toward an unrecoverable state"],
      ["HITL (Human-in-the-loop)", "A mode where a human reviews or approves agent actions at defined checkpoints"],
      ["Approval queue", "A buffer where high-risk agent actions wait for human sign-off before executing, instead of running immediately"],
      ["Async approval (pause/resume)", "Pausing a long-running agent at a checkpoint, surfacing it for a human decision, then resuming cleanly once approved"],
      ["Scoped team access", "Shared agent access with per-user, per-action permission scopes a team can trust, wired into existing approval workflows"],
      ["YOLO mode", "Fully autonomous execution; appropriate when the task is low-risk, well-understood, and reversible"],
      ["Critic agent", "A secondary agent that reviews every tool call before execution, flagging anything that looks risky"],
      ["Self-reflection", "A prompting pattern where the agent critiques its own output before returning it"],
      ["LLM-as-judge", "Using a model to evaluate another model's output; fast and scalable, but has biases to account for"],
      ["Evals", "A test suite for agent behavior: test cases, a rubric, a judge model, and score aggregation"],
      ["Eval rubric", "The explicit scoring criteria a judge applies to agent output; a good rubric is what makes LLM-as-judge scores meaningful"],
      ["Scoring pipeline", "The automated flow that runs test cases, collects outputs, applies the judge plus rubric, and aggregates scores"],
      ["Regression testing", "Running an eval suite after every prompt change to catch capability regressions"],
      ["Prompt caching", "A technique to reuse previously computed prompt prefixes; reduces cost and latency on repeated calls"],
      ["APO (Automatic Prompt Optimization)", "Using LLMs to systematically improve prompts through structured feedback loops; frameworks like DSPy automate the optimization"],
      ["Observability", "The ability to understand what an agent did, when, and why; through logs, traces, and metrics"],
      ["End-to-end tracing", "Capturing every tool call, model input, and output across a run so you can reconstruct exactly what the agent did and why"],
      ["Incident response", "A defined process for when a live agent misbehaves: detect, contain, diagnose from traces, and feed the failure back into the eval suite"],
      ["Drift detection", "Monitoring for changes in agent behavior that happen without a code change (e.g., after a model update)"],
      ["Error handling", "Patterns for catching agent failures, feeding error context back to the model, and recovering partial work"],
      ["Max-iteration limit", "A hard cap on tool-loop iterations so a stuck agent fails fast instead of looping forever or burning budget"],
      ["Partial-completion recovery", "Salvaging and resuming the work an agent finished before it failed, rather than restarting the whole task"],
    ],
    practices: [
      ["Build your threat model before your agent.", "Five minutes of threat modeling prevents five hours of incident response."],
      ["Scope permissions to the minimum viable set.", "You can always expand. You can't undo data exfiltration."],
      ["Make approval interfaces that give humans context.", "A yes/no button with no context is worse than no approval at all."],
      ["Evals are not optional.", "If you can't measure whether your agent is getting better or worse, you can't improve it systematically."],
      ["Build feedback loops from day one.", "Every real production failure is a test case waiting to be written."],
      ["Optimize last.", "Get it working correctly, then make it fast and cheap. Premature optimization in agent systems is especially wasteful."],
      ["Monitor for drift, not just errors.", "Model behavior can change without a code change. Your observability stack needs to catch this."],
    ],
  },
];

export const weekBySlug = Object.fromEntries(weeks.map((w) => [w.slug, w]));

// --- Alternative throughlines (synced from curriculum.md) ---

export const throughlineIntro =
  "The default throughline is coding (point the agent at a GitHub repo), but the architecture is the same no matter what you build for. Only the target changes: what you point it at in Week 1, which service you wire up in Week 2, what it remembers in Week 3, and what it runs on a schedule in Week 4. If you aren't an engineer, pick one of the tracks below and carry it across all four weeks instead.";

export const throughlineTable = {
  columns: ["Coding (default)", "Product Manager", "Chief of Staff"],
  rows: [
    {
      label: "1 · Reads & reasons",
      cells: [
        "Point it at a GitHub repo; ask about the code",
        "Point it at PRDs/specs + a tickets export; ask about feature state",
        "Point it at notes/docs + a calendar/inbox export; ask what today needs",
      ],
    },
    {
      label: "2 · Takes action",
      cells: [
        "Code-focused skills; GitHub/Linear MCP",
        "triage-feedback + write-release-notes skills; Linear MCP",
        "prebrief-meeting + draft-followup skills; Google Calendar / Gmail MCP",
      ],
    },
    {
      label: "3 · Remembers",
      cells: [
        "Code conventions, past decisions",
        "Product decisions, stakeholders, recurring customer themes",
        "People + commitments, recurring meetings, your preferences",
      ],
    },
    {
      label: "4 · Runs on its own",
      cells: [
        "Async build/triage, streamed to the UI",
        "8am roadmap digest + drafted tickets behind an approval gate",
        "8am brief + meeting-prep heartbeats + drafted follow-ups, approval before send",
      ],
    },
  ],
};

export const throughlineTracks = [
  {
    id: "pm",
    name: "The Product Manager",
    lede: "Instead of a GitHub repo, point the agent at your product surface: PRDs, specs, roadmap docs, and an export of your tickets and customer feedback. By Week 4 it's an always-on product chief of staff: it reports what moved on the roadmap overnight, turns raw feedback into draft tickets, and waits for your approval before filing anything.",
    weeks: [
      ["Week 1 · Reads & reasons", 'my-agent reads a folder of PRDs/specs plus an exported tickets file. Ask "what\'s the state of the checkout redesign?" or "which open tickets mention latency?" and get cited answers. Your AGENTS.md encodes your role, your product area, your definition of done, and how you like status phrased.'],
      ["Week 2 · Takes action", "Build triage-feedback (raw feedback in, { theme, severity, affectedFeature, suggestedTicket } out) and write-release-notes (closed tickets in, an impact-grouped changelog out). Connect the Linear MCP so it can read tickets and, on approval, create them. Expose my-agent as an MCP server so teammates can call your \"product brain\" as a tool."],
      ["Week 3 · Remembers", 'Persist product decisions and their rationale, stakeholders and what each cares about, and recurring customer themes over time, so it can say "this is the fourth SSO request this quarter." Parallel subagents run competitive fan-out (one per competitor) merged into a single brief.'],
      ["Week 4 · Runs on its own", "An 8am roadmap digest (overnight Linear changes, blockers, the one decision that needs you today) streamed to the React UI. A Playwright browser subagent pulls competitor changelog and pricing pages for a weekly brief. Drafted tickets wait in an approval queue you clear from Slack or your phone."],
    ],
  },
  {
    id: "cos",
    name: "The Chief of Staff",
    lede: "Instead of a GitHub repo, point the agent at your work life: your notes and docs plus an export of your calendar and inbox. By Week 4 it's a 24/7 chief of staff: it briefs you at 8am, preps you 15 minutes before each meeting, and drafts your follow-ups, sending nothing without your nod.",
    weeks: [
      ["Week 1 · Reads & reasons", 'my-agent reads a folder of meeting notes and docs (optionally a calendar/inbox export). Ask "what\'s on my plate today, and what do I need walking into the 10am?" Your AGENTS.md encodes your role, your key people, your communication style, and hard rules like "never auto-send to the exec team."'],
      ["Week 2 · Takes action", "Build prebrief-meeting (an event plus linked docs in, { attendees, context, openItems, talkingPoints } out) and draft-followup (meeting notes in, a follow-up email plus owned action items out). Connect the Google Calendar MCP and optionally Gmail. Expose my-agent as MCP so other tools can ask \"what's on my plate Thursday?\""],
      ["Week 3 · Remembers", "Use the people schema ({ name, relationship, lastMentioned, commitments[], notes }) plus recurring-meeting context and your formatting preferences. Subagents gather across calendar, docs, and tickets in parallel to assemble one prep doc."],
      ["Week 4 · Runs on its own", "The 8am morning digest (calendar plus open tasks plus what needs attention), meeting-prep heartbeats 15 minutes before each event, delivered via Slack or iMessage. Drafted follow-up emails wait for approval before sending."],
    ],
  },
];

export const throughlineClosing =
  "Both tracks deliberately create things on your behalf (a filed ticket, a sent email), which is exactly why Week 4's human-in-the-loop and approval-queue material matters. Same codebase, same four capabilities; you choose what they point at.";
