const { Router } = require("express");

const router = Router();


const createUserHandler = require("../../handlers/userHandlers/createUserHandler.js");
const getAllUsersHandler = require("../../handlers/userHandlers/getAllUsersHandler.js");
const updateUserHandler = require("../../handlers/userHandlers/updateUserHandler.js");

router.get('/all', getAllUsersHandler);
router.post("/create", createUserHandler);
router.put("/update", updateUserHandler);
/* router.delete("/delete", deleteUserHandler);
 */

module.exports = router;
