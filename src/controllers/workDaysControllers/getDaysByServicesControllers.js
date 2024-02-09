const WorkDay = require("../../DB/models/WorkDay");

const getDaysByServicesController = async (serviceForTurns) => {
  try {
    const days = await WorkDay.find({});

    const result = {};

    days.forEach((element) => {
      const { month, day, turn, time, email, services } = element;

      if (element.services[serviceForTurns]&& element.services[serviceForTurns].available == true) {
        if (!result[month]) {
          result[month] = {};
        }
        if (!result[month][day]) {
          result[month][day] = {};
        }
      }
    });

    return result;
  } catch (error) {
    console.error("Error al obtener días laborales:", error);
    throw error;
  }
};

module.exports = getDaysByServicesController;
