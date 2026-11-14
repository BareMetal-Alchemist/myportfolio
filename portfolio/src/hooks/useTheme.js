import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "theme";

function readStored() {
  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    return value === "dark" || value === "light" ? value : null;
  } catch {
    return null;
  }
}

function systemPrefersDark() {
  return typeof window !== "undefined" && typeof window.matchMedia === "function"
    ? window.matchMedia("(prefers-color-scheme: dark)").matches
    : false;
}

/**
 * Theme state. With no stored choice the site follows prefers-color-scheme
 * (light is the default otherwise). A stored choice wins and is written to
 * <html data-theme>. public/index.html applies the stored value before React
 * loads so there's no flash.
 */
export default function useTheme() {
  const [stored, setStored] = useState(() => (typeof window === "undefined" ? null : readStored()));
  const [systemDark, setSystemDark] = useState(systemPrefersDark);

  useEffect(() => {
    if (typeof window === "undefined" || typeof window.matchMedia !== "function") return undefined;
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (e) => setSystemDark(e.matches);
    if (typeof mql.addEventListener === "function") {
      mql.addEventListener("change", onChange);
      return () => mql.removeEventListener("change", onChange);
    }
    mql.addListener(onChange);
    return () => mql.removeListener(onChange);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (stored) {
      root.setAttribute("data-theme", stored);
    } else {
      root.removeAttribute("data-theme");
    }
  }, [stored]);

  const theme = stored || (systemDark ? "dark" : "light");

  const setTheme = useCallback((next) => {
    setStored(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* storage unavailable: theme still applies for this visit */
    }
  }, []);

  const toggle = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }, [theme, setTheme]);

  return { theme, setTheme, toggle };
}
