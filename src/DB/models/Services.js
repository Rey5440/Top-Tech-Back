const { Schema, model } = require("mongoose");

const CreateServices = new Schema(
  {
    allServices: {
      type: Array,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Services = model("Services", CreateServices); // este nombre solo sirve para referirme al modelo (Services)

module.exports = Services;
