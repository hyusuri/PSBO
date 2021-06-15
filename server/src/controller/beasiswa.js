const { createBeasiswa, cekBeasiswa } = require("../service/beasiswa.js")
module.exports = {
    daftarBeasiswa: (req, res) => {
        const body = req.body
        cekBeasiswa(body,(err,results)=>{
            if(err){
                return res.status(500).json({
                    success:0,
                    message: err
                })
            }
            if(results < 1){
                createBeasiswa(body, (err, result)=>{
                    if(err){
                        console.log(err)
                        return res.status(500).json({
                            success: 0,
                            message: err
                        })
                    }
                    console.log(result)
                    return res.status(200).json({
                        success: 1,
                        message: result
                    })
                })
            }
            else{
                return res.status(200).json({
                    succes:1,
                    message: "Sudah Terdaftar"
                })
            }
        })
    },

    cekbeasiswa: (req, res) => {
        const body = req.body
        cekBeasiswa(body,(err,results)=>{
            if(err){
                return res.status(500).json({
                    success:0,
                    message: err
                })
            }
            if(results < 1){
                return res.status(200).json({
                    success: 1,
                    message: results
                })
            }
            else{
                return res.status(200).json({
                    success:1,
                    message: "terdaftar"
                })
            }
        })
    }
}