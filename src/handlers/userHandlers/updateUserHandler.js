const updateUserController = require("../../controllers/userControllers/updateUserController");

const updateUserHandler = async (req, res) => {
  const { email, newServicesDuration, newPhoneNumber } = req.body;
  console.log(newPhoneNumber,"lo que vieen el el handler");
  try {
    const user = await updateUserController(
      email,
      newServicesDuration,
      newPhoneNumber
    );
    res.status(200).json({ message: "Cambio al usuario realizado con exito" });
  } catch (error) {
    res.status(500).json({ message: "Error al intentar cambiar usuario" });
  }
};

module.exports = updateUserHandler;
