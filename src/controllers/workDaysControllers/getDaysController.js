const WorkDay = require("../../DB/models/WorkDay");

const getDaysController = async () => {
  try {
    const days = await WorkDay.find({});

    const result = {};

    days.forEach((element) => {
      const { month, day, turn, time } = element;

      if (!result[month]) {
        result[month] = {};
      }

      if (!result[month][day]) {
        result[month][day] = {};
      }

      result[month][day] = {
        turn,
        time
      };
    });

    return result;
  } catch (error) {
    console.error("Error al obtener días laborales:", error);
    throw error;
  }
};

module.exports = getDaysController;