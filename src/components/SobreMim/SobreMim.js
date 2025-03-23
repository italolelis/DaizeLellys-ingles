import React from 'react'
import './SobreMim.css'
import daize from './img/sobre-mim.jpeg'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';


function SobreMim() {

  const navigate = useNavigate()
  return (
    <div id='quem-sou-eu' className='sobre'>
        
    
 
    <Container className='text-sobre'>
      <Row>
        <Col><img className='img-daize' src={daize} alt=''/></Col>
        
        <Col> 
        <h1 className='text-h1'>Daize Lellys</h1>
        <ScrollAnimation animateIn='fadeInDown'><p className='text' >Meu nome é Daize (com A e Z mesmo), uma professora apaixonada por idiomas e culturas diferentes, desde que tive meu 
      primeiro contato com o inglês aos nove anos, com uma amiga canadense. 
      <br></br>
      
      Sou Professora de Inglês, Mentora e Líder no segmento de Inglês através da Bíblia, com graduação em Letras, pós-graduação em Educação Global e Liderança Avançada
      no Haggai Institute nos EUA.
      <br></br>
      
      Há mais de 25 anos, tenho ensinado centenas de pessoas a serem independentes no inglês 
      para realizarem seus sonhos.</p>
      </ScrollAnimation>
      <div className='div-button'>
     <button className='button-sobre-mim' onClick={()=>(navigate('/sobre-mim'))}>Saiba mais sobre mim</button>
      </div>
      </Col>
      
      </Row>
        
    </Container>
   
       
     </div>
  )
}

export default SobreMim