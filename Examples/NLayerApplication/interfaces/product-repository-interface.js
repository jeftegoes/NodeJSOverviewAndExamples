class IProductRepository {
  constructor() {
    if (new.target === IProductRepository) {
      throw new Error("Cannot instantiate interface IProductRepository.");
    }
  }

  append() {
    throw new Error("Method 'append()' must be implemented.");
  }

  get() {
    throw new Error("Method 'get()' must be implemented.");
  }

  getAll() {
    throw new Error("Method 'getAll()' must be implemented.");
  }
}

module.exports = IProductRepository;
