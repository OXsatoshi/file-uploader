const { PrismaClient } = require("@prisma/client");
const { body, validationResult } = require("express-validator");
const prisma = new PrismaClient();
const bcrypt = require("bcryptjs");
exports.getSignUpPage = (req, res) => {
  res.render("sign-up");
};
exports.handleSignUp = async (req, res) => {
  await body("name")
    .isAlphanumeric()
    .withMessage("Name must contain only alphanumeric characters")
    .run(req);
  await body("password")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long")
    .run(req);
  const result = validationResult(req);
  if (result.isEmpty()) {
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);

      const newUser = await prisma.user.create({
        data: {
          name: req.body.name,
          password: hashedPassword,
        },
      });

      res.redirect("/login");
    } catch (err) {
      console.log(err);
      res.status(500).send("internal server error");
    }
  } else {
    res.render("sign-up", {
      errors: result.errors,
    });
  }
};
