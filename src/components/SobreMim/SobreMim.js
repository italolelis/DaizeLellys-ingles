import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';
import { RiAccountCircleFill } from "react-icons/ri";

import daize from './img/quem-sou.png'; 
import './SobreMim.css';

function SobreMim() {
  const navigate = useNavigate();

  return (
    <div id="quem-sou-eu" className="quem-sou-section">
      <Container className="quem-sou-container">
        <Row className="align-items-center">
          
          {/* Agora o Texto vem Primeiro (Esquerda) */}
          <Col lg={6} md={12} className="quem-sou-conteudo">
            <h2 className="quem-sou-titulo">Daize Lellys</h2>
            
            <ScrollAnimation animateIn="fadeInDown">
              <p className="quem-sou-texto">
                <strong>Sou Daize Lellys, professora de inglês, mentora linguística, cantora e fundadora da Lellys Idiomas.</strong>
              </p>
              <p className="quem-sou-texto">
                Há mais de duas décadas ajudo adultos a desenvolverem confiança para usar o inglês na vida real. Ao longo dessa trajetória, acompanhei milhares de alunos que chegaram acreditando que não tinham talento para aprender idiomas, quando, na verdade, precisavam apenas de uma abordagem mais humana, prática e significativa.
              </p>
              <p className="quem-sou-texto">
                Minha história com o inglês começou muito antes das salas de aula. Como cantora, sempre vivi a linguagem através da música, da comunicação e das conexões que ela proporciona. Com o passar dos anos, percebi que muitos adultos carregavam frustrações acumuladas por métodos excessivamente teóricos.
              </p>
            </ScrollAnimation>

          <div className="div-button">
    <button className="btn-saiba-mais" onClick={() => navigate('/sobre-mim')}>
        Saiba mais sobre mim <span className="btn-icone"><RiAccountCircleFill className="btn-icone" size={32}/></span>
    </button>
</div>
          </Col>

          {/* Agora a Imagem vem Depois (Direita) */}
          <Col lg={6} md={12} className="quem-sou-imagem">
            <img src={daize} alt="Daize Lellys" />
          </Col>

        </Row>
      </Container>
    </div>
  );
}
export default SobreMim;