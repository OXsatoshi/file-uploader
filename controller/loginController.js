const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcryptjs = require("bcryptjs");
const passport = require("passport");
const LocalStrategy = require("passport-local");
exports.getLoginPage = (req, res) => {
  res.render("login");
};

passport.use(
  new LocalStrategy(
    { usernameField: "name", passwordField: "password" },
    async function (username, password, done) {
      const user = await prisma.user.findFirst({
        where: {
          name: username,
        },
      });
      if (!user) {
        console.log(user + "donest exisit");
        return done(null, false);
      }
      const match = await bcryptjs.compare(password, user.password);
      if (!match) {
        console.log("password incorrect");
        return done(null, false);
      }
      return done(null, user);
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(async function (id, done) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: id },
    });

    if (user) {
      done(null, user);
    } else {
      done(new Error("User not found")); // Handle if user is not found
    }
  } catch (error) {
    done(error); // Pass any database errors to Passport
  }
});
exports.handleAuth = passport.authenticate("local", {
  successRedirect: "/home",
  failureRedirect: "/login",
});
