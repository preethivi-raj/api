const logEvents =require ("../logger/logEvents.js")

const errorLogHandler = (error, req, res, next) => {
    const message  = `${error.name} : ${error.message}`
    logEvents(message , "errorLog.txt")
    console.log(err.stack)
    res.status(500).json({message : "Internal Server Error"})
    next()
}

module.exports  = errorLogHandler;