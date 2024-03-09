const createUserController = require("../../controllers/userControllers/createUserController");

const createUserHandler = async (req, res) => {
  const { name, email, image } = req.body;

  try {
    const user = await createUserController(name, email, image);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Error creating user." });
  }
};

module.exports = createUserHandler;
