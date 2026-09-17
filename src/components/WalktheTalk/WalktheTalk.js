import React from "react";

import "react-multi-carousel/lib/styles.css";

import comunicacao from "./Img/comunicacao.png";
import aprendizagem from "./Img/aprendizagem.png";
import chuncks from "./Img/chuncks.png";
import confianca from "./Img/confianca.png";
import cultura from "./Img/cultura.png";
import portugues from "./Img/portugues.png";
import "./WalktheTalk.css";
import realLife from "./Img/english-for-real-life.png"

import ScrollAnimation from 'react-animate-on-scroll';
import { FaStar } from "react-icons/fa";


const WalktheTalk = () => {

  const cursos = [
    {
      id: 1,
      image: comunicacao,
      title: "Comunicação desde o 1° dia",
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
      <p className="cursos-p">Sobre o Método WALK <span className="destaque-the">the</span> TALK</p>
       </ScrollAnimation>
      
<div className="m-4" style={{ flexShrink: 0, display: 'flex', alignItems: 'center' }}>
  <a 
    href="https://api.whatsapp.com/send?phone=5583999220306&text=Quero+come%C3%A7ar+minha+jornada%21" 
    target="_blank" 
    rel="noopener noreferrer"
    className="btn-principal-lellys text-nowrap" 
    style={{ textDecoration: 'none'}}
  >
    Comece sua jornada agora
    <span className="btn-icone-estrela"><FaStar size={18}/></span>
  </a>
</div>
      
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
export default WalktheTalk;
