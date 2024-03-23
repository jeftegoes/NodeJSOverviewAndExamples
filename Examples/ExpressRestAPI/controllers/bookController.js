const fs = require("fs");
const path = require("path");

const { validationResult } = require("express-validator");

const Book = require("../models/bookModel");

module.exports.getBooks = (req, res, next) => {
  const currentPage = req.query.page || 1;
  const perPage = 2;
  let totalItems;
  Book.find()
    .countDocuments()
    .then((count) => {
      totalItems = count;
      return Book.find()
        .skip((currentPage - 1) * perPage)
        .limit(perPage)
        .then((books) => {
          res.status(200).json({
            message: "Fectched posts successfully",
            books: books,
            totalItems: totalItems,
          });
        });
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
  const errors = validationResult(req);
  
  if (!errors.isEmpty()) {
    const error = new Error("Validation failed, entered data is incorrect.");
    error.statusCode = 422;
    throw error;
  }

  if (!req.file) {
    const error = new Error("No image provided.");
    error.statusCode = 422;
    throw error;
  }

  const book = new Book({
    title: req.body.title,
    content: req.body.content,
    imageUrl: req.file.path.replace("\\", "/"),
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

exports.updateBook = (req, res, next) => {
  const bookId = req.params.bookId;

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const error = new Error("Validation failed, entered data is incorrect.");
    error.statusCode = 422;
    throw error;
  }

  const title = req.body.title;
  const content = req.body.content;
  let imageUrl = req.body.image;
  if (req.file) {
    imageUrl = req.file.path;
  }

  if (!imageUrl) {
    const error = new Error("No file picked.");
    error.statusCode = 422;
    throw error;
  }

  Book.findById(bookId)
    .then((book) => {
      if (!book) {
        const error = new Error("Could not find book.");
        error.statusCode = 404;
        throw error;
      }
      if (imageUrl !== book.imageUrl) {
        clearImage(book.imageUrl);
      }
      book.title = title;
      book.imageUrl = imageUrl;
      book.content = content;
      return book.save();
    })
    .then((result) => {
      res.status(200).json({ message: "Book updated!", book: result });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.deleteBook = (req, res, next) => {
  const bookId = req.params.bookId;

  Book.findById(bookId)
    .then((book) => {
      if (!book) {
        const error = new Error("Could not find book.");
        error.statusCode = 404;
        throw error;
      }

      clearImage(book.imageUrl);

      return Book.findByIdAndDelete(bookId);
    })
    .then((result) => {
      res.status(200).json({ message: "Book deleted!", book: result });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

const clearImage = (filePath) => {
  filePath = path.join(__dirname, "..", filePath);
  fs.unlink(filePath, (err) => console.log(err));
};
