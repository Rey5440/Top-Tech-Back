const Personalization = require("../../DB/models/Personalization");

const updatePersonalizationController = async (newImages, newColors) => {
  try {
    // Buscar el primer documento en la colección de servicios
    const existingPersonalization = await Personalization.findOne({});

    if (existingPersonalization) {
      // Actualizar la propiedad allServices con el nuevo array de arrays
      existingPersonalization.allImages = newImages;
      existingPersonalization.allColors = newColors;

      // Guardar la actualización en la base de datos
      await existingPersonalization.save();
      return existingPersonalization; // Devolver el servicio actualizado
    } else {
      // Si no existe, crear un nuevo documento con el nuevo array de arrays
      const newPersonalization = new Personalization({
        allImages: newImages,
        allColors: newColors,
      });

      // Guardar el nuevo servicio en la base de datos
      await newPersonalization.save();

      return newPersonalization;
    }
  } catch (error) {
    console.error("Error al actualizar la personalizacion", error);
    throw new Error("Error al actualizar la personalizacion");
  }
};

module.exports = updatePersonalizationController;
