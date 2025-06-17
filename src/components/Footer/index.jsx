import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import "./Footer.css";

export default function Footer() {
  const { menuLabels } = useLanguage();

  if (!menuLabels || Object.keys(menuLabels).length === 0) return null;

  return (
    <footer className="footer">
      <h2 className="footer-name">{menuLabels["footer-nome"]}</h2>

      <nav className="footer-menu" aria-label="Footer navigation">
        <a href="#sobre">{menuLabels["footer-menu-sobre"]}</a>
        <a href="#projetos">{menuLabels["footer-menu-projetos"]}</a>
        <a href="#habilidades">{menuLabels["footer-menu-habilidades"]}</a>
        <a href="#contato">{menuLabels["footer-menu-contato"]}</a>
      </nav>

      <div className="footer-social">
        <a
          href="mailto:bispo.22.ev@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Email"
        >
          <i className="fas fa-envelope"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/enzo-bispo-68738a24b/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <i className="fab fa-linkedin"></i>
        </a>
      </div>

      <p
        className="footer-copy"
        dangerouslySetInnerHTML={{ __html: menuLabels["footer-direitos"] }}
      />
    </footer>
  );
}
