const countWorkerController = require("../../controllers/workDaysControllers/countWorkerController");

const countWorkerHandler = async (req, res) => {
    const { emailWorker } = req.body;
  
    try {
      const turns = await countWorkerController(emailWorker);
      res.status(200).json(turns);
    } catch (error) {
      res.status(500).json({ message: "Error al obtener los turnos." });
    }
  };
  
  module.exports = countWorkerHandler;