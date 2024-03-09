const deleteDaysControllers = require("../../controllers/workDaysControllers/deleteDaysController");

const deleteDaysHandler = async (req, res) => {
  const { month, day, email } = req.body; // cola de solicitudes, NO array

  try {
    const deleted = await deleteDaysControllers(
      month,
      day,
      email
    );
    res.status(200).json(deleted);
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar dia." });
  }
};

module.exports = deleteDaysHandler;