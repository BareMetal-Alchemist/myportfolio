// src/components/Projects.tsx
import { projects } from '../data/projects';

export function Projects() {
  return (
    <section id="projects" className="container">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map(p => (
          <a key={p.title} href={p.link} className="card" target="_blank" rel="noopener">
            <h3>{p.title}</h3>
            <p>{p.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
