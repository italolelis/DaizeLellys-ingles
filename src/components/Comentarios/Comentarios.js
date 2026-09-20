import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaStar } from 'react-icons/fa';

import './Comentarios.css';
import grace from './img/grace.png';
import ellenerica from './img/ellenerica.png';
import flaviana from './img/flaviana.png';
import jaqueline from './img/jaqueline.png';
import netto from './img/netto.png';
import joalisson from './img/joalisson.png';
import leonardo from './img/leonardo.png';
import walter from './img/walter.jpeg';

function Comentarios() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1200 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 1200, min: 850 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 850, min: 580 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 580, min: 0 },
      items: 1
    }
  };

  const comentarios = [
    {
      id: 1,
      image: grace,
      name: 'Grace',
      state: 'Fortaleza - CE',
      comment: 'Faziam 30 anos que não estudava inglês e, com a metodologia da Bíblia, facilitou muito o meu aprendizado. Em cada aula aprendo um pouco e estou muito feliz com o resultado.'
    },
    {
      id: 2,
      image: joalisson,
      name: 'Joalisson Douglas',
      state: 'João Pessoa - PB',
      comment: 'As aulas estão me ajudando muito a ganhar confiança para falar inglês. São dinâmicas e uma oportunidade fantástica de prática. Recomendo para todos!'
    },
    {
      id: 3,
      image: ellenerica,
      name: 'Ellen e Érica',
      state: 'Fortaleza - CE',
      comment: 'Excelente profissional, sempre nos motivando a aprender! Aulas super divertidas e dinâmicas, recomendamos muito. Nota 1000!'
    },
    {
      id: 4,
      image: leonardo,
      name: 'Leonardo',
      state: 'Cabedelo - PB',
      comment: 'Vejo em você uma teacher que ensina com amor. De uma forma simples e eficaz, você mostra que somos capazes. Quem tem uma teacher igual a você, ganhou na loteria!'
    },
    {
      id: 5,
      image: flaviana,
      name: 'Flaviana',
      state: 'João Pessoa - PB',
      comment: 'Aulas maravilhosas! Sinto-me livre na hora de falar inglês, amo a dinâmica e agradeço cada nível do meu aprendizado. Recomendo muito.'
    },
    {
      id: 6,
      image: walter,
      name: 'Walter Reinaldo',
      state: 'João Pessoa - PB',
      comment: 'My last experience in a classroom happened 50 years ago. Thankful for an amazing teacher in the teaching format applied and for her charisma.'
    },
    {
      id: 7,
      image: jaqueline,
      name: 'Jaqueline',
      state: 'Espírito Santo - ES',
      comment: 'A cada aprendizado um encanto! Felicidade em poder melhorar a fluência em inglês a cada dia com aulas super descontraídas.'
    },
    {
      id: 8,
      image: netto,
      name: 'José Netto',
      state: 'Campina Grande - PB',
      comment: 'O curso ajudou muito a melhorar minha fala, escrita e comunicação de forma natural. Vai me ajudar a realizar o sonho de estudar no exterior.'
    }
  ];

  return (
    <section className="comentarios-secao">
      <div className="comentarios-container">
        
        {/* TÍTULO E SUBTÍTULO DE ALTA CONVERSÃO */}
        <div className="comentarios-header">
          <span className="comentarios-tag">HISTÓRIAS DE SUCESSO</span>
          <h2>O Que Dizem Nossos Alunos</h2>
          <p>Transformações reais de quem aprendeu a falar inglês na vida real.</p>
        </div>

        {/* CARROSSEL DE DEPOIMENTOS */}
        <Carousel 
          responsive={responsive} 
          className="comments-carrossel" 
          infinite={true} 
          autoPlay={true}
          autoPlaySpeed={5000}
          keyBoardControl={true}
          customTransition="transform 500ms ease-in-out"
          transitionDuration={500}
          containerClass="carousel-container"
        >
          {comentarios.map((comentario) => (
            <div className="card-comentarios" key={comentario.id}>
              
              {/* ESTRELAS DE AVALIAÇÃO (5/5) */}
              <div className="depoimento-estrelas">
                {[...Array(5)].map((_, index) => (
                  <FaStar key={index} size={14} color="#d4af37" />
                ))}
              </div>

              {/* MENSAGEM / DEPOIMENTO */}
              <p className="depoimento-texto">"{comentario.comment}"</p>

              {/* FOTO E DADOS DO ALUNO */}
              <div className="aluno-header">
                <img src={comentario.image} className="aluno-foto" alt={`Aluno ${comentario.name}`} />
                <div className="aluno-info">
                  <h4 className="nome-aluno">{comentario.name}</h4>
                  <p className="estado-aluno">{comentario.state}</p>
                </div>
              </div>

            </div>
          ))}
        </Carousel>

      </div>
    </section>
  );
}

export default Comentarios;