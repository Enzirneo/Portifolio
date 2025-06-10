import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import './Header.css';

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem("darkMode") === "true");
  const [currentLanguage, setCurrentLanguage] = useState(() => localStorage.getItem("lang") || "pt");
  const [menuLabels, setMenuLabels] = useState({});

  useEffect(() => {
    function updateLanguage(lang) {
      const newLabels = {};
      Object.keys(translations[lang]).forEach(key => {
        newLabels[key] = translations[lang][key];
      });
      setMenuLabels(newLabels);
    }
    updateLanguage(currentLanguage);
  }, [currentLanguage]);

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

  function handleLanguageToggle() {
    setCurrentLanguage(prev => (prev === "pt" ? "en" : "pt"));
    localStorage.setItem("lang", currentLanguage === "pt" ? "en" : "pt");
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
          <li>
            <a
              href="#sobre"
              onClick={(e) => handleMenuClick(e, "sobre")}
              data-key="menu-sobre"
            >
              {menuLabels["menu-sobre"]}
            </a>
          </li>
          <li>
            <a
              href="#habilidades"
              onClick={(e) => handleMenuClick(e, "habilidades")}
              data-key="menu-habilidades"
            >
              {menuLabels["menu-habilidades"]}
            </a>
          </li>
          <li>
            <a
              href="#projetos"
              onClick={(e) => handleMenuClick(e, "projetos")}
              data-key="menu-projetos"
            >
              {menuLabels["menu-projetos"]}
            </a>
          </li>
          <li>
            <a
              href="#contato"
              onClick={(e) => handleMenuClick(e, "contato")}
              data-key="menu-contato"
            >
              {menuLabels["menu-contato"]}
            </a>
          </li>
        </ul>
      </nav>
    </div>

    <div className="top-buttons">
      <button className="lang-toggle" onClick={handleLanguageToggle}>
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

const translations = {
  pt: {
    "menu-sobre": "Sobre Mim",
    "menu-habilidades": "Habilidades",
    "menu-projetos": "Projetos",
    "menu-contato": "Contato",
    "hero-ola": "Olá, eu sou",
    "hero-nome": "Enzo Villela Bispo",
    "hero-descricao": "Desenvolvedor Frontend formado em Engenharia da Computação e apaixonado por transformar ideias em interfaces modernas, funcionais e responsivas. Tenho foco em criar experiências digitais que unam design e performance, sempre buscando aprimorar minhas habilidades com as melhores práticas do desenvolvimento web.",
    "btn-contato": "Entre em contato",
    "btn-download": "Baixar Currículo",
    "habilidades-titulo": "Habilidades",
    "habilidades-descricao": "Meu conjunto de habilidades abrange diversas tecnologias e ferramentas<br>que utilizo para criar soluções robustas e escaláveis.",
    "projetos-titulo": "Projetos",
    "projetos-descricao": "Aqui estão alguns dos projetos que desenvolvi, minhas habilidades<br>técnicas e criativas.",
    "proj1-descricao": "O projeto é um site de uma empresa de arquitetura fictícia criada no WordPress, focado em apresentar a empresa e seu funcionamento.",
    "proj1-link": "Ver Projeto",
    "proj2-descricao": "Pequena plataforma para organizar times de Esports. Feito com react.",
    "proj2-link": "Ver Projeto",
    "proj3-descricao": "Um site desenvolvido em Reacte e Vite, utilizando API do Pexels e componentes reutilizáveis.",
    "proj3-link": "Ver Projeto",
    "contato-titulo": "Entre em Contato",
    "contato-descricao": "Tem um projeto em mente ou quer conversar sobre oportunidades de trabalho? <br>Entre em contato comigo!",
    "contato-localizacao": "Localização",
    "contato-cidade": "Rio de Janeiro, Brasil",
    "contato-email": "Email",
    "contato-telefone": "Telefone",
    "form-titulo": "Envie uma mensagem",
    "form-nome": "Seu nome",
    "form-email": "seu.email@exemplo.com",
    "form-assunto": "Assunto da mensagem",
    "form-msg": "Sua mensagem",
    "form-enviar": "Enviar Mensagem",
    "footer-nome": "Enzo Villela Bispo",
    "footer-menu-sobre": "Sobre",
    "footer-menu-projetos": "Projetos",
    "footer-menu-habilidades": "Habilidades",
    "footer-menu-contato": "Contato",
    "footer-direitos": "&copy; 2025 Enzo Villela Bispo. Todos os direitos reservados."
  },
  en: {
    "menu-sobre": "About Me",
    "menu-habilidades": "Skills",
    "menu-projetos": "Projects",
    "menu-contato": "Contact",
    "hero-ola": "Hello, I am",
    "hero-nome": "Enzo Villela Bispo",
    "hero-descricao": "Frontend Developer with a degree in Computer Engineering, passionate about transforming ideas into modern, functional, and responsive interfaces. I focus on creating digital experiences that combine design and performance, always seeking to improve my skills with best web development practices.",
    "btn-contato": "Contact me",
    "btn-download": "Download Resume",
    "habilidades-titulo": "Skills",
    "habilidades-descricao": "My skillset covers various technologies and tools<br>that I use to build robust and scalable solutions.",
    "projetos-titulo": "Projects",
    "projetos-descricao": "Here are some of the projects I've developed, showcasing my technical<br>and creative skills.",
    "proj1-descricao": "This project is a website for a fictional architecture company created in WordPress, focused on presenting the business and how it works.",
    "proj1-link": "View Project",
    "proj2-descricao": "Small platform to organize Esports teams. Made with react.",
    "proj2-link": "View Project",
    "proj3-descricao": "A website developed with React and Vite, using the Pexels API, and reusable components.",
    "proj3-link": "View Project",
    "contato-titulo": "Get in Touch",
    "contato-descricao": "Got a project in mind or want to talk about job opportunities? <br>Reach out to me!",
    "contato-localizacao": "Location",
    "contato-cidade": "Rio de Janeiro, Brazil",
    "contato-email": "Email",
    "contato-telefone": "Phone",
    "form-titulo": "Send a Message",
    "form-nome": "Your name",
    "form-email": "your.email@example.com",
    "form-assunto": "Message subject",
    "form-msg": "Your message",
    "form-enviar": "Send Message",
    "footer-nome": "Enzo Villela Bispo",
    "footer-menu-sobre": "About",
    "footer-menu-projetos": "Projects",
    "footer-menu-habilidades": "Skills",
    "footer-menu-contato": "Contact",
    "footer-direitos": "&copy; 2025 Enzo Villela Bispo. All rights reserved."
  }
};