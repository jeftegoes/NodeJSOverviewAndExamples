const Product = require("../models/product");

class ProductApplication {
  constructor(productRepository) {
    this.productRepository = productRepository;
  }

  async getTotalPriceByQuantity(code, quantity) {
    let productData = await this.productRepository.get(code);
    let product = new Product().toModel(productData);
    return product.getTotalPriceByQuantity(quantity);
  }

  async get(code) {
    return await this.productRepository.get(code);
  }

  async getAll() {
    return await this.productRepository.getAll();
  }
}

module.exports = ProductApplication;
