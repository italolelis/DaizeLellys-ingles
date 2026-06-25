import React from 'react'
import Header from '../../components/Header/Header'
import valores from '../../components/Precos/img/valores.png'
import Footer from '../../components/Footer/Footer'
import './Valores.css'


const Valores = () => {
  return (
    <div className="page-valores-container">
      <Header />

      <div className='container-valores'>
        <div className="imagem-wrapper">
          <img className='valores' src={valores} alt='Tabela de Valores e Planos'/>
        </div>
        
        <div className='button-precos'>
          <button className='link-valores'>
            <a href='https://api.whatsapp.com/send?phone=5583999220306&text=Olá,+Quero+contratar+o+plano+de+5+ou+mais+pessoas%21' target='blank' rel="noreferrer">
              Contrate-me
            </a>
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Valores;