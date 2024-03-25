const Book = require("./models/book");
const Author = require("./models/author");

const author = new Author("Uncle Bob");
const book = new Book("Clean Code", author);
console.log(`Title: ${book.title}`);
console.log(`Author: ${book.author.name}`);
