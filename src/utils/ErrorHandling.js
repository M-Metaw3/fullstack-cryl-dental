module.exports =(err,req,res,next)=>{

    err.statuscode= err.statuscode||500
    err.status= err.status||"200"
    
    res.status(err.statuscode).json({
        error:err.statuscode,
        messge:err.message
    })
    
    }