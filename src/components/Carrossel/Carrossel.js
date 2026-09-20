import React from 'react';
import { FaStar } from 'react-icons/fa';

import DaizeLellysDesktop from './Img/banner.png';
import DaizeLellysMobile from './Img/banner-mobile.png';
import './Carrossel.css';

const Carrossel = () => {
  return (
    <section className="carrossel-template" id="home">
      
      <div className="div-geral-carrossel">
        <picture>
          <source media="(max-width: 800px)" srcSet={DaizeLellysMobile} />
          <img 
            src={DaizeLellysDesktop} 
            alt="Banner Oficial Daize Lellys - Walk the Talk" 
            className="img-banner"
            fetchPriority="high"
            loading="eager"
          />
        </picture>

        {/* BOTÃO EXCLUSIVO PARA O MOBILE (APARECE SOBRE A FOTO LIMPA) */}
        <div className="mobile-banner-cta">
          <a 
            href="https://api.whatsapp.com/send?phone=5583999220306&text=Quero+agendar+uma+aula+experimental%21" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-principal-lellys"
          >
            <span>Agendar Aula Experimental</span>
            <span className="btn-icone-estrela">
              <FaStar size={11} />
            </span>
          </a>
        </div>
      </div>

    </section>
  );
};

export default Carrossel;