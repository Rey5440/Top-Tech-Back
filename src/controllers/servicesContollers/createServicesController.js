const Services = require("../../DB/models/Services");
const User = require("../../DB/models/User");

const createServicesController = async (service) => {
  try {
    // Buscar el primer documento en la colección de servicios
    const existingService = await Services.findOne({});
    console.log(service," asi llega el service del find");
console.log(existingService," asi llega el Existitnfservice");
    
    if (existingService) {
      const isServiceIncluded = existingService.allServices.some(
        (arr) => JSON.stringify(arr) === JSON.stringify(service)
      );

      if (isServiceIncluded) {
        // Si el servicio ya existe, retornar un mensaje indicando que ya existe
        return {
          message: "El servicio ya existe en la colección.",
          existingService,
        };
      } else {
        // Si no existe, agregar el nuevo servicio a la propiedad allServices
        existingService.allServices.push(service);

        // Actualizar el campo services de los usuarios
        await User.updateMany(
          {},
          {
            $set: {
              [`services.${service}`]: {
                duration: null,
                available: false,
              },
            },
          }
        );

        // Guardar la actualización en la base de datos
        await existingService.save();

        return existingService;
      }
    } else {
      // Si no existe, crear un nuevo documento con el nuevo servicio
      const newService = new Services({
        allServices: [service],
      });

      // Actualizar el campo services de los usuarios
      await User.updateMany(
        {},
        {
          $set: {
            [`services.${service}`]: {
              duration: null,
              available: true,
            },
          },
        }
      );

      // Guardar el nuevo servicio en la base de datos
      await newService.save();

      return newService;
    }
  } catch (error) {
    console.error("Error al crear o actualizar el servicio:", error);
    throw new Error("Error al crear o actualizar el servicio");
  }
};

module.exports = createServicesController;
