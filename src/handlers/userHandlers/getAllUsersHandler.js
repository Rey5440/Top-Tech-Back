const getAllUsersController = require("../../controllers/userControllers/getAllUsersController");

const getAllUsersHandler = async (req, res) => {
  try {
    const allUsers = await getAllUsersController();
    res.status(200).json(allUsers); //array de usuarios
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error getting users" });
  }
};

module.exports = getAllUsersHandler;
