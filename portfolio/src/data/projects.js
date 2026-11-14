// Projects shown as chip "dies". `part` is the monospace part number on the card.
import links from "./links";

const projects = [
  {
    id: "defog",
    part: "NS-DEFOG-01",
    name: "DeFOG",
    tagline: "Lightweight Windows triage collector in Go.",
    featured: true,
    label: "open-source edition of FOGLight · used in a real malware investigation",
    description:
      "The open-source version of FOGLight, the internal tool I built at SAIC that our forensics team used on a real malware case. A single executable with no PowerShell or .NET dependency: it captures volatile memory with embedded, signed WinPmem and collects 30+ live-response artifacts concurrently, including network state, processes with SHA-256 hashes and signature checks, persistence such as WMI subscriptions, scheduled tasks and services, and security posture, all into a timestamped case folder.",
    stack: ["Go", "WinPmem", "WMI", "Windows internals"],
    highlight: "Memory first, then live response, so the tool's own activity stays out of the image.",
    links: [{ label: "Source on GitHub", href: links.defog }],
  },
  {
    id: "deep-threes",
    part: "NS-DEEP3-02",
    name: "Deep Threes",
    tagline: "Basketball analytics backend.",
    description:
      "Backend API and database workflows for a basketball analytics platform that turns video-pipeline output into structured player, event, and session insights.",
    stack: ["Python", "FastAPI", "MongoDB"],
    highlight: "Best Use of MongoDB at FullyHacks 2026",
    links: [],
  },
  {
    id: "pc-build-generator",
    part: "NS-PCBLD-03",
    name: "PC Build Generator",
    tagline: "Compatible builds on a budget.",
    description:
      "A web application that generates compatible PC builds based on budget and hardware constraints, with authentication, sessions, database-backed workflows, testing, and deployment support.",
    stack: ["Node.js", "Express", "PostgreSQL", "Firebase", "Vercel"],
    highlight: "Full stack compatibility and budget workflow",
    links: [],
  },
  {
    id: "foresight",
    part: "NS-FORES-04",
    name: "Foresight",
    tagline: "Markerless AR try-on.",
    description:
      "Real-time AR try-on system for markerless virtual accessory placement, integrating computer vision, sensor data, 3D transforms, and runtime optimization.",
    stack: ["C#", "Unity", "ARKit", "MediaPipe"],
    highlight: "CSUF Innovation Expo 2026 finalist",
    links: [],
  },
  {
    id: "cyber-range",
    part: "NS-RANGE-05",
    name: "WRCCDC-Style Cyber Range",
    tagline: "Blue-team practice under pressure.",
    description:
      "Virtualized environment for Linux administration, DNS, web services, logging, service restoration, hardening, and incident-style response under simulated pressure.",
    stack: ["Linux", "Proxmox", "Wazuh", "Splunk", "Networking"],
    highlight: "Blue-team defensive practice environment",
    links: [],
  },
];

export default projects;
