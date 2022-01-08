const express = require("express");
const bodyParser = require("body-parser");
const Answer = require("../models/Answer");
const Answer_router = express.Router();
Answer_router.use(bodyParser.json());

Answer_router.route("/")
  .get((req, res) => {
    Answer.find(req.query)
      .populate("Question", "description")
      .populate("Answer", "description")
      .then((answer) => res.json(answer))
      .catch((err) => res.status(400).json("Error" + err));
  })

  .post((req, res, next) => {
    Answer.create(req.body)
      .then(
        (answer) => {
          console.log("Answer added ", answer);
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(answer);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  })

  .put((req, res, next) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /Answer");
  })
  .delete((req, res, next) => {
    Answer.remove({})
      .then(
        (response) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(response);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  });
Answer_router.route("/:AnswerId")
  .get((req, res, next) => {
    Answer.findById(req.params.AnswerId)
      .then(
        (answer) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(answer);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  })
  .post((req, res) => {
    res.statusCode = 403;
    res.end("POST operation not supported on /Answers/" + req.params._id);
  })

  .put((req, res, next) => {
    Answer.findByIdAndUpdate(
      req.params.AnswerId,
      {
        $set: req.body,
      },
      { new: true }
    )
      .then(
        (Answer) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(Answer);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  })
  .delete((req, res, next) => {
    Answer.findByIdAndRemove(req.params.AnswerId)
      .then(
        (response) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(response);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  });

module.exports = Answer_router;
