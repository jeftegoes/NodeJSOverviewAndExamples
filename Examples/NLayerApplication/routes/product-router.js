const express = require("express");
const productController = require("../controllers/product-controller");
const router = express.Router();
const isAuth = require("../middleware/is-auth");

router.get("/", productController.getAll);
router.get("/:id", productController.getById);
router.post("/", productController.create);
router.put("/:id", productController.update);

module.exports = router;
