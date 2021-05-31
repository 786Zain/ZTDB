// PACKAGES
const express = require("express");
// const aws = require('aws-sdk')

// MODELS & HELPERS
const userController = require("../controllers/user-controller");
const HttpError = require("../models/error-model/runtime-error");
const auth = require("../middleware/auth-middleware");
const router = express.Router();

// GET API GATEWAYS
// Root Check
router.get("/", userController.welcome);
// Manage Users
router.get("/manageUsers", auth, (req, res, next) => {
  userController
    .manageUsers(req, next)
    .then((data) => {
      res.status(201).send(data);
    })
    .catch((err) => {
      const error = new HttpError(err.message, 406);
      return next(error);
    });
});

// POST API GATEWAYS

router.post("/login", (req, res, next) => {
  userController
    .login(req, next)
    .then((data) => {
      res.status(201).send(data);
    })
    .catch((err) => {
      const error = new HttpError(err.message, err.code);
      return next(error);
    });
});
router.post("/register", (req, res, next) => {
  userController
    .register(req, next)
    .then((data) => {
      res.status(201).send(data);
    })
    .catch((err) => {
      const error = new HttpError(err.message, err.code);
      return next(error);
    });
});

module.exports = router;
