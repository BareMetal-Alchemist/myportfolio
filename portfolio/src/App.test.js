import { render, screen, within } from "@testing-library/react";
import App from "./App";
import { runCommand } from "./components/CounterTerminal";
import experience from "./data/experience";
import projects from "./data/projects";

describe("App", () => {
  test("renders the hero headline as the only h1", () => {
    render(<App />);
    const h1s = screen.getAllByRole("heading", { level: 1 });
    expect(h1s).toHaveLength(1);
    expect(h1s[0]).toHaveTextContent(/Brewing better\s+detections\./);
  });

  test("renders landmarks and every labelled section", () => {
    render(<App />);
    expect(screen.getByRole("main")).toBeInTheDocument();
    expect(screen.getByRole("navigation", { name: /primary/i })).toBeInTheDocument();
    expect(screen.getByText(/brewed with Go, Rust/i)).toBeInTheDocument();
    for (const name of [
      /noah scott/i,
      /follow the signal/i,
      /fresh off the fab/i,
      /skills, served by the cup/i,
      /roasted, not rushed/i,
      /talk shop over coffee/i,
    ]) {
      expect(screen.getByRole("region", { name })).toBeInTheDocument();
    }
  });

  test("renders every experience entry and project from the data files", () => {
    render(<App />);
    const xp = screen.getByRole("region", { name: /follow the signal/i });
    for (const job of experience) {
      expect(within(xp).getByRole("heading", { name: job.role })).toBeInTheDocument();
    }
    const grid = screen.getByRole("region", { name: /fresh off the fab/i });
    for (const p of projects) {
      expect(within(grid).getByRole("heading", { name: p.name })).toBeInTheDocument();
    }
  });

  test("does not mention an analyst title anywhere", () => {
    render(<App />);
    expect(screen.queryByText(/analyst/i)).not.toBeInTheDocument();
  });
});

describe("counter terminal commands", () => {
  const ctx = { setTheme: jest.fn() };

  test("help lists the orders", () => {
    const { lines } = runCommand("help", ctx);
    expect(lines.join("\n")).toMatch(/brew experience/);
  });

  test("sudo is denied politely", () => {
    const { lines } = runCommand("sudo make me a latte", ctx);
    expect(lines[0]).toBe("Nice try. Permission denied: you're not in the baristas group.");
  });

  test("rustc tells a borrow-checker joke", () => {
    const { lines } = runCommand("rustc cup.rs", ctx);
    expect(lines.join("\n")).toMatch(/E0499/);
    expect(lines.join("\n")).toMatch(/&mut cup/);
  });

  test("section commands scroll to their section", () => {
    expect(runCommand("brew projects", ctx).scrollTo).toBe("projects");
    expect(runCommand("ls certs", ctx).scrollTo).toBe("education");
    expect(runCommand("menu", ctx).scrollTo).toBe("skills");
    expect(runCommand("contact", ctx).scrollTo).toBe("contact");
  });

  test("theme command sets the theme", () => {
    runCommand("theme dark", ctx);
    expect(ctx.setTheme).toHaveBeenCalledWith("dark");
  });

  test("unknown orders are rejected", () => {
    const { lines } = runCommand("make coffee", ctx);
    expect(lines[0]).toMatch(/order not found/);
  });
});
