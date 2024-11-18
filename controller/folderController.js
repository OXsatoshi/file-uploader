const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
exports.handleCreatingNewFolder = async (req, res) => {
  await prisma.folder.create({
    data: {
      userId: req.user.id,
      name: req.body.newFolder,
    },
  });
  res.redirect("/home");
};
