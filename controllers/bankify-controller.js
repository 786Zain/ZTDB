// PACKAGES
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
// const mongoose = require('mongoose')

// MODELS
const userModels = require("../models/user-models/user-models");
const bankifyModels = require("../models/bankify-model/bankify-model");

// HELPERS
const ZTCRYPTO = require("../helpers/crypto");

// MIDDLEWARES
const HttpError = require("../models/error-model/runtime-error");
// const aws = require('aws-sdk')
// const multer = require('multer')
// const multerS3 = require('multer-s3')

// SHORTHAND URL

// check server updated
const welcome = async (req, res) => {
  res.status(200).json({
    message: "Bankify Controller Opearating",
  });
};

// Manage data of bankify
const manageTransaction = async (req, next) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { tabName } = req.query;
      const data = await bankifyModels.Bankify.find({ type: tabName });
      resolve({ message: "Got Entries", data: data });
    } catch (err) {
      const error = new HttpError(err.message, 400);
      return next(error);
    }
  });
};

// add data to bankify functionality
const add = async (req, next) => {
  return new Promise(async (resolve, reject) => {
    try {
      let { particulars, description, Credit, Debit, type } = req.body;
      let balance = 0;
      let callbalance = await bankifyModels.Bankify.findOne({
        userId: req.userData._id,
        type: type,
      }).sort({ createdAt: -1 });
      if (callbalance) {
        Credit === undefined
          ? (balance = parseInt(callbalance.Balance) - parseInt(Debit))
          : (balance = parseInt(callbalance.Balance) + parseInt(Credit));
        // console.log(parseInt(callbalance.Balance) - parseInt(Debit));
      } else {
        Credit === undefined
          ? (balance = 0 - parseInt(Debit))
          : (balance = 0 + parseInt(Credit));
      }
      let response = {};
      const postData = {
        particulars: particulars,
        description: description,
        Credit: Credit,
        Debit: Debit,
        Balance: balance,
        type: type,
        files: req.files,
        userId: req.userData._id,
      };
      const entry = new bankifyModels.Bankify(postData);
      response = await entry.save();
      resolve({ message: "Entry Added", entryId: response._id });
    } catch (err) {
      const error = new HttpError(err.message, 400);
      return next(error);
    }
  });
};

const obj = {
  welcome,
  add,
  manageTransaction,
};
module.exports = obj;
