const getScheduleController = require("../../controllers/scheduleControllers/getScheduleController");

const getScheduleHandler = async (req, res) => {

    try {
        const Schedule = await getScheduleController()
        res.status(200).json(Schedule);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error en handler al otener horario' });
    }
}

module.exports = getScheduleHandler;