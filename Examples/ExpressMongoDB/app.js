const express = require("express");
const mongoose = require("mongoose");
const Book = require("./models/book-model");

const app = express();

const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/books", async (req, res) => {
  try {
    const books = await Book.find({});
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/books/:id", async (req, res) => {
  try {
    const { id } = req.params; // params.id
    const book = await Book.findById(id);
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/books", async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.status(201).send(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.put("/books/:id", async (req, res) => {
  try {
    const { id } = req.params; // params.id
    const book = await Book.findByIdAndUpdate(id, req.body);
    if (!book) {
      return res
        .status(404)
        .json({ message: `Can't find any product with ID ${id}.` });
    }
    const updatedBook = await Book.findById(id);
    res.status(200).json(updatedBook);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.delete("/books/:id", async (req, res) => {
  try {
    const { id } = req.params; // params.id
    const book = await Book.findByIdAndDelete(id);
    if (!book) {
      return res
        .status(404)
        .json({ message: `Can't find any product with ID ${id}.` });
    }
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}.`);
});

mongoose
  .connect(
    "mongodb://mongoadmin:Master123456@localhost:27017/book_store?authSource=admin"
  )

  .then(() => {
    console.log("Connected to MongoDB.");
  })
  .catch((error) => {
    console.log(error);
  });
