const { Router } = require('express');

const userRoutes = require('./routes/userRoutes.js');  // trae el modulo userRouter de..
const createDays = require('./routes/workDaysRoutes.js')
const servicesRoutes = require('./routes/servicesRoutes.js')
const scheduleRoutes = require('./routes/scheduleRoutes.js')


const router = Router();  // ejecuta Router de express

router.use("/users", userRoutes);  //  .use de Router lleva path y callback (previamente importado)
router.use('/workdays', createDays)
router.use('/services', servicesRoutes)
router.use('/schedule', scheduleRoutes)

module.exports = router;
