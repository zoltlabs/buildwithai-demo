import { Link } from "react-router-dom";

export default function WeekCard({ week }) {
  return (
    <Link to={`/course/week/${week.slug}`} className="week reveal">
      <div className="week-head">
        <span className="week-num">Week {week.num}</span>
        <span className="week-tag">{week.tag}</span>
      </div>
      <h3>
        {week.title} <em>{week.titleEm}</em>
      </h3>
      <p className="desc">{week.desc}</p>
      {week.wow && <blockquote className="wow">{week.wow}</blockquote>}
      <ul className="topics">
        {week.cardTopics.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <span className="week-open">Open week {week.slug} →</span>
    </Link>
  );
}
