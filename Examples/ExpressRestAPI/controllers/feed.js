const { validationResult } = require("express-validator");

module.exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [
      {
        _id: "1",
        title: "first post",
        content: "asdasd",
        imageUrl: "images/clean-architecture-book.jpg",
        creator: {
          name: "Uncle Bob",
        },
        date: new Date(),
      },
    ],
  });
};

module.exports.createPost = (req, res, next) => {
  const erros = validationResult(req);
  if (!erros.isEmpty()) {
    return res
      .status(422)
      .json({
        message: "Validation failed, entered data is incorrect.",
        erros: erros.array(),
      });
  }

  const title = req.body.title;
  const content = req.body.content;

  res.status(201).json({
    message: "Post created successfully!",
    post: {
      _id: new Date().toISOString(),
      title: title,
      content: content,
      creator: { name: "Uncle Bob" },
      createdAt: new Date(),
    },
  });
};
