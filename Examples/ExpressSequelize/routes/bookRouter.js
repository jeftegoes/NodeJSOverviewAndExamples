const bookController = require("../controllers/bookController");

const router = require("express").Router();

router.post("/addBook", bookController.addBook);
router.get("/getAllBooks", bookController.getAllBooks);
router.get("/getBook/:bookId", bookController.getBook);
router.put("/updateBook/:bookId", bookController.updateBook);
router.delete("/deleteBook/:bookId", bookController.deleteBook);

module.exports = router;
