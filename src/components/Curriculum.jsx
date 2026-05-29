import { Link } from "react-router-dom";
import WeekCard from "./WeekCard.jsx";
import { weeks } from "../data/curriculum.js";

export default function Curriculum() {
  return (
    <section className="curriculum container" id="curriculum">
      <div className="section-header reveal">
        <div className="num">§ Curriculum</div>
        <h2>
          One <em>agent,</em> built up over four weeks.
        </h2>
        <div className="lead">
          Each week you add a new capability to the same agent. By week four it
          can browse, remember, write code, and run tasks in parallel, all
          built with AI.
        </div>
      </div>

      <div className="weeks">
        {weeks.map((w) => (
          <WeekCard key={w.slug} week={w} />
        ))}
      </div>

      <div className="curriculum-cta reveal">
        <p>Each week has a full page: live session, concepts, and assignments.</p>
        <Link to="/course" className="btn btn-solid">
          Enter the course →
        </Link>
      </div>

      <div className="tools reveal" id="tools">
        <h3>
          The two tools you'll <em>learn.</em>
        </h3>
        <div className="tools-grid">
          <div className="tool-card">
            <div className="label">Primary</div>
            <div className="name">Claude Code</div>
            <div className="body">
              Plan mode, hooks, skills, subagents, and worktrees, not just the
              chat box.
            </div>
          </div>
          <div className="tool-card">
            <div className="label">Companion</div>
            <div className="name">Codex</div>
            <div className="body">
              A second harness for the jobs it handles better. You'll learn when
              to use each one.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
