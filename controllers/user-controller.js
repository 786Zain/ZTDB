// PACKAGES
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
// const sendGrid = require('@sendgrid/mail')
// const mongoose = require('mongoose')

// MODELS
const userModels = require("../models/user-models/user-models");

// HELPERS
const ZTCRYPTO = require("../helpers/crypto");
// const PROFILE = require('../helpers/profile')
// const OTP = require('../helpers/OTP')
// const Mobile = require('../helpers/Twilio')

// MIDDLEWARES
const HttpError = require("../models/error-model/runtime-error");
// const aws = require('aws-sdk')
// const multer = require('multer')
// const multerS3 = require('multer-s3')

// SHORTHAND URL
// const siteUrl = process.env.loginUrl || 'http://localhost:5000'
// const frontendUrl = process.env.frontendUrl || 'http://localhost:3000'
// const fromEmail = process.env.SUPPORTMAIL

// sendGrid.setApiKey(
//   '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'
// )

// check server updated
const welcome = async (req, res) => {
  res.status(200).json({
    message: "Application Running, Server Ready",
    "Last Codes Updated: ": process.env.SERVERUPDATES,
  });
};

// login functionality
const login = async (req, next) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = {};

      // Check User Existance
      const checkUser = await userModels.User.findOne({
        email: req.body.email,
      });
      if (!checkUser) {
        const error = new HttpError("User Not Exists!", 406);
        return next(error);
      }

      // Varify Password
      const isValidPassword = await bcrypt.compare(
        req.body.password,
        checkUser.password
      );
      if (!isValidPassword) {
        const error = new HttpError("Password Wrong, Access Denaid!", 403);
        return next(error);
      }

      // Token Generate
      const token = jwt.sign(
        {
          _id: checkUser._id,
          email: checkUser.email,
        },
        process.env.JWT_KEY
      );
      response.message = "Login SuccessFull";
      response.id = checkUser._id;
      response.Token = token;
      resolve(response);
      // res.json(response);
    } catch (err) {
      const error = new HttpError(err.message, 405);
      return next(error);
    }
  });
};

// register functionality
const register = async (req, next) => {
  return new Promise(async (resolve, reject) => {
    try {
      let { email, password, fullName, userName, age, address, description } =
        req.body;
      const salt = 12;
      let response = {};
      const checkUser = await userModels.User.findOne({ email: email });
      if (checkUser) {
        const error = new HttpError(
          "User Already Exists! ID:" + checkUser._id,
          208
        );
        return next(error);
      }
      password = await bcrypt.hash(password, salt);
      const postData = {
        email: email,
        password: password,
        fullName: fullName,
        userName: userName,
        age: age,
        address: address,
        description: description,
      };
      const user = new userModels.User(postData);
      response = await user.save();
      resolve({ message: "User Added", userId: response._id });
    } catch (err) {
      const error = new HttpError(err.message, 400);
      return next(error);
    }
  });
};

// CRUD functionality
const addUser = async (req, next) => {
  return new Promise(async (resolve, reject) => {
    try {
      console.log(req.body.Name);
      // let { email, password, fullName, userName, age, address, description } =
      //   req.body;
      // const salt = 12;
      // let response = {};
      // // const checkUser = await userModels.User.findOne({ email: email });
      // // if (checkUser) {
      // //   const error = new HttpError(
      // //     "User Already Exists! ID:" + checkUser._id,
      // //     208
      // //   );
      // //   return next(error);
      // // }
      // // password = await bcrypt.hash(password, salt);
      // const postData = {
      //   email: email,
      //   password: password,
      //   fullName: fullName,
      //   userName: userName,
      //   age: age,
      //   address: address,
      //   description: description,
      // };
      // const user = new userModels.User(postData);
      // response = await user.save();
      // resolve({ message: "User Added", userId: response._id });
      resolve({ message: "User Added" });
    } catch (err) {
      const error = new HttpError(err.message, 400);
      return next(error);
    }
  });
};

const obj = {
  welcome,
  login,
  register,
  addUser,
};
module.exports = obj;
// exports.welcome = welcome;
// exports.login = login;
// exports.register = register;
// exports.addUser = addUser;
