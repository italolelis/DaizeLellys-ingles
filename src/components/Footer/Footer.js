import React from "react";
import "./Footer.css";
import { FaInstagram } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { FaTiktok } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";

import footer from './Img/footer-img.png'

const Footer = () => {
  return (
    <div style={{ backgroundColor: '#fbeede'}}>
    <footer className="custom-footer">
      <div className="footer-top-illustration">
          <img className='footer-img' src={footer} alt=''/>
      </div>
      <div className="footer-container">
        
        {/* Lado Esquerdo / Centro: Redes Sociais */}
        <div className="footer-content">
          <p className="p-sociais-footer">Me siga nas redes sociais:</p>
          <div className="redes-sociais">
            <a href="https://www.instagram.com/teacherdaize_inglespelabiblia/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.youtube.com/DaizeLellyssuaprofessoraforadacaixa" target="_blank" rel="noopener noreferrer">
              <FiYoutube />
            </a>
            <a href="https://www.tiktok.com/@daizelellys_ingles" target="_blank" rel="noopener noreferrer">
              <FaTiktok />
            </a>
            <a href="https://www.facebook.com/daizelellys" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
          </div>
        </div>

        {/* Botão de Voltar ao Topo */}
        <a id="link-topo" href="#home" title="Voltar ao topo">
          <FaArrowUp />
        </a>
      </div>

      {/* Direitos Autorais */}
      <div className="employment">
        <p>&copy; Twins development 2023</p>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
