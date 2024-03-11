const path = require("path");
const express = require("express");
const rootDir = require("../helpers/path");

const adminData = require("./admin");

const router = express.Router();

router.get("/", (req, res, next) => {
  const products = adminData.products;
  // console.log(adminData.products);
  // res.sendFile(path.join(rootDir, "views", "shop.html"));
  res.render("shop.pug", {
    pageTitle: "Shop",
    prods: products,
    path: "/",
  });
});

module.exports = router;
