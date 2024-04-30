class UserInterface {
  constructor(productApplication) {
    this.productApplication = productApplication;
  }

  async getTotalPrice(code, quantity) {
    if (this.productApplication.get(code)) {
      return this.productApplication.getTotalPriceByQuantity(code, quantity);
    }

    return "Product not found!";
  }

  async getTotalPriceByQuantity(code, quantity) {
    return this.productApplication.getTotalPriceByQuantity(code, quantity);
  }

  async getProducts() {
    return await this.productApplication.getAll();
  }
}

module.exports = UserInterface;
