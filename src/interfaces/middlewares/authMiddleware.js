const AuthService = require('../../infrastructure/services/AuthService');

const verifyTokenMiddleware = (req, res, next) => {
    const authHeader = req.headers['authorization'];

    if (!authHeader) {
        return res.status(401).json({ error: 'Acceso denegado. No se proporcionó un token de autenticación.' });
    }

    // El formato del header suele ser "Bearer TOKEN_AQUÍ"
    const token = authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ error: 'Token mal formado.' });
    }

    const decoded = AuthService.verifyToken(token);

    if (!decoded) {
        return res.status(403).json({ error: 'Token inválido o expirado.' });
    }

    // Adjuntamos los datos del usuario decodificados al objeto 'req' para usarlos en el controlador
    req.user = decoded;
    next(); // Permite que la petición continúe hacia su destino original
};

module.exports = verifyTokenMiddleware;