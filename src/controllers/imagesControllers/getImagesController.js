const Images = require("../../DB/models/Images");

const getImagesController = async () => {
  try {
    const existingImages = await Images.findOne();
    if (existingImages) {
      return existingImages.allImages;
    } else {
      const newImages = new Images({
        allImages: [],
      });
      await newImages.save();
      return newImages.allImages;
    }
  } catch (error) {
    console.error(
      "Error al obtener las imagenes desde la base de datos:",
      error
    );
    throw new Error("Error al obtener las imagenes desde la base de datos");
  }
};

module.exports = getImagesController;
