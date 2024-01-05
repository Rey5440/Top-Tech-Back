const Schedule = require('../../DB/models/Schedule');

const getScheduleController = async () => {
    try {
        const existing = await Schedule.findOne();

        if (existing) {
            return existing;
        } else {
            const newSchedule = new Schedule({
                businessSchedule: [
                    { open: 0, close: 1441 },
                    { open: 0, close: 1441 },
                    { open: 0, close: 1441 },
                    { open: 0, close: 1441 },
                    { open: 0, close: 1441 },
                    { open: 0, close: 1441 },
                    { open: 0, close: 1441 },
                ],
            });
            await newSchedule.save();
            return newSchedule;
        }
    } catch (error) {
        console.error('Error al obtener el horario desde la base de datos:', error);
        throw new Error('Error al obtener el horario desde la base de datos');
    }
};

module.exports = getScheduleController;
