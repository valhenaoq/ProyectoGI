const app = require('./app');
require('dotenv').config();
require('./infrastructure/database/connection'); // Asegura la conexión a la base de datos

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});