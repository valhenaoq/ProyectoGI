class MovementEntity {
    constructor({ id_movimiento, id_producto, id_usuario, tipo_movimiento, cantidad, fecha_movimiento, notas }) {
        this.id_movimiento = id_movimiento;
        this.id_producto = id_producto;
        this.id_usuario = id_usuario;
        this.tipo_movimiento = tipo_movimiento; // 'ENTRADA', 'SALIDA', 'AJUSTE'
        this.cantidad = cantidad;
        this.fecha_movimiento = fecha_movimiento;
        this.notas = notas;
    }
}

module.exports = MovementEntity;