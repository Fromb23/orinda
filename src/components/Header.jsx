"use client";

import { useEffect, useRef, useState } from "react";
import { navigation, profile } from "@/data/profile";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef(null);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a className="brand" href="#top" aria-label="Mr. Orinda — back to top" onClick={closeMenu}>
          <span className="brand__mark" aria-hidden="true">MO</span>
          <span className="brand__text">
            <strong>{profile.publicName}</strong>
            <small>Maths &amp; Physics</small>
          </span>
        </a>

        <button
          ref={buttonRef}
          className="menu-toggle"
          type="button"
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          id="primary-navigation"
          className={`primary-nav${isOpen ? " primary-nav--open" : ""}`}
          aria-label="Primary navigation"
        >
          <ul>
            {navigation.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={closeMenu}>{item.label}</a>
              </li>
            ))}
          </ul>
          <a className="button button--small" href="#contact" onClick={closeMenu}>Contact me</a>
        </nav>
      </div>
    </header>
  );
}
