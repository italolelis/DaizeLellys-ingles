import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Importa o Layout
import Layout from './components/Layout/Layout';

// Importa as Páginas
import Home from './pages/Home/Home.js';
import Sobre from './pages/Sobre/Sobre.js';
import WalkTheTalk from './pages/WalkTheTalk/WalkTheTalk.js';
import PortuguesPEstrangeiros from './pages/PortuguesPEstrangeiros/PortuguesPEstrangeiros.js';
import Valores from './pages/Valores/Valores.jsx';
import Contato from './pages/Contato/Contato.jsx'

// Importa o Botão Flutuante do WhatsApp
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton';

function App() {
  return (
    <>
      <Routes>
        {/* ROTA PAI QUE CARREGA O LAYOUT */}
        <Route path="/" element={<Layout />}>
          
          {/* ROTA INDEX = HOME */}
          <Route index element={<Home />} />
          
          {/* OUTRAS ROTAS */}
          <Route path="sobre-mim" element={<Sobre />} />
          <Route path="valores" element={<Valores />} />
          <Route path="walk-the-talk" element={<WalkTheTalk />} />
          <Route path="portugues-estrangeiros" element={<PortuguesPEstrangeiros />} />
          <Route path="contato" element={<Contato />} />
        </Route>
      </Routes>

      {/* BOTÃO FLUTUANTE EXIBIDO EM TODAS AS PÁGINAS */}
      <WhatsAppButton />
    </>
  );
}

export default App;