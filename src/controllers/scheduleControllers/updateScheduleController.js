const Schedule = require('../../DB/models/Schedule');

const updateScheduleController = async (newScheduleValues) => {
    try {
        const existingSchedule = await Schedule.findOne();

        existingSchedule.businessSchedule = newScheduleValues;

        await existingSchedule.save();

        return existingSchedule;
        
    } catch (error) {
        console.error('Error al actualizar el horario en la base de datos:', error);
        throw new Error('Error al actualizar el horario en la base de datos');
    }
};

module.exports = updateScheduleController;
