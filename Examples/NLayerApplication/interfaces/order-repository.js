class IOrderRepository {
  constructor() {
    if (new.target === IOrderRepository) {
      throw new Error("Cannot instantiate interface IOrderRepository.");
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

module.exports = IOrderRepository;
