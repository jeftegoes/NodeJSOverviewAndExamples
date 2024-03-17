const db = require("../models");

const Book = db.book;

const addProduct = async (req, res) => {
  let request = {
    title: req.body.title,
    price: req.body.price,
    author: req.body.author,
    image: req.body.image,
  };

  const book = await Book.create(request);
  res.status(200).send(book);
};

module.exports = addProduct;
