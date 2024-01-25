const Services = require("../../DB/models/Services");

const getServicesController = async () => {
  try {
    // Obtener todos los servicios desde la base de datos
    const services = await Services.find();
    if (services.length < 1) {
      return services;
    } else {
      return services[0].allServices;
    }
  } catch (error) {
    console.error("Error al obtener servicios:", error);
    throw error;
  }
};

module.exports = getServicesController;
