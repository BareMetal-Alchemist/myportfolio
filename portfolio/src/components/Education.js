import education from "../data/education";
import certifications from "../data/certifications";
import "./Education.css";

export default function Education() {
  return (
    <section id="education" className="section section--band edu" aria-labelledby="edu-title">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">education &amp; certs</p>
          <h2 id="edu-title">Roasted, not rushed.</h2>
        </div>

        <div className="edu__grid">
          <div>
            <h3 className="edu__subtitle">Education</h3>
            <ol className="edu__list">
              {education.map((e) => (
                <li key={e.id} className="edu__item">
                  <p className="edu__dates">
                    {e.start ? `${e.start} – ${e.end}` : e.end}
                    {e.status && <span className="edu__status">{e.status}</span>}
                  </p>
                  <h4>{e.degree}</h4>
                  <p className="edu__school">{e.school}</p>
                  {e.note && <p className="edu__note">{e.note}</p>}
                </li>
              ))}
            </ol>
          </div>

          <div className="receipt" aria-labelledby="certs-title">
            <div className="receipt__paper">
              <header className="receipt__head">
                <p className="receipt__kicker">— certifications —</p>
                <h3 id="certs-title" className="receipt__title">
                  receipt
                </h3>
              </header>
              <ul className="receipt__lines">
                {certifications.map((c) => (
                  <li key={c.id} className={`receipt__line${c.featured ? " receipt__line--featured" : ""}`}>
                    <div className="receipt__row">
                      <span className="receipt__name">
                        {c.featured && <span className="receipt__star" aria-hidden="true" />}
                        {c.name}
                      </span>
                      <span className="receipt__leader" aria-hidden="true" />
                      <span className="receipt__date">{c.issued || "✓"}</span>
                    </div>
                    <p className="receipt__meta">
                      {c.issuer}
                      {c.expires && <span> · expires {c.expires}</span>}
                      {c.note && <span> · {c.note}</span>}
                    </p>
                  </li>
                ))}
              </ul>
              <footer className="receipt__foot">
                <p>thank you · come again</p>
                <p className="receipt__barcode" aria-hidden="true">
                  ▌║▌│║▌║│▌║▌│║║▌│▌║▌│║▌
                </p>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
