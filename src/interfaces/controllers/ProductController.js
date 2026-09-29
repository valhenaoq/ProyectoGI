const MySQLProductRepository = require('../../infrastructure/repositories/MySQLProductRepository');
const GetAllProducts = require('../../application/use-cases/GetAllProducts');

class ProductController {
    static async getProducts(req, res) {
        try {
            // Instanciamos el repositorio y el caso de uso
            const productRepository = new MySQLProductRepository();
            const getAllProducts = new GetAllProducts(productRepository);

            // Ejecutamos el caso de uso
            const products = await getAllProducts.execute();

            return res.status(200).json({
                message: 'Productos obtenidos con éxito',
                data: products
            });
        } catch (error) {
            return res.status(500).json({
                error: error.message
            });
        }
    }
}

module.exports = ProductController;