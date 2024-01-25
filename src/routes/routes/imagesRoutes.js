const { Router } = require("express");
const getImagesHandler = require("../../handlers/imagesHandlers/getImagesHandler");
const updateImagesHandler = require("../../handlers/imagesHandlers/updateImagesHandler");


const router = Router();

router.get("/", getImagesHandler);
router.put("/update", updateImagesHandler);



module.exports = router;
