const getMyTurnsController = require("../../controllers/workDaysControllers/getMyTurnController");

const getMyTurnsHandler = async (req, res) => {

    const { emailUser } = req.body

    try {
        const turns = await getMyTurnsController(emailUser);
        res.status(200).json(turns);
    } catch (error) {
        res.status(500).json({message: 'Error al obtener mis turnos.'});

    }
}

module.exports = getMyTurnsHandler;