const express = require("express");
const signUpRoute = express.Router();
const signUpController = require("../controller/signUpController");
signUpRoute.get("/sign-up", signUpController.getSignUpPage);
signUpRoute.post("/sign-up", signUpController.handleSignUp);
module.exports = signUpRoute;
