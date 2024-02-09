const Services = require("../../DB/models/Services");
const User = require("../../DB/models/User");

const deleteServicesController = async (service) => {
  console.log(service, " así llega el servicio del controlador");

  try {
    // Buscar el servicio en la base de datos
    const existingService = await Services.findOne();
    if (existingService) {
      // Si el servicio existe, eliminarlo de la propiedad allServices
      existingService.allServices = existingService.allServices.filter(
        (arr) => arr[0] !== service
      );

      // Eliminar la propiedad del campo services de todos los usuarios
      await User.updateMany(
        {},
        {
          $unset: {
            [`services.${service}`]: 1,
          },
        }
      );

      // Guardar la actualización en la base de datos
      await existingService.save();

      return existingService; // Devolver el servicio actualizado
    } else {
      // Si el servicio no existe, retornar un mensaje indicando que no existe
      return { message: "El servicio no existe en la colección." };
    }
  } catch (error) {
    console.error("Error al eliminar el servicio:", error);
    throw new Error("Error al eliminar el servicio");
  }
};

module.exports = deleteServicesController;

