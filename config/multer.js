const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "uploads/");
  },
  filename: function (req, file, callback) {
		const time = new Date().getTime()
		// console.log(file)
    callback(null, `${time}_${file.originalname}`);
  },
	
});

const upload = multer({ storage });

module.exports = upload;
