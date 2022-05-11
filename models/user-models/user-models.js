const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// user schema
const userSchema = new Schema({
  fullName: {
    type: String,
    maxlength: 35,
  },
  userName: {
    type: String,
    maxlength: 12,
    // immutable:true
  },
  age: {
    type: Number,
  },
  email: {
    type: String,
  },
  address: {
    type: String,
  },
  description: {
    type: String,
  },
  urlDirect: {
    type: String,
  },
  password: {
    type: String,
  },
  Balance: {
    type: Number,
    default: 0,
  },
  createdAt: { type: Date, required: true, default: Date.now },
});

const User = mongoose.model("User", userSchema);

module.exports = {
  User: User,
};
