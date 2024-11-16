exports.getUserLogedInHome = (req, res) => {
  res.render("home", {
    user: req.user,
  });
};
