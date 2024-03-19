const express = require("express");

const app = express();

const port = 3000;

app.use(express.json());

const bookRouter = require("./routes/bookRouter");
const customerRouter = require("./routes/customerRouter");
const loanRouter = require("./routes/loanRouter");

app.use("/api/books", bookRouter);
app.use("/api/customers", customerRouter);
app.use("/api/loans", loanRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}.`);
});
