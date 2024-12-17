import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';
import QuienesSomos from './QuienesSomos';
import Productos from './Productos';
import DondeEstamos from './DondeEstamos';
import Carrito from './Carrito';
import './Index.css';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import Button from 'react-bootstrap/Button';

const Index = () => {

  const [currentView, setCurrentView] = useState('login'); // Estado para la vista actual

  const renderView = () => {
    switch (currentView) {
      case 'inicio':
        return (
          <main className="content">
            <h1>Vista Index</h1>
            <div className="carousel">
              <img src={images[currentSlide].src} alt="Taza" className="carousel-image" />
              <div className="carousel-text">{images[currentSlide].text}</div>
            </div>
            <h1>Las mejores tazas de todo Tucumán</h1>
            <h3>Lorem ipsum dolor sit amet consectetur adipiscing elit...</h3>
          </main>
        );
      case 'quienes-somos':
        return <QuienesSomos />;
      case 'productos':
        return <Productos />;
      case 'donde-estamos':
        return <DondeEstamos />;
      case 'carrito':
        return <Carrito />;
      case 'login':
        return <LoginForm />;
      case 'register':
        return <RegisterForm />;
    }
  };

  // Carrusel
  const images = [
    { src: 'https://www.exasrl.com/assets/productos/cercos/exa-cercos-electricos-2.jpg', text: 'Las Mejores Tazas de Tucumán' },
    { src: 'https://www.verisure.com.ar/sites/ar/files/flmngr/drupal/blog/cerco-2024.png', text: 'Calidad Asegurada' },
    { src: 'https://uss.com.ar/sitio/wp-content/uploads/2018/10/cercos-electricos-para-empresas.jpg', text: 'Variedad de modelos' },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 8000); // Cambia cada 8 segundos

    return () => clearInterval(interval); // Limpia el intervalo al desmontar
  }, [images.length]);

  return (
    <div className="grid-container">
      <header className="header">Mundo Tazas</header>
      <nav className="menu">
        <button onClick={() => setCurrentView('login')} className="menu-button">
          Cuenta
        </button>
        <button onClick={() => setCurrentView('inicio')} className="menu-button">
          Inicio
        </button>
        <button onClick={() => setCurrentView('quienes-somos')} className="menu-button">
          ¿Quiénes Somos?
        </button>
        <button onClick={() => setCurrentView('productos')} className="menu-button">
          Productos
        </button>
        <button onClick={() => setCurrentView('donde-estamos')} className="menu-button">
          Donde Estamos
        </button>
        <button onClick={() => setCurrentView('carrito')} className="menu-button">
          Carrito de Compras
        </button>
      </nav>

      {/* Carrusel como fondo */}
      <div className="carousel-background">
        <img src={images[currentSlide].src} alt="Carrusel" className="carousel-background-image" />
      </div>

      <main className="content">
        {renderView()}
      </main>

      <footer className="footer">Pie de Página</footer>
    </div>
  );
};

export default Index;
