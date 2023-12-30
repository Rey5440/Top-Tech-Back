const { Router } = require("express");
const createDaysHandler = require("../../handlers/workDaysHandlers/createDaysHandler.js");
const getDaysHandler = require("../../handlers/workDaysHandlers/getDaysHandler.js");
const updateDayHandler = require("../../handlers/workDaysHandlers/updateDayHandler.js")

const router = Router();

router.get('/', getDaysHandler);
router.post("/create", createDaysHandler);
router.put('/updateday', updateDayHandler);

/* router.get('/getHours', getHoursHandler); */


module.exports = router;
