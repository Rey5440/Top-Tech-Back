const WorkDay = require("../../DB/models/WorkDay");

const createDaysController = async (month, day, email, time, services) => {
  try {
    const existing = await WorkDay.find({ month, day, email });

    if (existing.length > 0) {
      throw new Error("El día ya existe para el usuario y la fecha proporcionados.");
    }

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
    console.error("Error al crear día laboral:", error);
    throw error;
  }
};

module.exports = createDaysController;
