const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// bankify schema
const bankifySchema = new Schema({
  particulars: {
    type: String,
  },
  credit: {
    type: Number,
  },
  debit: {
    type: Number,
  },
  amount: {
    type: Number,
  },
  type: {
    type: String,
  },
  createdAt: { type: Date, required: true, default: Date.now },
});

const Bankify = mongoose.model("Bankify", bankifySchema);

module.exports = {
  Bankify: Bankify,
};
