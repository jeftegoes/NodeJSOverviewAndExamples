const Product = require("../models/product");

class ProductApplication {
  constructor(productRepository) {
    this.productRepository = productRepository;
  }

  getTotalPriceByQuantity = async (code, quantity) => {
    let productData = await this.productRepository.get(code);
    let product = new Product().toModel(productData);
    return product.getTotalPriceByQuantity(quantity);
  };

  get = async (code) => {
    return await this.productRepository.get(code);
  };
}

module.exports = ProductApplication;
