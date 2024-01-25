const updateServicesImgController = require("../../controllers/servicesContollers/updateServicesImgController");

const updateServicesImgHandler = async (req, res) => {
  const { servicesWithImg } = req.body;
  console.log(servicesWithImg, "pase por handler");
  try {
    const updatedservicesImg = await updateServicesImgController(servicesWithImg);
    res.status(200).json(updatedservicesImg);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Error en handler al asignar nuevos días" });
  }
};

module.exports = updateServicesImgHandler;
