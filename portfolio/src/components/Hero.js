import profile from "../data/profile";
import links from "../data/links";
import PourOver from "./PourOver";
import { PageTraces } from "./CircuitTraces";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <PageTraces />
      <div className="container hero__grid">
        <div className="hero__copy">
          <p className="eyebrow hero__eyebrow">{profile.eyebrow}</p>
          <h1 id="hero-title">
            {profile.headline.lead} <em>{profile.headline.emphasis}</em>
          </h1>
          <p className="hero__subline">{profile.subline}</p>
          <p className="hero__tech" aria-label={`Tech: ${profile.techList.join(", ")}`}>
            <span aria-hidden="true">── </span>
            {profile.techList.map((t, i) => (
              <span key={t}>
                {i > 0 && <span aria-hidden="true"> · </span>}
                {t}
              </span>
            ))}
          </p>
          <p className="hero__intro">{profile.heroIntro}</p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="#projects">
              See the projects
            </a>
            <a className="btn" href="#experience">
              Experience
            </a>
            <a className="btn btn--ghost" href={`mailto:${links.email}`}>
              Email me
            </a>
          </div>
        </div>
        <div className="hero__cup">
          <PourOver />
        </div>
      </div>
    </section>
  );
}
