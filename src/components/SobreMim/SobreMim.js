import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';
import { FaStar } from "react-icons/fa";
import Comentarios from '../../components/Comentarios/Comentarios';

import daize from './img/quem-sou.png'; 
import './SobreMim.css';

function SobreMim() {
  const navigate = useNavigate();

  return (
    <div id="quem-sou-eu" className="quem-sou-section">
      <Container fluid className="quem-sou-container">
        
        {/* PARTE 1: Apresentação e Introdução com Destaques */}
        <Row className="justify-content-center text-center mb-5">
          <Col xs={12}>
            <p className="quem-sou-apresentacao-principal">
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
              </span>, professora de inglês, cantora e fundadora da <strong>Lellys Idiomas</strong>.
            </p>

            <p className="quem-sou-texto-intro">
              Há mais de <strong>duas décadas</strong> caminho ao lado de adultos que decidiram dar uma <strong>nova chance ao inglês</strong>. Ao longo dessa trajetória, acompanhei milhares de alunos descobrindo que a dificuldade nunca esteve na falta de talento, mas na forma como aprenderam. Quando o aprendizado faz sentido, a <strong>confiança aparece</strong> — e o idioma passa a fazer parte da vida.
            </p>
          </Col>
        </Row>

        {/* PARTE 2: Imagem + Citação Animada com Destaques */}
        <Row className="align-items-center justify-content-between my-5">
          <Col lg={5} md={6} className="text-center mb-4 mb-md-0">
            <div className="quem-sou-imagem-central">
              <img src={daize} alt="Daize Lellys - Lellys Idiomas" />
            </div>
          </Col>
          <Col lg={7} md={6}>
            <p className="quem-sou-texto-sub">
              Essa é, inclusive, uma das frases que mais repito aos meus alunos:
            </p>

            <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
              <blockquote className="quem-sou-citacao">
                “Deixe o inglês fazer parte da sua vida.”
              </blockquote>
            </ScrollAnimation>

            <p className="quem-sou-texto">
              Minha história com o inglês começou muito antes das salas de aula. Como cantora, aprendi desde cedo que uma língua vai <strong>muito além da gramática</strong>. Ela é <strong>música, cultura, histórias, emoções e conexões</strong> entre pessoas. Foi essa visão que transformou minha maneira de ensinar.
            </p>
          </Col>
        </Row>

        {/* PARTE 3: Metodologia e Botão Padronizado */}
        <Row className="justify-content-center">
          <Col xs={12}>
            <p className="quem-sou-texto">
              Por isso, minhas aulas não giram apenas em torno de regras ou listas de vocabulário. Elas são construídas para que o <strong>inglês seja vivido em situações reais</strong>, por meio de conversas, experiências, cultura, literatura, música e tudo aquilo que torna uma língua verdadeiramente viva.
            </p>

            <ul className="quem-sou-lista">
              <li>
                <span className="estrela-glitter">✦</span>
                <span><strong>Muito Além da Fluência:</strong> Aprender um idioma é conquistar <strong>liberdade para viajar, trabalhar e conhecer novas culturas</strong>, criando relacionamentos e enxergando o mundo por uma nova perspectiva.</span>
              </li>
              <li>
                <span className="estrela-glitter">✦</span>
                <span><strong>Propósito Lellys Idiomas:</strong> Um espaço onde o aprendizado acontece com <strong>leveza, acolhimento e significado</strong>, respeitando a história, o ritmo e os objetivos de cada aluno.</span>
              </li>
            </ul>

            <p className="quem-sou-texto">
              Hoje continuo fazendo o que mais amo: ajudar pessoas a <strong>desenvolverem confiança</strong> para se comunicar em inglês e descobrirem que <strong>nunca é tarde para aprender</strong> quando o caminho faz sentido.
            </p>

            <p className="quem-sou-boas-vindas text-center">
              Seja muito bem-vindo(a). Será um prazer caminhar com você nessa jornada.
            </p>

            {/* Botão Centralizado com Classe Reutilizável */}
            <div className="div-button-center">
              <button className="btn-principal-lellys" onClick={() => navigate('/sobre-mim')}>
                Saiba mais sobre mim 
                <span className="btn-icone-estrela"><FaStar size={18}/></span>
              </button>
            </div>
          </Col>
        </Row>

      </Container>

      <div className="comentario">
        <Comentarios />
      </div>
    </div>
  );
}

export default SobreMim;