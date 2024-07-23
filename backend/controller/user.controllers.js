const User = require("../model/user.model.js")

const getAllUsers = async (req , res)=>{
     try {
        const users = await User.find();
        if(!users){
            return res.status(404).json({message : "Users Not Found"})
        }
        res.status(200).json(users);
     } catch (error) {
        console.log(`Error in get All User controller : ${error.message}`)
        res.status(500).json({message : "Internal Server Error"})
     }
}

const postUsers = async (req , res)=>{
    try {
        const user  = req.body;
        const newUser = new User({
            username : user.username,
            email :user.email,
            gender : user.gender,
            bio : user.bio
        })
        if(!newUser){
            return res.status(400).json({message : "Creatin new user is not done."})
        }

        await newUser.save();

        res.status(200).json({message : "New user Successfully created"})
    } catch (error) {
        console.log(`Error in post user controller : ${error.message}`)
        res.status(500).json({message : "Internal Servre Error"})
    }
}

module.exports = {getAllUsers , postUsers}
