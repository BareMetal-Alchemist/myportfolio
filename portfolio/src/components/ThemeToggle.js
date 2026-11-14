import "./ThemeToggle.css";

/** Light "paper" / dark "evening espresso" switch. */
export default function ThemeToggle({ theme, onToggle }) {
  const dark = theme === "dark";
  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={onToggle}
      aria-pressed={dark}
      aria-label={dark ? "Switch to paper (light) theme" : "Switch to evening espresso (dark) theme"}
      title={dark ? "paper" : "evening espresso"}
    >
      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false">
        {dark ? (
          <>
            <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.6" />
            <path
              d="M12 2.5v2.5M12 19v2.5M2.5 12H5M19 12h2.5M5.3 5.3l1.8 1.8M16.9 16.9l1.8 1.8M5.3 18.7l1.8-1.8M16.9 7.1l1.8-1.8"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </>
        ) : (
          <path
            d="M14.5 3.5a8.5 8.5 0 1 0 6 14.6A9 9 0 0 1 14.5 3.5z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        )}
      </svg>
    </button>
  );
}
