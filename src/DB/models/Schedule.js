const { Schema, model } = require("mongoose");

const CreateSchedule = new Schema(
  {
    businessSchedule: {
      type: Object,
      required: false,
    },
    noWorkDays: {
      type: Object,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Schedule = model("Schedule", CreateSchedule);

module.exports = Schedule;
