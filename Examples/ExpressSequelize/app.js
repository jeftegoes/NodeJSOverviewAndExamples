const Sequelize = require("sequelize");
const { DataTypes } = Sequelize;

const sequelize = new Sequelize("book_store", "root", "Master@123", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection sucessful!");
  })
  .catch((err) => {
    console.log(err);
  });

console.log("Another task...");

const User = sequelize.define(
  "user",
  {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.STRING },
    age: { type: DataTypes.INTEGER, defaultValue: 33 },
  },
  { freezeTableName: true, timestamps: false }
);

// User.sync({ force: true }) # Drops it first if it already exists.
// User.sync({ alter: true }) # Checks the current state of database (columns it has, their data types, etc).
User.sync({ alter: true })
  .then(() => {
    console.log("Table and model synced successfully!");
  })
  .catch((err) => {
    console.log(err);
  });
