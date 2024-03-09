const { Router } = require("express");
const getCancelledForWorkerHandler = require("../../handlers/cancelledTurnsHandlers/cancelledTurnsHandler");
const getCountCancelledHandler = require("../../handlers/cancelledTurnsHandlers/getCountCancelledHandler");

const router = Router();


router.post("/getforworker", getCancelledForWorkerHandler)
router.post("/getcount", getCountCancelledHandler)

/* router.get('/getHours', getHoursHandler); */

module.exports = router;