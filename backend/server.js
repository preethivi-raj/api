const express = require( "express")
const cors = require( "cors")
const dotenv = require( "dotenv")
const postRoutes = require( "./routes/post.routes.js")
const dbConnection = require( "./db/db.connection.js")
const reqLogHandler = require(  "./middleware/reqLogHandler/reqLogHandler.js")
const errorLogHandler = require( "./middleware/errorLogHandler/errorLogHandler.js")
const corsOptions = require( "./middleware/cors/corsMiddleWare.js")
const userRoutes = require("./routes/user.routes.js")

dotenv.config()
const app = express()
const PORT = process.env.PORT || 3000

app.use(reqLogHandler)

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded(
    {extended: false}
))


app.use("/api",postRoutes)
app.use("/api" , userRoutes)



app.use(errorLogHandler)

app.listen(PORT , ()=>{
    console.log(`Server i running on port ${PORT}`)
    dbConnection();
})

