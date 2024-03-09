const { Schema, model } = require("mongoose");

const CreatePersonalization = new Schema({
  allImages: {
    type: Array,
    required: false,
  },
  allColors: {
    type: Array,
    required: false,
  },
});

const Personalization = model("Personalization", CreatePersonalization);

module.exports = Personalization;
