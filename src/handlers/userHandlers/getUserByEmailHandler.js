const getUserByEmailController = require("../../controllers/userControllers/getUserByEmailController");

const getUserByEmailHandler = async (req, res) => {
  const { email } = req.body;
  try {
    const allUsers = await getUserByEmailController(email);
    res.status(200).json(allUsers); //array de usuarios
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error getting users" });
  }
};

module.exports = getUserByEmailHandler;
