class UserInterface {
  constructor(productApplication) {
    this.productApplication = productApplication;
  }

  getTotalPrice(code, quantity) {
    if (this.productApplication.get(code)) {
      return this.productApplication.getTotalPriceByQuantity(code, quantity);
    }

    return "Product not found!";
  }

  getTotalPriceByQuantity(code, quantity) {
    return this.productApplication.getTotalPriceByQuantity(code, quantity);
  }
}

module.exports = UserInterface;
