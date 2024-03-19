const { Loan, Book, Customer } = require("../models/dbContext");

const reserveBook = async (req, res) => {
  let request = {
    customerId: req.body.customerId,
    bookId: req.body.bookId,
    dateDue: req.body.dateDue,
    dateReturned: req.body.dateReturned,
  };

  const loan = await Loan.create(request);
  res.status(201).send(loan);
};

const getAll = async (req, res) => {
  let loans = await Loan.findAll({ include: [{ model: Book }, { model: Customer }] });
  res.status(201).send(loans);
};

module.exports = { reserveBook, getAll };
