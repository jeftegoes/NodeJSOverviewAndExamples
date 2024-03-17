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

const Book = require("./bookModel")(sequelize, DataTypes);

// sequelize.sync({ force: true }) # Drops it first if it already exists.
// sequelize.sync({ alter: true }) # Checks the current state of database (columns it has, their data types, etc).
sequelize
  .sync({ force: true })
  .then(() => {
    console.log("Table and model synced successfully!");

    // const book = Book.create() <<< Build() and Save().
    // const book = Book.bulkCreate() <<< Build() and Save() an array.
    const book = Book.create({
      title: "test123",
      price: "123321",
      author: 33,
      image: "",
    });

    console.log("Book default created!...!");
    // book.save();
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = Book;
