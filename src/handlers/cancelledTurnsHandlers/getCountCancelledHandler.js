const countCancelledController = require("../../controllers/cancelledTurnsControllers/countCancelledController");

const getCountCancelledHandler = async (req, res) => {
  const { emailWorker } = req.body;

  try {
    const turns = await countCancelledController(emailWorker);
    res.status(200).json(turns);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los turnos cancelados." });
  }
};

module.exports = getCountCancelledHandler;