const { Schema, model } = require("mongoose");

const CancelledTurnsSchema = new Schema(
  {
    month: {
        type: Number,
        required: true,
      },
    day: {
        type: Number,
        required: true,
      },
    name: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    turn: {
        type: Object,
        required: true,
    },
    howCancelled: {
        type: String,
        required: true,
    },
  },
  {
    timestamps: true,
  }
);

const CancelledTurns = model("CancelledTurns", CancelledTurnsSchema);

module.exports = CancelledTurns;
