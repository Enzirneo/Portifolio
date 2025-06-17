import React from "react";
import './SkillCategory.css';

export default function SkillCategory({ title, skills, skillClass }) {
  return (
    <div className="skills-grid">
      <h3>{title}</h3>
      <div className="habili">
        {skills.map((skill) => (
          <div key={skill} className={`skill-box ${skillClass}`}>
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}
