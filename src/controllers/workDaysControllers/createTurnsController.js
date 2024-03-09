const WorkDay = require("../../DB/models/WorkDay");
const corroborate = require("../../helpers/corroborateDisponibility");

const createTurnController = async (date, emailWorker, selectedTime, serviceSelected, user) => {

  try {
    var asignTurn = await WorkDay.findOne({month: date[1], day: date[0], email: emailWorker});

    let contador = 0

    for(let i = 0; i < asignTurn.time.length; i++) {
        if (contador > 0 && contador <= asignTurn.services[serviceSelected].duration) {
            asignTurn.time[i] = user
            contador++
        }
        if (asignTurn.time[i] == "free" && i == selectedTime) {
            asignTurn.time[i] = user
            contador++
        }
    }
    const serv = Object.keys(asignTurn.services)
    serv.forEach(element => {
        if (corroborate(asignTurn.time, asignTurn.services[element].duration) == true) {
            asignTurn.services[element].available = true
        } else {
            asignTurn.services[element].available = false
        }
    })
    asignTurn.turn = true
    
    // Marcar los cambios en los subdocumentos como modificados
    asignTurn.markModified('services');
    
    await asignTurn.save();
    return asignTurn;
  } catch (error) {
    console.error("Error al reservar turno (controller):", error);
    throw error;
  }
};

module.exports = createTurnController;

