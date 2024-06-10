class OrderFacade {
  constructor(orderApplication) {
    this.orderApplication = orderApplication;
  }

  async getAll() {
    return await this.orderApplication.getAll();
  }

  async getById(code) {
    return await this.orderApplication.getById(code);
  }

  async create(order) {
    return await this.orderApplication.create(order);
  }

  async update(id, order) {
    await this.orderApplication.update(id, order);
  }
}

module.exports = OrderFacade;
