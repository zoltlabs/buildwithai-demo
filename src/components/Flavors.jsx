const flavors = [
  {
    id: "dev",
    tag: "For engineers",
    title: "The Dev Agent",
    desc: "Reviews PRs, triages issues, runs tests, and explains errors. Points at your GitHub repos and knows your codebase.",
    by4: "Autonomously reviews a PR, posts inline comments, and opens a fix branch.",
  },
  {
    id: "research",
    tag: "For knowledge workers",
    title: "The Research Agent",
    desc: "Browses the web, reads papers and articles, and builds a sourced brief on any topic — the kind of work everyone does manually today.",
    by4: "You give it a topic. It comes back with a complete, sourced brief while you were in a meeting.",
  },
  {
    id: "work",
    tag: "For operators + founders",
    title: "The Work Agent",
    desc: "Reads your Linear, GitHub, and email. Extracts what needs doing, drafts responses, and tracks what you said you'd follow up on.",
    by4: "Starts every morning by telling you the three things that actually need your attention today.",
  },
  {
    id: "personal",
    tag: "You define it",
    title: "The Personal Agent",
    desc: "Fitness, learning, creative work, journaling — whatever you actually want an agent for. The architecture is the same. The use case is yours.",
    by4: "An agent that knows you well enough to be useful without being asked.",
  },
];

export default function Flavors() {
  return (
    <section className="flavors container" id="flavors">
      <div className="section-header reveal">
        <div className="num">§ Pick Your Agent</div>
        <h2>
          One architecture. <em>Four agents.</em>
        </h2>
        <div className="lead">
          Pick your flavor on day one. Every week you add a new capability
          to the same agent.
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
