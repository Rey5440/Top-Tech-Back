const WorkDay = require("../../DB/models/WorkDay");
const noNullCancelledController = require("./noNullCancelledController");

const adminDeleteDayController = async (month, day) => {
  try {

    const existing = await WorkDay.find({ month, day });

    let turns = []
    if (existing) {
      /* throw new Error("El día ya existe para el usuario y la fecha proporcionados."); */
        
        existing.forEach(workday => {
            let bandera = "pablitoclavounclavito"
            let enter = false
            workday.time.forEach((element, index) => {
                
                if (element !== null && element !== bandera && element != "free") {
                    turns.push({ email: element, ini: index });
                    bandera = element;
                    enter = true
                }
                if (enter == true && element != bandera) {
                    enter = false
                    turns[turns.length - 1].fin = (index - 1)
                }
            })
        })
        const cancelled = await noNullCancelledController(turns, month, day, "administrador")
        const daysDeleted = await WorkDay.deleteMany({ month, day });
    }
    return existing;
  } catch (error) {
    console.error("Error al eliminar dia como administrador:", error);
    throw error;
  }
};

module.exports = adminDeleteDayController;