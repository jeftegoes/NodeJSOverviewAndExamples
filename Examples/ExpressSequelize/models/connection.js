const dbConfig = require("../config/dbConfig");

const { Sequelize, DataTypes } = require("sequelize");

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

const db = {};

db.sequelize = Sequelize;
db.sequelize = sequelize;

db.products = require("./bookModel")(sequelize, DataTypes);

db.sequelize
  .sync({ force: true })
  .then(() => {
    console.log("Table and model synced successfully!");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = db;
