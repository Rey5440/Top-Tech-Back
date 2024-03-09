const cancelledTurnsController = require("../../controllers/cancelledTurnsControllers/cancelledTurnsController");

const getCancelledForWorkerHandler = async (req, res) => {
  const { emailWorker, month, day  } = req.body;
  try {
    const turns = await cancelledTurnsController(emailWorker, month, day);
    res.status(200).json(turns);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los turnos cancelados." });
  }
};

module.exports = getCancelledForWorkerHandler;
