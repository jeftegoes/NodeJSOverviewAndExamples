const express = require("express");
const productController = require("../controllers/product-controller");
const router = express.Router();

router.get("/", productController.getAll);
router.get("/:code", productController.getById);

module.exports = router;
