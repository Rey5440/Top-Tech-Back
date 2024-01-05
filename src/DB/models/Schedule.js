const { Schema, model } = require('mongoose');

const CreateSchedule = new Schema({
    businessSchedule: {
        type: Object,
        required: true
    },
}, {
    timestamps: true,
});

const Schedule = model('Schedule', CreateSchedule);

module.exports = Schedule;