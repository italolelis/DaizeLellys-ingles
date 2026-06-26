import React from 'react'
import './PortuguesEstrangeiro.css'
import tituloImg from './Img/brasil-cores-da-vida.png'
import calendarioImg from './Img/calendario.png'
import culturabrasileiraImg from './Img/cultura-brasileira.png' 
import aulaonlineImg from './Img/aulaonline.png'

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

          <button className="botao-cta">
            Schedule a trial lesson
          </button>
        </div>
      </div>
    </section>
  )
}

export default PortugueseEstrangeiro