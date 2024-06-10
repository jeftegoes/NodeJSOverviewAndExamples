const express = require("express");

const authRouter = require("./routes/auth-router");
const productRouter = require("./routes/product-router");
const orderRouter = require("./routes/order-router");

const app = express();

const port = 3000;

app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/product", productRouter);
app.use("/api/order", orderRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}.`);
});
