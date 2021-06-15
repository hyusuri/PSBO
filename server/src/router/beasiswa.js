const router = require("express").Router()
const { daftarBeasiswa, cekbeasiswa } = require("../controller/beasiswa")

router.post("/daftar", daftarBeasiswa)
router.post("/cek", cekbeasiswa)

module.exports = router