const WorkDay = require("../../DB/models/WorkDay");

const getDaysController = async (email) => {
  try {
    const days = await WorkDay.find({ email });

    const result = {};

    days.forEach((element) => {
      const { month, day, time, turn, services } = element;

      if (!result[month]) {
        result[month] = {};
      }

      if (!result[month][day]) {
        result[month][day] = {};
      }

      result[month][day] = {
        time,
        turn,
        services,
      };
    });

    return result;
  } catch (error) {
    console.error("Error al obtener días laborales:", error);
    throw error;
  }
};

module.exports = getDaysController;


