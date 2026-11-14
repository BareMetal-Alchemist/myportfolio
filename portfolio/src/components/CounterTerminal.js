import { useEffect, useMemo, useRef, useState } from "react";
import profile from "../data/profile";
import links from "../data/links";
import experience from "../data/experience";
import projects from "../data/projects";
import menu from "../data/skills";
import certifications from "../data/certifications";
import useMediaQuery, { usePrefersReducedMotion } from "../hooks/useMediaQuery";
import "./CounterTerminal.css";

const COMMANDS = [
  "help",
  "menu",
  "whoami",
  "brew experience",
  "brew projects",
  "ls certs",
  "ls",
  "contact",
  "theme light",
  "theme dark",
  "clear",
];

// Easter eggs aren't listed in help or completion.
const SECRET = ["espresso --shot=double", "sudo make me a latte", "rustc cup.rs"];

const HELP = [
  "available orders:",
  "  help                 this list",
  "  menu                 the skills menu board",
  "  whoami               who's behind the counter",
  "  brew experience      pour the work history",
  "  brew projects        pour the projects",
  "  ls certs             list certifications",
  "  contact              how to reach me",
  "  theme light|dark     change the lighting",
  "  clear                tear off the ticket",
  "",
  "tab completes · ↑/↓ recalls history · there may be secrets on the menu.",
];

function pad(s, n) {
  return s.length >= n ? s : s + " ".repeat(n - s.length);
}

function runCommand(raw, { setTheme }) {
  const input = raw.trim().replace(/\s+/g, " ");
  const lower = input.toLowerCase();

  if (lower === "") return { lines: [] };
  if (lower === "help" || lower === "?") return { lines: HELP };
  if (lower === "clear") return { clear: true, lines: [] };

  if (lower === "whoami") {
    return {
      lines: [
        `${profile.name.toLowerCase()} (${profile.pronouns})`,
        `${profile.eyebrow} · SAIC · ${profile.location}`,
        "cribl certified engineer (level 3) · m.s. computer engineering, csuf (in progress)",
      ],
      //scrollTo: "about",
    };
  }

  if (lower === "menu") {
    const lines = ["today's menu"];
    for (const section of menu) {
      lines.push("", `  ${section.title.toLowerCase()} (${section.subtitle})`);
      for (const item of section.items) {
        const dots = ".".repeat(Math.max(2, 40 - item.name.length));
        lines.push(`    ${item.name} ${dots} ${item.price}`);
      }
    }
    return lines;
  }

  if (lower === "brew experience") {
    const lines = ["brewing experience…"];
    for (const job of experience) {
      lines.push(`  ☕ ${pad(`${job.start} – ${job.end}`, 22)}${job.role} · ${job.org}`);
    }
    lines.push("", "✓ poured. scroll for the full notes.");
    return lines;
  }

  if (lower === "brew projects") {
    const lines = ["brewing projects…"];
    for (const p of projects) {
      lines.push(`  ${pad(p.part, 14)}${p.name}${p.featured ? "  ★ featured" : ""}`);
    }
    lines.push("", `✓ poured. more at ${links.github}`);
    return lines;
  }

  if (lower === "ls certs" || lower === "ls certs/") {
    const lines = certifications.map(
      (c) => `  ${c.featured ? "★" : "·"} ${pad(c.name, 40)}${c.issuer}${c.issued ? ` · ${c.issued}` : ""}`
    );
    return lines;
  }

  if (lower === "ls") {
    return { lines: ["about  experience  projects  skills  education  contact"] };
  }

  if (lower === "contact") {
    return {
      lines: [`  email     ${links.email}`, `  linkedin  ${links.linkedin}`, `  github    ${links.github}`],
      //scrollTo: "contact",
    };
  }

  if (lower === "theme light" || lower === "theme dark") {
    const next = lower.split(" ")[1];
    setTheme(next);
    return { lines: [next === "dark" ? "lights down. evening espresso." : "lights up. sunday morning paper."] };
  }
  if (lower === "theme") return { lines: ["usage: theme light | theme dark"] };

  if (lower === "brew" || lower.startsWith("brew ")) {
    return { lines: ["usage: brew experience | brew projects", "(we don't brew that here.)"] };
  }

  // Easter eggs
  if (lower === "espresso --shot=double" || lower === "espresso --shot double") {
    return {
      lines: [
        "pulling 2 shots… ▓▓▓▓▓▓▓▓▓▓ 100%",
        "crema: excellent · extraction: 27s · heart rate: elevated",
        "✓ double shot ready. detections incoming.",
      ],
    };
  }
  if (lower === "espresso") return { lines: ["one shot? try: espresso --shot=double"] };

  if (lower.startsWith("sudo")) {
    return { lines: ["Nice try. Permission denied: you're not in the baristas group."] };
  }

  if (lower === "rustc cup.rs" || lower === "cargo build" || lower === "cargo run") {
    return {
      lines: [
        "   Compiling cup v0.1.0 (/home/noah/cup)",
        "error[E0499]: cannot borrow `cup` as mutable more than once at a time",
        " --> cup.rs:3:18",
        "  |",
        "2 |     let first  = &mut cup;",
        "  |                  -------- first mutable borrow occurs here",
        "3 |     let second = &mut cup;",
        "  |                  ^^^^^^^^ second mutable borrow occurs here",
        "4 |     first.sip();",
        "  |     ----- first borrow later used here",
        "  |",
        "  = help: one barista at a time. finish the first pour before starting another.",
        "",
        "error: could not compile `cup` (bin \"cup\") due to 1 previous error",
      ],
    };
  }

  if (lower === "pwd") return { lines: ["/home/noah/cafe/counter"] };
  if (lower === "exit" || lower === "quit") return { lines: ["there's no leaving the café. try `clear`."] };

  return { lines: [`order not found: ${input}`, "try `help` to see the menu."] };
}

function scrollToSection(id, reduced) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
}

export default function CounterTerminal({ onTheme }) {
  const isMobile = useMediaQuery("(max-width: 860px)");
  const reduced = usePrefersReducedMotion();
  const [open, setOpen] = useState(false);
  const show = !isMobile || open;

  return (
    <section id="counter" className="section counter" aria-labelledby="counter-title">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">the counter</p>
          <h2 id="counter-title">Order at the counter.</h2>
          <p>
            A small terminal for the curious. Type <code>help</code> to see what&apos;s on. Everything here is also reachable
            from the regular navigation.
          </p>
        </div>

        {isMobile && (
          <button
            type="button"
            className="btn counter__toggle"
            aria-expanded={open}
            aria-controls="counter-terminal"
            onClick={() => setOpen((v) => !v)}
          >
            <span aria-hidden="true">☕</span> {open ? "close the counter" : "order at the counter"}
          </button>
        )}

        {show && <Terminal id="counter-terminal" onTheme={onTheme} reduced={reduced} autoFocus={isMobile && open} />}
      </div>
    </section>
  );
}

function Terminal({ id, onTheme, reduced, autoFocus }) {
  const [lines, setLines] = useState(() => [
    { kind: "out", text: "welcome to the counter. type `help` to see the menu." },
  ]);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);
  const [histIdx, setHistIdx] = useState(-1);
  const [ticket, setTicket] = useState(42);
  const outRef = useRef(null);
  const inputRef = useRef(null);

  const completions = useMemo(() => COMMANDS, []);

  useEffect(() => {
    const el = outRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [lines]);

  useEffect(() => {
    if (autoFocus && inputRef.current) inputRef.current.focus();
  }, [autoFocus]);

  const submit = () => {
    const raw = input;
    const result = runCommand(raw, { setTheme: onTheme });
    const echo = { kind: "in", text: raw };
    if (result.clear) {
      setLines([]);
    } else {
      setLines((prev) => [...prev, echo, ...result.lines.map((t) => ({ kind: "out", text: t }))]);
    }
    if (raw.trim()) {
      setHistory((h) => [raw, ...h].slice(0, 50));
      setTicket((t) => t + 1);
    }
    setHistIdx(-1);
    setInput("");
    if (result.scrollTo) {
      // let the output render first so the viewport doesn't fight it
      setTimeout(() => scrollToSection(result.scrollTo, reduced), 60);
    }
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      submit();
      return;
    }
    if (e.key === "Tab") {
      e.preventDefault();
      const cur = input.toLowerCase();
      if (!cur) return;
      const matches = completions.filter((c) => c.startsWith(cur));
      if (matches.length === 1) {
        setInput(matches[0]);
      } else if (matches.length > 1) {
        // fill the common prefix, then list options
        let prefix = matches[0];
        for (const m of matches) {
          while (!m.startsWith(prefix)) prefix = prefix.slice(0, -1);
        }
        setInput(prefix);
        setLines((prev) => [...prev, { kind: "out", text: matches.join("   ") }]);
      }
      return;
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length === 0) return;
      const next = Math.min(histIdx + 1, history.length - 1);
      setHistIdx(next);
      setInput(history[next]);
      return;
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (histIdx <= 0) {
        setHistIdx(-1);
        setInput("");
        return;
      }
      const next = histIdx - 1;
      setHistIdx(next);
      setInput(history[next]);
      return;
    }
    if (e.key === "l" && e.ctrlKey) {
      e.preventDefault();
      setLines([]);
    }
  };

  return (
    <div id={id} className="term" onClick={() => inputRef.current && inputRef.current.focus()}>
      <div className="term__paper">
        <header className="term__head">
          <span className="term__title">order ticket</span>
          <span className="term__ticket">#{String(ticket).padStart(4, "0")}</span>
        </header>

        <div ref={outRef} className="term__out" role="log" aria-live="polite" aria-label="Terminal output">
          {lines.map((l, i) => (
            <div key={i} className={`term__line term__line--${l.kind}`}>
              {l.kind === "in" && (
                <span className="term__prompt" aria-hidden="true">
                  ❯{" "}
                </span>
              )}
              {l.text}
            </div>
          ))}
        </div>

        <label className="term__input-row">
          <span className="term__prompt" aria-hidden="true">
            ❯
          </span>
          <span className="visually-hidden">Type an order and press Enter</span>
          <input
            ref={inputRef}
            type="text"
            className="term__input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKeyDown}
            autoComplete="off"
            autoCapitalize="off"
            autoCorrect="off"
            spellCheck={false}
            placeholder="help"
            aria-describedby="term-hint"
          />
        </label>
        <p id="term-hint" className="term__hint">
          tab to complete · ↑ ↓ for history
        </p>
      </div>
    </div>
  );
}

export { runCommand, COMMANDS, SECRET };
