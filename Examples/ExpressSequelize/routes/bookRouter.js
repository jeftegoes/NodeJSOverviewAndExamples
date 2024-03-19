const bookController = require("../controllers/bookController");

const router = require("express").Router();

router.post("/", bookController.add);
router.get("/", bookController.getAll);
router.get("/:bookId", bookController.get);
router.put("/:bookId", bookController.update);
router.delete("/:bookId", bookController.remove);

module.exports = router;
