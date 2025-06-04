// src/App.tsx
import { Navbar }  from './components/navbar';
import { Hero }    from './components/Home';
import { About }   from './components/About';
import { Skills }  from './components/Skills';
import { Projects }from './components/Projects';
import { Resume }  from './components/Resume';
import { Contact } from './components/Contact';
import { Footer }  from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
