const { validationResult } = require("express-validator");
const { User } = require("../data/dbContext");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.signup = (req, res, next) => {
  // if (!errors.isEmpty()) {
  //   const error = new Error("Validation failed.");

  //   error.statusCode = 422;
  //   error.data = errors.array();
  //   res.status(201).json({ error: error });
  // }

  const email = req.body.email;
  const name = req.body.name;
  const password = req.body.password;
  bcrypt
    .hash(password, 12)
    .then((hashedPw) => {
      const user = User.create({
        email: email,
        name: name,
        password: hashedPw,
      });
      return user;
    })
    .then((result) => {
      res.status(201).json({ message: "User created!" });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.login = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  let loadedUser;
  User.findOne({ where: { email: email } })
    .then((user) => {
      if (!user) {
        res
          .status(401)
          .json({ error: "A user with this email could not be found." });
      }

      loadedUser = user;

      return bcrypt.compare(password, user.password);
    })
    .then((isEqual) => {
      if (!isEqual) {
        res.status(401).json({ error: "Wrong password!" });
      }

      const token = jwt.sign(
        {
          email: loadedUser.email,
          // userId: loadedUser._id.toString(),
        },
        "expressrestapisecret",
        { expiresIn: "1h" }
      );

      res.status(200).json({ token: token });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }

      next(err);
    });
};
