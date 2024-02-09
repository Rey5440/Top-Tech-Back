const createDaysController = require("../../controllers/workDaysControllers/createDaysController");

const createDaysHandler = async (req, res) => {
  const { month, day, email, name, image, time, services } = req.body; // cola de solicitudes, NO array
  console.log(month, day, email, name, image, time, services, "en el handler")
  try {
    const newDays = await createDaysController(
      month,
      day,
      email,
      name,
      image,
      time,
      services
    );
    res.status(200).json(newDays);
  } catch (error) {
    res.status(500).json({ message: "Error al agendar dias laborales." });
  }
};

module.exports = createDaysHandler;
