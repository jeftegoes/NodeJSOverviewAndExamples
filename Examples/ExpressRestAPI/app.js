const path = require("path");
const express = require("express");
const bookRouter = require("./routes/bookRouter");
const authRouter = require("./routes/authRouter");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");

const app = express();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "images");
  },
  filename: function (req, file, cb) {
    let ext = path.extname(file.originalname);
    cb(null, uuidv4() + ext);
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const port = 3000;

app.use(bodyParser.json()); // application/json
// app.use(bodyParser.urlencoded()); // x-www-form-urlencoded <form>
app.use(multer({ storage: storage, fileFilter: fileFilter }).single("file"));
app.use("/images", express.static(path.join(__dirname, "images")));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});

// GET /book_store/...
app.use("/api/books", bookRouter);
app.use("/api/auth", authRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}.`);
});

app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message: message, data: data });
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
