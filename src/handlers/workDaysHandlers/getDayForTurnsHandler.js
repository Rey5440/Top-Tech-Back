const getDayForTurnsController = require("../../controllers/workDaysControllers/getDayForTurnsController");


const getDayForTurnsHandler = async (req, res) => {
  const { dayForTurns } = req.body;

  try {
    const day = await getDayForTurnsController(dayForTurns);
    res.status(200).json(day);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener el dia." });
  }
};

module.exports = getDayForTurnsHandler;