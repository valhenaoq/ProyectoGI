const AuthService = require('../../infrastructure/services/AuthService');

class LoginUser {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    async execute(email, password) {
        // Buscamos al usuario por su email en la base de datos
        const user = await this.userRepository.findByEmail(email);
        if (!user) {
            throw new Error('Credenciales inválidas (usuario no encontrado)');
        }

        // Verificamos si el usuario está activo
        if (!user.activo) {
            throw new Error('El usuario se encuentra inactivo');
        }

        // Verificación de contraseña (para este proyecto educativo comparamos directo,
        // o validamos con el campo password_hash real de la base de datos)
        if (user.password_hash !== password) {
            throw new Error('Credenciales inválidas (contraseña incorrecta)');
        }

        // Si todo es correcto, generamos el token JWT
        const token = AuthService.generateToken(user);

        return {
            token,
            user: {
                id_usuario: user.id_usuario,
                nombre: user.nombre,
                email: user.email,
                rol: user.rol
            }
        };
    }
}

module.exports = LoginUser;