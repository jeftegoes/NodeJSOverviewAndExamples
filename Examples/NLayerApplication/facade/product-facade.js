class ProductFacade {
  constructor(productApplication) {
    this.productApplication = productApplication;
  }

  async getAll() {
    return await this.productApplication.getAll();
  }

  async getById(code) {
    return await this.productApplication.getById(code);
  }

  async create(product) {
    return await this.productApplication.create(product);
  }

  async update(id, product) {
    await this.productApplication.update(id, product);
  }

  async getTotalPriceByQuantity(code, quantity) {
    return this.productApplication.getTotalPriceByQuantity(code, quantity);
  }

  async getTotalPrice(code, quantity) {
    if (this.productApplication.get(code)) {
      return this.productApplication.getTotalPriceByQuantity(code, quantity);
    }

    return "Product not found!";
  }
}

module.exports = ProductFacade;
