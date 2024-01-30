const WorkDay = require("../../DB/models/WorkDay");
const noNullCancelledController = require("./noNullCancelledController");

const deleteDaysController = async (month, day, email) => {

  try {
    const existing = await WorkDay.findOneAndDelete({ month, day, email });

    if (!existing) {
      throw new Error("No se encontró un día laboral con las propiedades proporcionadas.");
    }

    let noNull = [];

    if (existing.turn === true) {

      let bandera = "pablitoclavounclavito";
      let enter = false

      existing.time.forEach((element, index) => {

        if (element !== null && element !== bandera && element != "free") {
            noNull.push({ email: element, ini: index });
            bandera = element;
            enter = true
        }
        if (enter == true && element != bandera) {
            enter = false
            noNull[noNull.length - 1].fin = (index - 1)
        }
      });
      console.log(noNull, month, day, email, "esto le pasa al controlador 2")
      const cancelledTurns = await noNullCancelledController(noNull, month, day, email)
    }
    console.log("salida de deleteDaysController")
    return noNull;
  } catch (error) {
    console.error("Error al eliminar día laboral:", error);
    throw error;
  }
};

module.exports = deleteDaysController;
