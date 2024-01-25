const { Schema, model } = require("mongoose");

const CreateImages = new Schema({
  allImages: {
    type: Array,
    required: false,
  },
});

const Images = model("Images", CreateImages);

module.exports = Images;
