import React from 'react';
import './App.css';
import Header from "./components/Header";
import TypingAnimation from './components/Typing';

const projects = [
  {
    name: "Deep Threes",
    stack: "Python, FastAPI, MongoDB",
    highlight: "Best Use of MongoDB at FullyHacks 2026",
    description:
      "Backend API and database workflows for a basketball analytics platform that turns video-pipeline output into structured player, event, and session insights.",
  },
  {
    name: "PC Build Generator",
    stack: "Node.js, Express, PostgreSQL, Firebase, Vercel",
    highlight: "Full stack compatibility and budget workflow",
    description:
      "A web application that generates compatible PC builds based on budget and hardware constraints, with authentication, sessions, database-backed workflows, testing, and deployment support.",
  },
  {
    name: "Foresight",
    stack: "C#, Unity, ARKit, MediaPipe",
    highlight: "CSUF Innovation Expo 2026 finalist",
    description:
      "Real-time AR try-on system for markerless virtual accessory placement, integrating computer vision, sensor data, 3D transforms, and runtime optimization.",
  },
  {
    name: "WRCCDC-Style Cyber Range",
    stack: "Linux, Proxmox, Wazuh, Splunk, Networking",
    highlight: "Blue-team defensive practice environment",
    description:
      "Virtualized environment for Linux administration, DNS, web services, logging, service restoration, hardening, and incident-style response under simulated pressure.",
  },
];

const experiences = [
  {
    role: "Student Genius Center - Student Assistant",
    org: "California State University, Fullerton",
    dates: "2025 - Present",
    details: [
      "Support students, faculty, and staff with software, hardware, account access, endpoint, and application issues.",
      "Use ServiceNow to manage incidents, document resolutions, and maintain structured support workflows.",
      "Collaborate with campus IT teams to keep enterprise services and user access moving cleanly.",
    ],
  },
  {
    role: "AR Research Assistant",
    org: "California State University, Fullerton",
    dates: "Oct 2025 - Present",
    details: [
      "Develop real-time software systems integrating computer vision, tracking, and inference pipelines.",
      "Build and debug application logic across multiple frameworks, APIs, sensors, and runtime environments.",
    ],
  },
  {
    role: "Cybersecurity Associate",
    org: "Orange County Innovative Cyber Clinic",
    dates: "Jan 2025 - May 2025",
    details: [
      "Delivered cybersecurity awareness instruction on phishing, password security, scams, and safe online practices.",
      "Trained participants preparing for the CompTIA Security+ certification.",
    ],
  },
  {
    role: "Advanced Repair Agent",
    org: "Geek Squad",
    dates: "2022 - 2024",
    details: [
      "Diagnosed and resolved hardware, operating system, networking, and software issues across consumer systems.",
      "Performed repair, recovery, troubleshooting, and customer-facing technical support.",
    ],
  },
];

const skillGroups = [
  {
    label: "Languages",
    items: ["C#", "JavaScript", "SQL", "Python", "C++", "C", "Bash"],
  },
  {
    label: "Web",
    items: ["React", "Node.js", "Express", "FastAPI", "REST APIs", "Session Auth"],
  },
  {
    label: "Data",
    items: ["PostgreSQL", "MySQL", "MariaDB", "MongoDB", "Schema Modeling", "Query Optimization"],
  },
  {
    label: "Security / Systems",
    items: ["Linux", "Networking", "ServiceNow", "Wazuh", "Splunk", "Wireshark", "Nmap"],
  },
];

function App() {
  return (
    <main className="portfolio-shell">
      <Header>
        <TypingAnimation />
      </Header>

      <section className="section-grid" id="focus" aria-label="Portfolio focus areas">
        <article className="focus-panel primary-panel">
          <p className="section-kicker">Current identity</p>
          <h2>Cybersecurity engineer with a wide systems toolkit.</h2>
          <p>
            I am a jack-of-all-trades computer scientist and engineer who likes
            understanding the whole stack: software, hardware, networks,
            databases, support workflows, and the security concerns that connect
            them. My main focus is cybersecurity and IT, but I am strongest when
            I can move between disciplines and make systems work end to end.
          </p>
        </article>

        <article className="focus-panel stats-panel" aria-label="Portfolio snapshot">
          <p className="section-kicker">Snapshot</p>
          <div className="stat-list">
            <div>
              <strong>Security+</strong>
              <span>CompTIA certified</span>
            </div>
            <div>
              <strong>2026</strong>
              <span>B.S. Computer Science, Cybersecurity</span>
            </div>
            <div>
              <strong>4+</strong>
              <span>Highlighted projects and research builds</span>
            </div>
          </div>
        </article>
      </section>

      <section className="content-section" id="projects" aria-labelledby="projects-title">
        <div className="section-heading">
          <p className="section-kicker">Selected work</p>
          <h2 id="projects-title">Projects</h2>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.name}>
              <div>
                <p className="project-stack">{project.stack}</p>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </div>
              <span>{project.highlight}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section split-section" id="experience" aria-labelledby="experience-title">
        <div className="section-heading sticky-heading">
          <p className="section-kicker">Where I have been useful</p>
          <h2 id="experience-title">Experience</h2>
          <p>
            A mix of campus IT, software research, cybersecurity education, and
            hands-on repair work gives me a practical base for building,
            securing, troubleshooting, and supporting systems.
          </p>
        </div>

        <div className="timeline">
          {experiences.map((item) => (
            <article className="timeline-item" key={`${item.role}-${item.org}`}>
              <div className="timeline-meta">
                <span>{item.dates}</span>
              </div>
              <div>
                <h3>{item.role}</h3>
                <p className="org">{item.org}</p>
                <ul>
                  {item.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section" id="skills" aria-labelledby="skills-title">
        <div className="section-heading">
          <p className="section-kicker">Toolbox</p>
          <h2 id="skills-title">Skills</h2>
        </div>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skill-card" key={group.label}>
              <h3>{group.label}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section education-contact" id="contact" aria-label="Education and contact">
        <article>
          <p className="section-kicker">Education</p>
          <h2>California State University, Fullerton</h2>
          <p>B.S. Computer Science, Cybersecurity, 2024 - 2026</p>
          <p>M.S. Computer Engineering, Fall 2026 - Spring 2029</p>
        </article>
        <article className="contact-panel">
          <p className="section-kicker">Connect</p>
          <h2>Let&apos;s build something useful and secure.</h2>
          <div className="contact-links">
            <a href="mailto:noahleo.scott@gmail.com">Email</a>
            <a href="https://linkedin.com/in/noahleonardscott">LinkedIn</a>
            <a href="https://github.com/BareMetal-Alchemist">GitHub</a>
          </div>
        </article>
      </section>
    </main>
  );
}

export default App;
