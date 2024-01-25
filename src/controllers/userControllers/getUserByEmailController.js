const User = require("../../DB/models/User");

const getUserByEmailController = async (email) => {
  try {
    const user = await User.findOne({ email });
    return user;
  } catch (error) {
    console.error("Usuario no encontrado:", error);
    throw error;
  }
};

module.exports = getUserByEmailController;
