const express = require("express");

const app = express();
const loginRoute = require("./routes/loginRoute");
const signUpRoute = require("./routes/signUpRoute");
const uploadRouter = require("./routes/uploadRouter");
const passport = require("passport");
const session = require("express-session");
const homeRouter = require("./routes/homeRouter");
const folderRoute = require("./routes/folderRoute");
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: "cat",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.get("/", loginRoute);
app.all("/login", loginRoute);
app.all("/sign-up", signUpRoute);
app.all("/home", homeRouter);
app.use("/upload", uploadRouter);
app.use("/folder", folderRoute);
app.listen(3000, console.log("server Listening"));
