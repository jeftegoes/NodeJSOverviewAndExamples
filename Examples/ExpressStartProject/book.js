const express = require("express");

const router = express.Router();

// define the home page route
router.get("/book", (req, res) => {
  res.json({ book: "Capitães da Areia" });
});

// define the about route
router.get("/author", (req, res) => {
  res.json({ author: "Jorge Amado" });
});

module.exports = router;
