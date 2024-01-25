const { Schema, model } = require("mongoose");

const WorkDaysCreate = new Schema(
  {
    month: {
      type: Number,
      required: true,
    },
    day: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    time: {
      type: Array,
      required: true,
    },
    turn: {
      type: Boolean,
      required: true,
    },
    services: {
      type: Object,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const WorkDay = model("WorkDay", WorkDaysCreate); // este nombre solo sirve para referirme al modelo (WorkDays)

module.exports = WorkDay;
