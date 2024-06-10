class OrderApplication {
  constructor(orderRepository, orderItemRepository) {
    this.orderRepository = orderRepository;
    this.orderItemRepository = orderItemRepository;
  }

  async getAll() {
    return await this.orderRepository.getAll();
  }

  async getById(id) {
    return await this.orderRepository.getById(id);
  }

  async create(order) {
    let orderCreated = await this.orderRepository.create(order);
    for (let i = 0; i < order.items.length; i++) {
      await this.orderItemRepository.create({
        orderId: orderCreated.orderId,
        productId: order.items[i].productId,
        quantity: order.items[i].quantity,
        price: order.items[i].price,
        total: order.items[i].total,
      });
    }
  }

  async update(id, order) {
    await this.orderRepository.update(id, order);
  }
}

module.exports = OrderApplication;
