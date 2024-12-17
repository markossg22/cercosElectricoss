<<<<<<< HEAD
import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './componentes/CartContext.js';
import Index from './componentes/Index.js';
import QuienesSomos from './componentes/QuienesSomos.js';
import Productos from './componentes/Productos';
import DondeEstamos from './componentes/DondeEstamos';
import Carrito from './componentes/Carrito.js';
import LoginForm from './componentes/LoginForm.js';
import RegisterForm from './componentes/RegisterForm.js';

const App = () => {
  return (
    <CartProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/quienes-somos" element={<QuienesSomos />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/donde-estamos" element={<DondeEstamos />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/Login" element={<LoginForm />} />
        <Route path="/Register" element={<RegisterForm />} />
      </Routes>
    </Router>
    </CartProvider>
  );
};
=======
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
>>>>>>> 75feaf0 (Configuración inicial del backend)

export default App;
