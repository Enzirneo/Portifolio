import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import './Hero.css';

export default function Hero({ darkMode }) {
  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      <section className="hero" id="sobre">
        <div className="blur-box">
          <div className="hero-text">
            <p data-key="hero-ola">Olá, eu sou</p>
            <h1 className="Nsobre" data-key="hero-nome">
              Enzo Villela Bispo
            </h1>
            <p className="subtext" data-key="hero-descricao">
              Desenvolvedor Frontend formado em Engenharia da Computação e apaixonado por transformar ideias em interfaces modernas, funcionais e responsivas.
              Tenho foco em criar experiências digitais que unam design e performance, sempre buscando aprimorar minhas habilidades com as melhores práticas do desenvolvimento web.
            </p>

            <div className="buttons">
              <a href="#contato" className="btn secondary" data-key="btn-contato">
                Entre em contato
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
          <button className="download-btn" data-key="btn-download">
            Baixar Currículo
          </button>
        </a>
      </section>
    </div>
  );
}
