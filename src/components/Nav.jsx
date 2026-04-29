export default function Nav() {
  return (
    <nav>
      <div className="container">
        <div className="nav-inner">
          <div className="brand">
            <span className="mark"></span>
            <span>Build with AI</span>
          </div>
          <div className="nav-links">
            <a href="#curriculum">Curriculum</a>
            <a href="#tools">Tools</a>
            <a href="#apply" className="cta">
              Apply →
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
