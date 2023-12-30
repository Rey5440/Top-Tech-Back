const { Router } = require("express");
const getServicesHandler = require("../../handlers/servicesHandlers/getServicesHandler");
const createServicesHandler = require("../../handlers/servicesHandlers/createServicesHandler");
const deleteServicesHandler = require("../../handlers/servicesHandlers/deleteServicesHandler");

const router = Router();

router.get("/", getServicesHandler);
router.post("/create", createServicesHandler);
router.delete("/delete", deleteServicesHandler);

module.exports = router;