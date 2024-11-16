const express = require("express");
const loginController = require("../controller/loginController");
const loginRoute = express.Router();
loginRoute.get("/", (req, res) => {
  res.redirect("/login");
});
loginRoute.get("/login", loginController.getLoginPage);
loginRoute.post("/login", loginController.handleAuth);
module.exports = loginRoute;
