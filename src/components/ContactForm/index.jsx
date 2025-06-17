import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import './ContactForm.css';

export default function ContactForm() {
  const { menuLabels } = useLanguage();

  if (!menuLabels || Object.keys(menuLabels).length === 0) return null;

  return (
    <form className="contact-form">
      <h3>{menuLabels["form-titulo"]}</h3>
      <input type="text" placeholder={menuLabels["form-nome"]} />
      <input type="email" placeholder={menuLabels["form-email"]} />
      <input type="text" placeholder={menuLabels["form-assunto"]} />
      <textarea placeholder={menuLabels["form-msg"]}></textarea>
      <button className="submit-btn">{menuLabels["form-enviar"]}</button>
    </form>
  );
}
