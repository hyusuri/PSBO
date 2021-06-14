const router = require("express").Router()
const { addKk, checkuser, addKtm } = require("../controller/lampiran")

const multer = require('multer')

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'images/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname )
  }
})

const upload = multer({ storage: storage })

router.post("/user", checkuser)

router.post('/upload-kk', upload.single('image-kk'), addKk)
router.post('/upload-ktm', upload.single('image-ktm'), addKtm)

module.exports = router