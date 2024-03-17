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
User.sync({ force: true })
  .then(() => {
    console.log("Table and model synced successfully!");

    // const user = User.create() <<< Build() and Save().
    // const user = User.bulkCreate() <<< Build() and Save() an array.
    const user = User.build({
      username: "test123",
      password: "123321",
      age: 33,
    });

    console.log(user);

    console.log("Save user...!");
    user.save();
  })
  .then(() => {
    console.log("User added to database!");
  })
  .catch((err) => {
    console.log(err);
  });

console.log("Finish");
