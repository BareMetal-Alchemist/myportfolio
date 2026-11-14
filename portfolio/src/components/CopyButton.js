import { useEffect, useRef, useState } from "react";
import "./CopyButton.css";

async function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(text);
    return;
  }
  const ta = document.createElement("textarea");
  ta.value = text;
  ta.setAttribute("readonly", "");
  ta.style.position = "fixed";
  ta.style.opacity = "0";
  document.body.appendChild(ta);
  ta.select();
  document.execCommand("copy");
  document.body.removeChild(ta);
}

export default function CopyButton({ text, label = "Copy code" }) {
  const [state, setState] = useState("idle");
  const timer = useRef();

  useEffect(() => () => clearTimeout(timer.current), []);

  const onClick = async () => {
    try {
      await copyText(text);
      setState("copied");
    } catch {
      setState("failed");
    }
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setState("idle"), 1800);
  };

  return (
    <button type="button" className={`copy-btn copy-btn--${state}`} onClick={onClick} aria-label={label}>
      <span aria-live="polite">
        {state === "copied" ? "copied ✓" : state === "failed" ? "copy failed" : "copy"}
      </span>
    </button>
  );
}
