const CancelledTurns = require("../../DB/models/CancelledTurns");

const cancelledTurnsController = async (emailWorker, month, day) => {
    console.log(emailWorker, month, day, "esto me llega al controlador del turnos cancelados")
  try {
    const turns = await CancelledTurns.find({ email: emailWorker, month, day});

    return turns;
  } catch (error) {
    console.error("Error al obtener días laborales:", error);
    throw error;
  }
};

module.exports = cancelledTurnsController;