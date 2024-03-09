const WorkDay = require('../../DB/models/WorkDay');

const updateDayController = async (date, hairstylist, time) => {
    try {
        var existingDay = await WorkDay.findOne({ hairstylist, date });
        time.forEach(element => {
            if (element >= 0 && element < 1441) {
                if(existingDay.time[element] == null){
                existingDay.time[element] = 'free';
                }
            }
        });
        await existingDay.save();
        return existingDay;
    } catch (error) {
        console.error('Error al actualizar día de trabajo:', error);
        throw error;
    }
};

module.exports = updateDayController;