const createDaysController = require('../../controllers/workDaysControllers/createDaysController');

const createDaysHandler = async (req, res) => {
    console.log("pase1")
    const { month, day, email, time, services } = req.body;  // cola de solicitudes, NO array
    try {
        const newDays = await createDaysController(month, day, email, time, services);
        res.status(200).json(newDays);
    } catch (error) {
        res.status(500).json({message: 'Error al agendar dias laborales.'});
    }
}

module.exports = createDaysHandler;