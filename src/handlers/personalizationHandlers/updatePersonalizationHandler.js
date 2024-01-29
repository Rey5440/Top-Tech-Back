const updatePersonalizationController = require("../../controllers/personalizationControllers/updatePersonalizationController");

const updatePersonalizationHandler = async (req, res) => {
  const { newImages, newColors } = req.body;
  try {
    const updatedImages = await updatePersonalizationController(
      newImages,
      newColors
    );
    res.status(200).json(updatedImages);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Error en handler al asignar las imagenes" });
  }
};

module.exports = updatePersonalizationHandler;
