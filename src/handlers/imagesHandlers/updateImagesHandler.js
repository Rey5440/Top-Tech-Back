const updateImagesController = require("../../controllers/imagesControllers/updateImagesController");

const updateImagesHandler = async (req, res) => {
  const { newImages } = req.body;
  try {
    const updatedImages = await updateImagesController(newImages);
    res.status(200).json(updatedImages);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Error en handler al asignar las imagenes" });
  }
};

module.exports = updateImagesHandler;
