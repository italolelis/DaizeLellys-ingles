import React from "react";
import "./Footer.css";
import { FaInstagram } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { FaTiktok, FaFacebookF, FaArrowUp } from "react-icons/fa6";

import footer from "./Img/footer-img.png";

const Footer = () => {
  // Função universal para voltar ao topo
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth" // Desliza suavemente
    });
  };

  return (
    <footer className="custom-footer">
      {/* Ilustração da xícara/livros no topo */}
      <div className="footer-top-illustration">
        <img className="footer-img" src={footer} alt="Ilustração Livros e Xícara" />
      </div>

      {/* CONTAINER PRINCIPAL */}
      <div className="footer-main-content">
        
        {/* LADO ESQUERDO: Marca + Slogans */}
        <div className="brand-section">
          
          {/* LOGO LELLYS IDIOMAS */}
          <div className="brand-logo-container">
            <span className="brand-title">Lellys</span>
            <div className="brand-subtitle-wrapper">
              <span className="brand-subtitle">IDIOMAS</span>
              <span className="heart-icon-logo">♥</span>
            </div>
          </div>

          <div className="brand-divider"></div>

          {/* SLOGANS */}
          <div className="brand-slogans">
            <div className="slogan-item">
              <span className="heart-icon-gold">♥</span>
              <div className="slogan-text">
                <strong>MORE THAN ENGLISH.</strong>
                <span>A FULLER LIFE.</span>
              </div>
            </div>

            <div className="slogan-item">
              <span className="heart-icon-gold">♥</span>
              <div className="slogan-text">
                <strong>MAIS QUE INGLÊS.</strong>
                <span>UMA VIDA MAIS COMPLETA.</span>
              </div>
            </div>
          </div>

          {/* TEXTO MANUSCRITO INCLINADO */}
          <div className="brand-handwritten">
            More than English<br />
            A fuller life <span className="heart-icon-gold-inline">♥</span>
          </div>

        </div>

        {/* LADO DIREITO: Redes Sociais + Botão Topo */}
        <div className="footer-social-section">
          <div className="social-block">
            <p className="p-sociais-footer">Me siga nas redes sociais:</p>
            <div className="redes-sociais">
              <a href="https://www.instagram.com/teacherdaize_inglespelabiblia/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://www.youtube.com/DaizeLellyssuaprofessoraforadacaixa" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <FiYoutube />
              </a>
              <a href="https://www.tiktok.com/@daizelellys_ingles" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                <FaTiktok />
              </a>
              <a href="https://www.facebook.com/daizelellys" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebookF />
              </a>
            </div>
          </div>

          {/* BOTÃO VOLTAR AO TOPO (ATUALIZADO) */}
          <button 
            id="link-topo" 
            onClick={scrollToTop} 
            title="Voltar ao topo" 
            aria-label="Voltar ao topo"
            type="button"
          >
            <FaArrowUp />
          </button>
        </div>

      </div>

      {/* DIREITOS AUTORAIS */}
      <div className="employment">
        <p>&copy; Twins development 2026</p>
      </div>
    </footer>
  );
};

export default Footer;