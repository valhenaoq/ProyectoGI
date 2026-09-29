const pool = require('../database/connection');
const UserRepository = require('../../domain/repositories/UserRepository');
const UserEntity = require('../../domain/entities/UserEntity');

class MySQLUserRepository extends UserRepository {
    async findByEmail(email) {
        // Consulta parametrizada utilizando '?' para evitar inyección SQL
        const [rows] = await pool.query('SELECT * FROM usuarios WHERE email = ?', [email]);
        if (rows.length === 0) return null;
        
        return new UserEntity(rows[0]);
    }

    async findById(id) {
        const [rows] = await pool.query('SELECT * FROM usuarios WHERE id_usuario = ?', [id]);
        if (rows.length === 0) return null;
        
        return new UserEntity(rows[0]);
    }
}

module.exports = MySQLUserRepository;