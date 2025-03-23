import React from "react";

import "react-multi-carousel/lib/styles.css";

import biblia from "./Img/ingles-atraves-da-biblia.jpeg";
import viagens from "./Img/viagens.png";
import negocios from "./Img/negocios.png";
import musica from "./Img/musica.jpeg";
import conversa from "./Img/conversa.png";
import estrangeiro from "./Img/estrangeiro.png";
import "./Cursos.css";

import ScrollAnimation from 'react-animate-on-scroll';


const Cursos = () => {

  const cursos = [
    {
      id: 1,
      image: biblia,
      title: "Inglês através da Bíblia",
      text: 'O curso de "Inglês através da Bíblia" tem o objetivo de preparar o aluno para comunicar-se de forma eficaz em inglês do Nível Iniciante A1 ao Avançado C1.O projeto traz uma abordagem cristã de ensino da Língua Inglesa que utiliza textos da Bíblia, informações bíblicas e a própria Bíblia em inglês, como veículo para o ensino.',
    },
    {
      id: 2,
      image: viagens,
      title: "Inglês para Viagens",
      text: 'Prepare-se para viajar com nosso curso de inglês especializado! No primeiro módulo, você aprenderá a lidar com situações essenciais no aeroporto, avião e alfândega. No segundo módulo, focamos em reservas de hotel, refeições em restaurantes e exploração da cidade. Com instrutores experientes, você desenvolverá habilidades linguísticas para uma viagem tranquila. Junte-se a nós e viaje com confiança!',
    },
    {
      id: 3,
      image: negocios,
      title: "Inglês para Negócios",
      text: "É uma modalidade específica e se concentra no aprendizado do vocabulário para o meio empresarial. Ou seja, é mais formal e é usado como uma ferramenta de linguagem para negócios, mais técnica e adequada ao contexto profissional. Além disso, o estudo do Business English parte de um conhecimento prévio do idioma, pelo menos a partir do intermediário.",
    },
    {
      id: 4,
      image: musica,
      title: "Inglês com Música",
      text: "Já parou para pensar no poder da música no aprendizado? A música faz parte do nosso dia a dia e, sem perceber, muitas vezes já estamos em contato com o inglês através das canções que ouvimos. No curso Inglês com Música, você vai muito além de apenas escutar. Vamos explorar juntos o significado e o contexto das músicas, analisar a letra e a tradução, e, claro, trabalhar cuidadosamente a pronúncia para que você aprenda a cantar e falar com mais confiança.",
    },
    {
      id: 5,
      image: conversa,
      title: "Conversation Class",
      text: "Nossas aulas de conversação focam em falar inglês, diferente das aulas convencionais. Nosso curso prepara você para conversar sobre qualquer assunto, seja para uma entrevista de emprego, reunião com parceiros estrangeiros ou bate-papo com um amigo estrangeiro. Praticando conversação, você se sentirá mais seguro em diversas situações.",
    },
    {
      id: 6,
      image: estrangeiro,
      title: "Português para Estrangeiros",
      text: "Nosso curso objetiva proporcionar a estrangeirosa oportunidade de aprender Português, como se fala no Brasil, de maneira simples e clara. Usamos situações do dia-a-dia, bem como músicas e séries, deixando o aprendizado dinâmico e funcional.",
    },
  ];

  return (
    <div className="cursos" id="curso">
      
      <div className="title">
        <ScrollAnimation animateIn='fadeInDown'>
      <h2 className="cursos-h1">Por que meus cursos são um diferencial?</h2>
      <p className="cursos-p">Veja minhas modalidades</p>
       </ScrollAnimation>
      <button className="btn-cursos">
        <a
          href="https://api.whatsapp.com/send?phone=5583999220306&text=Quero+agendar+uma+aula+experimental%21"
          target="blank"
        >
          Adquira já!
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
