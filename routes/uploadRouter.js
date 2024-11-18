const express = require("express");
const uploadRouter = express.Router();
const uploadController = require("../controller/fileUpload");
uploadRouter.post("/uploadFile", uploadController.handleUploadFile);

module.exports = uploadRouter;
