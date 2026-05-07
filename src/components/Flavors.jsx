const flavors = [
  {
    id: "dev",
    tag: "For engineers",
    title: "The Dev Agent",
    desc: "Reads your codebase, runs your tests, triages your issues. Knows your conventions and your stack.",
    by4: "Reads 6 months of GitHub issues, identifies the three highest-impact bugs, writes the fixes, runs the tests, and opens PRs — while you sleep.",
  },
  {
    id: "research",
    tag: "For knowledge workers",
    title: "The Research Agent",
    desc: "Browses, reads, and synthesizes. Give it a topic and come back to a finished brief.",
    by4: "Spins up 8 browser agents in parallel, each crawling a different source. Delivers a structured brief with direct quotes, screenshots, and citations — before your next meeting.",
  },
  {
    id: "work",
    tag: "For operators + founders",
    title: "The Work Agent",
    desc: "Reads your Linear, GitHub, and calendar. Knows what's on fire before you do.",
    by4: "Every morning: reads your board, flags what's about to slip, drafts the three messages that need to go out, and tells you the one thing that actually needs your attention today.",
  },
  {
    id: "personal",
    tag: "You define it",
    title: "Your Agent",
    desc: "Fitness, learning, creative work — whatever you actually want an agent for. The architecture is the same. The use case is yours.",
    by4: "Tracks your goals, notices your patterns, and remembers what you said mattered — across every session, getting sharper every time you use it.",
  },
];

export default function Flavors() {
  return (
    <section className="flavors container" id="flavors">
      <div className="section-header reveal">
        <div className="num">§ Build Your Way</div>
        <h2>
          Your agent. <em>Your use case.</em>
        </h2>
        <div className="lead">
          The architecture is identical every week. What you build it
          for is entirely up to you.
        </div>
      </div>

      <div className="flavors-grid">
        {flavors.map((f) => (
          <div className="flavor-card reveal" key={f.id}>
            <div className="flavor-tag">{f.tag}</div>
            <div className="flavor-title">{f.title}</div>
            <p className="flavor-desc">{f.desc}</p>
            <div className="flavor-by4">
              <span className="flavor-by4-label">By week 4 —</span> {f.by4}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
