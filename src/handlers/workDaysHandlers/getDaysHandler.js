const getDaysController = require("../../controllers/workDaysControllers/getDaysController");


const getDaysHandler = async (req, res) => {

    try {
        const days = await getDaysController();
        res.status(200).json(days);
    } catch (error) {
        res.status(500).json({message: 'Error al obtener los dias.'});

    }
}

module.exports = getDaysHandler;