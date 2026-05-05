import WeekCard from "./WeekCard.jsx";
import { weeks } from "../data/weeks.js";

export default function Curriculum() {
  return (
    <section className="curriculum container" id="curriculum">
      <div className="section-header reveal">
        <div className="num">§ Curriculum</div>
        <h2>
          Five weeks. One <em>agent</em> that grows.
        </h2>
        <div className="lead">
          Every week you ship something real and add a new capability to the
          same agent. By week five it can plan, build, review, and open PRs on
          its own.
        </div>
      </div>

      <div className="weeks">
        {weeks.map((w) => (
          <WeekCard key={w.num} week={w} />
        ))}
      </div>

      <div className="tools reveal" id="tools">
        <h3>
          Two tools, <em>used well.</em>
        </h3>
        <div className="tools-grid">
          <div className="tool-card">
            <div className="label">Primary</div>
            <div className="name">Claude Code</div>
            <div className="body">
              Plan mode, hooks, skills, subagents, worktrees. The full surface,
              not just the chat box.
            </div>
          </div>
          <div className="tool-card">
            <div className="label">Companion</div>
            <div className="name">Codex</div>
            <div className="body">
              For when a different harness fits the job better. You'll learn
              when to reach for which.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
