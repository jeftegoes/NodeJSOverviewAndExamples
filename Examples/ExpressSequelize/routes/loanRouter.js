const loanController = require("../controllers/loanController");

const router = require("express").Router();

router.post("/", loanController.reserveBook);
router.get("/", loanController.getAll);

module.exports = router;
