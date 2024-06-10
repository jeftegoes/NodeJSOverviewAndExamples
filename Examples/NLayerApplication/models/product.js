class Product {
  constructor(code, description, price) {
    this.code = code;
    this.description = description;
    this.price = price;
    this.stock = stock;
  }

  getTotalPriceByQuantity(quantity) {
    return this.price * quantity;
  }

  toString() {
    return `${this.code} - ${this.description} - ${this.price}`;
  }

  checkIfExistStock(product) {
    if (product.stock > 0)
      return true;

    return false;
  }
}

module.exports = Product;
