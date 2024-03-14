const path = require("path");
const express = require("express");
const feedRoutes = require("./routes/feed");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

const port = 3000;

app.use(express.json()); // application/json
app.use("/images", express.static(path.join(__dirname, "images")));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});

// GET /book_store/...
app.use("/book_store", feedRoutes.router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}.`);
});

app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  res.status(status).json({ message: message });
});

mongoose
  .connect(
    "mongodb://mongoadmin:Master123456@localhost:27017/books?authSource=admin"
  )
  .then(() => {
    console.log("Connected to MongoDB.");
  })
  .catch((error) => {
    console.log(error);
  });
