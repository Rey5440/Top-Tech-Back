const updateScheduleController = require("../../controllers/scheduleControllers/updateScheduleController");

const updateScheduleHandler = async (req, res) => {
    const { newSchedule } = req.body
    try {
        const updatedSchedule = await updateScheduleController(newSchedule)
        res.status(200).json(updatedSchedule);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error en handler al asignar horario' });
    }
}

module.exports = updateScheduleHandler;