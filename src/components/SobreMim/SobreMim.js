import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import Comentarios from '../../components/Comentarios/Comentarios';

import daize from './img/quem-sou.png'; 
import './SobreMim.css';

function SobreMim() {
  const navigate = useNavigate();

  return (
    <section id="quem-sou-eu" className="quem-sou-section">
      <Container fluid className="quem-sou-container">
        
        {/* PARTE 1: Apresentação e Introdução */}
        <Row className="justify-content-center text-center mb-5">
          <Col lg={10} xs={12}>
                        
            <h1 className="quem-sou-apresentacao-principal">
              Sou 
              <span className="nome-destaque-wrapper">
                <span className="nome-destaque-dourado">Daize Lellys</span>
                <svg className="sublinhado-curvo" viewBox="0 0 250 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 14C50 4 150 3 247 12" stroke="url(#dourado-glitter)" strokeWidth="5" strokeLinecap="round" />
                  <defs>
                    <linearGradient id="dourado-glitter" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#8a610f" />
                      <stop offset="50%" stopColor="#f3e08a" />
                      <stop offset="100%" stopColor="#a87e14" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              , professora de inglês, cantora e fundadora da <strong>Lellys Idiomas</strong>.
            </h1>

            <p className="quem-sou-texto-intro">
              Há mais de <strong>duas décadas</strong> caminho ao lado de adultos que decidiram dar uma <strong>nova chance ao inglês</strong>. Ao longo dessa trajetória, acompanhei milhares de alunos a descobrirem que a dificuldade nunca esteve na falta de talento, mas na forma como aprenderam. Quando o aprendizado faz sentido, a <strong>confiança aparece</strong> — e o idioma passa a fazer parte da vida.
            </p>
          </Col>
        </Row>

        {/* PARTE 2: Foto + Citação + Texto Fluido e Cards Lado a Lado */}
        <Row className="align-items-start justify-content-between my-4 g-4">
          
          {/* COLUNA ESQUERDA: FOTO */}
          <Col lg={5} md={5} className="text-center mb-4 mb-md-0 sticky-foto">
            <div className="quem-sou-imagem-wrapper">
              <img src={daize} alt="Professora Daize Lellys - Fundadora da Lellys Idiomas" className="quem-sou-foto" />
            </div>
          </Col>

          {/* COLUNA DIREITA: CONTEÚDO */}
          <Col lg={7} md={7}>
            <p className="quem-sou-texto">
              Minha história com o inglês começou muito antes das salas de aula. Como cantora, aprendi desde cedo que uma língua vai <strong>muito além da gramática</strong>. Ela é <strong>música, cultura, histórias, emoções e conexões</strong> entre pessoas.
            </p>

            {/* TRANSIÇÃO E CITAÇÃO */}
            <p className="quem-sou-texto-sub">
              Essa é, inclusive, uma das frases que mais repito aos meus alunos:
            </p>

            <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
              <div className="quem-sou-citacao-card">
                <FaQuoteLeft className="citacao-icone" />
                <blockquote className="quem-sou-citacao">
                  “Deixe o inglês fazer parte da sua vida.”
                </blockquote>
              </div>
            </ScrollAnimation>

            {/* TEXTO FLUIDO (SEM CAIXA AMARELA) */}
            <p className="quem-sou-texto">
              Por isso, minhas aulas não giram apenas em torno de regras ou listas de vocabulário. Elas são construídas para que o <strong>inglês seja vivido em situações reais</strong>, por meio de conversas, experiências, cultura, literatura, música e tudo aquilo que torna uma língua verdadeiramente viva.
            </p>

            {/* CARDS BRANCOS LADO A LADO */}
            <div className="quem-sou-cards-grid">
              <div className="pilar-card">
                <span className="estrela-glitter">✦</span>
                <div>
                  <h4>Muito Além da Fluência</h4>
                  <p>Aprender um idioma é conquistar <strong>liberdade para viajar, trabalhar e conhecer novas culturas</strong>.</p>
                </div>
              </div>

              <div className="pilar-card">
                <span className="estrela-glitter">✦</span>
                <div>
                  <h4>Propósito Lellys Idiomas</h4>
                  <p>Um espaço onde o aprendizado acontece com <strong>leveza, acolhimento e significado</strong>, respeitando o seu ritmo.</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        {/* PARTE 3: Mensagem Final de Boas-Vindas e Botão */}
        <Row className="justify-content-center text-center mt-4">
          <Col lg={10} xs={12}>
            <p className="quem-sou-texto">
              Hoje continuo fazendo o que mais amo: ajudar pessoas a <strong>desenvolverem confiança</strong> para se comunicar em inglês e descobrirem que <strong>nunca é tarde para aprender</strong> quando o caminho faz sentido.
            </p>

            <p className="quem-sou-boas-vindas">
              Seja muito bem-vindo(a). Será um prazer caminhar com você nessa jornada.
            </p>

            <div className="div-button-center">
              <button className="btn-principal-lellys" onClick={() => navigate('/sobre-mim')}>
                Saiba mais sobre mim 
                <span className="btn-icone-estrela"><FaStar size={16}/></span>
              </button>
            </div>
          </Col>
        </Row>

      </Container>

      {/* Secção de Depoimentos */}
      <div className="comentarios-wrapper">
        <Comentarios />
      </div>
    </section>
  );
}

export default SobreMim;