const Schedule = require("../../DB/models/Schedule");

const getNoWorkDaysController = async () => {
  try {
    // Buscar el primer documento en la colección de Schedule
    const existing = await Schedule.findOne();
    if (existing) {
      // Si existe, devolver el objeto noWorkDays
      return existing.noWorkDays;
    } else {
      // Si no existe, crear un nuevo documento con noWorkDays vacío
      const newDoc = new Schedule({
        noWorkDays: { prop: "init" },
      });

      // Guardar el nuevo documento en la base de datos
      await newDoc.save();
      console.log(newDoc);
      // Devolver el objeto noWorkDays del nuevo documento
      return newDoc.noWorkDays;
    }
  } catch (error) {
    console.error(
      "Error al obtener los días especiales desde la base de datos:",
      error
    );
    throw new Error(
      "Error al obtener los días especiales desde la base de datos"
    );
  }
};

module.exports = getNoWorkDaysController;
