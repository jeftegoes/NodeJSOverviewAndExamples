const express = require("express");
const { body } = require("express-validator");

const bookController = require("../controllers/bookController");

const router = express.Router();

router.get("/", bookController.getBooks);

router.post(
  "/",
  [
    body("title").trim().isLength({ min: 5 }),
    body("content").trim().isLength({ min: 5 }),
  ],
  bookController.createBook
);

router.get("/:bookId", bookController.getBook);

router.put("/:bookId", bookController.updateBook);

router.delete("/:bookId", bookController.deleteBook);

module.exports.router = router;
