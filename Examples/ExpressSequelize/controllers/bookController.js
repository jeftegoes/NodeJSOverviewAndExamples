const { Book } = require("../models/dbContext");

const add = async (req, res) => {
  let request = {
    title: req.body.title,
    price: req.body.price,
    author: req.body.author,
    image: req.body.image,
  };

  const book = await Book.create(request);
  res.status(201).send(book);
};

const getAll = async (req, res) => {
  let books = await Book.findAll({});
  res.status(200).send(books);
};

const get = async (req, res) => {
  let bookId = req.params.bookId;
  let book = await Book.findOne({ where: { bookId: bookId } });
  res.status(200).send(book);
};

const update = async (req, res) => {
  let bookId = req.params.bookId;
  let book = await Book.update(req.body, { where: { bookId: bookId } });
  res.status(200).send(book);
};

const remove = async (req, res) => {
  let bookId = req.params.bookId;
  await Book.destroy({ where: { bookId: bookId } });
  res.status(200).json({ message: "The book has been removed!" });
};

module.exports = { add, getAll, get, update, remove };
