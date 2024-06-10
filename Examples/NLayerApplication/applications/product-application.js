const Product = require("../models/product");

class ProductApplication {
  constructor(productRepository) {
    this.productRepository = productRepository;
  }

  async getAll() {
    return await this.productRepository.getAll();
  }

  async getById(id) {
    return await this.productRepository.getById(id);
  }

  async create(product) {
    return await this.productRepository.create(product);
  }

  async update(id, product) {
    await this.productRepository.update(id, product);
  }

  async getTotalPriceByQuantity(code, quantity) {
    let productData = await this.productRepository.get(code);
    let product = new Product().toModel(productData);
    return product.getTotalPriceByQuantity(quantity);
  }
}

module.exports = ProductApplication;
