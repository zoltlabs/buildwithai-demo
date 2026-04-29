export const weeks = [
  {
    num: "01",
    tag: "Foundations",
    title: "Codebase",
    titleEm: "Q&A Agent",
    desc: "Point an agent at any repo and ask it questions in plain English. The primitives everything else is built on.",
    topics: [
      "The Plan / Execute / Clear loop",
      "CLAUDE.md and system prompts",
      "Model routing — Haiku, Sonnet, Opus",
      "Zero-shot, few-shot, chain-of-thought",
    ],
  },
  {
    num: "02",
    tag: "Tools",
    title: "OpenClaw",
    titleEm: "Agent",
    desc: "An agent with real hands — shell, database, and API access — wired up to do actual work in your stack.",
    topics: [
      "Context engineering in practice",
      "Skills with strict input/output contracts",
      "MCP fundamentals and building your own",
      "Persistent agent memory across sessions",
    ],
  },
  {
    num: "03",
    tag: "Multi-agent",
    title: "Research",
    titleEm: "Brief Agent",
    desc: "Give it a topic. It browses, reads, takes screenshots, and produces a sourced brief — the kind of work everyone does manually today.",
    topics: [
      "Subagents and orchestration",
      "Computer use and screenshot loops",
      "Building your own MCP server",
      "Streaming output to a live UI",
    ],
  },
  {
    num: "04",
    tag: "Autonomy",
    title: "Codex Symphony",
    titleEm: "Walkthrough",
    desc: "An autonomous engineer that takes a ticket, plans, builds, reviews, tests, and opens a PR — with minimal hand-holding.",
    topics: [
      "Orchestrating the ticket → PR pipeline",
      "Self-review and the sprint structure",
      "Evals and LLM-as-judge",
      "Parallel sprints with git worktrees",
    ],
  },
];
