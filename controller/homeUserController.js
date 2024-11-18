const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
exports.getUserLogedInHome = [
  async function (req, res, next) {
    console.log("from this place" + req.user.id);
    const result = await prisma.folder.findMany({
      where: {
        userId: req.user.id,
      },
    });
    res.locals.Folders = result;
    console.log(result);
    next();
  },
  (req, res) => {
    res.render("home", {
      user: req.user,
      folders: res.locals.Folders,
    });
  },
];
