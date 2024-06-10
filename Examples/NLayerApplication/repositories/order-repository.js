const { Order } = require("../data/dbContext");
const IOrderRepository = require("../interfaces/order-repository");

class OrderRepository extends IOrderRepository {
  constructor() {
    super();
  }

  async getAll() {
    let orders = Order.findAll({
      raw: true,
    });

    return orders;
  }

  async getById(id) {
    let order = await Order.findOne({
      raw: true,
      where: { orderId: id },
    });
    return order;
  }

  async create(order) {
    return await Order.create(order);
  }

  async update(id, order) {
    await Order.update(order, {
      where: { orderId: id },
    });

    return await this.getById(id);
  }
}

module.exports = OrderRepository;
