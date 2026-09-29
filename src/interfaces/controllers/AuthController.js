const MySQLUserRepository = require('../../infrastructure/repositories/MySQLUserRepository');
const LoginUser = require('../../application/use-cases/LoginUser');

class AuthController {
    static async login(req, res) {
        try {
            const { email, password } = req.body;

            // Instanciamos el repositorio y el caso de uso
            const userRepository = new MySQLUserRepository();
            const loginUser = new LoginUser(userRepository);

            // Ejecutamos el caso de uso
            const result = await loginUser.execute(email, password);

            return res.status(200).json({
                message: 'Inicio de sesión exitoso',
                data: result
            });
        } catch (error) {
            return res.status(401).json({
                error: error.message
            });
        }
    }
}

module.exports = AuthController;