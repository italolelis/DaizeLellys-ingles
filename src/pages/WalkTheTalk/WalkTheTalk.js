import React, { useState } from 'react';
import { Container, Row, Col, Nav, Tab } from 'react-bootstrap';
import { FaLightbulb, FaBookReader, FaComments, FaQuoteLeft, FaRocket, FaStar } from 'react-icons/fa';
import walkthetalk from './Img/walk-the-talk.PNG'; 
import './WalkTheTalk.css';

const WalkTheTalk = () => {
  const [activeTab, setActiveTab] = useState('origem');

  return (
    <div className="page-valores-container">
     
      <main className="walk-the-talk-main">
        <Container>
          
          {/* HERO INTERATIVO DA PÁGINA */}
          <Row className="align-items-center g-5 mb-5 flex-column-reverse flex-lg-row">
            
            {/* CONTEÚDO E ABAS */}
            <Col lg={7} md={12}>
              <div className="badge-tag-dinamico">
                <FaRocket className="me-2" /> Nossa Jornada
              </div>

              <h1 className="walk-the-talk-titulo">
                <span className="parte-cinzel">Como nasceu o </span>
                <span className="parte-dancing">Walk the Talk</span>
              </h1>

              {/* NAVEGAÇÃO POR ABAS INTERATIVAS */}
              <Tab.Container activeKey={activeTab} onSelect={(k) => setActiveTab(k)}>
                <Nav variant="pills" className="custom-tabs-nav mb-4">
                  <Nav.Item>
                    <Nav.Link eventKey="origem">01. O Desafio</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="insight">02. A Descoberta</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="filosofia">03. A Filosofia</Nav.Link>
                  </Nav.Item>
                </Nav>

                <Tab.Content className="tab-conteudo-box">
                  <Tab.Pane eventKey="origem">
                    <div className="tab-pane-inner">
                      <FaQuoteLeft className="quote-icon" />
                      <p>
                        Durante anos, observei alunos que decoravam regras e listas de palavras, mas <strong>continuavam travando na hora de se comunicar na vida real</strong>. Foi dessa inquietação que comecei a buscar algo diferente.
                      </p>
                    </div>
                  </Tab.Pane>

                  <Tab.Pane eventKey="insight">
                    <div className="tab-pane-inner">
                      <FaQuoteLeft className="quote-icon" />
                      <p>
                        Passei a utilizar textos autênticos — incluindo textos bíblicos, por sua enorme influência histórica e cultural na formação da língua inglesa — como uma <strong>fonte rica de vocabulário e reflexão humana profunda</strong>.
                      </p>
                    </div>
                  </Tab.Pane>

                  <Tab.Pane eventKey="filosofia">
                    <div className="tab-pane-inner">
                      <FaQuoteLeft className="quote-icon" />
                      <p>
                        O nome <strong>Walk the Talk</strong> significa colocar em prática aquilo que se diz. Hoje, somos uma metodologia focada em ajudar adultos a desenvolverem <strong>confiança através de situações reais</strong>.
                      </p>
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>

              {/* BOTÃO PRINCIPAL LELYS ABAIXO DAS ABAS */}
              <div className="hero-cta-wrapper mt-4">
                <a 
                  href="https://api.whatsapp.com/send?phone=5583999220306&text=Quero+saber+mais+sobre+a+metodologia+Walk+the+Talk%21" 
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
            </Col>

            {/* IMAGEM LIMPA */}
            <Col lg={5} md={12} className="text-center">
              <div className="walk-the-talk-frame-dinamico">
                <img 
                  src={walkthetalk} 
                  alt="Metodologia Walk the Talk" 
                  className="walk-the-talk-img" 
                />
              </div>
            </Col>

          </Row>

          {/* CARDS DOS PILARES DA METODOLOGIA */}
          <div className="pilares-secao mt-5">
            <h3 className="pilares-titulo">Os 3 Pilares em Ação</h3>
            
            <Row className="g-4 mt-2">
              <Col md={4}>
                <div className="pilar-card-dinamico">
                  <div className="pilar-icone-animado">
                    <FaLightbulb />
                  </div>
                  <h4>Inquietação & Inovação</h4>
                  <p>Superamos a memorização passiva de gramática para focar na aplicação real da comunicação.</p>
                  <span className="pilar-hover-line"></span>
                </div>
              </Col>

              <Col md={4}>
                <div className="pilar-card-dinamico">
                  <div className="pilar-icone-animado">
                    <FaBookReader />
                  </div>
                  <h4>Textos Autênticos</h4>
                  <p>Conteúdos de alto valor cultural e histórico que estimulam reflexões significativas.</p>
                  <span className="pilar-hover-line"></span>
                </div>
              </Col>

              <Col md={4}>
                <div className="pilar-card-dinamico">
                  <div className="pilar-icone-animado">
                    <FaComments />
                  </div>
                  <h4>Confiança Real</h4>
                  <p>Desenvolvimento da autonomia para que você fale sem medo e com fluência natural.</p>
                  <span className="pilar-hover-line"></span>
                </div>
              </Col>
            </Row>
          </div>

          {/* SECÇÃO CTA INFERIOR */}
          <div className="walk-cta-bottom mt-5 text-center">
            <h3>Pronto para dar o próximo passo na sua fluência?</h3>
            <p>Fale diretamente comigo e tire todas as suas dúvidas pelo WhatsApp.</p>
            <a 
              href="https://api.whatsapp.com/send?phone=5583999220306&text=Quero+começar+minha+jornada+com+o+Walk+the+Talk%21" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-principal-lellys"
            >
              <span>Quero Começar Agora</span>
              <span className="btn-icone-estrela">
                <FaStar size={11} />
              </span>
            </a>
          </div>

        </Container>
      </main>
    </div>
  );
};

export default WalkTheTalk;