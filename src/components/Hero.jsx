export default function Hero() {
  return (
    <header className="hero">
      <div className="container">
        <div className="hero-meta">
          <span className="pip"></span>
          <span>Cohort 01 · Five weeks · Live + async</span>
        </div>
        <h1>
          <span className="l1">Build </span>
          <span className="l1 em">with</span>
          <br />
          <span className="l2">AI.</span>
        </h1>
        <div className="hero-sub">
          <p>
            A five-week curriculum for people who want to{" "}
            <span className="accent">actually ship</span> with Claude Code and
            Codex — not just prompt around.
          </p>
          <div className="hero-actions">
            <a href="#apply" className="btn btn-solid">
              Apply for Cohort 01
            </a>

            <a href="#curriculum" className="btn btn-ghost">
              See the build
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
