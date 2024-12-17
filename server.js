const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
const PORT = 3001;

const DB = mysql.createConnection({
    host: 'localhost', 
    user: 'root', 
    password: 'admin', 
    database: 'mi_base_datos', 
});

DB.connect((err) => {
    if(err) {
        throw err
    }
    console.log("conexion exitosa!!");

})

app.get('/api/productos', (req, res) => {
    const SQL_QUERY = 'SELECT * FROM productos';
    DB.query(SQL_QUERY, (err, result) => {
        if (err) {
            throw err;
        }
        res.json(result);
    });
});

app.post('/api/productos', (req, res) => {
    const { filter } = req.body; // Por ejemplo, puedes pasar filtros a través del cuerpo de la solicitud
    let SQL_QUERY = 'SELECT * FROM productos';
    
    if (filter) {
        // Si recibimos un filtro, podemos agregarlo al SQL
        SQL_QUERY += ` WHERE name LIKE '%${filter}%'`;
    }

    DB.query(SQL_QUERY, (err, result) => {
        if (err) {
            throw err;
        }
        res.json(result); // Devuelve los productos filtrados en formato JSON
    });
});

app.use(cors({
    origin: 'http://localhost:3000', // Puerto de tu frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  }));

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
