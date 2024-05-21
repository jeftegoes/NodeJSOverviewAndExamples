const express = require("express");
const { body } = require("express-validator");

const User = require("../data/dbContext");
const authController = require("../controllers/auth-controller");

const router = express.Router();

router.put("/signup", authController.signup);

router.post("/login", authController.login);

module.exports = router;
