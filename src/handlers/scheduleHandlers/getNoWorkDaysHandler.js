const getNoWorkDaysController = require("../../controllers/scheduleControllers/getNoWorkDaysController");

const getNoWorkDaysHandler = async (req, res) => {
  try {
    const days = await getNoWorkDaysController();
    res.status(200).json(days);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los dias." });
  }
};

module.exports = getNoWorkDaysHandler;
