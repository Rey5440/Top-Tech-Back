const createTurnController = require("../../controllers/workDaysControllers/createTurnsController");

const createTurnHandler = async (req, res) => {

  const { date, emailWorker, selectedTime, serviceSelected, user } = req.body; // cola de solicitudes, NO array
  try {
    const newDays = await createTurnController(date, emailWorker, selectedTime, serviceSelected, user);
    res.status(200).json(newDays);
  } catch (error) {
    res.status(500).json({ message: "Error al reservar turno (handler)." });
  }
};

module.exports = createTurnHandler;