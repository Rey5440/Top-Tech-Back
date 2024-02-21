const Personalization = require("../../DB/models/Personalization");

const getPersonalizationController = async () => {
  try {
    const existingPersonalization = await Personalization.findOne();
    if (existingPersonalization) {
      return existingPersonalization;
    } else {
      const newPersonalization = new Personalization({
        allImages: [],
        allColors: ["white"],
      });
      await newPersonalization.save();
      return newPersonalization;
    }
  } catch (error) {
    console.error(
      "Error al obtener la personalizacion desde la base de datos:",
      error
    );
    throw new Error(
      "Error al obtener la personalizacion desde la base de datos"
    );
  }
};

module.exports = getPersonalizationController;
