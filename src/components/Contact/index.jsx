import React from "react";
import ContactInfo from "../ContactInfo";
import ContactForm from "../ContactForm";
import { useLanguage } from "../../context/LanguageContext";
import "./Contact.css";

export default function Contact() {
  const { menuLabels } = useLanguage();

  if (!menuLabels || Object.keys(menuLabels).length === 0) {
    return null;
  }

  return (
    <section className="contact-section" id="contato">
      <div className="section-container">
        <h2>{menuLabels["contato-titulo"]}</h2>
        <p dangerouslySetInnerHTML={{ __html: menuLabels["contato-descricao"] }}></p>
        <div className="contact-container">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
