const dbConfig = require("../config/dbConfig");

const { Sequelize, DataTypes } = require("sequelize");
const orderItems = require("./order-item");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection sucessful!");
  })
  .catch((err) => {
    console.log(err);
  });

const Product = require("./product")(sequelize, DataTypes);
const User = require("./user")(sequelize, DataTypes);
const Order = require("./order")(sequelize, DataTypes);
const OrderItem = require("./order-item")(sequelize, DataTypes);

// sequelize.sync({ force: true }) # Drops it first if it already exists.
// sequelize.sync({ alter: true }) # Checks the current state of database (columns it has, their data types, etc).
sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("Table and model synced successfully!");
  })
  .catch((err) => {
    console.log(err);
  });

Order.hasMany(OrderItem, {
  foreignKey: "orderId",
});

Product.hasMany(OrderItem, {
  foreignKey: "productId",
});

module.exports = { Product, User, Order, OrderItem };
