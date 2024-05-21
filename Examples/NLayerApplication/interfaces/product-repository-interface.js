class IProductRepository {
  constructor() {
    if (new.target === IProductRepository) {
      throw new Error("Cannot instantiate interface IProductRepository.");
    }
  }

  async append() {
    throw new Error("Method 'append()' must be implemented.");
  }

  async get() {
    throw new Error("Method 'get()' must be implemented.");
  }

  async getAll() {
    throw new Error("Method 'getAll()' must be implemented.");
  }
}

module.exports = IProductRepository;
