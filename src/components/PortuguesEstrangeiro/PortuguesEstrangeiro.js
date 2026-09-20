import React from 'react';
import './PortuguesEstrangeiro.css';
import tituloImg from './Img/brasil-cores-da-vida.png';
import calendarioImg from './Img/calendario.png';
import culturabrasileiraImg from './Img/cultura-brasileira.png'; 
import aulaonlineImg from './Img/aulaonline.png';
import { FaStar } from "react-icons/fa";

const PortugueseEstrangeiro = () => {
  return (
    <section className="secao-portugues" id="portugues-estrangeiros">
      <div className="container-conteudo">
        <div className="texto-box">
          
          {/* Imagem do título */}
          <img src={tituloImg} alt="Brasil: Cores da Vida" className="titulo-imagem" />
          
          <h2 className="subtitulo-secao">Portuguese for Foreigners</h2>
        
          <p className="descricao-secao">
            Experience cultural immersion, achieve fluency, and discover the <span className="destaque-texto">true essence of Brazil</span>, beyond the pages of a book.
          </p>

          {/* ÍCONES DE CARACTERÍSTICAS */}
          <div className="caracteristicas-container">
            <div className="card-caracteristica">
              <img src={calendarioImg} alt="Flexible Lessons" className="container-imagem"/>
              <p className="texto-caracteristica">Flexible Lessons</p>
              <p className="subtexto-caracteristica">Horários Flexíveis</p>
              <p className="subtexto-caracteristica">Flexible scheduling</p>
            </div>
            
            <div className="card-caracteristica">
              <img src={aulaonlineImg} alt="Online and Live" className="container-imagem"/>
              <p className="texto-caracteristica">Online & Live</p>
              <p className="subtexto-caracteristica">Aulas Online e Ao Vivo</p>
              <p className="subtexto-caracteristica">100% Online & Live Sessions</p>
            </div>
            
            <div className="card-caracteristica">
              <img src={culturabrasileiraImg} alt="Cultural Immersion" className="container-imagem"/>
              <p className="texto-caracteristica">Cultural Immersion</p>
              <p className="subtexto-caracteristica">Muita Cultura Brasileira</p>
              <p className="subtexto-caracteristica">Rich Brazilian Culture</p>
            </div>
          </div>

          {/* BOTÃO CTA CENTRALIZADO */}
          <div className="portugues-cta-container">
            <a 
              href="https://api.whatsapp.com/send?phone=5583999220306&text=Quero+aprender+portugu%C3%AAs%21" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-principal-lellys"
            >
              <span>Schedule a trial lesson</span>
              <span className="btn-icone-estrela"><FaStar size={16}/></span>
            </a>
          </div>

        </div>
      </div>

    <div className="transicao-portugues-rodape">
  <svg
    viewBox="0 0 1440 120"
    preserveAspectRatio="none"
    className="svg-curva-puro"
  >
    {/* Preenchimento do Bege (Garante a cobertura total das bordas) */}
    <path
      d="M-10,40 C360,100 1080,0 1450,50 L1450,130 L-10,130 Z"
      fill="#fbeede"
    />

    {/* Linha Dourada */}
    <path
      d="M-10,38 C360,98 1080,-2 1450,48"
      stroke="#a87e14"
      strokeWidth="2.5"
      fill="none"
    />

    {/* Linha Verde Brasil */}
    <path
      d="M-10,43 C360,103 1080,3 1450,53"
      stroke="#006B3F"
      strokeWidth="2.5"
      fill="none"
    />
  </svg>
</div>
    </section>
  );
};

export default PortugueseEstrangeiro;