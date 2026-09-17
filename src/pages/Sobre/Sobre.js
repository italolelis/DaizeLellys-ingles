import React from 'react'
import Container from 'react-bootstrap/Container';
import './Sobre.css'
import daizeSobre from './Img/sobre-mim.jpeg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer'



const Sobre = () => {

    
  return (
    <div className='principal'>
     
    <Header></Header>
    
    <Container className='geral'>
    
      <Row>
        <Col className='coluna'><img className='sobre-mim' src={daizeSobre} alt=''></img></Col>
        <Col>
        <h2 className='titulo'>Coordenadora do Programa de Inglês</h2>
        <p className='texto'>Como Coordenadora pedagógica do Programa de Inglês, pude acompanhar e avaliar o ensino e o processo de aprendizagem, 
            bem como os resultados do desempenho dos alunos; assegurar a participação ativa dos professores nos treinamentos, 
            organizar e selecionar materiais adequados às diferentes situações de ensino--aprendizagem e 
            conhecer os recentes referenciais teóricos relativos ao tema, para orientar os professores.</p>
        </Col>
        
      </Row>

      <Row>
        <Col>
        <h2 className='titulo'>Formação</h2>
        <p className='texto'>Graduada em Letras pela UTP (Universidade Tuluti do Paraná), 
            especialista em Educação Global pela UNIFUTURO (Faculdades Integradas do Brasil), 
            pós graduada em Liderança Avançada no Haggai lnternational lnstltute, no Hawaii, 
            Estados Unidos e mestranda em Educação na FCU (Florlda Christian Unlversl­ty), nos Estados Unidos.</p>

        </Col>
        <Col className='texto-geral'>
        <h2 className='titulo'>Professora de Inglês</h2>
        <p className='texto'>Professora Universitária (graduação, pós-graduação e extensão), 
            lecionando na área de Idiomas. Além de aulas presenciais, 
            experiência também com aulas on line, interagindo assim, 
            com outras culturas e realidades diferentes.</p>
        </Col>
       
      </Row>

      <Row>
        <Col>
        <h2 className='titulo'>ESL Training Services - EUA</h2>
        <p className='texto'>Formação e treinamento no Método Inglês através da Bíblia, criado por Glenda Reece, 
            na Carolina do Norte, EUA.</p>
        </Col>
        <Col>
        <h2 className='titulo'>Diretora do International Office e Intercâmbio</h2>
        <p className='texto'>Gestão administrativa do International Office, desenvolvi outras competências administrativas, 
            bem como atuando como facilitadora nos processos de intercâmbio, e contribuindo para uma educação globalizada.</p>
        </Col>
      </Row>

      
      
    </Container>
    <Footer></Footer>
    </div>
   
  )
}

export default Sobre
