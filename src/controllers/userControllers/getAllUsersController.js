const User = require('../../DB/models/User');

const getAllUsers = async () => {
  try {
    const users = await User.find()
    return users;
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
    throw error;
  }
};

module.exports = getAllUsers;