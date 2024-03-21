const { validationResult } = require("express-validator");

const Book = require("../models/bookModel");

module.exports.getBooks = (req, res, next) => {
  Book.find()
    .then((books) => {
      res.status(200).json({ message: "Books fetched.", books: books });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

module.exports.getBook = (req, res, next) => {
  const bookId = req.params.bookId;
  Book.findById(bookId)
    .then((book) => {
      if (!book) {
        const error = new Error("Couldn't find book.");
        error.statusCode = 404;
        throw error;
      }

      res.status(200).json({ message: "Book fetched.", book: book });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

module.exports.createBook = (req, res, next) => {
  const erros = validationResult(req);
  if (!erros.isEmpty()) {
    const error = new Error("Validation failed, entered data is incorrect.");
    error.statusCode = 422;
    throw error;
  }

  if (!req.file) {
    const error = new Error("No image provided.");
    error.statusCode = 422;
    throw error;
  }

  const imageUrl = req.file.path.replace("\\", "/");
  const title = req.body.title;
  const content = req.body.content;

  const book = new Book({
    title: title,
    content: content,
    imageUrl: imageUrl,
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
    .catch((err) => {
      if (err.statusCode) {
        err.statusCode = 500;
      }

      next(err);
    });
};
