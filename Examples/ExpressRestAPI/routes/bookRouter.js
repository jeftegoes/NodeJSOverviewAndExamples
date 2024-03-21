const express = require("express");
const { body } = require("express-validator");

const bookController = require("../controllers/bookController");

const router = express.Router();

router.get("/books", bookController.getBooks);

router.post(
  "/book",
  [
    body("title").trim().isLength({ min: 5 }),
    body("content").trim().isLength({ min: 5 }),
  ],
  bookController.createBook
);

router.get("/book/:bookId", bookController.getBook);

module.exports.router = router;
