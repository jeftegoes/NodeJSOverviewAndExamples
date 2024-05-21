const IProductRepository = require("../interfaces/product-repository-interface");
const { Product } = require("../data/dbContext");

class ProductMySqlRepository extends IProductRepository {
  #products = [];

  constructor() {
    super();
  }

  async append(product) {
    this.#products.push(product);
  }

  async get(code) {
    let product = await Product.findOne({
      raw: true,
      where: { productId: code },
    });
    return product;
  }

  async getAll() {
    let products = Product.findAll({
      raw: true,
    });

    return products;
  }
}

module.exports = ProductMySqlRepository;
