const Services = require('../../DB/models/Services');
const User = require('../../DB/models/User');

const createServicesController = async (service) => {
    try {
        const existingService = await Services.findOne({});
        const users = await User.find()

        if (existingService) {
            const isServiceExists = existingService.allServices.includes(service);

            if (isServiceExists) {
                // Si el servicio ya existe, retornar un mensaje indicando que ya existe
                return { message: 'El servicio ya existe en la colección.', existingService };
            } else {
                // Si no existe, agregar el nuevo servicio a la propiedad allServices
                existingService.allServices.push(service);

                // Actualizar el campo services de los usuarios
                await User.updateMany({}, { $set: { [`services.${service}`]: null } });

                // Guardar la actualización en la base de datos
                await existingService.save(); // guarda los servicios

                return existingService; // Puedes devolver el servicio actualizado si es necesario
            }
        } else {
            // Si no existe, crear un nuevo documento con el nuevo servicio
            const newService = new Services({
                allServices: [service]
            });

            // Actualizar el campo services de los usuarios
            await User.updateMany({}, { $set: { [`services.${service}`]: null } });

            // Guardar el nuevo servicio en la base de datos
            await newService.save();

            return newService; // Puedes devolver el nuevo servicio creado si es necesario
        }
    } catch (error) {
        console.error('Error al crear o actualizar el servicio:', error);
        throw new Error('Error al crear o actualizar el servicio');
    }
};

module.exports = createServicesController;