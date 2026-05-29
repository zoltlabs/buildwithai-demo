import {
  throughlineIntro,
  throughlineTable,
  throughlineTracks,
  throughlineClosing,
} from "../data/curriculum.js";
import { useReveal } from "../hooks/useReveal.js";

export default function Throughlines() {
  useReveal();
  return (
    <div className="cw">
      <div className="cw-eyebrow">§ Build it your way</div>
      <h1 className="cw-title">
        Alternative <em>throughlines</em>
      </h1>
      <p className="cw-lead">{throughlineIntro}</p>

      <section className="cw-section reveal">
        <div className="cw-table-wrap">
          <table className="cw-table">
            <thead>
              <tr>
                <th>Week</th>
                {throughlineTable.columns.map((c) => (
                  <th key={c}>{c}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {throughlineTable.rows.map((row) => (
                <tr key={row.label}>
                  <th scope="row">{row.label}</th>
                  {row.cells.map((cell, i) => (
                    <td key={i}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {throughlineTracks.map((track) => (
        <section className="cw-section reveal" key={track.id}>
          <h2 className="cw-h2">{track.name}</h2>
          <p className="cw-body">{track.lede}</p>
          <div className="cw-track">
            {track.weeks.map(([label, body]) => (
              <div className="cw-track-row" key={label}>
                <div className="cw-track-label">{label}</div>
                <p className="cw-track-body">{body}</p>
              </div>
            ))}
          </div>
        </section>
      ))}

      <p className="cw-closing reveal">{throughlineClosing}</p>
    </div>
  );
}
