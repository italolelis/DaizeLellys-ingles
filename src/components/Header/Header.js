import React from 'react'
import './Header.css'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Nav} from 'react-bootstrap';
import telegram from './Img/telegram.png'
import instagram from './Img/instagram.png'
import youtube from './Img/youtube.png'
import tiktok from './Img/tiktok.png'

import copia from './Img/logo daize lellys.png'
const Header = () => {
  return (

    <Navbar expand="lg" className="bg-body-tertiary" sticky='top'>
      <Container>
      <Navbar.Brand className='div-logo' href='#home'>
          
          <img className='fonte' src={copia} alt=''/>
          
          <p className='text-logo' style={{color:'#b22234'}}>Inglês sob medida</p>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href= "#home" className='ativo'>Home</Nav.Link>
            <Nav.Link href = "#quem-sou-eu">Quem sou eu</Nav.Link>
            <Nav.Link href = "#cursos">Cursos</Nav.Link>
            <Nav.Link href = "#contate-me">Contate-me</Nav.Link>
            </Nav>
 </Navbar.Collapse>
      </Container>
      <div>
        <p className='p-sociais'>Me siga nas redes sociais:</p>
        
        <img className='img-sociais' src={instagram} alt=''/>
        <img className='img-sociais' src={youtube} alt=''/>
        <img className='img-sociais' src={tiktok} alt=''/>
        <img className='img-sociais' src={telegram} alt=''/>
      </div>
      </Navbar>
      
    
   
  );


}

export default Header
