const express = require("express")
const {getAllUsers , postUsers} = require("../controller/user.controllers.js")

const router  = express.Router();


router.get("/users/" , getAllUsers)
router.post("/users/post" , postUsers)





module.exports =router;