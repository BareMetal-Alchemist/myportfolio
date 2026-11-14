import "./CircuitTraces.css";

/**
 * Decorative copper-on-paper circuit traces that run in from the page edges.
 * Purely visual: aria-hidden, no pointer events, never behind body text.
 */
export function PageTraces() {
  return (
    <div className="page-traces" aria-hidden="true">
      <svg className="page-traces__tl" viewBox="0 0 420 320" fill="none">
        <path d="M0 40h120l30 30h90" />
        <path d="M0 88h70l24 24h110l20-20h60" />
        <path d="M0 136h150l40 40v60" />
        <path d="M40 0v60l30 30v80" />
        <path d="M104 0v36l20 20" />
        <circle cx="240" cy="70" r="4" />
        <circle cx="274" cy="92" r="4" />
        <circle cx="190" cy="236" r="4" />
        <circle cx="70" cy="170" r="4" />
        <circle cx="124" cy="56" r="4" />
        <circle cx="334" cy="92" r="3" />
      </svg>
      <svg className="page-traces__br" viewBox="0 0 420 320" fill="none">
        <path d="M420 280H300l-30-30h-90" />
        <path d="M420 232h-70l-24-24H216l-20 20h-60" />
        <path d="M420 184H270l-40-40V84" />
        <path d="M380 320v-60l-30-30v-80" />
        <path d="M316 320v-36l-20-20" />
        <circle cx="180" cy="250" r="4" />
        <circle cx="136" cy="228" r="4" />
        <circle cx="230" cy="84" r="4" />
        <circle cx="350" cy="150" r="4" />
        <circle cx="296" cy="264" r="4" />
      </svg>
    </div>
  );
}

/** Small corner trace used inside sections and cards. */
export function TraceCorner({ className = "" }) {
  return (
    <svg className={`trace-corner ${className}`} viewBox="0 0 120 120" fill="none" aria-hidden="true" focusable="false">
      <path d="M120 24H70l-14 14H20" />
      <path d="M96 120V70L82 56V20" />
      <circle cx="20" cy="38" r="3.5" />
      <circle cx="82" cy="20" r="3.5" />
      <circle cx="56" cy="38" r="2.5" />
    </svg>
  );
}
