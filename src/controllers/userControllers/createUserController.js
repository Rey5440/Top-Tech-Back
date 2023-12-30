const User = require("../../DB/models/User");
const Services = require('../../DB/models/Services');

const createUserController = async (name, email) => {
  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return existingUser;
    } else {
      const newUser = new User({ name: name, email: email, admin: false, worker: false});
      const existingService = await Services.findOne({}); // trae array de strings con servicios
      const servicesList = existingService ? existingService.allServices : [];

      // Crear el objeto de servicios para el nuevo usuario
      const servicesObject = servicesList.reduce((acc, curr) => {
        console.log(acc,curr)
        acc[curr] = null;
        return acc;
      }, {});

      // Establecer las propiedades de services para el nuevo usuario
      newUser.services = servicesObject;

      // Guardar el nuevo usuario en la base de datos
      await newUser.save();

      return newUser;
    }
  } catch (error) {
    console.error("Error al crear usuario:", error);
    throw error;
  }
};

module.exports = createUserController;