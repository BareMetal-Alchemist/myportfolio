import { Suspense, lazy } from "react";
import useTheme from "./hooks/useTheme";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import DieMap from "./components/DieMap";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import MenuBoard from "./components/MenuBoard";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Below the fold and optional: load the terminal on demand.
const CounterTerminal = lazy(() => import("./components/CounterTerminal"));

export default function App() {
  const { theme, toggle, setTheme } = useTheme();

  return (
    <>
      <Nav theme={theme} onToggleTheme={toggle} />
      <main id="main">
        <Hero />
        <DieMap />
        <About />
        <Experience />
        <Projects />
        <MenuBoard />
        <Education />
        <Suspense fallback={<div className="section section--band" aria-hidden="true" />}>
          <CounterTerminal onTheme={setTheme} />
        </Suspense>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
