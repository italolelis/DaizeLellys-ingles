import React from 'react'
import './Precos.css'
import { Col, Container, Row } from 'react-bootstrap'

// import consultoria from './img/consultoria.png'

function Precos() {
    return (
        <div className='valores'>
            <h1 className='valores-h1'>Conheça </h1> <h1>nossos melhores planos para você</h1>
            <Container className='container-valores' >

                <Row style={{width:'100%'}}>

                    <Col className='linha' style={{ paddingBottom: '70px'}}>
                        <div className='img-precos'>
                            <img style={{ height: '15rem', borderRadius: '10px', marginBottom: '20px' }} src={vip} alt='' />
                        </div>
                        <h2 style={{ fontSize: '18px', backgroundColor: '#1c2b6c', color: '#fff', padding: '5px 0', textAlign: 'center' }} className='linha'>VIP</h2>
                        <p style={{ fontSize: '15px', textAlign: 'left' }}>
                            Aulas ao vivo (síncronas), formato online, individual, suporte com o professor, plano de estudo semanal feedback semestral e certificado.
                            Aulas de 60 minutos de duração.

                        </p>
                        <p className='text-valores'>
                            Módulo por 6x R$397.00.
                        </p>
                        <div className='button-precos'>
                       <button className='link-valores'><a href='https://api.whatsapp.com/send?phone=5583999220306&text=Olá,+Quero+contratar+o+plano+individual%21' target='blank' >Contrate-me</a></button>
                        </div>
                    </Col>


                    <Col className='linha' style={{ paddingBottom: '50px'}}>
                        <div className='img-precos'>
                            <img style={{ height: '15rem', borderRadius: '10px', marginBottom: '20px' }} src={grupo} alt='' />
                        </div>
                        <h2 style={{ fontSize: '18px', backgroundColor: '#1c2b6c', color: '#fff', padding: '5px 0', textAlign: 'center' }}>Grupos até 4 pessoas</h2>
                        <p style={{ fontSize: '15px', textAlign: 'left' }}>
                            Aulas ao vivo (síncronas), formato online,  até 4 pessoas, suporte com o professor, plano de estudo semanal feedback semestral e certificado.
                            Aulas de 60 minutos de duração.
                        </p>
                        <p className='text-valores'>
                            Módulo por 6x R$297.00 por pessoa.
                        </p>
                        <div className='button-precos'>
                        <button className='link-valores'> <a href='https://api.whatsapp.com/send?phone=5583999220306&text=Olá,+Quero+contratar+o+plano+de+até+3+pessoas%21' target='blank'>Contrate-me</a></button>
                        </div>
                    </Col>

                    <Col className='linha' style={{ paddingBottom: '50px'}}>
                        <div className='img-precos'>
                            <img style={{ height: '15rem', borderRadius: '10px', marginBottom: '20px' }} src={grupos} alt='' />
                        </div>
                        <h2 style={{ fontSize: '18px', backgroundColor: '#1c2b6c', color: '#fff', padding: '5px 0', textAlign: 'center' }} >Grupos</h2>
                        <p style={{ fontSize: '15px', textAlign: 'left' }}>
                            Aulas ao vivo (síncronas), formato online, grupos de 5 a 10 pessoas, suporte com o professor, plano de estudo semanal feedback semestral e certificado.
                            Aulas de 60 minutos de duração.

                        </p>
                        <p className='text-valores'>
                            Módulo por  6x R$197.00 por pessoa.
                        </p>
                        <div className='button-precos'>
                        <button className='link-valores' ><a href='https://api.whatsapp.com/send?phone=5583999220306&text=Olá,+Quero+contratar+o+plano+de+5+ou+mais+pessoas%21' target='blank'>Contrate-me</a></button>
                        </div>

                    </Col>
                    
                </Row>
            </Container>
        </div>
    )
}

export default Precos