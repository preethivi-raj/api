const {v4 : uuid }  = require( "uuid")
const { format } = require( "date-fns")
const fs = require( "fs")
const path = require( "path")

__dirname = path.resolve(path.dirname(''));
const fsPromises = require('fs').promises;

const logEvents = async (message , logName) => {
    try {
        const dataTime = `${format(new Date(), "dd-mm-yyyy hh:mm:ss")}`;
        const  logItem = `{"id" : "${uuid()}" , "dateTime" : "${dataTime}" , "message" : "${message}"}, \n`

        if(!fs.existsSync(path.join(__dirname , "Logs"))){
            fsPromises.mkdir(path.join(__dirname , "Logs"))
        }

        await fsPromises.appendFile(path.join(__dirname , "Logs" , logName) , logItem)
    } catch (error) {
        console.log(`Error in Logging Middleware : ${error.message}`)
        res.status(500).json({message : "Internal Server Error"})   
    }
}


module.exports  = logEvents;