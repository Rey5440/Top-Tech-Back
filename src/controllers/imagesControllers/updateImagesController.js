const Images = require("../../DB/models/Images");

const updateImagesController = async (newImages) => {
  try {
    // Buscar el primer documento en la colección de servicios
    const existingService = await Images.findOne({});

    if (existingService) {
      // Actualizar la propiedad allServices con el nuevo array de arrays
      existingService.allImages = newImages;

      // Guardar la actualización en la base de datos
      await existingService.save();
      return existingService; // Devolver el servicio actualizado
    } else {
      // Si no existe, crear un nuevo documento con el nuevo array de arrays
      const newService = new Images({
        allImages: newImages,
      });

      // Guardar el nuevo servicio en la base de datos
      await newService.save();

      return newService;
    }
  } catch (error) {
    console.error("Error al actualizar la/s imágenes:", error);
    throw new Error("Error al actualizar la/s imágenes");
  }
};

module.exports = updateImagesController;
