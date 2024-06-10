const IProductRepository = require("../interfaces/product-interface");
const { Product } = require("../data/dbContext");

class ProductRepository extends IProductRepository {
  constructor() {
    super();
  }

  async getAll() {
    let products = Product.findAll({
      raw: true,
    });

    return products;
  }

  async getById(id) {
    let product = await Product.findOne({
      raw: true,
      where: { productId: id },
    });
    return product;
  }

  async create(product) {
    return await Product.create(product);
  }

  async update(id, product) {
    await Product.update(product, {
      where: { productId: id },
    });

    return await this.getById(id);
  }
}

module.exports = ProductRepository;
