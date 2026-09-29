const pool = require('../database/connection');
const ProductRepository = require('../../domain/repositories/ProductRepository');
const ProductEntity = require('../../domain/entities/ProductEntity');

class MySQLProductRepository extends ProductRepository {
    async findAll() {
        const [rows] = await pool.query('SELECT * FROM productos');
        return rows.map(row => new ProductEntity(row));
    }

    async findById(id) {
        const [rows] = await pool.query('SELECT * FROM productos WHERE id_producto = ?', [id]);
        if (rows.length === 0) return null;

        return new ProductEntity(rows[0]);
    }

    async save(product) {
        const { codigo_barras, nombre, descripcion, precio_compra, precio_venta, stock_actual, stock_minimo, id_categoria, id_proveedor } = product;
        
        const [result] = await pool.query(
            `INSERT INTO productos (codigo_barras, nombre, descripcion, precio_compra, precio_venta, stock_actual, stock_minimo, id_categoria, id_proveedor) 
             VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [codigo_barras, nombre, descripcion, precio_compra, precio_venta, stock_actual, stock_minimo, id_categoria, id_proveedor]
        );

        return result.insertId;
    }
}

module.exports = MySQLProductRepository;