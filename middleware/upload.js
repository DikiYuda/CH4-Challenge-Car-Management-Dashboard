const multer = require("multer")

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads/")
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname)
  },
})

const filerFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpeg"
  ) {
    cb(null, true)
  } else {
    cb(
      new Error(
        "Only files image with .png and .jpeg are allowed"
      ),
      false
    )
  }
}

const upload = multer({
  storage: storage,
  fileFilter,
})

module.exports = upload
