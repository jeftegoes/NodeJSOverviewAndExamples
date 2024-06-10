class ProductFactory {
  constructor(products) {
    this.products = products;
  }

  productsWithStock() {}

  // A method to demonstrate some operation with the Product
  productsWithoutStock() {
    const product = this.createProduct();
    console.log(
      `Creator: The same creator's code has just worked with ${product.operation()}`
    );
  }
}

module.exports = ProductFactory;
