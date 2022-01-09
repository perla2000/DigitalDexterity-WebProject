const express = require("express");
const bodyParser = require("body-parser");
const Test_Answers = require("../models/Test_Answers");
const Test_Answers_router = express.Router();
Test_Answers_router.use(bodyParser.json());

Test_Answers_router.route("/")
  .get((req, res) => {
    Test_Answers.find(req.query)
      .populate("test_user")
      .populate("Answer_Question")
      .then((test) => {
        res.json(test);
      })
      .catch((err) => res.status(400).json("Error" + err));
  })

  .post((req, res, next) => {
    Test_Answers.create(req.body)
      .then(
        (test) => {
          console.log("Test Answers Submitted", test);
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(test);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  })

  .put((req, res, next) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /test");
  })
  .delete((req, res, next) => {
    Test_Answers.remove({})
      .then(
        (resp) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(resp);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  });

module.exports = Test_Answers_router;
