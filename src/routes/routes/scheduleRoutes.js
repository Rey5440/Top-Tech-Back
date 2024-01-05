const { Router } = require("express");
const updateScheduleHandler = require("../../handlers/scheduleHandlers/updateScheduleHandler");
const getScheduleHandler = require("../../handlers/scheduleHandlers/getScheduleHandler");


const router = Router();

router.get("/", getScheduleHandler);
router.put("/update", updateScheduleHandler);

module.exports = router;