import React from 'react'
import './Header.css'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Nav} from 'react-bootstrap';
import logoDaize from './Img/logo daize lellys.png'
import { NavLink } from 'react-router-dom';


const Header = () => {

 
  return (

    <Navbar expand="lg" className="header" >
      <Container>
      <Navbar.Brand className='div-logo'>
          
         
          <a href='/'><img className='fonte' src={logoDaize} alt='/'/></a>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><NavLink to='/'>Home</NavLink></Nav.Link>
            <Nav.Link><NavLink to='/sobre-mim'>Quem sou eu</NavLink> </Nav.Link>
            <Nav.Link><NavLink to='/valores'>Planos</NavLink> </Nav.Link>

            
            <Nav.Link href='https://api.whatsapp.com/send?phone=5583999220306&text=Quero+agendar+uma+aula+experimental%21' target='blank'>Contate-me</Nav.Link>
            </Nav>
 </Navbar.Collapse>
     <div className="content-container">
  
    <div className="text-container">
      <button className="btn-home">
        <a href="https://api.whatsapp.com/send?phone=5583999220306&text=Quero+agendar+uma+aula+experimental%21" target="blank">
          Comece agora!
        </a>
      </button>
    </div>
      </div>
      </Container>
      </Navbar>
      
   
  );


}

export default Header
