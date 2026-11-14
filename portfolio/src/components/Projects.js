import projects from "../data/projects";
import links from "../data/links";
import { ExternalIcon } from "./Icons";
import "./Projects.css";

function DieCard({ project }) {
  return (
    <article className={`die-card${project.featured ? " die-card--featured" : ""}`} aria-labelledby={`proj-${project.id}`}>
      <header className="die-card__head">
        <div>
          <h3 id={`proj-${project.id}`}>{project.name}</h3>
          {project.tagline && <p className="die-card__tagline">{project.tagline}</p>}
        </div>
        <span className="die-card__part" aria-label={`Part number ${project.part}`}>
          {project.part}
        </span>
      </header>

      {project.label && (
        <p className="die-card__label">
          <span className="die-card__dot" aria-hidden="true" />
          {project.label}
        </p>
      )}

      <p className="die-card__desc">{project.description}</p>

      {project.highlight && <p className="die-card__highlight">{project.highlight}</p>}

      <footer className="die-card__foot">
        <ul className="die-card__stack" aria-label="Stack">
          {project.stack.map((s) => (
            <li key={s} className="chip">
              {s}
            </li>
          ))}
        </ul>
        {project.links.length > 0 && (
          <ul className="die-card__links">
            {project.links.map((l) => (
              <li key={l.href}>
                <a href={l.href} target="_blank" rel="noreferrer">
                  {l.label} <ExternalIcon />
                </a>
              </li>
            ))}
          </ul>
        )}
      </footer>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section section--band projects" aria-labelledby="projects-title">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">projects</p>
          <h2 id="projects-title">Fresh off the fab.</h2>
          <p>Each die is a project. DeFOG is the featured part: the open-source edition of a tool used on a real investigation.</p>
        </div>

        <div className="die-grid">
          {projects.map((p) => (
            <DieCard key={p.id} project={p} />
          ))}
        </div>

        <p className="projects__more">
          <a className="btn" href={links.github} target="_blank" rel="me noreferrer">
            More on GitHub <ExternalIcon />
          </a>
        </p>
      </div>
    </section>
  );
}
