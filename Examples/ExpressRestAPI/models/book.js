const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema(
  {
    title: {
      type: String,
      require: true,
    },
    imageUrl: {
      type: String,
      require: true,
    },
    content: {
      type: String,
      require: true,
    },
    creator: {
      type: Object,
      require: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Book", bookSchema);
