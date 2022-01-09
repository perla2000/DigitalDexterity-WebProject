const express = require("express");
const bodyParser = require("body-parser");
const Answer_Question = require("../models/Answer_Question");
const Answer_Question_router = express.Router();
Answer_Question_router.use(bodyParser.json());

Answer_Question_router.route("/")
  .get((req, res) => {
    Answer_Question.find(req.query)
      .populate("question", "description")
      .populate("answer", "description")
      .then((AQ) => res.json(AQ))
      .catch((err) => res.status(400).json("Error" + err));
  })

  .post((req, res, next) => {
    Answer_Question.create(req.body)
      .then(
        (AQ) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(AQ);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  })

  .put((req, res, next) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /Answer_Question");
  })
  .delete((req, res, next) => {
    Answer_Question.remove({})
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
Answer_Question_router.route("/:AnsQuesId")
  .get((req, res, next) => {
    Answer_Question.findById(req.params.AnsQuesId)
      .then(
        (AQ) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(AQ);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  })
  .post((req, res) => {
    res.statusCode = 403;
    res.end("POST operation not supported" + req.params._id);
  })

  .put((req, res, next) => {
    Answer_Question.findByIdAndUpdate(
      req.params.AnsQuesId,
      {
        $set: req.body,
      },
      { new: true }
    )
      .then(
        (Answer_Question) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(Answer_Question);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  })
  .delete((req, res, next) => {
    Answer_Question.findByIdAndRemove(req.params.AnsQuesId)
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

module.exports = Answer_Question_router;
