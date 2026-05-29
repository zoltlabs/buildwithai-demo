import { Link } from "react-router-dom";
import { weeks } from "../data/curriculum.js";
import { useReveal } from "../hooks/useReveal.js";

export default function CourseOverview() {
  useReveal();
  return (
    <div className="cw">
      <div className="cw-eyebrow">§ Course · Cohort 01</div>
      <h1 className="cw-title">
        One agent, <em>built up over four weeks.</em>
      </h1>
      <p className="cw-lead">
        You build one personal agent across all four weeks. Each week adds a new
        capability to the same codebase. By week four it reads code, takes real
        actions, remembers you, and works while you sleep. Pick a week to open
        its live session, concepts, and assignments.
      </p>

      <div className="cw-weeklist">
        {weeks.map((w) => (
          <Link
            key={w.slug}
            to={`/course/week/${w.slug}`}
            className="cw-weekrow reveal"
          >
            <div className="cw-weekrow-num">{w.num}</div>
            <div className="cw-weekrow-main">
              <div className="cw-weekrow-sup">
                Week {w.slug} · <em>{w.capability}</em>
              </div>
              <div className="cw-weekrow-title">
                {w.title} {w.titleEm}
              </div>
              <p className="cw-weekrow-desc">{w.desc}</p>
            </div>
            <div className="cw-weekrow-go">→</div>
          </Link>
        ))}
      </div>

      <div className="cw-overview-foot reveal">
        <div>
          <div className="cw-of-label">Not an engineer?</div>
          <p>
            Carry a non-coding track across all four weeks instead: Product
            Manager or Chief of Staff. Same codebase, same capabilities,
            different target.
          </p>
        </div>
        <Link to="/course/throughlines" className="btn btn-ghost">
          See throughlines →
        </Link>
      </div>
    </div>
  );
}
