const express = require("express");

const productRouter = require("./routes/product-router");

const app = express();

const port = 3000;

app.use(express.json());

app.use("/api/product", productRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}.`);
});