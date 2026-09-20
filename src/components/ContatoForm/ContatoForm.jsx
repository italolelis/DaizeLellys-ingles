import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa6';
import './ContatoForm.css';

export default function ContatoForm({ titulo, subtitulo }) {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const textoWhatsapp = `Olá! Meu nome é *${formData.nome}* (${formData.email}).%0A%0A*Mensagem:* ${formData.mensagem}`;
    const url = `https://api.whatsapp.com/send?phone=5583999220306&text=${textoWhatsapp}`;
    window.open(url, '_blank');
  };

  return (
    <section className="secao-contato-form">
      <div className="contato-form-container">
        {titulo && <h2>{titulo}</h2>}
        {subtitulo && <p className="subtitulo-contato">{subtitulo}</p>}

        <form onSubmit={handleSubmit} className="form-box">
          <div className="form-group-row">
            <input 
              type="text" 
              name="nome"
              placeholder="Seu Nome *" 
              required 
              value={formData.nome}
              onChange={handleChange}
            />
            <input 
              type="email" 
              name="email"
              placeholder="Seu E-mail *" 
              required 
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <textarea 
            name="mensagem"
            rows="4" 
            placeholder="Sua mensagem ou dúvida..." 
            required
            value={formData.mensagem}
            onChange={handleChange}
          ></textarea>

          <button type="submit" className="btn-principal-lellys">
            <span>Enviar Mensagem</span>
            <span className="btn-icone-estrela">
              <FaStar size={11} />
            </span>
          </button>
        </form>
      </div>
    </section>
  );
}