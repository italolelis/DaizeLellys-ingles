import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import imgcaffee from './img/coffee-english.jpeg';
import { FaStar } from 'react-icons/fa';
import "./Valores.css";

export default function Valores() {
  const planos = [
    {
      tipo: "INDIVIDUAL",
      titulo: "Premium",
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
      <Header />

      {/* HERO DUAS COLUNAS: TEXTO LIVRE À ESQUERDA + FOTO COLADA À DIREITA */}
      <div className="walk-hero-duas-colunas">
        
        {/* TEXTO LIVRE (SEM CARD) */}
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

        {/* FOTO COLADA NA DIREITA COM ESFUMAÇADO NAS LATERAIS */}
        <div className="hero-coluna-foto">
          <img src={imgcaffee} alt="Coffee and English studies" />
        </div>

      </div>

      {/* FAIXA DE PLANOS (COM SOBREPOSIÇÃO NA IMAGEM DE CIMA) */}
      <div className="titulo-planos">
        <span>
          CHOOSE THE IDEAL PLAN FOR YOU
        </span>
      </div>

      {/* PLANOS */}
      <div className="planos-container">
        {planos.map((plano, index) => (
          <article className="plano-card" key={index}>
            <div className="icone-plano">
              {plano.icone === "individual" && (
                <svg viewBox="0 0 64 64">
                  <circle cx="32" cy="18" r="9" />
                  <path d="M15 53c0-11 7-18 17-18s17 7 17 18" />
                </svg>
              )}
              {plano.icone === "dupla" && (
                <svg viewBox="0 0 64 64">
                  <circle cx="23" cy="18" r="8" />
                  <circle cx="42" cy="18" r="8" />
                  <path d="M8 53c0-10 6-17 15-17s15 7 15 17" />
                  <path d="M30 53c0-10 5-17 14-17s13 7 13 17" />
                </svg>
              )}
              {plano.icone === "grupo" && (
                <svg viewBox="0 0 64 64">
                  <circle cx="32" cy="14" r="7" />
                  <circle cx="16" cy="22" r="6" />
                  <circle cx="48" cy="22" r="6" />
                  <path d="M20 53c0-10 5-16 12-16s12 6 12 16" />
                  <path d="M3 53c0-9 5-15 12-15" />
                  <path d="M61 53c0-9-5-15-12-15" />
                </svg>
              )}
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
              <div>Equivalent a: <strong>{plano.equivalenteReal}</strong> por aula</div>
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
            <svg viewBox="0 0 64 64">
              <rect x="10" y="12" width="44" height="43" rx="4" />
              <line x1="10" y1="24" x2="54" y2="24" />
              <line x1="21" y1="7" x2="21" y2="17" />
              <line x1="43" y1="7" x2="43" y2="17" />
            </svg>
          </div>
          <strong>LIVE CLASSES</strong>
          <span>1x per week</span>
        </div>

        <div className="diferencial">
          <div className="icone-diferencial">
            <svg viewBox="0 0 64 64">
              <path d="M10 12h44v32H27L15 54v-10h-5z" />
              <circle cx="24" cy="28" r="2" />
              <circle cx="32" cy="28" r="2" />
              <circle cx="40" cy="28" r="2" />
            </svg>
          </div>
          <strong>FOCUS ON<br />CONVERSATION</strong>
        </div>

        <div className="diferencial">
          <div className="icone-diferencial">
            <svg viewBox="0 0 64 64">
              <circle cx="32" cy="12" r="5" />
              <path d="M27 21l-5 14 9 5-5 16" />
              <path d="M37 21l5 13-7 6 10 5" />
            </svg>
          </div>
          <strong>PRACTICE FROM<br />THE START</strong>
        </div>

        <div className="diferencial">
          <div className="icone-diferencial">
            <svg viewBox="0 0 64 64">
              <path d="M32 54S10 41 10 24c0-8 5-13 12-13 5 0 9 3 10 7 2-4 6-7 11-7 7 0 12 5 12 13 0 17-23 30-23 30z" />
            </svg>
          </div>
          <strong>FOR REAL LIFE<br />USE</strong>
        </div>

        <div className="diferencial">
          <div className="icone-diferencial">
            <svg viewBox="0 0 64 64">
              <path d="M13 7h29l9 9v41H13z" />
              <path d="M42 7v10h10" />
              <line x1="22" y1="28" x2="43" y2="28" />
              <line x1="22" y1="36" x2="43" y2="36" />
              <line x1="22" y1="44" x2="38" y2="44" />
            </svg>
          </div>
          <strong>MATERIALS<br />& REMINDERS</strong>
        </div>
      </div>

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
            <span>I Want to Start / Quero Começar</span>
            <FaStar className="btn-icone-estrela" />
          </a>
        </div>
      </div>
    
      <Footer />
    </section>
  );
}