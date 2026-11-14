import { useState } from "react";
import menu from "../data/skills";
import "./MenuBoard.css";

function priceLabel(price) {
  if (/^[●○]+$/.test(price)) {
    const filled = (price.match(/●/g) || []).length;
    return `proficiency ${filled} of ${price.length}`;
  }
  return price;
}

function MenuItem({ item, sectionId }) {
  const [open, setOpen] = useState(false);
  const noteId = `${sectionId}-${item.name.replace(/[^a-z0-9]+/gi, "-").toLowerCase()}-note`;
  const isDots = /^[●○]+$/.test(item.price);

  return (
    <li className={`menu__item${open ? " menu__item--open" : ""}`}>
      <button
        type="button"
        className="menu__row"
        aria-expanded={open}
        aria-controls={noteId}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="menu__name">{item.name}</span>
        <span className="menu__leader" aria-hidden="true" />
        <span className="menu__price">
          <span aria-hidden={isDots ? "true" : undefined}>{item.price}</span>
          {isDots && <span className="visually-hidden">{priceLabel(item.price)}</span>}
        </span>
      </button>
      <div id={noteId} className="menu__note">
        <p>
          <span className="menu__note-label">tasting note</span>
          {item.note}
        </p>
      </div>
    </li>
  );
}

export default function MenuBoard() {
  return (
    <section id="skills" className="section menu-section" aria-labelledby="menu-title">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">the menu</p>
          <h2 id="menu-title">Skills, served by the cup.</h2>
          <p>Hover, focus or tap an item for a tasting note: one line on what I have actually built with it.</p>
        </div>

        <div className="menu" role="presentation">
          <div className="menu__paper">
            <header className="menu__header">
              <p className="menu__kicker">est. 2022 · fullerton, ca</p>
              <h3 className="menu__title">today&apos;s menu</h3>
              <p className="menu__legend">● proficiency &nbsp;·&nbsp; &amp;mut: the house favorite</p>
            </header>

            <div className="menu__columns">
              {menu.map((section) => (
                <section key={section.id} className="menu__group" aria-labelledby={`menu-${section.id}`}>
                  <h4 id={`menu-${section.id}`} className="menu__group-title">
                    {section.title} <span className="menu__group-sub">{section.subtitle}</span>
                  </h4>
                  <ul>
                    {section.items.map((item) => (
                      <MenuItem key={item.name} item={item} sectionId={section.id} />
                    ))}
                  </ul>
                </section>
              ))}
            </div>

            <footer className="menu__footer">
              <p>prices in years of use, rounded to the nearest cup.</p>
            </footer>
          </div>
        </div>
      </div>
    </section>
  );
}
