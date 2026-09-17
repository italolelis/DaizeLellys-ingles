import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './PortuguesPEstrangeiros.css';

function PortuguesPEstrangeiros() {
  const planos = [
    {
      id: 'individual',
      icone: '👤',
      titulo: 'INDIVIDUAL',
      subtitulo: 'Premium',
      tagline: 'TOTALMENTE PERSONALIZADO / FULLY PERSONALIZED',
      precoUSD: 'US$ 97',
      precoBRL: 'R$ 534,85',
      equivUSD: 'US$ 24,25 / lesson',
      equivBRL: 'R$ 133,71 / aula',
      destaque: '⭐ Atenção exclusiva e foco total nos seus objetivos / Exclusive 1-on-1 focus.',
      destaqueCard: false
    },
    {
      id: 'dupla',
      icone: '👥',
      titulo: 'DUPLA',
      subtitulo: 'Premium',
      tagline: 'PERSONALIZADO E COMPARTILHADO / SHARED EXPERIENCE',
      precoUSD: 'US$ 64',
      precoBRL: 'R$ 327,00',
      equivUSD: 'US$ 16,00 / lesson',
      equivBRL: 'R$ 81,75 / aula',
      destaque: '⭐ Aprenda junto com alguém especial e evoluam juntos / Learn with a partner.',
      destaqueCard: true // Ganha borda dourada e destaque visual
    },
    {
      id: 'grupo',
      icone: '👥👥',
      titulo: 'GRUPO',
      subtitulo: 'Dinâmica Coletiva',
      tagline: 'APRENDIZADO EM COMUNIDADE / COMMUNITY LEARNING',
      precoUSD: 'US$ 56',
      precoBRL: 'R$ 227,00',
      equivUSD: 'US$ 14,00 / lesson',
      equivBRL: 'R$ 56,75 / aula',
      destaque: '⭐ Mais interação e trocas reais no dia a dia / Real-life group interaction.',
      destaqueCard: false
    }
  ];

  return (
    <section className="precos-section">
      <Container fluid className="precos-container">
        <div className="precos-header text-center">
          <h2>Escolha a modalidade ideal para você</h2>
          <p className="subtext">Choose the perfect learning format for your routine</p>
        </div>

        <Row className="justify-content-center align-items-stretch">
          {planos.map((plano) => (
            <Col key={plano.id} lg={4} md={6} sm={12} className="mb-4">
              <div className={`card-preco ${plano.destaqueCard ? 'card-destaque' : ''}`}>
                
                {/* Cabeçalho do Card */}
                <div className="card-header-custom">
                  <div className="card-icone">{plano.icone}</div>
                  <h3 className="card-titulo">{plano.titulo}</h3>
                  <span className="card-subtitulo">{plano.subtitulo}</span>
                  <p className="card-tagline">{plano.tagline}</p>
                </div>

                {/* Preços em Destaque */}
                <div className="card-precos-box">
                  <div className="preco-usd">{plano.precoUSD}<span> / month (mês)</span></div>
                  <div className="preco-brl">≈ {plano.precoBRL}<span> / mês</span></div>
                </div>

                {/* Equivalente por Aula */}
                <div className="card-equivalentes">
                  <p>Equivalent to: <strong>{plano.equivUSD}</strong></p>
                  <p>Equivalente a: <strong>{plano.equivBRL}</strong></p>
                  <span className="frequencia">1 live lesson per week • 1 aula ao vivo por semana</span>
                </div>

                {/* Bloco de Destaque / Benefício */}
                <div className="card-destaque-box">
                  <p>{plano.destaque}</p>
                </div>

                {/* Botão de Ação */}
                <div className="card-action">
                  <button className="btn-matricula">Quero esta modalidade</button>
                </div>

              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default PortuguesPEstrangeiros;