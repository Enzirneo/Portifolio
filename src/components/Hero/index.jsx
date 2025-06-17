import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import './Hero.css';
import { useLanguage } from '../../context/LanguageContext';

export default function Hero({ darkMode }) {
  const { menuLabels } = useLanguage();

  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      <section className="hero" id="sobre">
        <div className="blur-box">
          <div className="hero-text">
            <p>{menuLabels["hero-ola"]}</p>
            <h1 className="Nsobre">{menuLabels["hero-nome"]}</h1>
            <p className="subtext" dangerouslySetInnerHTML={{ __html: menuLabels["hero-descricao"] }} />

            <div className="buttons">
              <a href="#contato" className="btn secondary">
                {menuLabels["btn-contato"]}
              </a>
            </div>

            <div className="social-icons">
              <a href="https://github.com/Enzirneo" target="_blank" rel="noopener noreferrer">
                <Github />
              </a>
              <a href="https://www.linkedin.com/in/enzo-bispo-68738a24b/" target="_blank" rel="noopener noreferrer">
                <Linkedin />
              </a>
              <a href="mailto:bispo.22.ev@gmail.com" target="_blank" rel="noopener noreferrer">
                <Mail />
              </a>
            </div>
          </div>

          <div className="profile-container">
            <img
              src="/images/foto_solo.jpg"
              alt="Foto de perfil"
              className="profile-image"
            />
          </div>
        </div>

        <a
          href="https://drive.google.com/uc?export=download&id=1MXSNYr6FaBIDVYKhPX7KcV8j_Sa6sNwQ"
          download="Enzo_Villela_Bispo_Curriculo.pdf"
          className="download-btn-link"
        >
          <button className="download-btn">
            {menuLabels["btn-download"]}
          </button>
        </a>
      </section>
    </div>
  );
}
