// src/components/Skills.tsx
const skills = ['React', 'TypeScript', 'Node.js', 'Docker', 'AWS', 'C++'];

export function Skills() {
  return (
    <section className="container">
      <h2>Skills</h2>
      <ul className="skills-grid">
        {skills.map(s => <li key={s}>{s}</li>)}
      </ul>
    </section>
  );
}
