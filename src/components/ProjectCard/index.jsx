import React from 'react';
import "./projectcard.css";

export default function ProjectCard({ image, title, description, link, dataKeyDesc, dataKeyLink }) {
  return (
    <div className="project-card">
      <img src={image} alt={`Projeto ${title}`} />
      <h4>{title}</h4>
      <p data-key={dataKeyDesc}>{description}</p>
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer" data-key={dataKeyLink}>
          Ver Projeto
        </a>
      )}
    </div>
  );
}
