const jwt = require('jsonwebtoken');
require('dotenv').config();

class AuthService {
    // Generar un token JWT para un usuario autenticado
    static generateToken(user) {
        const payload = {
            id_usuario: user.id_usuario,
            email: user.email,
            rol: user.rol
        };

        // El token expira en 8 horas
        return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '8h' });
    }

    // Verificar un token JWT
    static verifyToken(token) {
        try {
            return jwt.verify(token, process.env.JWT_SECRET);
        } catch (error) {
            return null;
        }
    }
}

module.exports = AuthService;