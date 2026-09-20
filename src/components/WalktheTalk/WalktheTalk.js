import React from "react";
import "react-multi-carousel/lib/styles.css";
import ScrollAnimation from 'react-animate-on-scroll';
import { FaStar } from "react-icons/fa";

import comunicacao from "./Img/comunicacao.png";
import aprendizagem from "./Img/aprendizagem.png";
import chuncks from "./Img/chuncks.png";
import confianca from "./Img/confianca.png";
import cultura from "./Img/cultura.png";
import portugues from "./Img/portugues.png";
import realLife from "./Img/english-for-real-life.png";
import "./WalktheTalk.css";

const WalktheTalk = () => {
  const cursos = [
    {
      id: 1,
      image: comunicacao,
      title: "Comunicação desde o 1° dia",
      text: "Foco em usar o inglês imediatamente no seu dia a dia.",
    },
    {
      id: 2,
      image: aprendizagem,
      title: "Aprendizagem contextualizada",
      text: "Vocabulário e gramática aplicados em situações reais.",
    },
    {
      id: 3,
      image: chuncks,
      title: "Chunks de linguagem",
      text: "Expressões naturais para uma fluidez espontânea e sem trava.",
    },
    {
      id: 4,
      image: confianca,
      title: "Confiança antes da perfeição",
      text: "Ambiente seguro e acolhedor para praticar e errar sem medo.",
    },
    {
      id: 5,
      image: cultura,
      title: "Cultura e significado",
      text: "Desenvolvimento do pensamento crítico, cultura e conexão humana.",
    },
    {
      id: 6,
      image: portugues,
      title: "Português para estrangeiros",
      text: "Aulas personalizadas de adaptação linguística e cultural no Brasil.",
    },
  ];

  return (
    <section className="cursos" id="curso">
      
      {/* CABEÇALHO DA SECÇÃO */}
      <div className="title">
        <ScrollAnimation animateIn="fadeInDown" animateOnce={true}>
          <img className="img-real-life" src={realLife} alt="English for Real Life" />
          <h2 className="cursos-h1">Inglês para a vida real, não só para livros.</h2>
          <p className="cursos-p">
            Sobre o Método WALK <span className="destaque-the">the</span> TALK
          </p>
        </ScrollAnimation>
      </div>

      {/* GRELHA DOS PILARES (CARDS) */}
      <div className="container-curso">
        {cursos.map((curso) => (
          <div key={curso.id} className="card-curso">
            <div className="imagem-container">
              <img className="imagem" src={curso.image} alt={curso.title} />
            </div>
            <div className="text-curso">
              <h4>{curso.title}</h4>
              <p>{curso.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* BOTÃO DE AÇÃO CENTRALIZADO ABAIXO DOS CARDS */}
      <div className="walk-cta-container">
        <a 
          href="https://api.whatsapp.com/send?phone=5583999220306&text=Quero+come%C3%A7ar+minha+jornada%21" 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn-principal-lellys"
        >
          <span>Comece sua jornada agora</span>
          <span className="btn-icone-estrela"><FaStar size={16}/></span>
        </a>
      </div>

    </section>
  );
};

export default WalktheTalk;
