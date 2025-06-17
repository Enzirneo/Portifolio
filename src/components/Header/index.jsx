import React, { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import './Header.css';
import { useLanguage } from "../../context/LanguageContext";

export default function Header() {
  const { currentLanguage, toggleLanguage, menuLabels } = useLanguage();

  const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem("darkMode") === "true");

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
    localStorage.setItem("darkMode", isDarkMode);
  }, [isDarkMode]);

  function handleDarkModeToggle() {
    setIsDarkMode(prev => !prev);
  }

  function handleMenuClick(e, targetId) {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      const windowHeight = window.innerHeight;
      const sectionHeight = target.offsetHeight;
      const offsetTop = target.getBoundingClientRect().top + window.pageYOffset;
      const scrollTo = offsetTop - (windowHeight / 2) + (sectionHeight / 2);
      window.scrollTo({ top: scrollTo, behavior: "smooth" });
    }
  }

  return (
    <header>
      <div className="header-row">
        <h1 className="name">Enzo Villela Bispo</h1>

        <div className="nav-wrapper">
          <nav className="nav-container">
            <ul>
              <li><a href="#sobre" onClick={(e) => handleMenuClick(e, "sobre")}>{menuLabels["menu-sobre"]}</a></li>
              <li><a href="#habilidades" onClick={(e) => handleMenuClick(e, "habilidades")}>{menuLabels["menu-habilidades"]}</a></li>
              <li><a href="#projetos" onClick={(e) => handleMenuClick(e, "projetos")}>{menuLabels["menu-projetos"]}</a></li>
              <li><a href="#contato" onClick={(e) => handleMenuClick(e, "contato")}>{menuLabels["menu-contato"]}</a></li>
            </ul>
          </nav>
        </div>

        <div className="top-buttons">
          <button className="lang-toggle" onClick={toggleLanguage}>
            {currentLanguage === "pt" ? "EN" : "PT"}
          </button>

          <button className="theme-toggle" onClick={handleDarkModeToggle}>
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>
    </header>
  );
}
