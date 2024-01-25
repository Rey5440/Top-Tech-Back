const WorkDay = require("../../DB/models/WorkDay");
const myTurnsOfDay = require("../../helpers/myTurnsOfDay");

const getMyTurnsController = async (emailUser) => {

    try {
    
    let turnResult = []

    const days = await WorkDay.find({
      'time': { $in: [emailUser] }
    });
    
    days.forEach(day => {
        
        const result = myTurnsOfDay(day.time, emailUser)
        result.forEach(element => {
            turnResult.push({
                day: day.day,
                month: day.month,
                hourTime: element,
                worker: day.email
            })
        })

    })

    return turnResult;
  } catch (error) {
    console.error("Error al obtener turnos:", error);
    throw error;
  }
};

module.exports = getMyTurnsController;
