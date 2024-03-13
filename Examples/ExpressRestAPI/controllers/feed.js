const { validationResult } = require("express-validator");

const Book = require("../models/book");

module.exports.getBooks = (req, res, next) => {
  res.status(200).json({
    posts: [
      {
        _id: "1",
        title: "first post",
        content: "asdasd",
        imageUrl: "images/clean-architecture-book.jpg",
        creator: {
          name: "Uncle Bob",
        },
        date: new Date(),
      },
    ],
  });
};

module.exports.createBook = (req, res, next) => {
  const erros = validationResult(req);
  if (!erros.isEmpty()) {
    return res.status(422).json({
      message: "Validation failed, entered data is incorrect.",
      erros: erros.array(),
    });
  }

  const title = req.body.title;
  const content = req.body.content;

  const book = new Book({
    title: title,
    content: content,
    creator: { name: "Uncle Bob" },
  });

  book
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: "Book created successfully!",
        book: result,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};
