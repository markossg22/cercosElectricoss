import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

const Menu = () => {
  return (
    <nav className="menu">
      <Link to="/inicio" className="menu-button">Inicio</Link>
      <Link to="/quienes-somos" className="menu-button">¿Quiénes Somos?</Link>
      <Link to="/productos" className="menu-button">Productos</Link>
      <Link to="/tazas-personalizadas" className="menu-button">Tazas Personalizadas</Link>
      <Link to="/donde-estamos" className="menu-button">¿Dónde Estamos?</Link>
      <Link to="/carrito" className="menu-button">Carrito de Compras</Link>
      <Link to="/login" className="menu-button">Login</Link>
      <Link to="/registro" className="menu-button">Registro</Link>
    </nav>
  );
};

export default Menu;
