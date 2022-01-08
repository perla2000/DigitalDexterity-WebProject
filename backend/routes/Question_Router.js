const express = require("express");
const bodyParser = require("body-parser");
const Questions = require("../models/Question");
const Question_router = express.Router();
Question_router.use(bodyParser.json());

Question_router.route("/")
  .get((req, res) => {
    Questions.find(req.query)
      .populate("Test", "description")
      .then((question) => {
        res.json(question);
      })
      .catch((err) => res.status(400).json("Error" + err));
  })

  .post((req, res, next) => {
    Questions.create(req.body)
      .then(
        (question) => {
          console.log("Questions sumitted", question);
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(question);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  })

  .put((req, res, next) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /Test");
  })
  .delete((req, res, next) => {
    Questions.remove({})
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

Question_router.route("/test/:TestId").get((req, res) => {
  Questions.find({ Test: req.params.TestId })
    .populate("Test", "description")
    .then((question) => {
      res.json(question);
    })
    .catch((err) => res.status(400).json("Error" + err));
});

module.exports = Question_router;
