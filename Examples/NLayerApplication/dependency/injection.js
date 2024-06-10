const ProductRepository = require("../repositories/product-repository");
const ProductApplication = require("../applications/product-application");
const ProductFacade = require("../facade/product-facade");

const OrderRepository = require("../repositories/order-repository");
const OrderItemRepository = require("../repositories/order-item-repository");
const OrderApplication = require("../applications/order-application");
const OrderFacade = require("../facade/order-facade");

const productRepository = new ProductRepository();
const productApplication = new ProductApplication(productRepository);
const productFacade = new ProductFacade(productApplication);

const orderRepository = new OrderRepository();
const orderItemRepository = new OrderItemRepository();
const orderApplication = new OrderApplication(orderRepository, orderItemRepository);
const orderFacade = new OrderFacade(orderApplication);

module.exports = { productFacade, orderFacade };
