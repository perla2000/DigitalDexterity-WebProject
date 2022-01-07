const express = require("express");
const bodyParser = require("body-parser");
const Test = require("../models/Test");
const Test_router = express.Router();
Test_router.use(bodyParser.json());

Test_router.route("/")
  .get((req, res) => {
    Test.find(req.query)
      //.populate("category")
      .then((test) => res.json(test))
      .catch((err) => res.status(400).json("Error" + err));
  })

  .post((req, res, next) => {
    Test.create(req.body)
      .then(
        (test) => {
          console.log("Test Created ", test);
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
    res.end("PUT operation not supported on /Test");
  })
  .delete((req, res, next) => {
    Test.remove({})
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
Test_router.route("/:TestId")
  .get((req, res, next) => {
    Test.findById(req.params.TestId)
      .then(
        (test) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(test);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  })
  .post((req, res) => {
    res.statusCode = 403;
    res.end("POST operation not supported on /comments/" + req.params._id);
  })

  .put((req, res, next) => {
    Test.findByIdAndUpdate(
      req.params.TestId,
      {
        $set: req.body,
      },
      { new: true }
    )
      .then(
        (Test) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(Test);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  })
  .delete((req, res, next) => {
    Test.findByIdAndRemove(req.params.TestId)
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

module.exports = Test_router;
