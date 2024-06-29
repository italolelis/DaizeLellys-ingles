import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import dinheiro from "./img/ganhar-dinheiro.png";
import interagir from "./img/interagir.png";
import viajar from "./img/viagem.png";
import explorar from "./img/conhecimento.png";
import cantar from "./img/cantar.png";
import intercambio from "./img/intercambio.png";
import "./motivacao.css";

import { Figure, Image } from "react-bootstrap";

import 'animate.css';

function Motivacao() {
  return (
    <div className="motivacao">
      <h1 className="motivacao-h1">Comigo você pode...</h1>

      <Container>
        <div className="row-container">
          <Figure className="animate__animated animate__fadeInDown animate__delay-2s">
            <Image width={120} height={120} roundedCircle src={dinheiro} />
            <Figure.Caption>Ganhar Melhor</Figure.Caption>
          </Figure>

          <Figure className="animate__animated animate__fadeInDown animate__delay-2s" >
            <Image width={120} height={120} roundedCircle src={interagir} />
            <Figure.Caption>Interagir com outras Culturas</Figure.Caption>
          </Figure>

          <Figure className="animate__animated animate__fadeInDown animate__delay-3s">
            <Image width={120} height={120} roundedCircle src={viajar} />
            <Figure.Caption>
              Viajar com mais segurança e aproveitamento
            </Figure.Caption>
          </Figure>

          <Figure className="animate__animated animate__fadeInDown animate__delay-3s">
            <Image width={120} height={120} roundedCircle src={explorar} />
            <Figure.Caption>Explorar Conhecimento</Figure.Caption>
          </Figure>

          <Figure className="animate__animated animate__fadeInDown animate__delay-4s">
            <Image width={120} height={120} roundedCircle src={cantar} />
            <Figure.Caption>Cantar em inglês</Figure.Caption>
          </Figure>

          <Figure className="animate__animated animate__fadeInDown animate__delay-4s">
            <Image width={120} height={120} roundedCircle src={intercambio} />
            <Figure.Caption>
              Morar/Estudar /Trabalhar no exterior
            </Figure.Caption>
          </Figure>
        </div>
      </Container>

      <div className="div-button">
        <button className="button-motivacao">
          <a
            href="https://api.whatsapp.com/send?phone=5583999220306&text=Quero+agendar+uma+aula+experimental%21"
            target="blank"
          >
            Clique aqui para agendar uma aula experimental
          </a>
        </button>
      </div>
    </div>
  );
}

export default Motivacao;
