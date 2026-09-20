import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import WhatsAppButton from '../WhatsAppButton/WhatsAppButton'; // <-- Importe aqui

export default function Layout() {
  return (
    <>
      <Header />
      
      {/* Aqui são renderizadas as páginas da rota */}
      <main>
        <Outlet />
      </main>

      <Footer />

      {/* Botão flutuante exibido em todas as páginas */}
      <WhatsAppButton />
    </>
  );
}