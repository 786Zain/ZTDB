// PACKAGES
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
// const mongoose = require('mongoose')

// MODELS
const userModels = require("../models/user-models/user-models");
const documentModels = require("../models/document-model/document-model");

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
  res.render("docsEntry");
  // res.status(200).json({
  //   message: "Documents Controller Opearating",

  // });
};

// Manage documents
const list = async (req, next) => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await documentModels.document.find({
        userId: req.userData._id,
      });
      resolve({ message: "Got Entries", data: data });
    } catch (err) {
      const error = new HttpError(err.message, 400);
      return next(error);
    }
  });
};

// Search documents
const searchDocs = async (req, next) => {
  return new Promise(async (resolve, reject) => {
    try {
      if(req.query.DocumentName===''&&req.query.DocumentNumber===''){
        const error = new HttpError('Search Fields is  Empty', 400);
      return next(error);
      }
      const data = await documentModels.document.find({
        DocumentName: {
          $regex: new RegExp("^" + req.query.DocumentName.toLowerCase(), "i"),
        },
        DocumentNumber: {
          $regex: new RegExp(
            "^" + req.query.DocumentNumber.toLowerCase(),
            "i"
          ),
        },
      });
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
      let { DocumentName, Description, Category, DocumentNumber } = req.body;
      req.body.private = req.body.private === "true" ? true : false;
      let response = {};
      const postData = {
        DocumentName: DocumentName,
        Description: Description,
        Document: req.files,
        Category: Category,
        Private: req.body.private,
        DocumentNumber: DocumentNumber,
        userId: req.userData._id,
      };
      const entry = new documentModels.document(postData);
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
  list,
  searchDocs,
};
module.exports = obj;
