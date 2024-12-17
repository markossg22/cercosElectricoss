import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';


const Menu = () => {
  return (
    <nav className="menu">
      <Link to="/inicio" className="menu-button mt-4">Inicio</Link>
      <Link to="/quienes-somos" className="menu-button mt-1">¿Quiénes Somos?</Link>
      <Link to="/productos" className="menu-button mt-1">Productos</Link>
      <Link to="/tazas-personalizadas" className="menu-button mt-1">Tazas Personalizadas</Link>
      <Link to="/donde-estamos" className="menu-button mt-1">¿Dónde Estamos?</Link>
      <Link to="/carrito" className="menu-button mt-1">Carrito de Compras</Link>
      <Link to="/login" className="menu-button mt-1">Login</Link>
      <Link to="/registro" className="menu-button mt-1">Registro</Link>
    </nav>
  );
};

export default Menu;
