const getDaysByServicesController = require("../../controllers/workDaysControllers/getDaysByServicesControllers");


const getDaysByServicesHandler = async (req, res) => {
    const { servicesForTurns } = req.body
    try {
        const days = await getDaysByServicesController(servicesForTurns);
        res.status(200).json(days);
    } catch (error) {
        res.status(500).json({message: 'Error al obtener los dias.'});

    }
}

module.exports = getDaysByServicesHandler;