const { Schema, model } = require('mongoose');

const CreateServices = new Schema({
    allServices: {
        type: Array,
        required: true
    },
}, {
    timestamps: true,
});

const Services = model('Services', CreateServices);

module.exports = Services;