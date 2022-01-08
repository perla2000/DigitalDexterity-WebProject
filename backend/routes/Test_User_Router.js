const express = require("express");
const bodyParser = require("body-parser");
const Test_User = require("../models/Test_User");
const Test_User_router = express.Router();
Test_User_router.use(bodyParser.json());

Test_User_router.route("/")
  .get((req, res) => {
    Test_User.find(req.query)
      .populate("Test", "description")
      .populate("User", "username")
      .then((org) => res.json(org))
      .catch((err) => res.status(400).json("Error" + err));
  })

  .post((req, res, next) => {
    Test_User.create(req.body)
      .then(
        (org) => {
          console.log("Category created ", org);
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(org);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  })

  .put((req, res, next) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /Organisation");
  })
  .delete((req, res, next) => {
    Test_User.remove({})
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
Test_User_router.route("/:TUId")
  .options((req, res) => {
    res.sendStatus(200);
  })
  .get((req, res, next) => {
    Test_User.findById(req.params.orgId)
      .then(
        (org) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(org);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  })
  .post((req, res, next) => {
    res.statusCode = 403;
    res.setHeader("Content-Type", "text/plain");
    res.end("POST operation not supported on /promotions/" + req.params.TUId);
  });
// .put((req, res, next) => {
//     Test_User.findByIdAndUpdate(req.params.TUId, {
//         $set: req.body
//     }, { new: true })
//         .then((promotion) => {
//             res.statusCode = 200;
//             res.setHeader('Content-Type', 'application/json');
//             res.json(promotion);
//         }, (err) => next(err))
//         .catch((err) => next(err));
// })
// .delete(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
//     Promotions.findByIdAndRemove(req.params.promoId)
//         .then((resp) => {
//             res.statusCode = 200;
//             res.setHeader('Content-Type', 'application/json');
//             res.json(resp);
//         }, (err) => next(err))
//         .catch((err) => next(err));
//});
module.exports = Test_User_router;
