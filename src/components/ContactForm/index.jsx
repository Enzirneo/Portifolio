import React, { useRef, useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import emailjs from "@emailjs/browser";
import './ContactForm.css';

export default function ContactForm() {
  const { menuLabels } = useLanguage();
  const formRef = useRef();
  const [statusMessage, setStatusMessage] = useState(null);

  if (!menuLabels || Object.keys(menuLabels).length === 0) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_wpkw7ri",
      "template_smugayg",
      formRef.current,
      "hsxanouzN5zTVBI9r"
    )
    .then((response) => {
      setStatusMessage({ type: "success", text: "Mensagem enviada com sucesso!" });
      formRef.current.reset();
    }, (error) => {
      setStatusMessage({ type: "error", text: "Erro ao enviar a mensagem. Tente novamente." });
      console.error("ERRO:", error);
    });
  };

  return (
    <>
      <form className="contact-form" ref={formRef} onSubmit={handleSubmit} id="contact-form">
        <h3>{menuLabels["form-titulo"]}</h3>
        <input name="user_name" type="text" placeholder={menuLabels["form-nome"]} required />
        <input name="user_email" type="email" placeholder={menuLabels["form-email"]} required />
        <input name="subject" type="text" placeholder={menuLabels["form-assunto"]} required />
        <textarea name="message" placeholder={menuLabels["form-msg"]} required></textarea>
        <button className="submit-btn" type="submit">{menuLabels["form-enviar"]}</button>
      </form>

      {statusMessage && (
        <p
          id={statusMessage.type === "success" ? "form-success" : "form-error"}
          style={{ color: statusMessage.type === "success" ? "green" : "red", marginTop: "1rem" }}
          role="alert"
        >
          {statusMessage.text}
        </p>
      )}
    </>
  );
}
