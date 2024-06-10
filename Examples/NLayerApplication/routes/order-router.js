const express = require("express");
const orderController = require("../controllers/order-controller");
const router = express.Router();
const isAuth = require("../middleware/is-auth");

router.get("/", orderController.getAll);
router.get("/:id", orderController.getById);
router.post("/", orderController.create);
router.put("/:id", orderController.update);

module.exports = router;
