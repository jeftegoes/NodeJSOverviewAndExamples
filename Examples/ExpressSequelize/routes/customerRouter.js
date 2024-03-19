const customerController = require("../controllers/customerController");

const router = require("express").Router();

router.post("/", customerController.add);
router.get("/", customerController.getAll);
router.get("/:customerId", customerController.get);
router.put("/:customerId", customerController.update);
router.delete("/:customerId", customerController.remove);

module.exports = router;
