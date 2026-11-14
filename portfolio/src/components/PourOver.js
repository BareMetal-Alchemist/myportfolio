import { useCallback, useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "../hooks/useMediaQuery";
import CopyButton from "./CopyButton";
import "./PourOver.css";

const SNIPPET = ["let mut cup = Cup::new();", "cup.brew(Origin::Detections)?;", "cup.pour(&mut you);"];
const BREW_MS = 2600;
const BITS = ["0", "1", "0", "1", "1", "0", "1", "0"];

/**
 * Hero centerpiece: the `&mut` cup fills while a Rust snippet "compiles"
 * line by line. Steam is 0/1 glyphs that drift toward the pointer.
 * Clicking the cup refills it. Reduced motion shows the finished state.
 */
export default function PourOver() {
  const reduced = usePrefersReducedMotion();
  const [run, setRun] = useState(0);
  const wrapRef = useRef(null);

  const setSway = useCallback((x, y) => {
    const el = wrapRef.current;
    if (!el) return;
    el.style.setProperty("--sway-x", `${x}px`);
    el.style.setProperty("--sway-y", `${y}px`);
  }, []);

  const onPointerMove = (e) => {
    if (reduced || !wrapRef.current) return;
    const r = wrapRef.current.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height * 0.35;
    const dx = Math.max(-1, Math.min(1, (e.clientX - cx) / (r.width / 2)));
    const dy = Math.max(-1, Math.min(1, (e.clientY - cy) / (r.height / 2)));
    setSway(dx * 22, dy * 10);
  };

  const reset = () => setSway(0, 0);
  const onFocus = () => !reduced && setSway(12, -4);

  return (
    <div
      ref={wrapRef}
      className={`pour${reduced ? " pour--static" : ""}`}
      onPointerMove={onPointerMove}
      onPointerLeave={reset}
      onPointerCancel={reset}
    >
      <button
        type="button"
        className="pour__cup"
        onClick={() => setRun((n) => n + 1)}
        onFocus={onFocus}
        onBlur={reset}
        title="Refill the cup"
      >
        <CupSvg key={run} />
        <span className="visually-hidden">A line-drawn coffee cup labeled &amp;mut, filling with coffee while binary steam rises. Press to refill and replay.</span>
      </button>
      <BrewSnippet key={run} reduced={reduced} />
    </div>
  );
}

function CupSvg() {
  return (
    <svg className="cup" viewBox="0 0 320 300" aria-hidden="true" focusable="false">
      <defs>
        <clipPath id="cup-interior">
          <path d="M101 136h118l-11 94q-2 15-17 15h-62q-15 0-17-15z" />
        </clipPath>
      </defs>

      <circle className="cup__circle" cx="160" cy="160" r="128" />

      <g className="steam" aria-hidden="true">
        {BITS.map((bit, i) => (
          <text
            key={i}
            className="steam__bit"
            style={{ "--i": i }}
            x={126 + (i % 4) * 22 + (i > 3 ? 10 : 0)}
            y={i > 3 ? 122 : 110}
          >
            {bit}
          </text>
        ))}
      </g>

      <rect className="cup__stream" x="158" y="0" width="4" height="140" rx="2" />

      <g clipPath="url(#cup-interior)">
        <rect className="cup__coffee" x="96" y="132" width="130" height="116" />
      </g>

      <path
        className="cup__body"
        d="M96 130h128l-12 102q-2 18-20 18h-64q-18 0-20-18z"
      />
      <path className="cup__handle" d="M224 152h10a26 26 0 0 1 0 52h-20" />

      <rect className="cup__tag" x="129" y="186" width="62" height="28" rx="7" />
      <text className="cup__label" x="160" y="206" textAnchor="middle">
        &amp;mut
      </text>

      <path className="cup__saucer" d="M84 262h152" />
      <path className="cup__pins" d="M104 262v14M132 262v14M160 262v14M188 262v14M216 262v14" />
    </svg>
  );
}

const TOKEN = /(&mut|\blet\b|\bmut\b|\b[A-Z][A-Za-z]*\b|\b[a-z_]+(?=\()|\?|[a-z_]+|[^A-Za-z_&?]+)/g;

function classify(token) {
  if (token === "let" || token === "mut") return "kw";
  if (token === "&mut") return "ref";
  if (/^[A-Z]/.test(token)) return "type";
  if (token === "?") return "op";
  if (/^[a-z_]+$/.test(token)) return "ident";
  return null;
}

function Highlight({ line }) {
  const tokens = line.match(TOKEN) || [line];
  let prev = "";
  return tokens.map((t, i) => {
    let cls = classify(t);
    // identifiers immediately followed by "(" are method calls
    if (cls === "ident" && tokens[i + 1] && tokens[i + 1].startsWith("(")) cls = "fn";
    if (cls === "ident" && prev.trim().endsWith(".") && tokens[i + 1] && tokens[i + 1].startsWith("(")) cls = "fn";
    prev = t;
    return cls ? (
      <span key={i} className={`tok tok--${cls}`}>
        {t}
      </span>
    ) : (
      <span key={i}>{t}</span>
    );
  });
}

function BrewSnippet({ reduced }) {
  const [done, setDone] = useState(reduced);

  useEffect(() => {
    if (reduced) {
      setDone(true);
      return undefined;
    }
    setDone(false);
    const t = setTimeout(() => setDone(true), BREW_MS);
    return () => clearTimeout(t);
  }, [reduced]);

  return (
    <figure className="brew">
      <figcaption className="brew__bar">
        <span className="brew__file">cup.rs</span>
        <CopyButton text={SNIPPET.join("\n")} label="Copy the Rust snippet" />
      </figcaption>
      <pre className="brew__code" tabIndex={0} aria-label="Rust snippet: brewing a cup">
        {SNIPPET.map((line, i) => (
          <code key={line} className="brew__line" style={{ "--i": i }}>
            <span className="brew__ln" aria-hidden="true">
              {i + 1}
            </span>
            <Highlight line={line} />
          </code>
        ))}
      </pre>
      <p className={`brew__status${done ? " brew__status--done" : ""}`} role="status">
        {done ? (
          <>
            <span className="brew__check" aria-hidden="true">
              ✓
            </span>{" "}
            brewed in 0.42s
          </>
        ) : (
          <>
            <span className="brew__spinner" aria-hidden="true" /> brewing…
          </>
        )}
      </p>
    </figure>
  );
}
