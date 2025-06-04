// src/components/Resume.tsx
export function Resume() {
  return (
    <section id="resume" className="container">
      <h2>Résumé</h2>
      <iframe
        src="/resume.pdf"
        width="100%"
        height="800"
        title="Résumé"
      />
    </section>
  );
}
