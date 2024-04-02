class ProductApplication {
  constructor(productRepository) {
    this.productRepository = productRepository;
  }

  getTotalPriceByQuantity(code, quantity) {
    let product = this.productRepository.get(code);
    return product.getTotalPriceByQuantity(quantity);
  }

  get(code) {
    return this.productRepository.get(code);
  }
}

module.exports = ProductApplication;
