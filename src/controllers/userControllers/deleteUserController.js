const User = require("../../DB/models/User");

const deleteUserController = async (email) => {
  try {

    const user = await User.findOne({ email });

    user.isDelete = !user.isDelete;

    await user.save();

    return user;

  } catch (error) {
    console.error("Se produjo un error al eliminar usuario.", error);
    throw error;
  }
};

module.exports = deleteUserController;
