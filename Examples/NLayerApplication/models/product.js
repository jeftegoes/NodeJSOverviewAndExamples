class Product {
  constructor(code, description, price) {
    this.code = code;
    this.description = description;
    this.price = price;
  }

  getTotalPriceByQuantity(quantity) {
    return this.price * quantity;
  }

  toString() {
    return `${this.code} - ${this.description} - ${this.price}`;
  }

  toModel(productData) {
    this.code = productData.productId;
    this.description = productData.description;
    this.price = productData.price;

    return this;
  }
}

module.exports = Product;
