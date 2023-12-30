const createDaysController = require('../../controllers/workDaysControllers/createDaysController');

const createDaysHandler = async (req, res) => {

    const { month, day, email, time } = req.body;  // cola de solicitudes, NO array
    try {
        const newDays = await createDaysController(month, day, email, time);
        res.status(200).json(newDays);
    } catch (error) {
        res.status(500).json({message: 'Error al agendar dias laborales.'});
    }
}

module.exports = createDaysHandler;