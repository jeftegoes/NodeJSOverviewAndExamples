const express = require("express");
const { body } = require("express-validator");

const feedController = require("../controllers/feed");

const router = express.Router();

router.get("/books", feedController.getBooks);

router.post(
  "/book",
  [
    body("title").trim().isLength({ min: 5 }),
    body("content").trim().isLength({ min: 5 }),
  ],
  feedController.createBook
);

router.get("/book/:bookId", feedController.getBook);

module.exports.router = router;
