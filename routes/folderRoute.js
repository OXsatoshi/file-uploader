const express = require("express");

const folderRoute = express.Router();
const folderController = require("../controller/folderController");
folderRoute.post("/NewFolder", folderController.handleCreatingNewFolder);

module.exports = folderRoute;
