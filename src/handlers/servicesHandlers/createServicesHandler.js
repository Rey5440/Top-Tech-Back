const createServicesController = require("../../controllers/servicesControllers/createServicesController");

const createServicesHandler = async (req, res) => {
    const { service } = req.body;

    try {
        const result = await createServicesController(service);

        if (result.message) {
            // Si existe un mensaje, significa que el servicio ya existe
            return res.status(409).json({ message: result.message, existingService: result.existingService });
        }

        res.status(201).json({ newService: result });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error interno del servidor' });
    }
};

module.exports = createServicesHandler;