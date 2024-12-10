import React from 'react';
import { useCart } from './CartContext';
import './Carrito.css';

const Cart = () => {
  const { cart, incrementQuantity, decrementQuantity, removeFromCart } = useCart();

  return (
    <div>
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <ul>
          {cart.map((product) => (
  <li key={product.id}>
    <img src={product.image} alt={product.name} style={{ width: '50px', height: '50px' }} />
    <h3>{product.name}</h3>
    <p>Precio: ${product.price}</p>
    <p>Cantidad: {product.quantity}</p>

    <button onClick={() => incrementQuantity(product.id)}>Añadir más</button>
    <button onClick={() => decrementQuantity(product.id)}>Eliminar uno</button>
    <button onClick={() => removeFromCart(product.id)}>Eliminar del carrito</button>
  </li>
))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
