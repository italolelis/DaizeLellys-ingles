import React from 'react'
import './PortuguesEstrangeiro.css'
import tituloImg from './Img/brasil-cores-da-vida.png'
import calendarioImg from './Img/calendario.png'
import culturabrasileiraImg from './Img/cultura-brasileira.png' 
import aulaonlineImg from './Img/aulaonline.png'
import { FaStar } from "react-icons/fa";

const PortugueseEstrangeiro = () => {
  return (
    <section className="secao-portugues">
      <div className="container-conteudo">
        <div className="texto-box">
          {/* Imagem do título */}
          <img src={tituloImg} alt="Brasil: Cores da Vida" className="titulo-imagem" />
          
          <h2 className="subtitulo-secao">Portuguese for Foreigners</h2>
        
          <p className="descricao-secao">
            Experience cultural immersion, achieve fluency, and discover the <span className="destaque-texto">true essence of Brazil</span>, beyond the pages of a book.
          </p>

          {/* NOVOS ÍCONES DE CARACTERÍSTICAS */}
          <div className="caracteristicas-container">
            <div className="card-caracteristica">
              <img src={calendarioImg} alt='' className='container-imagem'/>
              <p className="texto-caracteristica">Flexible Lessons</p>
              <p className="subtexto-caracteristica">Horários Flexíveis</p>
              <p className="subtexto-caracteristica">Flexible scheduling</p>
            </div>
            
            <div className="card-caracteristica">
              <img src={aulaonlineImg} alt='' className='container-imagem'/>
              <p className="texto-caracteristica">Online & Live</p>
              <p className="subtexto-caracteristica">Aulas Online e Ao Vivo</p>
              <p className="subtexto-caracteristica">100% Online & Live Sessions</p>
            </div>
            
            <div className="card-caracteristica">
              <img src={culturabrasileiraImg} alt='' className='container-imagem'/>
              <p className="texto-caracteristica">Cultural Immersion</p>
              <p className="subtexto-caracteristica">Muita Cultura Brasileira</p>
              <p className="subtexto-caracteristica">Rich Brazilian Culture</p>
            </div>
          </div>
          <div className="m-4" style={{ flexShrink: 0, display: 'flex', alignItems: 'center' }}>
            <a 
              href="https://api.whatsapp.com/send?phone=5583999220306&text=Quero+aprender+portugu%C3%AAs%21" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-principal-lellys text-nowrap" 
              style={{ textDecoration: 'none'}}
            >
              Schedule a trial lesson
              <span className="btn-icone-estrela"><FaStar size={18}/></span>
            </a>
          </div>

         </div>
      </div>
    </section>
  )
}

export default PortugueseEstrangeiro