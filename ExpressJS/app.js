const http = require("http");

const express = require("express");

const app = express();

app.use("/add-product", (req, res, next) => {
  res.send("<h1>The 'Add Product' Page</h1>");
});

app.use("/", (req, res, next) => {
  res.send("<h1>Hello from express!</h1>");
});

const server = http.createServer(app);

server.listen(3000);
