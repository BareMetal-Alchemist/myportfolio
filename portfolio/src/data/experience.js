// Work history, most recent first.
// A bullet is a string, or an object { before, link: { href, label }, after }
// when it needs an inline link.
import links from "./links";

const experience = [
  {
    id: "saic",
    role: "Cybersecurity Engineer",
    org: "SAIC",
    type: "Contract",
    start: "Jul 2026",
    end: "Present",
    location: "Orange County, CA",
    mode: "Hybrid",
    bullets: [
      "Support a county government's security operations on SAIC's security engineering team, splitting time between engineering projects and alert triage and investigation.",
      "Team's Cribl subject-matter expert: onboarded an agency's machines from Azure Arc to Cribl Edge, built pipelines for SQL audit logging, and delivered Claude Code telemetry ingestion end to end (collector → pipeline → route → destination) after earlier attempts had stalled on misconfigurations.",
      "Onboard agency endpoints to Azure data collection rules and stand up Cribl collectors and pipelines.",
      "Build detections for CyberArk privileged-access auditing.",
      "Root-caused recurring CrowdStrike brute-force alerts against a domain admin account: used Real Time Response to trace them to a SolarWinds Orion agent misconfiguration (IP\\admin instead of HOSTNAME\\admin). Wrote the fix-up report that got the configuration changed environment-wide, eliminating the false-positive noise.",
      {
        before:
          "Built FOGLight, a Go-based volatile memory and live-response collection tool (WinPmem + concurrent WMI queries, single binary, faster than its PowerShell predecessor). The forensics team used it on a real malware investigation. I released an open-source version, ",
        link: { href: links.defog, label: "DeFOG" },
        after: ".",
      },
    ],
  },
  {
    id: "csuf-it",
    // TODO(Noah): confirm title and dates. The previous site listed this as
    // "Student Genius Center - Student Assistant, 2025 - Present".
    role: "IT Support Specialist",
    org: "California State University, Fullerton",
    type: "Part-time",
    start: "Sep 2024",
    end: "Jun 2026",
    location: "Fullerton, CA",
    mode: "Hybrid",
    bullets: [
      "Supported students, faculty, and staff at the Student Genius Center with software, hardware, account access, endpoint, and application issues.",
      "Used ServiceNow to manage incidents, document resolutions, and maintain structured support workflows.",
      "Collaborated with campus IT teams to keep enterprise services and user access moving cleanly.",
    ],
  },
  {
    id: "ar-research",
    role: "AR Research Assistant",
    org: "California State University, Fullerton",
    type: "Research",
    start: "Oct 2025",
    end: "May 2026",
    location: "Fullerton, CA",
    mode: null,
    bullets: [
      "Developed real-time software systems integrating computer vision, tracking, and inference pipelines for augmented reality and robotics research.",
      "Built and debugged application logic across multiple frameworks, APIs, sensors, and runtime environments.",
    ],
  },
  {
    id: "boundary-rss",
    role: "Machine Learning Engineer",
    org: "Boundary RSS",
    type: "Startup",
    start: "Feb 2026",
    end: "Apr 2026",
    location: null,
    mode: null,
    // TODO(Noah): add 2-3 bullets describing the work at Boundary RSS.
    bullets: [],
  },
  {
    id: "cyber-clinic",
    role: "Cybersecurity Associate",
    org: "Orange County Innovative Cyber Clinic",
    orgDetail: "ECS Cyber · CSUF Center for Cybersecurity",
    type: "Apprenticeship",
    start: "Jan 2025",
    end: "May 2025",
    location: "Fullerton, CA",
    mode: "Hybrid",
    bullets: [
      "Delivered cybersecurity awareness instruction on phishing, password security, scams, and safe online practices.",
      "Trained participants preparing for the CompTIA Security+ certification.",
    ],
  },
  {
    id: "geek-squad",
    role: "Geek Squad",
    org: "Best Buy",
    type: "Part-time",
    start: "Jun 2022",
    end: "Jul 2024",
    location: null,
    mode: null,
    bullets: [],
    roles: [
      {
        role: "Advanced Repair Agent",
        start: "Aug 2023",
        end: "Jul 2024",
        location: "On-site",
        bullets: [
          "Hardware and software repairs following company SOPs, with clear, proactive repair-order updates for clients.",
        ],
      },
      {
        role: "Consultation Agent",
        start: "Jun 2022",
        end: "Aug 2023",
        location: "San Bernardino, CA",
        bullets: [
          "Customer-facing troubleshooting across IT and security issues, including helping victims of malware and scams.",
        ],
      },
    ],
  },
];

export default experience;
