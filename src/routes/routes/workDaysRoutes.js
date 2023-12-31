const { Router } = require("express");
const createDaysHandler = require("../../handlers/workDaysHandlers/createDaysHandler.js");
const getDaysHandler = require("../../handlers/workDaysHandlers/getDaysHandler.js");
const updateDayHandler = require("../../handlers/workDaysHandlers/updateDayHandler.js");
const getDaysByEmailHandler = require("../../handlers/workDaysHandlers/getDaysByEmailHandler.js");

const router = Router();

router.get('/', getDaysHandler);
router.post("/create", createDaysHandler);
router.post("/byemail", getDaysByEmailHandler);
router.put('/updateday', updateDayHandler);

module.exports = router;
