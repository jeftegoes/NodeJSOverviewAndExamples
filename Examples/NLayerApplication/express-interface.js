const express = require("express");

const productRouter = require("./routes/product-router");
const authRouter = require("./routes/auth-router");

const app = express();

const port = 3000;

app.use(express.json());

app.use("/api/product", productRouter);
app.use("/api/auth", authRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}.`);
});