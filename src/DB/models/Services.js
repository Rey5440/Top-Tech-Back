/* const { Schema, model } = require("mongoose");

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

module.exports = Services; */

const mongoose = require('mongoose');

const serviceDetailsSchema = new mongoose.Schema({
  precio: {
    type: Number,
    default: null
  },
  image: String
});

const categorySchema = new mongoose.Schema({
  services: {
    type: Map,
    of: serviceDetailsSchema
  }
});

const servicesSchema = new mongoose.Schema({
  services: {
    type: Map,
    of: categorySchema
  }
});

const Services = mongoose.model('Services', servicesSchema);

module.exports = Services;

