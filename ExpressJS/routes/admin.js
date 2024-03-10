const path = require("path");
const express = require("express");
const rootDir = require("../helpers/path");
const router = express.Router();

const products = [];

router.get("/add-product", (req, res, next) => {
  // res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
  // res.sendFile(path.join(rootDir, "views", "add-product.html"));
  res.render("add-product.pug", { pageTitle: "Add product" });
});

router.post("/add-product", (req, res, next) => {
  products.push({ name_of_product: req.body.title });
  res.redirect("/");
});

exports.routes = router;
exports.products = products;
