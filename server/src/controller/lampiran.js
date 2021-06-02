const { addKK, checkUser, create, addKTM } = require("../service/lampiran")

module.exports = {
    addKk: (req, res) => {
        if(!req.file){
            return res.status(500).json({
                success: 0,
                message: "NOT FILE DETECTED"
            })
        } 
        const username = req.body.username
        const filepath = req.file.path
        console.log(username, filepath)
        addKK(username, filepath ,(err, results) => {
            if(err) {
                console.log(err)
                return res.status(500).json({
                    succes: 0,
                    message: "database error"
                })
            }
            return res.status(200).json({
                success: 1,
                data: results
            })
        })
    },

    addKtm: (req, res) => {
        if(!req.file){
            return res.status(500).json({
                success: 0,
                message: "NOT FILE DETECTED"
            })
        } 
        const username = req.body.username
        const filepath = req.file.path
        console.log(username, filepath)
        addKTM(username, filepath ,(err, results) => {
            if(err) {
                console.log(err)
                return res.status(500).json({
                    succes: 0,
                    message: "database error"
                })
            }
            return res.status(200).json({
                success: 1,
                data: results
            })
        })
    },

    checkuser: (req, res) => {
        const username = req.body.username;
        console.log(req.body)
        checkUser(username, (err, results) => {
            if(err) {
                console.log(err)
                return res.status(500).json({
                    succes: 0,
                    message: "database error"
                })
            }
            if(results < 1){
                create(username, (err, result) => {
                    if(err) {
                        console.log(err)
                        return res.status(500).json({
                            success: 0,
                            message: "database error"
                        })
                    }
                    return res.status(200).json({
                        success: 1,
                        message: result
                    })
                })
            }
            else{
                console.log(results)
                return res.status(200).json({
                    success: 1,
                    message: results
                })
            }
        })
    }
}