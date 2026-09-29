class GetAllProducts {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }

    async execute() {
        // Obtenemos todos los productos a través del repositorio
        const products = await this.productRepository.findAll();
        return products;
    }
}

module.exports = GetAllProducts;