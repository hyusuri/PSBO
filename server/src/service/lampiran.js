const pool = require("../../config/database")

module.exports = {
    addKK: (username, filepath ,callback) => {
        pool.query(
            `update databerkas set link_kk=? where username=?`,
            [filepath,
            username],
            (error, result) => {
                if(error){
                    return callback(error)
                }
                return callback(null,result)
            }
        )
    },

    addKTM: (username, filepath ,callback) => {
        pool.query(
            `update databerkas set link_ktm=? where username=?`,
            [filepath,
            username],
            (error, result) => {
                if(error){
                    return callback(error)
                }
                return callback(null,result)
            }
        )
    },

    checkUser: (data, callback) => {
        pool.query(
            `select * from databerkas where username=?`,
            [data],
            (error, result) => {
                if(error){
                    callback(error)
                }
                return callback(null,result)
            }
        )
    },

    create: (data, callback) => {
        pool.query(
            `insert into databerkas(username) values(?)`,
            [data],
            (error, result) => {
                if(error) {
                    return callback(error)
                }
                return callback(null, result)
            }
        )
    }
}