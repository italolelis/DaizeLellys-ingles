import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
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
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import tituloImg from '../../components/PortuguesEstrangeiro/Img/brasil-cores-da-vida.png'
import './PortuguesPEstrangeiros.css';

const PortuguesPEstrangeiros = () => {
  return (
    <div className="ple-page-wrapper">
      <Header />

      {/* 1. HERO SECTION */}
      <section className="ple-hero-section">
        <Container className="text-center">
    <img src={tituloImg} alt="Brasil: Cores da Vida" className="titulo-imagem" />
          <h2 className="ple-hero-subtitle">Portuguese for Foreigners</h2>
          <p className="ple-hero-lead">
            Experience cultural immersion, achieve fluency, and discover the 
            <span className="gold-italic"> true essence of Brazil</span>, beyond the pages of a book.
          </p>

          {/* NOVA SEÇÃO: METODOLOGIA EM 3 PASSOS (SUBSTITUI OS DADOS REPETIDOS) */}
          <div className="ple-methodology-box">
            <h3 className="methodology-title">How the Learning Journey Works</h3>
            <Row className="g-4 justify-content-center mt-2">
              
              <Col md={4} sm={12}>
                <div className="ple-step-item">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <FaComments className="step-icon" />
                    <h4>Needs Assessment</h4>
                    <p>A diagnostic consultation to understand your goals, proficiency level, and routines.</p>
                  </div>
                </div>
              </Col>

              <Col md={4} sm={12}>
                <div className="ple-step-item border-side">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <FaBookOpen className="step-icon" />
                    <h4>Tailored Material</h4>
                    <p>Custom curriculum built around real-world contexts, business, or daily life in Brazil.</p>
                  </div>
                </div>
              </Col>

              <Col md={4} sm={12}>
                <div className="ple-step-item">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <FaGlobeAmericas className="step-icon" />
                    <h4>Active Immersion</h4>
                    <p>Live, dynamic classes with real conversation, cultural insights, and immediate feedback.</p>
                  </div>
                </div>
              </Col>

            </Row>
          </div>

          <div className="mt-5">
            <a 
              href="https://wa.me/seunumero" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-principal-lellys"
            >
              <span>Schedule a trial lesson</span>
              <FaStar className="btn-icone-estrela" />
            </a>
          </div>
        </Container>
      </section>

      {/* 2. PROGRAMAS / PÚBLICO-ALVO */}
      <section className="ple-content-section">
        <Container>
          <div className="text-center mb-5">
            <span className="sub-tag">Tailored Programs</span>
            <h2 className="section-title-dark">Who is this course for?</h2>
            <div className="line-gold-center"></div>
          </div>

          <Row className="g-4">
            <Col lg={4} md={6}>
              <div className="ple-program-card">
                <div className="card-icon-box">
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
              </div>
            </Col>

            <Col lg={4} md={6}>
              <div className="ple-program-card">
                <div className="card-icon-box">
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
              </div>
            </Col>

            <Col lg={4} md={12}>
              <div className="ple-program-card">
                <div className="card-icon-box">
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
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
    </div>
  );
};

export default PortuguesPEstrangeiros;