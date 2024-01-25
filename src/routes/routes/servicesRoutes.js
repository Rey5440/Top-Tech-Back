const { Router } = require("express");
const getServicesHandler = require("../../handlers/servicesHandler/getServicesHandler");
const createServicesHandler = require("../../handlers/servicesHandler/createServicesHandler");
const deleteServicesHandler = require("../../handlers/servicesHandler/deleteServicesHandler");
const updateServicesImgHandler = require("../../handlers/servicesHandler/updateServicesImgHandler");

const router = Router();

router.get("/", getServicesHandler);
router.post("/create", createServicesHandler);
router.post("/delete", deleteServicesHandler);
router.post("/updateimg", updateServicesImgHandler);


module.exports = router;
