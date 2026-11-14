import { useRef } from "react";
import experience from "../data/experience";
import useInView from "../hooks/useInView";
import { usePrefersReducedMotion } from "../hooks/useMediaQuery";
import "./Experience.css";

function Bullet({ bullet }) {
  if (typeof bullet === "string") return <li>{bullet}</li>;
  return (
    <li>
      {bullet.before}
      <a href={bullet.link.href} target="_blank" rel="noreferrer">
        {bullet.link.label}
      </a>
      {bullet.after}
    </li>
  );
}

function Meta({ parts }) {
  const shown = parts.filter(Boolean);
  return (
    <p className="xp__meta">
      {shown.map((p, i) => (
        <span key={p}>
          {i > 0 && <span aria-hidden="true"> · </span>}
          {p}
        </span>
      ))}
    </p>
  );
}

function Entry({ item, reduced }) {
  const ref = useRef(null);
  const inView = useInView(ref);
  const lit = reduced || inView;

  return (
    <li ref={ref} className={`xp__entry${lit ? " xp__entry--lit" : ""}`}>
      <span className="xp__via" aria-hidden="true" />
      <p className="xp__dates">
        {item.start} – {item.end}
      </p>
      <div className="xp__body">
        <h3>{item.role}</h3>
        <p className="xp__org">
          {item.org}
          {item.orgDetail && <span className="xp__org-detail"> · {item.orgDetail}</span>}
        </p>
        <Meta parts={[item.type, item.location, item.mode]} />
        {item.bullets.length > 0 && (
          <ul className="xp__bullets">
            {item.bullets.map((b, i) => (
              <Bullet key={i} bullet={b} />
            ))}
          </ul>
        )}
        {item.roles && (
          <ul className="xp__roles">
            {item.roles.map((r) => (
              <li key={r.role} className="xp__role">
                <h4>{r.role}</h4>
                <p className="xp__meta">
                  {r.start} – {r.end}
                  {r.location && <span> · {r.location}</span>}
                </p>
                <ul className="xp__bullets">
                  {r.bullets.map((b, i) => (
                    <Bullet key={i} bullet={b} />
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        )}
      </div>
    </li>
  );
}

export default function Experience() {
  const reduced = usePrefersReducedMotion();
  return (
    <section id="experience" className="section xp" aria-labelledby="xp-title">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">experience</p>
          <h2 id="xp-title">Follow the signal.</h2>
          <p>From the repair bench to a county SOC. Most recent first; each via lights up as it comes into view.</p>
        </div>
        <ol className={`xp__trace${reduced ? " xp__trace--static" : ""}`}>
          {experience.map((item) => (
            <Entry key={item.id} item={item} reduced={reduced} />
          ))}
        </ol>
      </div>
    </section>
  );
}
