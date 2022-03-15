const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// bankify schema
const bankifySchema = new Schema({
  particulars: {
    type: String,
  },
  description: {
    type: String,
  },
  Credit: {
    type: Number,
    default: 0,
  },
  Debit: {
    type: Number,
    default: 0,
  },
  Balance: {
    type: Number,
  },
  type: {
    type: String,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
  },
  files: {
    type: Array,
    default: [],
  },
  createdAt: { type: Date, required: true, default: Date.now },
});

const Bankify = mongoose.model("Bankify", bankifySchema);

module.exports = {
  Bankify: Bankify,
};
