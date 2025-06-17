import React from 'react';
import ProjectCard from '../ProjectCard';
import { useLanguage } from "../../context/LanguageContext";
import "./projects.css";

export default function Projects() {
  const { menuLabels } = useLanguage();

  return (
    <section className="projects-section" id="projetos">
      <div className="section-container">
        <h2 data-key="projetos-titulo">{menuLabels["projetos-titulo"]}</h2>
        <p data-key="projetos-descricao" dangerouslySetInnerHTML={{ __html: menuLabels["projetos-descricao"] }}></p>

        <div className="projects-grid">
          <ProjectCard
            image="/images/Enlemar.png"
            title="Enlemar"
            description={menuLabels["proj1-descricao"]}
            link={null}
            dataKeyDesc="proj1-descricao"
          />
          <ProjectCard
            image="/images/organo.png"
            title="Organo"
            description={menuLabels["proj2-descricao"]}
            link="https://organo-zeta-blond.vercel.app/"
            dataKeyDesc="proj2-descricao"
            dataKeyLink="proj2-link"
          />
          <ProjectCard
            image="/images/Galeria.png"
            title="Galeria de Fotos"
            description={menuLabels["proj3-descricao"]}
            link="https://galeria-de-fotos-rosy-iota.vercel.app/"
            dataKeyDesc="proj3-descricao"
            dataKeyLink="proj3-link"
          />
        </div>
      </div>
    </section>
  );
}
