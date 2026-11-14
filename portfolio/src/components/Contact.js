import links from "../data/links";
import profile from "../data/profile";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./Icons";
import { PageTraces } from "./CircuitTraces";
import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="section section--band contact" aria-labelledby="contact-title">
      <PageTraces />
      <div className="container contact__inner">
        <div className="section-head">
          <p className="eyebrow">contact</p>
          <h2 id="contact-title">Let&apos;s talk shop over coffee.</h2>
          <p>
            Detections, pipelines, Go, Rust, or anything low-level. I read everything that lands in my inbox. Based in {profile.location}.
          </p>
        </div>

        <ul className="contact__links">
          <li>
            <a className="contact__card" href={`mailto:${links.email}`}>
              <span className="contact__icon">
                <MailIcon />
              </span>
              <span className="contact__label">email</span>
              <span className="contact__value">{links.email}</span>
            </a>
          </li>
          <li>
            <a className="contact__card" href={links.linkedin} target="_blank" rel="me noreferrer">
              <span className="contact__icon">
                <LinkedInIcon />
              </span>
              <span className="contact__label">linkedin</span>
              <span className="contact__value">in/noahleonardscott</span>
            </a>
          </li>
          <li>
            <a className="contact__card" href={links.github} target="_blank" rel="me noreferrer">
              <span className="contact__icon">
                <GitHubIcon />
              </span>
              <span className="contact__label">github</span>
              <span className="contact__value">BareMetal-Alchemist</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
