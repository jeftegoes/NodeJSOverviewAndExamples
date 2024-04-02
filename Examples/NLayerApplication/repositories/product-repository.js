class ProductRepository {
  #products = [];

  constructor() {}

  append(product) {
    this.#products.push(product);
  }

  get(code) {
    return this.#products.find((product) => product.code === code);
  }

  getAll() {
    let products = "Code     Description      Price\n";

    this.#products.forEach((product) => {
      products +=
        product.code +
        "   -    " +
        product.description +
        "   -    " +
        product.price +
        "\n";
    });

    return products;
  }
}

module.exports = ProductRepository;
