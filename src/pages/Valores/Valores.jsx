import React from 'react';
import imgcaffee from './img/coffee-english.jpeg';

// ÍCONES REACT-ICONS
import { 
  FaStar, 
  FaCalendarDays, 
  FaComments, 
  FaPersonRunning, 
  FaHeart, 
  FaFileLines 
} from 'react-icons/fa6';
import { FiUser, FiUsers } from 'react-icons/fi'; // Ícones finos idênticos ao layout original
import { HiOutlineUserGroup } from 'react-icons/hi2';

import "./Valores.css";

export default function Valores() {
  const planos = [
    {
      tipo: "INDIVIDUAL",
      titulo: "Premium",
      destaque: true, // Card de destaque para conversão
      badge: "MOST POPULAR",
      descricao: (
        <>
          TOTALMENTE PERSONALIZADO
          <br />
          FULLY PERSONALIZED
        </>
      ),
      precoDolar: "US$ 97",
      precoReal: "R$ 487",
      equivalenteDolar: "US$ 24.25",
      equivalenteReal: "R$ 121,75",
      icone: "individual",
      beneficios: [
        "Exclusive attention / Atenção exclusiva",
        "Focus on your goals / Foco nos seus objetivos"
      ],
    },
    {
      tipo: "DUPLA",
      titulo: "Premium",
      destaque: false,
      descricao: (
        <>
          PERSONALIZADO E COMPARTILHADO
          <br />
          PERSONALIZED AND SHARED
        </>
      ),
      precoDolar: "US$ 64",
      precoReal: "R$ 327",
      equivalenteDolar: "US$ 16",
      equivalenteReal: "R$ 81,75",
      icone: "dupla",
      beneficios: [
        "Learn together / Aprenda junto com",
        "More interaction / Mais interação",
        "Evolve faster / Evoluam mais rápido"
      ],
    },
    {
      tipo: "GRUPO",
      titulo: "Dinâmica Coletiva",
      destaque: false,
      descricao: (
        <>
          APRENDIZADO EM COMUNIDADE
          <br />
          LEARNING IN COMMUNITY
        </>
      ),
      precoDolar: "US$ 47",
      precoReal: "R$ 227",
      equivalenteDolar: "US$ 11,75",
      equivalenteReal: "R$ 56,75",
      icone: "grupo",
      beneficios: [
        "More interaction / Mais interação",
        "Practice in real situations / Trocas reais e prática"
      ],
    },
  ];

  return (
    <section className="walk-talk">
    
      {/* HERO DUAS COLUNAS */}
      <div className="walk-hero-duas-colunas">
        
        {/* TEXTO LIVRE */}
        <div className="hero-coluna-texto">
          <div className="top-frase-container">
            <div className="top-frase">
              LEARN • USE • LIVE
            </div>
            <svg className="arco-sublinhado" viewBox="0 0 250 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 14C50 4 150 3 247 12" stroke="#d79518" strokeWidth="5" strokeLinecap="round" />
            </svg>
          </div>

          <div className="logo-wrapper-ref">
            <span className="detalhe-risco esquerdo"></span>
            <span className="coracao-topo">♥</span>
            
            <h1 className="walk-logo">
              <span>Walk</span>
              <small>the</small>
              <span>Talk</span>
            </h1>

            <span className="detalhe-risco direito"></span>
            <span className="coracao-baixo">♥︎</span>
          </div>

          <div className="ingles-faixa ink-blue-bg">
            ENGLISH FOR REAL LIFE
          </div>

          <p className="hero-description">
            A practical, hands-on method
            <br />
            to help you use English <strong>in real life,</strong>
            <br />
            every day!
          </p>

          <div className="decoracao-coracao">
            ♥
          </div>
        </div>

        {/* FOTO COLADA NA DIREITA */}
        <div className="hero-coluna-foto">
          <img src={imgcaffee} alt="Coffee and English studies" />
        </div>

      </div>

      {/* LINHA SUAVE DE SEPARAÇÃO */}
      <div className="linha-suave-separacao"></div>

      {/* FAIXA DE PLANOS */}
      <div className="titulo-planos">
        <span>
          CHOOSE THE IDEAL PLAN FOR YOU
        </span>
      </div>

      {/* PLANOS */}
      <div className="planos-container">
  {planos.map((plano, index) => (
    <article 
      className={`plano-card ${plano.destaque ? 'plano-destaque' : ''}`} 
      key={index}
    >
      {plano.badge && (
        <div className="badge-destaque">{plano.badge}</div>
      )}

      {/* CÍRCULO AZUL COM ÍCONE DOURADO */}
      <div className="icone-plano">
        {plano.icone === "individual" && <FiUser className="react-icon-plano" />}
        {plano.icone === "dupla" && <HiOutlineUserGroup className="react-icon-plano" />}
        {plano.icone === "grupo" && <FiUsers className="react-icon-plano" />}
      </div>

            <h2>{plano.tipo}</h2>
            <div className="plano-titulo">{plano.titulo}</div>
            <div className="plano-descricao">{plano.descricao}</div>

            {/* PREÇO PRINCIPAL EM DÓLAR */}
            <div className="preco">
              <strong>{plano.precoDolar}</strong>
              <span>/ month</span>
            </div>

            {/* PREÇO SECUNDÁRIO EM REAIS */}
            <div className="preco-dolar">
              ≈ {plano.precoReal}/mês
            </div>

            {/* EQUIVALÊNCIAS DETALHADAS */}
            <div className="equivalente">
              <div>Equivalent to: <strong>{plano.equivalenteDolar}</strong> per lesson</div>
              <div>Equivalente a: <strong>{plano.equivalenteReal}</strong> por aula</div>
              <small>(1x por semana / once a week)</small>
            </div>

            {/* BENEFÍCIOS NO BLOCO AZUL INFERIOR */}
            <div className="beneficio-container">
              {plano.beneficios.map((item, idx) => (
                <div className="beneficio-linha" key={idx}>
                  <span className="estrela">★</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>

      {/* DIFERENCIAIS */}
      <div className="diferenciais">
        <div className="diferencial">
          <div className="icone-diferencial">
            <FaCalendarDays />
          </div>
          <strong>LIVE CLASSES</strong>
          <span>1x per week</span>
        </div>

        <div className="diferencial">
          <div className="icone-diferencial">
            <FaComments />
          </div>
          <strong>FOCUS ON<br />CONVERSATION</strong>
        </div>

        <div className="diferencial">
          <div className="icone-diferencial">
            <FaPersonRunning />
          </div>
          <strong>PRACTICE FROM<br />THE START</strong>
        </div>

        <div className="diferencial">
          <div className="icone-diferencial">
            <FaHeart />
          </div>
          <strong>FOR REAL LIFE<br />USE</strong>
        </div>

        <div className="diferencial">
          <div className="icone-diferencial">
            <FaFileLines />
          </div>
          <strong>MATERIALS<br />& REMINDERS</strong>
        </div>
      </div>

      {/* LINHA SUAVE DE SEPARAÇÃO */}
      <div className="linha-suave-separacao"></div>

      {/* CTA */}
      <div className="cta-area">
        <div className="cta-frase-container">
          <div className="cta-frase">
            See you in class! <span>♥</span>
          </div>
          <svg className="arco-sublinhado" viewBox="0 0 250 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 14C50 4 150 3 247 12" stroke="#d79518" strokeWidth="5" strokeLinecap="round" />
          </svg>
        </div>

        <div className="cta-botao-wrapper">
          <a 
            href="https://api.whatsapp.com/send?phone=5583999220306&text=I+want+to+start+my+journey%21" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-principal-lellys"
          >
            I Want to Start / Quero Começar
            <span className="btn-icone-estrela"><FaStar size={16}/></span>
          </a>
        </div>
      </div>
    </section>
  );
}