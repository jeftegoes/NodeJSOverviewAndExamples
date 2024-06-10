const { OrderItem } = require("../data/dbContext");
const IOrderItemRepository = require("../interfaces/order-item-repository");

class OrderItemRepository extends IOrderItemRepository {
  constructor() {
    super();
  }

  async getAll() {
    let orderItems = OrderItem.findAll({
      raw: true,
    });

    return orderItems;
  }

  async getById(id) {
    let orderItemsById = await OrderItem.findOne({
      raw: true,
      where: { orderItemId: id },
    });
    return orderItemsById;
  }

  async create(orderItem) {
    await OrderItem.create(orderItem);
  }

  async update(id, orderItem) {
    await OrderItem.update(orderItem, {
      where: { orderId: id },
    });

    return await this.getById(id);
  }
}

module.exports = OrderItemRepository;
