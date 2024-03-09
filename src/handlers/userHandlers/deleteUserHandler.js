const deleteUserController = require("../../controllers/userControllers/deleteUserController");



const deleteUserHandler = async (req, res) => {
  const { email } = req.body;
  try {
    const deleted = await deleteUserController(email);
    res.status(200).json(deleted); //array de usuarios
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error al eliminar usuario" });
  }
};

module.exports = deleteUserHandler;