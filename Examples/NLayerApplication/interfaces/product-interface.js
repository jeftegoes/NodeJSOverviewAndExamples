class IProductRepository {
  constructor() {
    if (new.target === IProductRepository) {
      throw new Error("Cannot instantiate interface IProductRepository.");
    }
  }

  async getAll() {
    throw new Error("Method 'getAll()' must be implemented.");
  }

  async getById() {
    throw new Error("Method 'getById()' must be implemented.");
  }

  async create() {
    throw new Error("Method 'create()' must be implemented.");
  }

  async update() {
    throw new Error("Method 'update()' must be implemented.");
  }
}

module.exports = IProductRepository;
