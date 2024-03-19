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
const Customer = require("./customerModel")(sequelize, DataTypes);
const Loan = require("./loanModel")(sequelize, DataTypes);

// sequelize.sync({ force: true }) # Drops it first if it already exists.
// sequelize.sync({ alter: true }) # Checks the current state of database (columns it has, their data types, etc).
sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("Table and model synced successfully!");

    // const book = Book.create() <<< Build() and Save().
    // const book = Book.bulkCreate() <<< Build() and Save() an array.
    // const book = Book.create({
    //   title: "Clean Code",
    //   price: 49.88,
    //   author: "Uncle Bob",
    //   image: "",
    // });

    // console.log("Book default created!...!");
    // book.save();
  })
  .catch((err) => {
    console.log(err);
  });

Book.hasMany(Loan, {
  foreignKey: "bookId",
});

Customer.hasMany(Loan, {
  foreignKey: "customerId",
});

Loan.belongsTo(Book, {
  foreignKey: "bookId",
});

Loan.belongsTo(Customer, {
  foreignKey: "customerId",
});

module.exports = { Book, Customer, Loan };
