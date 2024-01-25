const { Router } = require("express");
const createDaysHandler = require("../../handlers/workDaysHandlers/createDaysHandler.js");
const updateDayHandler = require("../../handlers/workDaysHandlers/updateDayHandler.js");
const getDaysByEmailHandler = require("../../handlers/workDaysHandlers/getDaysByEmailHandler.js");
const getDaysByServicesHandler = require("../../handlers/workDaysHandlers/getDaysByServicesHandler.js");
const getDaysHandler = require("../../handlers/workDaysHandlers/getDaysHandler.js");
const getDayForTurnsHandler = require("../../handlers/workDaysHandlers/getDayForTurnsHandler.js");
const createTurnHandler = require("../../handlers/workDaysHandlers/createTurnHandler.js");
const getMyTurnsHandler = require("../../handlers/workDaysHandlers/getMyTurnsHandler.js");

const router = Router();

router.get("/", getDaysHandler);
router.post("/dayforturns", getDayForTurnsHandler);
router.post("/byservices", getDaysByServicesHandler);
router.post("/create", createDaysHandler);
router.post("/byemail", getDaysByEmailHandler);
router.put("/updateday", updateDayHandler);
router.put("/turn", createTurnHandler);
router.post("/myturns", getMyTurnsHandler);

/* router.get('/getHours', getHoursHandler); */

module.exports = router;
