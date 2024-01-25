const getServicesController = require("../../controllers/servicesContollers/getServicesController");

const getServicesHandler = async (req, res) => {
  try {
    const allServices = await getServicesController()
    res.status(200).json(allServices);  //array de servicios disponibles
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: "Error getting services" });
  }
};

module.exports = getServicesHandler;