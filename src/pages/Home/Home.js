import React from 'react';
import Carrossel from '../../components/Carrossel/Carrossel';
import SobreMim from '../../components/SobreMim/SobreMim';
import WalktheTalk from '../../components/WalktheTalk/WalktheTalk';
import PortuguesEstrangeiro from '../../components/PortuguesEstrangeiro/PortuguesEstrangeiro';
import Youtube from '../../components/Youtube/Youtube';

// NOVOS IMPORTS:
import Valores from '../Valores/Valores'; // Ou a secção de planos
import ContatoForm from '../../components/ContatoForm/ContatoForm';

const Home = () => {
  return (
    <div>
      <Carrossel />
      <SobreMim />
      <WalktheTalk />
      <PortuguesEstrangeiro />
      
        {/* Exibição dos Planos antes do formulário */}
      <Valores />
      <Youtube />
      
    

      {/* Formulário no final para capturar o contato do cliente */}
      <ContatoForm 
        titulo="Pronto para destravar seu inglês?" 
        subtitulo="Envie uma mensagem ou tire suas dúvidas diretamente conosco!"
      />
    </div>
  );
};

export default Home;