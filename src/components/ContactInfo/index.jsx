import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import './ContactInfo.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function ContactInfo() {
  const { menuLabels } = useLanguage();

  if (!menuLabels || Object.keys(menuLabels).length === 0) return null;

  return (
    <div className="info-wrapper">
      <div className="info-box">
        <i className="fas fa-map-marker-alt"></i>
        <div>
          <h4>{menuLabels["contato-localizacao"]}</h4>
          <p>{menuLabels["contato-cidade"]}</p>
        </div>
      </div>
      <div className="info-box">
        <i className="fas fa-envelope"></i>
        <div>
          <h4>{menuLabels["contato-email"]}</h4>
          <p>enzo.bispo22@gmail.com</p>
        </div>
      </div>
      <div className="info-box">
        <i className="fas fa-phone-alt"></i>
        <div>
          <h4>{menuLabels["contato-telefone"]}</h4>
          <p>(21) 99949-1122</p>
        </div>
      </div>
    </div>
  );
}
