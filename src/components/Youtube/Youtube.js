import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaPlay, FaStar, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';
import './Youtube.css';

const YOUTUBE_VIDEOS = [
  {
    id: "LfaR1b6Gqiw",
    title: "Leia esses livros e evolua seu inglês em pouco tempo!",
    subtitle: "Recomendações e técnicas de leitura guiada",
    duration: "12:45"
  },
  {
    id: "tzSFM0QHlK0",
    title: "20 minutos para mudar sua fluência em inglês",
    subtitle: "Persistência e rotina prática de estudos",
    duration: "18:20"
  },
  {
    id: "2ydcpSy4f2A",
    title: "Sem desculpas: aprenda inglês em apenas 20 minutos por dia",
    subtitle: "Como vencer os bloqueios de aprendizado",
    duration: "15:10"
  }
];

const Youtube = () => {
  const [activeVideoId, setActiveVideoId] = useState(null);
  const [modalVideo, setModalVideo] = useState(null);

  return (
    <section className="youtube-sessao">
      
      {/* --- ONDA SVG DE TRANSIÇÃO SUPERIOR --- */}
      <div className="transicao-svg-topo">
  <svg
    viewBox="0 0 1440 120"
    preserveAspectRatio="none"
    className="svg-curva-puro"
  >
    {/* Bloco Azul Escuro (Parte Superior) */}
    <path
      d="M0,0 L1440,0 L1440,64 L1392,70C1344,75,1248,85,1152,80C1056,75,960,53,864,48C768,43,672,53,576,64C480,75,384,85,288,80C192,75,96,53,48,42.7L0,32 Z"
      fill="#011433"
    />
    
    {/* Bloco Bege (Parte Inferior) */}
    <path
      d="M0,32 L48,42.7C96,53,192,75,288,80C384,85,480,75,576,64C672,53,768,43,864,48C960,53,1056,75,1152,80C1248,85,1344,75,1392,70 L1440,64 L1440,120 L0,120 Z"
      fill="#f7ebd9"
    />
    {/* Linha Dourada acompanhando a Curva da Onda */}
    <path
      d="M0,32L48,42.7C96,53,192,75,288,80C384,85,480,75,576,64C672,53,768,43,864,48C960,53,1056,75,1152,80C1248,85,1344,75,1392,70L1440,64"
      stroke="#c5a059"
      strokeWidth="10"
      fill="none"
    />
  </svg>
</div>

      <Container className="youtube-conteudo">
        {/* Cabeçalho */}
        <div className="text-center mb-5">
          <div className="selo-oficial">
            <span className="ponto-pulse"></span>
            Canal Oficial
          </div>
          <h2 className="youtube-titulo">Últimas do Meu Canal</h2>
          <p className="youtube-subtitulo">
            Aulas práticas, dicas de fluência e estratégias do método{' '}
            <strong style={{ color: '#011433' }}>Walk the Talk</strong> para transformar o seu aprendizado.
          </p>
          <div className="linha-decorativa"></div>
        </div>

        {/* Grid de Vídeos */}
        <Row className="g-4 mb-5">
          {YOUTUBE_VIDEOS.map((video) => {
            const isPlaying = activeVideoId === video.id;
            const hdThumbnail = `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`;

            return (
              <Col key={video.id} lg={4} md={6} xs={12}>
                <div className="video-card-custom">
                  <div className="video-thumb-box">
                    {isPlaying ? (
                      <iframe
                        className="video-iframe"
                        src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0`}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    ) : (
                      <div onClick={() => setActiveVideoId(video.id)}>
                        <img
                          src={hdThumbnail}
                          alt={video.title}
                          onError={(e) => {
                            e.target.src = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
                          }}
                        />
                        <div className="video-overlay-gradient" />
                        <div className="play-btn-outer">
                          <div className="play-btn-inner">
                            <FaPlay size={20} />
                          </div>
                        </div>
                        <div className="duration-tag">{video.duration}</div>
                      </div>
                    )}
                  </div>

                  <div className="card-content">
                    <div>
                      <div className="card-title">{video.title}</div>
                      <div className="card-subtitle">{video.subtitle}</div>
                    </div>
                    <div className="card-footer-actions">
                      <button
                        onClick={() => setActiveVideoId(video.id)}
                        className="btn-action-text"
                      >
                        <FaPlay size={12} />
                        {isPlaying ? ' Reproduzindo' : ' Assistir agora'}
                      </button>
                      <button
                        onClick={() => setModalVideo(video)}
                        className="btn-action-expand"
                        title="Expandir Vídeo"
                      >
                        <FaExternalLinkAlt size={12} /> Ampliar
                      </button>
                    </div>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>

        {/* Botão Principal */}
        <div className="d-flex justify-content-center">
          <a
            href="https://www.youtube.com/@DaizeLellys"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-principal-lellys"
          >
            <span>Acesse meu canal para mais vídeos</span>
            <span className="btn-icone-estrela">
              <FaStar size={14} />
            </span>
          </a>
        </div>
      </Container>

      {/* Modal */}
      {modalVideo && (
        <div className="modal-overlay">
          <div className="modal-box">
            <button onClick={() => setModalVideo(null)} className="modal-close-btn">
              <FaTimes size={18} />
            </button>
            <div style={{ position: 'relative', paddingTop: '56.25%' }}>
              <iframe
                className="video-iframe"
                src={`https://www.youtube-nocookie.com/embed/${modalVideo.id}?autoplay=1`}
                title={modalVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div style={{ padding: '16px', backgroundColor: '#011433', color: '#ffffff' }}>
              <div style={{ fontWeight: 'bold', color: '#c5a059' }}>{modalVideo.title}</div>
              <div style={{ fontSize: '0.8rem', color: '#cbd5e1' }}>{modalVideo.subtitle}</div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Youtube;