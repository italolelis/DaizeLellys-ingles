import React from 'react';
import { IoLogoWhatsapp } from 'react-icons/io';
import './WhatsAppButton.css';

export default function WhatsAppButton() {
  return (
    <div id="btn-flutuante">
      <a 
        href="https://api.whatsapp.com/send?phone=5583999220306&text=Quero+agendar+uma+aula+experimental%21" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Fale conosco no WhatsApp"
      >
        <IoLogoWhatsapp />
      </a>
    </div>
  );
}