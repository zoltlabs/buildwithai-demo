import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <div className="container">
        <div className="nav-inner">
          <Link to="/" className="brand">
            <span className="mark"></span>
            <span>Build with AI</span>
          </Link>
          <div className="nav-links">
            <a href="#curriculum">Curriculum</a>
            <Link to="/course">Course</Link>
            <a href="#apply" className="cta">
              Apply →
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
