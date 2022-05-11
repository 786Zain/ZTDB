const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// bankify schema
const documentSchema = new Schema({
  DocumentName: {
    type: String,
  },
  Description: {
    type: String,
  },
  Category: {
    type: String,
  },
  Private: {
    type: Boolean,
    default: false,
  },
  DocumentNumber: {
    type: String,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
  },
  Document: {
    type: Array,
    default: [],
  },
  createdAt: { type: Date, required: true, default: Date.now },
});

const document = mongoose.model("document", documentSchema);

module.exports = {
  document: document,
};
