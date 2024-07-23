const mongoose = require("mongoose")

const dbConnection = async () => {
    try{
        const con = await mongoose.connect(process.env.MONGO_URI)
        console.log("Mongo DB Connected")
    }catch(error){
        console.log(`Error in Connecting Db ${error.message}`)
        process.exit(1);
    }
}

module.exports  = dbConnection;