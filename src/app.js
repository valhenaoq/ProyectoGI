const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

// Importamos las rutas
const authRoutes = require('./interfaces/routes/authRoutes');
const productRoutes = require('./interfaces/routes/productRoutes');

const app = express();

// Middlewares globales
app.use(cors()); // Permite peticiones desde otros dominios o clientes web
app.use(morgan('dev')); // Muestra registro de peticiones HTTP en la terminal
app.use(express.json()); // Permite interpretar cuerpos de solicitudes en formato JSON

// Definición de prefijos para las rutas de la API
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);

// Ruta raíz de prueba
app.get('/', (req, res) => {
    res.json({ message: 'Bienvenido a la API de bdGestionInventario' });
});

module.exports = app;