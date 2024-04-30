const express = require("express");
const book = require("./book");

const app = express();

const port = 3000;

app.use("/api", book);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}.`);
});
