const { Router } = require("express");
const getPersonalizationHandler = require("../../handlers/personalizationHandlers/getPersonalizationHandler");
const updatePersonalizationHandler = require("../../handlers/personalizationHandlers/updatePersonalizationHandler");

const router = Router();

router.get("/", getPersonalizationHandler);
router.put("/update", updatePersonalizationHandler);

module.exports = router;
