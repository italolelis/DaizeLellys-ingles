import React from "react";

import "react-multi-carousel/lib/styles.css";

import comunicacao from "./Img/comunicacao.png";
import aprendizagem from "./Img/aprendizagem.png";
import chuncks from "./Img/chuncks.png";
import confianca from "./Img/confianca.png";
import cultura from "./Img/cultura.png";
import portugues from "./Img/portugues.png";
import "./Cursos.css";
import realLife from "./Img/english-for-real-life.png"

import ScrollAnimation from 'react-animate-on-scroll';


const Cursos = () => {

  const cursos = [
    {
      id: 1,
      image: comunicacao,
      title: "comunicação desde o 1° dia",
      text: 'Foco em usar o inglês imediatamente.',
    },
    {
      id: 2,
      image: aprendizagem,
      title: "Aprendizagem contextualizada",
      text: 'Vocábulario e gramática em situações reais',
    },
    {
      id: 3,
      image: chuncks,
      title: "Chunks de linguagem",
      text: "Expressões naturais para fluidez espontânea.",
    },
    {
      id: 4,
      image: confianca,
      title: "Confiança antes da perfeição",
      text: "Ambiente seguro para praticar e errar sem medo.",
    },
    {
      id: 5,
      image: cultura,
      title: "Cultura, reflexão e significado",
      text: "Cultura, pensamento crítico e conexão.",
    },
    
    {
      id: 6,
      image: portugues,
      title: "Português para estrangeiros",
      text: "Cultura, pensamento crítico e conexão.",
    },

  ];

  return (
    <div className="cursos" id="curso">
      
      <div className="title">

        <ScrollAnimation animateIn='fadeInDown'>
      <img className="img-real-life" src={realLife} alt=""></img>
      <h2 className="cursos-h1">Inglês para a vida real, não só para livros.</h2>
      <p className="cursos-p">Sobre o Método WALK THE TALK</p>
       </ScrollAnimation>
      <button className="btn-cursos">
        <a
          href="https://api.whatsapp.com/send?phone=5583999220306&text=Quero+agendar+uma+aula+experimental%21"
          target="blank"
        >
          Comece sua jornada agora!
        </a>
      </button>
      </div>
     
      <div className="container-curso" >
      {cursos.map((curso) => (
          <div key={curso.id} className="card-curso">
            
            <img className="imagem" src={curso.image} alt="imagem" />
            <div className="middle">
            <div className="text-curso">
            <h4>{curso.title}</h4>
            <p>{curso.text}</p>
          </div>  
        </div>
        </div>
        ))}
      </div>
    </div>
   
   
  );
};
export default Cursos;
