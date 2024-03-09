const getDaysByEmailController = require("../../controllers/workDaysControllers/getDaysByEmailController");

const getDaysByEmailHandler = async (req, res) => {
  const { email } = req.body;

  try {
    const days = await getDaysByEmailController(email);
    res.status(200).json(days);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los dias." });
  }
};

module.exports = getDaysByEmailHandler;
