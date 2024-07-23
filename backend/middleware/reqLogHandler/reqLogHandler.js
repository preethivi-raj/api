const logEvents = require( "../logger/logEvents.js")


const reqLogHandler = (req , res  , next)=>{
    const message = `${req.method}  ${req.headers.origin}  ${req.url}`
    logEvents( message , "reqLog.txt")
    next()
}

module.exports  = reqLogHandler;