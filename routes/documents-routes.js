// PACKAGES
const express = require("express");
// const aws = require('aws-sdk')

// MODELS & HELPERS
const documentsController = require("../controllers/documents-controller");
const HttpError = require("../models/error-model/runtime-error");
const auth = require("../middleware/auth-middleware");
const media = require("../middleware/profile-pic-uploads");
const router = express.Router();

// GET API GATEWAYS

// Manage Transactions
router.get("/welcome", (req, res, next) => {
  documentsController
    .welcome(req, res)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      const error = new HttpError(err.message, 406);
      return next(error);
    });
});

router.get("/list", auth, (req, res, next) => {
  documentsController
    .list(req, res)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      const error = new HttpError(err.message, 406);
      return next(error);
    });
});

router.get("/searchDocs", auth, (req, res, next) => {
  documentsController
    .searchDocs(req, next)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      const error = new HttpError(err.message, 406);
      return next(error);
    });
});

// POST API GATEWAYS

router.post("/add", auth, media.upload, (req, res, next) => {
  documentsController
    .add(req, next)
    .then((data) => {
      res.status(201).send(data);
    })
    .catch((err) => {
      const error = new HttpError(err.message, err.code);
      return next(error);
    });
});

module.exports = router;