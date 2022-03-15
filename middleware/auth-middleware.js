const jwt = require("jsonwebtoken");

const HttpError = require("../models/error-model/runtime-error");

module.exports = (req, res, next) => {
  if (req.method === "OPTIONS") {
    return next();
  }
  try {
    const token = req.headers.authorization.split(" ")[1];
    // console.log("Receiving Token :", token); // Authorization: 'Bearer TOKEN'
    if (!token) {
      throw new Error("Token Not received");
    }
    const decodedToken = jwt.verify(token, process.env.JWT_KEY);
    req.userData = {
      email: decodedToken.email,
      _id: decodedToken._id,
      // mobile: decodedToken.mobileNumber,
    };
    next();
  } catch (err) {
    const error = new HttpError("Authentication failed!" + err, 403);
    return next(error);
  }
};
