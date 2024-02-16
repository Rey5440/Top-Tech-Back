const WorkDay = require("../../DB/models/WorkDay");
const corroborate = require("../../helpers/corroborateDisponibility");
const noNullCancelledController = require("./noNullCancelledController");

const cancelTurnController = async (month, day, time, emailWorker, emailClient, selectedService) => {
  
  try {
    var existingDay = await WorkDay.findOne({ month, day, email: emailWorker}); // ojo, no poner array de objetos

    if (existingDay) {

      for (let i = time.ini; i <= time.fin; i++){
        if (existingDay.time[i] == emailClient) {

          existingDay.time[i] = "free"
        }
      }
      let contador = false
      existingDay.time.forEach(element => {
        if (element != null && element != "free") {
          contador = true
        }
      })
      if (contador == false) {
        existingDay.turn = false
      }

      const serv = Object.keys(existingDay.services)
      serv.forEach(element => {
          if (corroborate(existingDay.time, existingDay.services[element].duration) == true) {
              existingDay.services[element].available = true
          } else {
              existingDay.services[element].available = false
          }
      })
      existingDay.markModified('services');

      const toCancelled = await noNullCancelledController([{email: emailWorker, ini: time.ini, fin: time.fin}], month, day, emailClient)
      await existingDay.save()
    } 
      
    return existingDay;
  } catch (error) {
    console.error("Error en el controlador de cancelacion de turno:", error);
    throw error;
  }
};

module.exports = cancelTurnController;