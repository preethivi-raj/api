const whitelist = ["https://www.google.com","http://localhost:5000" ]
const corsOptions={
    origin : (origin ,callback)=>{
        if(whitelist.indexOf(origin) !== -1 || !origin  ){ //!origin removed when productions 
            callback(null , true )
        }else{
            callback(new Error("Not Allowes By CORS"))
        }
    },
    optionsSuccessStatus : 200
}

module.exports =corsOptions