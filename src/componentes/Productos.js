import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useCart } from './CartContext';
import './Productos.css';

const Index = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart(); // Usar el hook para obtener cart y addToCart

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Hacemos la solicitud GET a la API para obtener los productos
        const response = await axios.get('http://localhost:3001/api/productos');
        setProducts(response.data);
      } catch (error) {
        console.error('Error al obtener los productos:', error);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.post('http://localhost:3001/api/productos', {
          filter: '',  // Aquí puedes añadir un filtro si lo necesitas
        });
        
        console.log('Productos recibidos:', response.data);  // Verificar los datos
        setProducts(response.data); // Guardamos los productos en el estado
      } catch (error) {
        console.error('Error al obtener los productos:', error);
      }
    };
    
    fetchProducts();
  }, []);  // Se ejecuta solo una vez cuando el componente se monta
  
  return (
    <main className="content">
      <h1>Vista Productos</h1>
      <div className="Productos">
        <h2>Nuestros Productos</h2>
        <div style={styles.grid}>
          {products.map((product) => (
            <div
              key={product.id}
              style={{
                ...styles.card,
                backgroundImage: `url(${product.image || '/default-image.jpg'})`, // Asegúrate de tener una imagen predeterminada
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div style={styles.overlay}>
                <h3>{product.nombre}</h3> {/* Usar 'nombre' de la DB */}
                <p>Precio: ${product.precio}</p> {/* Usar 'precio' de la DB */}
                <button onClick={() => addToCart(product)}>Añadir al carrito</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

//STYLES productos
const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(15rem, 1fr))',
    gap: '3rem',
    padding: '3rem',
  },
  card: {
    border: '1rem solid #ccc',
    borderRadius: '3rem',
    padding: '2rem',
    textAlign: 'center',
    color: '#fff',
    height: '15rem',
    width: '15rem',
    position: 'relative',
    overflow: 'hidden',
  },
  overlay: {
    fontSize: '12px',
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Mantener el fondo semitransparente
    position: 'absolute',
    bottom: 0,
    left: 0, // Asegura que el overlay inicie desde el lado izquierdo
    width: '100%', // Hace que el overlay cubra todo el ancho
    height: '40%', // Ajusta la altura (puedes modificar este valor)
    padding: '0.5rem',
    display: 'flex', // Para centrar el contenido
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    boxSizing: 'border-box', // Asegura que el padding no desborde el contenedor
  },
};

export default Index;
