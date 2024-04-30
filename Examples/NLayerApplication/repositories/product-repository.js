const IProductRepository = require("../interfaces/product-repository-interface");

class ProductRepository extends IProductRepository {
  #products = [];

  constructor() {
    super();
  }

  async append(product) {
    this.#products.push(product);
  }

  async get(code) {
    return this.#products.find((product) => product.code === code);
  }

  async getAll() {
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
