import profile from "../data/profile";
import { TraceCorner } from "./CircuitTraces";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="section section--band about" aria-labelledby="about-title">
      <div className="container about__grid">
        <div className="about__copy">
          <p className="eyebrow">about</p>
          <h2 id="about-title">
            {profile.name} <span className="about__pronouns">{profile.pronouns}</span>
          </h2>
          {profile.intro.map((para) => (
            <p key={para}>{para}</p>
          ))}
          <dl className="about__facts">
            {profile.facts.map((f) => (
              <div key={f.label} className="about__fact">
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <figure className="about__portrait">
          <img
            src={`${process.env.PUBLIC_URL}/noah-scott-portrait-760.jpg`}
            srcSet={`${process.env.PUBLIC_URL}/noah-scott-portrait-480.jpg 480w, ${process.env.PUBLIC_URL}/noah-scott-portrait-760.jpg 760w, ${process.env.PUBLIC_URL}${profile.portrait.src} 900w`}
            sizes="(max-width: 900px) 320px, 380px"
            alt={profile.portrait.alt}
            width="900"
            height="1350"
            loading="lazy"
            decoding="async"
          />
          <TraceCorner className="about__trace" />
          <figcaption className="mono">NS-PORTRAIT · CSUF</figcaption>
        </figure>
      </div>
    </section>
  );
}
