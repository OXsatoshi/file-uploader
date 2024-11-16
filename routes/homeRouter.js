const homeUserController = require("../controller/homeUserController");
const express = require("express");
const homeRouter = express.Router();
homeRouter.get("/home", homeUserController.getUserLogedInHome);
module.exports = homeRouter;
