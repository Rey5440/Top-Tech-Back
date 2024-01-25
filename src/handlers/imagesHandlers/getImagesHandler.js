const getImagesController = require("../../controllers/imagesControllers/getImagesController");

const getImagesHandler = async (req, res) => {
  try {
    const images = await getImagesController();
    res.status(200).json(images);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Error en handler al obtener las imagenes" });
  }
};

module.exports = getImagesHandler;
