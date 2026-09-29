class SupplierEntity {
    constructor({ id_proveedor, nombre_empresa, contacto, telefono, email }) {
        this.id_proveedor = id_proveedor;
        this.nombre_empresa = nombre_empresa;
        this.contacto = contacto;
        this.telefono = telefono;
        this.email = email;
    }
}

module.exports = SupplierEntity;