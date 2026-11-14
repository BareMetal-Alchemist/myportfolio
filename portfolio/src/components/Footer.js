import links from "../data/links";
import profile from "../data/profile";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__line">
          brewed with Go, Rust &amp; too much coffee · © {year} {profile.name}
        </p>
        <ul className="footer__links">
          <li>
            <a href={links.github} rel="me noreferrer" target="_blank">
              github
            </a>
          </li>
          <li>
            <a href={links.linkedin} rel="me noreferrer" target="_blank">
              linkedin
            </a>
          </li>
          <li>
            <a href={`mailto:${links.email}`}>email</a>
          </li>
          <li>
            <a href="#top">back to top ↑</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
