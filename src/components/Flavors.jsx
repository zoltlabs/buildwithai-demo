const flavors = [
  {
    id: "dev",
    tag: "For engineers",
    title: "The Dev Agent",
    desc: "Reads your codebase, runs your tests, and triages your issues, following your conventions and your stack.",
    by4: "It reads months of GitHub issues, identifies the highest-impact bugs, writes and tests the fixes, and opens pull requests without supervision.",
  },
  {
    id: "research",
    tag: "For knowledge workers",
    title: "The Research Agent",
    desc: "Browses, reads, and synthesizes sources. Give it a topic and it returns a finished brief.",
    by4: "It runs several browser agents in parallel, each crawling a different source, then delivers a structured brief with quotes, screenshots, and citations.",
  },
  {
    id: "work",
    tag: "For operators and founders",
    title: "The Work Agent",
    desc: "Reads your Linear, GitHub, and calendar so it can tell you what needs attention.",
    by4: "Each morning it reads your board, flags what is about to slip, drafts the messages that need to go out, and tells you the one thing that needs your attention.",
  },
  {
    id: "personal",
    tag: "You define it",
    title: "Your Agent",
    desc: "Fitness, learning, or creative work, whatever you want an agent for. The architecture is the same; the use case is yours.",
    by4: "It tracks your goals, notices your patterns, and remembers what you said mattered, getting more useful with every session.",
  },
];

export default function Flavors() {
  return (
    <section className="flavors container" id="flavors">
      <div className="section-header reveal">
        <div className="num">§ Build Your Way</div>
        <h2>
          Build it for your <em>own use case.</em>
        </h2>
        <div className="lead">
          The architecture is the same every week. What you build it for is up
          to you.
        </div>
      </div>

      <div className="flavors-grid">
        {flavors.map((f) => (
          <div className="flavor-card reveal" key={f.id}>
            <div className="flavor-tag">{f.tag}</div>
            <div className="flavor-title">{f.title}</div>
            <p className="flavor-desc">{f.desc}</p>
            <div className="flavor-by4">
              <span className="flavor-by4-label">By week 4:</span> {f.by4}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
