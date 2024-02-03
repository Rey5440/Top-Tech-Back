const getWorkersController = require("../../controllers/userControllers/getWorkersController");

const getWorkersHandler = async (req, res) => {

  try {
    const allWorkers = await getWorkersController();
    res.status(200).json(allWorkers); //devolvera array de objetos con email,name
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error al obtener workers." });
  }
};

module.exports = getWorkersHandler;