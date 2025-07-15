import React, { useState, useEffect } from "react";
import { Moon, Sun, Menu , X } from "lucide-react";
import './Header.css';
import { useLanguage } from "../../context/LanguageContext";

export default function Header() {
  const { currentLanguage, toggleLanguage, menuLabels } = useLanguage();

  const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem("darkMode") === "true");
  const [menuOpen, setMenuOpen] = useState(false);

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
  if (!target) return;

  const rect = target.getBoundingClientRect();
  const scrollY = window.scrollY || window.pageYOffset;

  let targetY = rect.top + scrollY;

  if (window.innerWidth <= 768) {
    const h2 = target.querySelector("h2");
    if (h2) {
      const h2Offset = h2.getBoundingClientRect().top + scrollY;
      const offsetTop = h2Offset - 80;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    } else {
      window.scrollTo({ top: target.offsetTop - 80, behavior: "smooth" });
    }
  } else {
    window.scrollTo({ top: target.offsetTop - 50, behavior: "smooth" });
  }

  setMenuOpen(false);
}

  return (
    <header>
      <div className="header-row">
        <h1 className="name">Enzo Villela Bispo</h1>

        <div className={`nav-wrapper ${menuOpen ? "open" : ""}`}>
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
          
          <button className="menu-toggle" onClick={() => setMenuOpen(prev => !prev)}>
            {menuOpen ? <X size={22} /> :<Menu size={22} />}
          </button>
        </div>
      </div>
    </header>
  );
}
