// PACKAGES
const express = require("express");
// const aws = require('aws-sdk')

// MODELS & HELPERS
const bankifyController = require("../controllers/bankify-controller");
const HttpError = require("../models/error-model/runtime-error");
const auth = require("../middleware/auth-middleware");
const media = require("../middleware/profile-pic-uploads");
const router = express.Router();

// GET API GATEWAYS
// Root Check
// router.get("/", userController.welcome);
// Manage Transactions
router.get("/manageTransaction", auth, (req, res, next) => {
  bankifyController
    .manageTransaction(req, next)
    .then((data) => {
      res.status(201).send(data);
    })
    .catch((err) => {
      const error = new HttpError(err.message, 406);
      return next(error);
    });
});

// POST API GATEWAYS

router.post("/add", auth, media.upload, (req, res, next) => {
  bankifyController
    .add(req, next)
    .then((data) => {
      res.status(201).send(data);
    })
    .catch((err) => {
      const error = new HttpError(err.message, err.code);
      return next(error);
    });
});
// router.post("/register", (req, res, next) => {
//   userController
//     .register(req, next)
//     .then((data) => {
//       res.status(201).send(data);
//     })
//     .catch((err) => {
//       const error = new HttpError(err.message, err.code);
//       return next(error);
//     });
// });

module.exports = router;
