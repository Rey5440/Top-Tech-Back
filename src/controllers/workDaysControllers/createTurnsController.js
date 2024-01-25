const WorkDay = require("../../DB/models/WorkDay");
const corroborate = require("../../helpers/corroborateDisponibility");

const createTurnController = async (date, emailWorker, selectedTime, serviceSelected, user) => {
  console.log("esto es el console log de", date )
  console.log("esto es el console log de", emailWorker )
  console.log("esto es el console log de", selectedTime )
  console.log("esto es el console log de", serviceSelected )
  console.log("esto es el console log de", user )
  try {
    const asignTurn = await WorkDay.findOne({month: date[1], day: date[0], email: emailWorker});
    var newDay = asignTurn

    let contador = 0

    for(let i = 0; i < newDay.time.length; i++) {
        if (contador > 0 && contador <= asignTurn.services[serviceSelected].duration) {
            newDay.time[i] = user
            contador++
        }
        if (newDay.time[i] == "free" && i == selectedTime) {
            newDay.time[i] = user
            contador++
        }
    }
    const serv = Object.keys(asignTurn.services)
    serv.forEach(element => {
        if (corroborate(newDay.time, newDay.services[element].duration) == true) {
            newDay.services[element].available = true
        } else {
            newDay.services[element].available = false
        }
    })
    newDay.turn = true

    await newDay.save();
    return newDay;
  } catch (error) {
    console.error("Error al reservar turno (controller):", error);
    throw error;
  }
};

module.exports = createTurnController;
