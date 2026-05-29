import { useParams, Link, Navigate } from "react-router-dom";
import { weekBySlug, weeks } from "../data/curriculum.js";
import { useReveal } from "../hooks/useReveal.js";

export default function WeekPage() {
  const { slug } = useParams();
  useReveal();

  const week = weekBySlug[slug];
  if (!week) return <Navigate to="/course" replace />;

  const idx = weeks.findIndex((w) => w.slug === slug);
  const prev = weeks[idx - 1];
  const next = weeks[idx + 1];

  return (
    <article className="cw">
      <div className="cw-eyebrow">
        Week {week.slug} · {week.tag}
      </div>
      <h1 className="cw-title">
        {week.title} <em>{week.titleEm}</em>
      </h1>
      <div className="cw-superpower">
        <span className="cw-superpower-tag">By week's end</span>
        <span className="cw-superpower-line">{week.capabilityLine}</span>
      </div>

      {/* LIVE SESSION */}
      <section className="cw-section reveal">
        <h2 className="cw-h2">
          <span className="cw-h2-k">01</span> Live session
        </h2>
        <div className="cw-video">
          {week.videoUrl ? (
            <iframe
              src={week.videoUrl}
              title={`Week ${week.slug} live session`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className="cw-video-empty">
              <span className="cw-video-play">▶</span>
              <div className="cw-video-msg">Recording coming soon</div>
              <div className="cw-video-sub">
                The Week {week.slug} live session will be posted here after the
                cohort meets.
              </div>
            </div>
          )}
        </div>
      </section>

      {/* THE BUILD */}
      <section className="cw-section reveal">
        <h2 className="cw-h2">
          <span className="cw-h2-k">02</span> The build
        </h2>
        <p className="cw-body">{week.mainProject.summary}</p>
        <div className="cw-deliverable">
          <span className="cw-deliverable-label">Deliverable</span>
          <p>{week.mainProject.deliverable}</p>
        </div>
      </section>

      {/* TOPICS */}
      <section className="cw-section reveal">
        <h2 className="cw-h2">
          <span className="cw-h2-k">03</span> What we cover
        </h2>
        <ul className="cw-topics">
          {week.topics.map((t, i) => (
            <li key={i}>{t}</li>
          ))}
        </ul>
      </section>

      {/* ASSIGNMENTS */}
      <section className="cw-section reveal">
        <h2 className="cw-h2">
          <span className="cw-h2-k">04</span> Assignments
        </h2>
        <p className="cw-section-note">
          Two mini-projects to reinforce the week on your own time.
        </p>
        <div className="cw-cards">
          {week.assignments.map((a, i) => (
            <div className="cw-card" key={i}>
              <div className="cw-card-tag">Assignment {i + 1}</div>
              <h3 className="cw-card-title">{a.title}</h3>
              <p className="cw-card-body">{a.body}</p>
              <div className="cw-card-deliverable">
                <span className="cw-deliverable-label">Deliverable</span>
                <p>{a.deliverable}</p>
              </div>

              {a.example && (
                <details className="cw-disclosure">
                  <summary>Example deliverable</summary>
                  <div className="cw-disclosure-body">
                    {a.example.label && (
                      <div className="cw-example-label">{a.example.label}</div>
                    )}
                    {a.example.format === "code" ? (
                      <pre className="cw-example-code">
                        <code>{a.example.content}</code>
                      </pre>
                    ) : (
                      a.example.content.split("\n\n").map((para, j) => (
                        <p className="cw-example-prose" key={j}>
                          {para}
                        </p>
                      ))
                    )}
                  </div>
                </details>
              )}

              {a.hints && a.hints.length > 0 && (
                <details className="cw-disclosure">
                  <summary>Hints</summary>
                  <div className="cw-disclosure-body">
                    <ul className="cw-hints">
                      {a.hints.map((h, j) => (
                        <li key={j}>{h}</li>
                      ))}
                    </ul>
                  </div>
                </details>
              )}

              {a.references && a.references.length > 0 && (
                <details className="cw-disclosure">
                  <summary>References</summary>
                  <div className="cw-disclosure-body">
                    {a.referencesNote && (
                      <p className="cw-ref-note">{a.referencesNote}</p>
                    )}
                    <ul className="cw-refs">
                      {a.references.map((r, j) => (
                        <li key={j}>
                          <a
                            href={r.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {r.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </details>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* GOING FURTHER */}
      <section className="cw-section reveal">
        <h2 className="cw-h2">
          <span className="cw-h2-k">05</span> Going further
        </h2>
        <p className="cw-section-note">
          Optional projects if you want to push the week further. Pick whichever
          fits.
        </p>
        <div className="cw-optional">
          {week.optional.map((o, i) => (
            <div className="cw-opt" key={i}>
              <div className="cw-opt-head">
                <span className="cw-opt-title">{o.title}</span>
                <span className="cw-opt-time">{o.time}</span>
              </div>
              <p className="cw-opt-body">{o.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONCEPTS */}
      <section className="cw-section reveal">
        <h2 className="cw-h2">
          <span className="cw-h2-k">06</span> Concepts reference
        </h2>
        <dl className="cw-concepts">
          {week.concepts.map(([term, def], i) => (
            <div className="cw-concept" key={i}>
              <dt>{term}</dt>
              <dd>{def}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* ENGINEERING PRACTICES */}
      <section className="cw-section reveal">
        <h2 className="cw-h2">
          <span className="cw-h2-k">07</span> Engineering practices
        </h2>
        <ul className="cw-practices">
          {week.practices.map(([head, body], i) => (
            <li key={i}>
              <strong>{head}</strong> {body}
            </li>
          ))}
        </ul>
      </section>

      {/* PREV / NEXT */}
      <nav className="cw-pager">
        {prev ? (
          <Link to={`/course/week/${prev.slug}`} className="cw-pager-link prev">
            <span className="cw-pager-dir">← Week {prev.slug}</span>
            <span className="cw-pager-sup">{prev.capability}</span>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link to={`/course/week/${next.slug}`} className="cw-pager-link next">
            <span className="cw-pager-dir">Week {next.slug} →</span>
            <span className="cw-pager-sup">{next.capability}</span>
          </Link>
        ) : (
          <Link to="/course/throughlines" className="cw-pager-link next">
            <span className="cw-pager-dir">Throughlines →</span>
            <span className="cw-pager-sup">Build it your way</span>
          </Link>
        )}
      </nav>
    </article>
  );
}
