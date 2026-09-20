import React, { useState } from 'react';
import { Container, Row, Col, Nav, Tab } from 'react-bootstrap';
import { 
  FaComments, 
  FaBookOpen, 
  FaGlobeAmericas, 
  FaBriefcase, 
  FaPassport, 
  FaGraduationCap, 
  FaStar,
  FaCheck
} from 'react-icons/fa';
import tituloImg from '../../components/PortuguesEstrangeiro/Img/brasil-cores-da-vida.png';
import './PortuguesPEstrangeiros.css';

const PortuguesPEstrangeiros = () => {
  const [activeStep, setActiveStep] = useState('step1');

  return (
    <div className="ple-page-wrapper">
     
      {/* 1. HERO SECTION */}
      <section className="ple-hero-section">
        <Container className="text-center">
          
          <div className="ple-hero-header">
            <img src={tituloImg} alt="Brasil: Cores da Vida" className="titulo-imagem" />
            
            <h2 className="ple-hero-subtitle">Portuguese for Foreigners</h2>
            
            <div className="line-gold-soft"></div>

            <p className="ple-hero-lead mt-3">
              Experience cultural immersion, achieve fluency, and discover the 
              <span className="gold-italic"> true essence of Brazil</span>, beyond the pages of a book.
            </p>
          </div>

          {/* METODOLOGIA EM ABAS */}
          <div className="ple-methodology-box">
            <h3 className="methodology-title">How the Learning Journey Works</h3>
            <div className="line-gold-soft mb-4"></div>

            <Tab.Container activeKey={activeStep} onSelect={(k) => setActiveStep(k)}>
              <Nav variant="pills" className="ple-tabs-nav justify-content-center mb-4">
                <Nav.Item>
                  <Nav.Link eventKey="step1">
                    <span className="step-badge">1</span> Needs Assessment
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="step2">
                    <span className="step-badge">2</span> Tailored Material
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="step3">
                    <span className="step-badge">3</span> Active Immersion
                  </Nav.Link>
                </Nav.Item>
              </Nav>

              <Tab.Content className="ple-tab-content">
                <Tab.Pane eventKey="step1">
                  <div className="ple-step-detail">
                    <FaComments className="step-detail-icon" />
                    <div>
                      <h4>Diagnostic Consultation</h4>
                      <p>We analyze your current proficiency, professional goals, and daily routine in Brazil to build a custom study roadmap.</p>
                    </div>
                  </div>
                </Tab.Pane>

                <Tab.Pane eventKey="step2">
                  <div className="ple-step-detail">
                    <FaBookOpen className="step-detail-icon" />
                    <div>
                      <h4>Personalized Curriculum</h4>
                      <p>Exclusive materials focusing on real-world situations, business etiquette, cultural nuances, or academic goals.</p>
                    </div>
                  </div>
                </Tab.Pane>

                <Tab.Pane eventKey="step3">
                  <div className="ple-step-detail">
                    <FaGlobeAmericas className="step-detail-icon" />
                    <div>
                      <h4>Live Conversation & Culture</h4>
                      <p>Dynamic 1-on-1 sessions designed to build speaking confidence, refine pronunciation, and master natural expressions.</p>
                    </div>
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </div>

            <div className="mt-5 text-center">
            <a 
              href="https://api.whatsapp.com/send?phone=5583999220306&text=Quero+aprender+portugu%C3%AAs%21" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-principal-lellys"
            >
              Schedule a trial lesson <span className="btn-icone-estrela"><FaStar size={16}/></span>
            </a>
          </div>

        </Container>
      </section>

      {/* 2. PROGRAMAS / PÚBLICO-ALVO */}
      <section className="ple-content-section">
        <Container>
          <div className="text-center mb-5">
            <span className="sub-tag">Tailored Programs</span>
            <h2 className="section-title-light">Who is this course for?</h2>
            <div className="line-gold-soft mt-3"></div>
          </div>

          <Row className="g-4">
            <Col lg={4} md={6}>
              <div className="ple-program-card-dinamico">
                <div className="card-icon-box-animado">
                  <FaBriefcase />
                </div>
                <h3>Executives & Expats</h3>
                <p className="card-desc">
                  Tailored for professionals relocating to Brazil or conducting business with Brazilian companies. Focus on business etiquette, negotiations, and corporate communication.
                </p>
                <ul className="card-checklist">
                  <li><FaCheck className="chk" /> Corporate Vocabulary</li>
                  <li><FaCheck className="chk" /> Cultural Business Norms</li>
                </ul>
                <span className="card-hover-line"></span>
              </div>
            </Col>

            <Col lg={4} md={6}>
              <div className="ple-program-card-dinamico">
                <div className="card-icon-box-animado">
                  <FaPassport />
                </div>
                <h3>Travelers & Immersion</h3>
                <p className="card-desc">
                  Ideal for those who love Brazilian culture, travel, or living in Brazil. Practical conversation skills for daily interactions, gastronomy, music, and social life.
                </p>
                <ul className="card-checklist">
                  <li><FaCheck className="chk" /> Real-life Situations</li>
                  <li><FaCheck className="chk" /> Accent & Pronunciation</li>
                </ul>
                <span className="card-hover-line"></span>
              </div>
            </Col>

            <Col lg={4} md={12}>
              <div className="ple-program-card-dinamico">
                <div className="card-icon-box-animado">
                  <FaGraduationCap />
                </div>
                <h3>CELPE-Bras Prep</h3>
                <p className="card-desc">
                  Focused preparation for the official Certificate of Proficiency in Portuguese for Foreigners, required for academic and professional validation in Brazil.
                </p>
                <ul className="card-checklist">
                  <li><FaCheck className="chk" /> Exam Strategies</li>
                  <li><FaCheck className="chk" /> Oral & Written Practice</li>
                </ul>
                <span className="card-hover-line"></span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

    </div>
  );
};

export default PortuguesPEstrangeiros;