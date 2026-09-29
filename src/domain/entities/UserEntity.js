class UserEntity {
    constructor({ id_usuario, nombre, email, password_hash, rol, activo, creado_en }) {
        this.id_usuario = id_usuario;
        this.nombre = nombre;
        this.email = email;
        this.password_hash = password_hash;
        this.rol = rol;
        this.activo = activo;
        this.creado_en = creado_en;
    }
}

module.exports = UserEntity;