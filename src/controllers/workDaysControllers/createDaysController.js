const WorkDay = require("../../DB/models/WorkDay");

const createDaysController = async (month, day, email, time, services) => {
  try {
    const newDay = new WorkDay({
      month,
      day,
      email,
      time,
      turn: false,
      services,
    });
    await newDay.save();
    return newDay;
  } catch (error) {
    console.error("Error al crear día de laboral:", error);
    throw error;
  }
};

module.exports = createDaysController;
