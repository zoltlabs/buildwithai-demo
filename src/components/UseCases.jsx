const cases = [
  {
    tag: "Fitness",
    title: "Your Personal Coach",
    body: "Remembers your PRs, plans your training week, and adjusts when life gets in the way.",
  },
  {
    tag: "Engineering",
    title: "Your GitHub Copilot",
    body: "Reviews PRs, triages issues, opens branches, and follows your team's conventions — not a generic model's.",
  },
  {
    tag: "Research",
    title: "Your Knowledge Base",
    body: "Browses papers and articles, surfaces what matters, and builds a searchable second brain over time.",
  },
  {
    tag: "Writing",
    title: "Your Creative Partner",
    body: "Remembers your characters, voice, and plot threads. Picks up exactly where you left off.",
  },
  {
    tag: "Work",
    title: "Your Meeting Agent",
    body: "Takes notes, extracts action items, follows up — so you actually remember what you decided.",
  },
  {
    tag: "Business",
    title: "Your Sales Assistant",
    body: "Tracks leads, drafts outreach, and remembers every conversation — across your whole pipeline.",
  },
];

export default function UseCases() {
  return (
    <section className="usecases container" id="usecases">
      <div className="section-header reveal">
        <div className="num">§ What You'll Build</div>
        <h2>
          Your agent. <em>Your rules.</em>
        </h2>
        <div className="lead">
          The architecture is the same. What you point it at is entirely up to
          you.
        </div>
      </div>

      <div className="usecases-grid">
        {cases.map((c) => (
          <div className="usecase-card reveal" key={c.title}>
            <div className="usecase-tag">{c.tag}</div>
            <div className="usecase-title">{c.title}</div>
            <p className="usecase-body">{c.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
