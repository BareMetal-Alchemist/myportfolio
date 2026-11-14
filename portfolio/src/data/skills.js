// The menu board. Each item has a serif name, a mono "price" and a tasting note
// (one line on what I've actually built with it).
const menu = [
  {
    id: "espresso-bar",
    title: "Espresso Bar",
    subtitle: "languages",
    items: [
      {
        name: "Go",
        price: "●●●●○",
        note: "FOGLight / DeFOG: a single-binary Windows triage collector with concurrent artifact collection, used in a real malware case.",
      },
      {
        name: "Rust",
        price: "&mut",
        note: "The language behind the cup. Low-level security tooling and a healthy respect for the borrow checker.",
      },
      {
        name: "C / C++",
        price: "●●●●○",
        note: "Systems programming for the M.S. in Computer Engineering, plus the C++ certificate from Riverside City College.",
      },
      {
        name: "Python",
        price: "●●●●○",
        note: "Deep Threes: FastAPI + MongoDB backend, Best Use of MongoDB at FullyHacks 2026. Python certificate, Riverside City College.",
      },
      {
        name: "JavaScript / TypeScript",
        price: "●●●●○",
        note: "This site in React, and the PC Build Generator on Node, Express and PostgreSQL.",
      },
      {
        name: "C#",
        price: "●●●○○",
        note: "Foresight: real-time markerless AR try-on in Unity, CSUF Innovation Expo 2026 finalist.",
      },
      {
        name: "SQL",
        price: "●●●○○",
        note: "SQL audit-logging pipelines in Cribl, plus schema modeling and query optimization in PostgreSQL, MySQL and MariaDB.",
      },
      {
        name: "Bash",
        price: "●●●○○",
        note: "Linux administration and service restoration in the WRCCDC-style cyber range.",
      },
    ],
  },
  {
    id: "pipelines",
    title: "Pipelines & Data",
    subtitle: "pour-overs",
    items: [
      {
        name: "Cribl Stream / Edge",
        price: "CCE L3",
        note: "Team's Cribl SME. Onboarded an agency's machines from Azure Arc to Cribl Edge and delivered Claude Code telemetry ingestion end to end.",
      },
      {
        name: "Azure Monitor / Data Collection Rules",
        price: "●●●○○",
        note: "Onboarding agency endpoints to Azure data collection rules alongside Cribl collectors.",
      },
      {
        name: "Azure Arc",
        price: "●●●○○",
        note: "The on-ramp used to move an agency's machines into Cribl Edge.",
      },
      {
        name: "SQL audit logging",
        price: "●●●○○",
        note: "Built the Cribl pipelines that carry SQL audit logs to their destination.",
      },
      {
        name: "Databases",
        price: "●●●○○",
        note: "PostgreSQL, MySQL, MariaDB and MongoDB: schema modeling, query optimization and session-backed workflows.",
      },
    ],
  },
  {
    id: "detection",
    title: "Detection & DFIR",
    subtitle: "dark roast",
    items: [
      {
        name: "CrowdStrike Falcon (EDR, RTR)",
        price: "●●●●○",
        note: "Used Real Time Response to trace recurring domain-admin brute-force alerts to a SolarWinds Orion agent misconfiguration, then got it fixed environment-wide.",
      },
      {
        name: "CyberArk",
        price: "●●●○○",
        note: "Detections for privileged-access auditing.",
      },
      {
        name: "SIEM detection engineering",
        price: "●●●●○",
        note: "Detections for CyberArk auditing and false-positive root-causing in CrowdStrike for a county SOC.",
      },
      {
        name: "Memory forensics (WinPmem / WMI)",
        price: "30+ artifacts",
        note: "FOGLight / DeFOG: embedded WinPmem capture plus concurrent WMI live response into a timestamped case folder.",
      },
      {
        name: "Wazuh / Splunk",
        price: "●●●○○",
        note: "Logging and detection in the WRCCDC-style cyber range.",
      },
      {
        name: "Wireshark / Nmap",
        price: "●●●○○",
        note: "Network analysis and reconnaissance in the range.",
      },
    ],
  },
  {
    id: "systems",
    title: "Systems",
    subtitle: "house blend",
    items: [
      {
        name: "Windows internals",
        price: "●●●●○",
        note: "Processes, services, scheduled tasks, WMI subscriptions: the artifacts DeFOG knows how to collect.",
      },
      {
        name: "Low-level programming",
        price: "●●●●○",
        note: "The thread connecting Go, Rust, C and the M.S. in Computer Engineering.",
      },
      {
        name: "Computer engineering",
        price: "M.S. · in progress",
        note: "CSUF, with interests in embedded and cyber-physical security.",
      },
      {
        name: "Linux & networking",
        price: "●●●●○",
        note: "Proxmox-virtualized WRCCDC-style range: DNS, web services, hardening and incident-style response.",
      },
      {
        name: "ServiceNow",
        price: "●●●○○",
        note: "Incident management and documented resolutions at CSUF's Student Genius Center.",
      },
    ],
  },
  {
    id: "web",
    title: "Pastry Case",
    subtitle: "web",
    items: [
      {
        name: "React",
        price: "●●●●○",
        note: "This site: hand-written components, no UI framework.",
      },
      {
        name: "Node.js / Express",
        price: "●●●●○",
        note: "PC Build Generator: authentication, sessions and database-backed workflows.",
      },
      {
        name: "FastAPI",
        price: "●●●○○",
        note: "Deep Threes backend API.",
      },
      {
        name: "REST APIs & session auth",
        price: "●●●●○",
        note: "Designed and shipped in both the PC Build Generator and Deep Threes.",
      },
    ],
  },
  {
    id: "ai-ml",
    title: "AI / ML",
    subtitle: "single origin",
    items: [
      {
        name: "Machine learning",
        price: "●●●○○",
        note: "Machine learning engineer at Boundary RSS, and all CSUF AI-concentration coursework completed.",
      },
      {
        name: "Computer vision",
        price: "●●●○○",
        note: "Foresight and AR research: MediaPipe, ARKit, real-time tracking and inference pipelines.",
      },
      {
        name: "AI tooling telemetry",
        price: "●●●○○",
        note: "Delivered Claude Code telemetry ingestion end to end in Cribl: collector, pipeline, route, destination.",
      },
    ],
  },
];

export default menu;
