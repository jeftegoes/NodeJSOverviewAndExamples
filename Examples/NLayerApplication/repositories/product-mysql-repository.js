const IProductRepository = require("../interfaces/product-repository-interface");
const { Product } = require("../data/dbContext");

class ProductMySqlRepository extends IProductRepository {
  #products = [];

  constructor() {
    super();
  }

  append(product) {
    this.#products.push(product);
  }

  get = async (code) => {
    let product = await Product.findOne({
      raw: true,
      where: { productId: code },
    });
    return product;
  };

  getAll() {
    let products = Product.findAll({
      raw: true,
    });

    return products;
  }
}

module.exports = ProductMySqlRepository;
