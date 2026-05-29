import { Link, NavLink, Outlet } from "react-router-dom";
import { weeks } from "../data/curriculum.js";

const linkClass = ({ isActive }) =>
  isActive ? "course-link active" : "course-link";

export default function CourseLayout() {
  return (
    <div className="course">
      <aside className="course-sidebar">
        <Link to="/" className="course-brand">
          <span className="mark"></span>
          <span>Build with AI</span>
        </Link>

        <div className="course-rail">
          <div className="course-rail-label">Course</div>
          <nav className="course-nav">
            <NavLink to="/course" end className={linkClass}>
              <span className="course-link-k">00</span>
              <span className="course-link-t">Overview</span>
            </NavLink>
            {weeks.map((w) => (
              <NavLink
                key={w.slug}
                to={`/course/week/${w.slug}`}
                className={linkClass}
              >
                <span className="course-link-k">{w.num}</span>
                <span className="course-link-t">
                  Week {w.slug}
                  <em>{w.capability}</em>
                </span>
              </NavLink>
            ))}
            <NavLink to="/course/throughlines" className={linkClass}>
              <span className="course-link-k">↳</span>
              <span className="course-link-t">Throughlines</span>
            </NavLink>
          </nav>

          <Link to="/" className="course-back">
            ← Back to site
          </Link>
        </div>
      </aside>

      <main className="course-content">
        <Outlet />
      </main>
    </div>
  );
}
