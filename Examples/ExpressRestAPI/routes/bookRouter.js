const express = require("express");
const { body } = require("express-validator");
const isAuth = require("../middleware/is-auth");

const bookController = require("../controllers/bookController");

const router = express.Router();

router.get("/", isAuth, bookController.getBooks);

router.post(
  "/",
  isAuth,
  [
    body("title").trim().isLength({ min: 5 }),
    body("content").trim().isLength({ min: 5 }),
  ],
  bookController.createBook
);

router.get("/:bookId", isAuth, bookController.getBook);

router.put(
  "/:bookId",
  isAuth,
  [
    body("title").trim().isLength({ min: 5 }),
    body("content").trim().isLength({ min: 5 }),
  ],
  bookController.updateBook
);

router.delete("/:bookId", isAuth, bookController.deleteBook);

module.exports = router;
