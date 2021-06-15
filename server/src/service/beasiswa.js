const pool = require("../../config/database")

module.exports = {
    createBeasiswa: (data, callback) => {
        pool.query(
            `insert into datapendaftar(username, beasiswa_id, nama, nim, fakultas, departemen, ipk, semester, no_rekening, link_ktm, link_kk) values (?,?,?,?,?,?,?,?,?,?,?)`,
            [
                data.username,
                data.beasiswa_id,
                data.nama,
                data.nim,
                data.fakultas,
                data.departemen,
                data.ipk,
                data.semester,
                data.no_rekening,
                data.link_ktm,
                data.link_kk
            ],
            (error, result) => {
                if(error){
                    return callback(error)
                }
                return callback(null, result)
            }
        )
    },

    cekBeasiswa: (data, callback) => {
        pool.query(
            `select * from datapendaftar where username=? and beasiswa_id=?`,
            [data.username,
            data.beasiswa_id],
            (error, result) => {
                if(error){
                    return callback(error)
                }
                return callback(null,result)
            }
        )
    }
}