const multer = require("multer");
const upload = multer({ dest: "uploads/" });
exports.handleUploadFile = [
  upload.single("file"),
  function (req, res) {
    console.log(req.file);
    res.send("succes");
  },
];
