import React from 'react'
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import {Card} from 'react-bootstrap'
import './Comentarios.css'
import grace from './img/grace.png'
import ellenerica from './img/ellenerica.png'
import flaviana from './img/flaviana.png'
import jaqueline from './img/jaqueline.png'
import netto from './img/netto.png'
import joalisson from './img/joalisson.png'
import leonardo from './img/leonardo.png'
import walter from './img/walter.jpeg'
import estrela from './img/estrela.png'


function Comentarios() {

  const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 1024 },
        items: 4
    },
    desktop: {
        breakpoint: { max: 1024, min: 800 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 800, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

  const comentarios = [{
    id:1,
    image:grace,
    name:'Grace',
    state:'Fortaleza',
    comment:'Faziam 30 anos que não estudava inglês e com apoio dos meus filhos e esposo e por gostar de inglês, resolvi voltar a estudar e com a metodologia da Bíblia facilitou muito o meu aprendizado, eu sabia que não iria ser fácil pois tinha que ter a dedicação mas que eu falo sempre que em cada aula eu aprendo um pouco de inglês e estou muito feliz com esse aprendizado.'
  },
  {
    id:2,
    image:joalisson,
    name:'Joalisson Douglas',
    state:'João Pessoa',
    comment: 'As aulas estão me ajudando muito a ganhar confiança para falar inglês. As aulas são dinâmicas e são uma oportunidade fantástica de prática e aprendizagem do idioma. Recomendo para todos que buscam aprender ou aprimorar o seu inglês.'
  },
  {
    id:3,
    image:ellenerica,
    name:'Ellen e Erica',
    state:'Fortaleza',
    comment: 'Excelente profissional, sempre nos motivando a aprender, aulas super divertidas e dinâmicas, recomendamos muito nota 1000.'
  },
  {
    id:4,
    image:leonardo,
    name:'Leonardo',
    state:'Cabedelo',
    comment: 'Primeiramente quero agradecer pela teacher que és. Vejo em você uma teacher que ensina com amor a língua inglesa, que ama o que faz, e tudo isso é transmitido para nós alunos.Falando sobre as aulas, sim, você está ajudando bastante a língua que muitos acham que é difícil, mas de uma forma simples e eficaz você mostra que somos capazes sim, porque além de teacher, você é amiga e nos dá conselhos, como no nosso primeiro dia de encontro. Quem tem um teacher igual a você, ganhou na loteria. Good bless you. Kiss.'
  },

  {
    id:5,
    image:flaviana,
    name:'Flaviana',
    state:'João Pessoa',
    comment: 'Curso e aulas maravilhosas, professoras super dinâmica e sinto-me livre na hora de flar inglês, amo as aulas e agradeço cada nível de meu aprendizado.Recomendo.'
  },
  {
    id:6,
    image:walter,
    name:'Walter Reinaldo',
    state:'João Pessoa',
    comment: 'My last experience in a classroom happened 50 years ago. Inexplicably, the desire to learn the English language arose in my thoughts, and the question remained in my heart; how, where, what is the cost? To my surprise, a friend recommended me to Elegis and I am grateful for everything that is happening. Thankful for an amazing teacher in the teaching format applied, for her charisma, for her perception of clear things that humanity should know better. I call her Miss Deize our teacher.'
  },

  {
    id:7,
    image:jaqueline,
    name:'Jaqueline',
    state:'Espírito Santo',
    comment: 'A cada aprendizado um encanto e a felicidade de poder aprender cada vez mais e melhorar a fluência em Inglês, com aulas super descontraídas.'
  },
  {
    id:8,
    image:netto,
    name:'José Netto',
    state:'Campina Grande',
    comment: 'Eu comecei o curso para aprimorar o meu inglês, o curso ajudou muito a melhorar minha fala e a minha escrita, assim como a minha comunicação que está mais natural, esse curso é muito bom e vai me ajudar a realizar o sonho de estudar no exterior.'
  },
]

 return (
    <div className='comentarios'>
      
       <Carousel responsive={responsive} className='comments-carrossel' infinite={true} autoPlay={true} rtl={false}>
    {comentarios.map((comentario) => (
  <div className="card-comentarios" key={comentario.id}>
    {/* Adicionei a classe aluno-header aqui */}
    <div className="aluno-header">
        <img src={comentario.image} className="aluno-foto" />
        <div className="aluno-info">
            <h4 className="nome-aluno">{comentario.name}</h4>
            <p className="estado-aluno">{comentario.state}</p>
        </div>
    </div>
    <p className="depoimento-texto">"{comentario.comment}"</p>
  </div>
))}
       </Carousel>
    </div>
  )
}

export default Comentarios