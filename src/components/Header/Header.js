import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

import logoImg from './Img/daize-logo.png';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    
    setScrolled(window.scrollY > 50);
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`custom-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-wrapper">
        
        {/* 1. LOGO */}
        <div className="header-logo">
          <NavLink to="/" onClick={closeMenu}>
            <img 
              src={logoImg} 
              alt="Daize Lellys" 
              className="logo-img"
            />
          </NavLink>
        </div>

        {/* 2. BOTÃO HAMBÚRGUER (MOBILE) */}
        <button 
          className={`hamburger-btn ${menuOpen ? 'open' : ''}`} 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Alternar Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* 3. MENU DE NAVEGAÇÃO */}
        <nav className={`header-nav ${menuOpen ? 'active' : ''}`}>
          <NavLink to="/" onClick={closeMenu} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            HOME
          </NavLink>
          <NavLink to="/sobre-mim" onClick={closeMenu} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            QUEM SOU
          </NavLink>
          <NavLink to="/walk-the-talk" onClick={closeMenu} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            WALK THE TALK
          </NavLink>
          <NavLink to="/portugues-estrangeiros" onClick={closeMenu} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            PORTUGUÊS PARA ESTRANGEIROS
          </NavLink>
          <NavLink to="/valores" onClick={closeMenu} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            PLANOS
          </NavLink>
          <NavLink to="/contato" onClick={closeMenu} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            CONTATO
          </NavLink>

          {/* CTA DENTRO DO MENU MOBILE (PARA MANTER A CONVERSÃO ALTA) */}
          <div className="mobile-cta-wrapper">
            <a 
              href="https://api.whatsapp.com/send?phone=5583999220306&text=Quero+agendar+uma+aula+experimental%21" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="btn-principal-lellys header-btn"
            >
              <span>Agendar Aula</span>
              <span className="btn-icone-estrela"><FaStar size={11} /></span>
            </a>
          </div>
        </nav>

        {/* 4. BOTÃO CTA (DESKTOP) */}
        <div className="header-cta">
          <a 
            href="https://api.whatsapp.com/send?phone=5583999220306&text=Quero+agendar+uma+aula+experimental%21" 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="btn-principal-lellys header-btn"
          >
            <span>Agendar Aula</span>
            <span className="btn-icone-estrela"><FaStar size={11} /></span>
          </a>
        </div>

      </div>
    </header>
  );
};

export default Header;