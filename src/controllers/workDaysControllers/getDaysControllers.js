const WorkDay = require('../../DB/models/WorkDay');

const getDaysController = async () => {
    try {
        const days = await WorkDay.find();
        const allDays = days.map(element =>{
            
        })
        return days;
    } catch (error) {
        console.error('Error al obtener días laborales:', error);
        throw error;
    }
};

module.exports = getDaysController;

/* FORMATO DE RESPUESTA

days = [
    { date: '2023-12-14', hairstylist: 'Calenius' },
    { date: '2023-12-15', hairstylist: 'Facundo' },
    Otros documentos...
  ] */