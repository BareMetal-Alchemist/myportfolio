
function Header({ children }) {
  return(
    <header className="hero">
      <nav className="topbar" aria-label="Primary navigation">
        <a className="brand" href="/">Noah Scott</a>
        <div className="nav-links">
          <a href="#focus">Focus</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <div className="hero-content">
        <p className="eyebrow">Cybersecurity Engineer</p>
        <h1>Noah Scott</h1>
        <p className="hero-copy">
          I am a jack-of-all-trades computer scientist and engineer working across
          {children}, with a center of gravity in cybersecurity, IT, and practical
          software that holds up in the real world.
        </p>
        <div className="hero-actions" aria-label="Portfolio actions">
          <a className="button primary" href="#projects">View projects</a>
          <a className="button secondary" href="#experience">Experience</a>
          <a className="button ghost" href="mailto:noahleo.scott@gmail.com">Email me</a>
        </div>
      </div>
    </header>
  );
}

export default Header;
