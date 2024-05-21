const express = require("express");
const productController = require("../controllers/product-controller");
const router = express.Router();
const isAuth = require("../middleware/is-auth");

router.get("/", isAuth, productController.getAll);
router.get("/:code", isAuth, productController.getById);

module.exports = router;
