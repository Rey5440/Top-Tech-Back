const Schedule = require("../../DB/models/Schedule");

const updateScheduleController = async (newScheduleValues) => {
  try {
    // Obtener y actualizar el documento
    const updatedSchedule = await Schedule.findOneAndUpdate(
      {}, // Sin condiciones, actualizará el primer documento que encuentre
      { businessSchedule: newScheduleValues },
      { new: true, upsert: true } // Configuraciones: new devuelve el documento actualizado, upsert crea un nuevo documento si no se encuentra ninguno
    );

    return updatedSchedule.businessSchedule;
  } catch (error) {
    console.error("Error al actualizar el horario en la base de datos:", error);
    throw new Error("Error al actualizar el horario en la base de datos");
  }
};

module.exports = updateScheduleController;
