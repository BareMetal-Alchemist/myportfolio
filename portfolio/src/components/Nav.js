import { useEffect, useState } from "react";
import sections from "../data/navigation";
import links from "../data/links";
import ThemeToggle from "./ThemeToggle";
import { GitHubIcon, LinkedInIcon } from "./Icons";
import "./Nav.css";

export default function Nav({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={`nav${scrolled ? " nav--scrolled" : ""}`}>
      <a className="skip-link" href="#main">
        skip to content
      </a>
      <div className="container nav__inner">
        <a className="nav__brand" href="#top">
          <CupMark />
          <span>noah scott</span>
          <span className="visually-hidden">, back to top</span>
        </a>

        <button
          type="button"
          className="nav__toggle"
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="visually-hidden">{open ? "Close menu" : "Open menu"}</span>
          <span className="nav__burger" aria-hidden="true" />
        </button>

        <nav
          id="primary-nav"
          className={`nav__links${open ? " nav__links--open" : ""}`}
          aria-label="Primary"
        >
          <ul>
            {sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} onClick={() => setOpen(false)}>
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="nav__meta">
            <a className="nav__icon" href={links.github} aria-label="GitHub profile" rel="me noreferrer" target="_blank">
              <GitHubIcon />
            </a>
            <a className="nav__icon" href={links.linkedin} aria-label="LinkedIn profile" rel="me noreferrer" target="_blank">
              <LinkedInIcon />
            </a>
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          </div>
        </nav>
      </div>
    </header>
  );
}

function CupMark() {
  return (
    <svg className="nav__mark" viewBox="0 0 32 32" width="26" height="26" aria-hidden="true" focusable="false">
      <path d="M7 11h14v8a6 6 0 0 1-6 6h-2a6 6 0 0 1-6-6z" fill="var(--cream)" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M21 13h2.5a3 3 0 0 1 0 6H21" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M11 29h8M9 29v-2M13 29v-2M17 29v-2M21 29v-2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <text x="9" y="6" fontFamily="var(--font-mono)" fontSize="6.5" fill="var(--copper)">01</text>
    </svg>
  );
}
