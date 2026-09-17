import React from 'react'
import Header from '../../components/Header/Header'
import { Container, Row, Col } from 'react-bootstrap';
import Footer from '../../components/Footer/Footer'
import walkthetalk from './Img/walk-the-talk.PNG'; 
import './WalkTheTalk.css'


const WalkTheTalk = () => {
  return (
    <div className="page-valores-container">
      <Header />

 <div id="walk-the-talk" className="walk-the-talk">
      <Container className="walk-the-talk-container">
        <Row className="align-items-center">
          
          {/* Agora o Texto vem Primeiro (Esquerda) */}
          <Col lg={6} md={12} className="walk-the-talk-conteudo">
            <h2 className="walk-the-talk-titulo">
                 <span className="parte-cinzel">Como nasceu o </span>
                 <span className="parte-dancing">Walk the Talk</span>
            </h2>
                        
              <p className="walk-the-talk-texto">
                Durante anos, observei alunos que decoravam regras e listas de palavras, mas continuavam travando na hora de se comunicar na vida real. Foi dessa inquietação que comecei a buscar algo diferente.
              </p>
              <p className="walk-the-talk-texto">
                Em minha jornada como professora, passei a utilizar textos autênticos — incluindo textos bíblicos, por sua enorme influência histórica e cultural na formação da língua inglesa — como uma fonte rica de vocabulário e reflexão humana.
              </p>
              <p className="walk-the-talk-texto">
                O que começou com essa proposta evoluiu para algo muito maior: uma filosofia de aprendizagem prática. O nome <b>Walk the Talk</b> significa exatamente isso: colocar em prática aquilo que se diz. Hoje, somos uma metodologia focada em ajudar adultos a desenvolverem confiança através de situações reais e temas significativos.
              </p>
            

          <div className="div-button">
    
  
</div>
          </Col>

          {/* Agora a Imagem vem Depois (Direita) */}
          <Col lg={6} md={12} className="walk-the-talk-imagem">
            <img src={walkthetalk} alt="walk the talk" />
          </Col>

        </Row>
      </Container>
</div>
      <Footer />
    </div>
  );
};

export default WalkTheTalk;