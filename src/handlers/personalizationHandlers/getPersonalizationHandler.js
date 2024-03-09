const getPersonalizationController = require("../../controllers/personalizationControllers/getPersonalizationController");

const getPersonalizationHandler = async (req, res) => {
  try {
    const images = await getPersonalizationController();
    res.status(200).json(images);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Error en handler al obtener las imagenes" });
  }
};

module.exports = getPersonalizationHandler;
