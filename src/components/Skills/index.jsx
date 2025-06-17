import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import SkillCategory from "../SkillCategory";
import './Skills.css';

export default function Skills() {
  const { menuLabels } = useLanguage();

  const categories = [
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "Figma", "WordPress"],
      skillClass: "front",
    },
    {
      title: "Backend",
      skills: ["Node.js", "Python", "Java", "MySQL", "C++"],
      skillClass: "back",
    },
    {
      title: "Tools & DevOps",
      skills: ["Git", "Windows", "Prompt Engineer", "Linux"],
      skillClass: "devops",
    },
  ];

  return (
    <section className="skills-section" id="habilidades">
      <div className="section-container">
        <h2>{menuLabels["habilidades-titulo"]}</h2>
        <p
          dangerouslySetInnerHTML={{
            __html: menuLabels["habilidades-descricao"],
          }}
        />
        <div className="skills-container">
          {categories.map(({ title, skills, skillClass }) => (
            <SkillCategory
              key={title}
              title={title}
              skills={skills}
              skillClass={skillClass}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
