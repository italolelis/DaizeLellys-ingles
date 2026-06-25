import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

// Importa a sua imagem oficial "daize-logo.png"
import logoImg from './Img/daize-logo.png'; 
// Importa o arquivo CSS que criamos acima
import './Header.css'; 

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    // Carrega a fonte Montserrat apenas para os textos do menu
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
   <Navbar
  expand="lg"
  expanded={expanded}
  onToggle={() => setExpanded(!expanded)}
  className={`custom-navbar ${scrolled ? 'scrolled' : ''}`}
>
      <Container fluid className="navbar-container d-flex justify-content-between align-items-center w-100">
        
        {/* LOGO */}
        <Navbar.Brand className="m-0 p-0 d-flex align-items-center" style={{ flexShrink: 0, height: '100%' }}>
          <a href="/" className="logo-link">
            <img 
              src={logoImg} 
              alt="Daize Lellys - Walk the Talk" 
              className="logo-image"
            />
          </a>
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
          />
        
        {/* MENU CENTRAL */}
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center" style={{ flexGrow: 1 }}>
          <Nav className="mx-auto d-flex align-items-center nav-menu" onClick={() => setExpanded(false)} >
            <Nav.Link style={{ padding: 0 }}>
              <NavLink to="/" className={({ isActive }) => `nav-menu-link ${isActive ? 'active' : ''}`}>HOME</NavLink>
            </Nav.Link>
            
            <Nav.Link style={{ padding: 0 }}>
              <NavLink to="/sobre-mim" className={({ isActive }) => `nav-menu-link ${isActive ? 'active' : ''}`}>QUEM SOU</NavLink>
            </Nav.Link>
         
            <Nav.Link style={{ padding: 0 }}>
              <NavLink to="/walk-the-talk" className={({ isActive }) => `nav-menu-link ${isActive ? 'active' : ''}`}>WALK THE TALK</NavLink>
            </Nav.Link>

             <Nav.Link style={{ padding: 0 }}>
              <NavLink to="/portugues-estrangeiros" className={({ isActive }) => `nav-menu-link ${isActive ? 'active' : ''}`}>PORTUGUÊS PARA ESTRANGEIROS</NavLink>
            </Nav.Link>
            
            <Nav.Link style={{ padding: 0 }}>
              <NavLink to="/valores" className={({ isActive }) => `nav-menu-link ${isActive ? 'active' : ''}`}>PLANOS</NavLink>
            </Nav.Link>
            
            <Nav.Link style={{ padding: 0 }}>
              <NavLink to="/contato" className={({ isActive }) => `nav-menu-link ${isActive ? 'active' : ''}`}>CONTATO</NavLink>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

        {/* BOTÃO AGENDAR AULA */}
        <div className="m-0" style={{ flexShrink: 0, display: 'flex', alignItems: 'center' }}>
          <a 
            href="https://api.whatsapp.com/send?phone=5583999220306&text=Quero+agendar+uma+aula+experimental%21" 
            target="blank" 
            className="btn-agendar"
          >
            AGENDAR AULA
          </a>
        </div>
      </Container>
    </Navbar>
  );
}

export default Header;