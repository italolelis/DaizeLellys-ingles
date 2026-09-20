import React, { useState } from 'react';
import { FaWhatsapp, FaEnvelope, FaInstagram, FaLocationDot, FaPaperPlane } from 'react-icons/fa6';
import './Contato.css';

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    assunto: 'Aula Experimental',
    mensagem: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Monta a mensagem formatada para envio direto ao WhatsApp
    const textoWhatsapp = `Olá! Meu nome é *${formData.nome}* (${formData.email}).%0A%0A*Assunto:* ${formData.assunto}%0A*Mensagem:* ${formData.mensagem}`;
    const url = `https://api.whatsapp.com/send?phone=5583999220306&text=${textoWhatsapp}`;
    
    window.open(url, '_blank');
  };

  return (
    <section className="contacto-container">
      {/* CABEÇALHO DA PÁGINA */}
      <div className="contacto-header">
        <h1>LET'S TALK! / VAMOS CONVERSAR!</h1>
        <p>Tem dúvidas sobre os planos, metodologia ou quer agendar uma aula experimental? Entre em contacto!</p>
        <div className="linha-decorativa-dourada"></div>
      </div>

      <div className="contacto-content">
        {/* COLUNA 1: INFORMAÇÕES DE CONTACTO */}
        <div className="contacto-info-card">
          <h2>Canais de Atendimento</h2>
          <p className="info-subtexto">Escolha o canal que preferir ou envie uma mensagem no formulário.</p>

          <div className="info-items">
            {/* WHATSAPP */}
            <a 
              href="https://api.whatsapp.com/send?phone=5583999220306&text=Olá!+Gostaria+de+saber+mais+sobre+as+aulas." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="info-item"
            >
              <div className="info-icone-box">
                <FaWhatsapp />
              </div>
              <div className="info-texto">
                <strong>WhatsApp</strong>
                <span>+55 (83) 99922-0306</span>
              </div>
            </a>

            {/* EMAIL */}
            <a href="mailto:contato@walkthetalk.com" className="info-item">
              <div className="info-icone-box">
                <FaEnvelope />
              </div>
              <div className="info-texto">
                <strong>E-mail</strong>
                <span>daize.lellys@gmail.com</span>
              </div>
            </a>

            {/* INSTAGRAM */}
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="info-item"
            >
              <div className="info-icone-box">
                <FaInstagram />
              </div>
              <div className="info-texto">
                <strong>Instagram</strong>
                <span>@daizelellys</span>
              </div>
            </a>

            {/* LOCALIZAÇÃO / FORMATO */}
            <div className="info-item sem-hover">
              <div className="info-icone-box">
                <FaLocationDot />
              </div>
              <div className="info-texto">
                <strong>Formato das Aulas</strong>
                <span>100% Online • Ao Vivo</span>
              </div>
            </div>
          </div>
        </div>

        {/* COLUNA 2: FORMULÁRIO DE MENSAGEM */}
        <div className="contacto-form-card">
          <h2>Envie uma Mensagem</h2>

          <form onSubmit={handleSubmit} className="contacto-form">
            <div className="form-group">
              <label htmlFor="nome">Seu Nome *</label>
              <input 
                type="text" 
                id="nome" 
                name="nome" 
                placeholder="Ex: Maria Silva" 
                required 
                value={formData.nome}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Seu E-mail *</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="Ex: maria@email.com" 
                required 
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="assunto">Assunto</label>
              <select 
                id="assunto" 
                name="assunto" 
                value={formData.assunto}
                onChange={handleChange}
              >
                <option value="Aula Experimental">Aula Experimental</option>
                <option value="Plano Individual">Plano Individual</option>
                <option value="Plano Dupla">Plano Dupla</option>
                <option value="Plano Grupo">Plano Grupo</option>
                <option value="Outros">Outras Dúvidas</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="mensagem">Sua Mensagem *</label>
              <textarea 
                id="mensagem" 
                name="mensagem" 
                rows="4" 
                placeholder="Como posso te ajudar hoje?" 
                required
                value={formData.mensagem}
                onChange={handleChange}
              ></textarea>
            </div>

            <button type="submit" className="btn-enviar-contacto">
              <span>Enviar via WhatsApp</span>
              <FaPaperPlane />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}