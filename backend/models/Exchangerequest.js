const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExchangeRequestSchema = new Schema({
  requester: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  requestedBook: {
    type: Schema.Types.ObjectId,
    ref: "Book",
    required: true,
  },
  offeredBook: {
    type: Schema.Types.ObjectId,
    ref: "Book",
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "accepted", "rejected"],
    default: "pending",
  },
  recipientNotified: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Exchangerequest = mongoose.model(
  "ExchangeRequest",
  ExchangeRequestSchema
);
module.exports = Exchangerequest;
