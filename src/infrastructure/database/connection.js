const mysql = require('mysql2/promise');
require('dotenv').config();

// Creamos un pool de conexiones utilizando las variables del archivo .env
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Función para probar la conexión
const testConnection = async () => {
    try {
        const connection = await pool.getConnection();
        console.log('¡Conexión exitosa a la base de datos MySQL: gestion_inventario!');
        connection.release(); // Liberamos la conexión de vuelta al pool
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error.message);
    }
};

// Ejecutamos la prueba de conexión al iniciar
testConnection();

module.exports = pool;