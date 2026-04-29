export default function WeekCard({ week }) {
  return (
    <article className="week reveal">
      <div className="week-head">
        <span className="week-num">Week {week.num}</span>
        <span className="week-tag">{week.tag}</span>
      </div>
      <h3>
        {week.title} <em>{week.titleEm}</em>
      </h3>
      <p className="desc">{week.desc}</p>
      <ul className="topics">
        {week.topics.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    </article>
  );
}
