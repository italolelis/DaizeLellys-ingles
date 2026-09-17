import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { 
  FaGraduationCap, 
  FaChalkboardTeacher, 
  FaGlobeAmericas, 
  FaBookOpen, 
  
} from 'react-icons/fa';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import daizeSobre from './Img/sobre-mim.jpeg';
import './Sobre.css';

const Sobre = () => {
  return (
    <div className="sobre-pagina">
      <Header />

      <main className="sobre-container">
        <Container>
          
          {/* SECÇÃO HERO / BIOGRAFIA DESTAQUE */}
          <div className="sobre-hero-card">
            <Row className="align-items-center g-4">
              <Col lg={5} className="text-center">
                <div className="foto-frame-container">
                  <img src={daizeSobre} alt="Daize Lellys" className="foto-perfil" />
                  <div className="foto-badge">
                    <span className="badge-anos">+20 Anos</span>
                    <span className="badge-texto">de Experiência</span>
                  </div>
                </div>
              </Col>
              
              <Col lg={7}>
                <div className="hero-bio-content">
                  <span className="tag-subtitulo">Quem Sou Eu</span>
                  <h1 className="hero-titulo">Daize Lellys</h1>
                  <h3 className="hero-cargo">Coordenadora do Programa de Inglês</h3>
                  <p className="hero-descricao">
                    Como Coordenadora Pedagógica do Programa de Inglês, acompanho e avalio continuamente o processo de ensino-aprendizagem e o desempenho dos alunos. Asseguro a capacitação contínua de professores com os mais recentes referenciais teóricos e metodologias de ensino global.
                  </p>
                </div>
              </Col>
            </Row>
          </div>

          {/* GRID DE QUALIFICAÇÕES E TRAJETÓRIA */}
          <div className="secao-trajetoria">
            <div className="text-center mb-5">
              <h2 className="secao-titulo">Trajetória e Qualificações</h2>
              <div className="linha-divisor"></div>
            </div>

            <Row className="g-4">
              
              {/* Formação Acadêmica */}
              <Col lg={6} md={12}>
                <div className="card-qualificacao">
                  <div className="card-icone-wrapper">
                    <FaGraduationCap className="card-icone" />
                  </div>
                  <div className="card-body-custom">
                    <h3>Formação Acadêmica</h3>
                    <p>
                      Graduada em Letras pela UTP (Universidade Tuiuti do Paraná), especialista em Educação Global pela UNIFUTURO, pós-graduada em Liderança Avançada no Haggai International Institute (Hawaii, EUA) e mestranda em Educação na FCU (Florida Christian University, EUA).
                    </p>
                  </div>
                </div>
              </Col>

              {/* Professora de Inglês */}
              <Col lg={6} md={12}>
                <div className="card-qualificacao">
                  <div className="card-icone-wrapper">
                    <FaChalkboardTeacher className="card-icone" />
                  </div>
                  <div className="card-body-custom">
                    <h3>Professora de Inglês</h3>
                    <p>
                      Professora Universitária (graduação, pós-graduação e extensão) lecionando na área de Idiomas. Ampla experiência com ensino presencial e aulas online interativas, conectando alunos a diferentes culturas e realidades ao redor do mundo.
                    </p>
                  </div>
                </div>
              </Col>

              {/* ESL Training Services - EUA */}
              <Col lg={6} md={12}>
                <div className="card-qualificacao">
                  <div className="card-icone-wrapper">
                    <FaBookOpen className="card-icone" />
                  </div>
                  <div className="card-body-custom">
                    <h3>ESL Training Services — EUA</h3>
                    <p>
                      Formação e treinamento especializado no Método Inglês através da Bíblia, idealizado por Glenda Reece na Carolina do Norte, EUA.
                    </p>
                  </div>
                </div>
              </Col>

              {/* International Office */}
              <Col lg={6} md={12}>
                <div className="card-qualificacao">
                  <div className="card-icone-wrapper">
                    <FaGlobeAmericas className="card-icone" />
                  </div>
                  <div className="card-body-custom">
                    <h3>Diretora de Intercâmbio & International Office</h3>
                    <p>
                      Gestão administrativa do International Office, atuando como facilitadora em processos de intercâmbio acadêmico e promovendo diretrizes para uma formação educacional verdadeiramente global.
                    </p>
                  </div>
                </div>
              </Col>

            </Row>
          </div>

        </Container>
      </main>

      <Footer />
    </div>
  );
};

export default Sobre;
