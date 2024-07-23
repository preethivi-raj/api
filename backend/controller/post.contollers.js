const Post = require( "../model/post.model.js")

const getAllPosts = async (req , res)=>{
    try {
        const posts = await Post.find();
        if(!posts){
            return res.status(400).json({message : "No Posts Found"})
        }
        res.status(200).json(posts)

    } catch (error) {
        console.log(`Error in Fetching Posts Comtroller : ${error.message}`)
        res.status(500).json( {message : "Internal Server Error"})
    }
}

const postPosts = async (req , res)=>{
    try {
        const post = req.body;
        const newPost = new Post(post);
        if(!newPost){
            return res.status(400).json({message :"Creating a new post in not done"})
        }
        await newPost.save();
        res.status(200).json({message : "Post Created Successfully"})

    } catch (error) {
        console.log(`Error in posting post controller  ${error.message}`)
        res.status(500).json({ message : "Internal Server Error"})
    }
}

 const deletePosts = async (req , res)=>{
    try {
        const {id} = req.params;
        const post = await Post.findById(id);
        if(!post){
            return res.status(400).json({message : "No Post Found"})
        }

        const del = await Post.findByIdAndDelete(id);

        if(del){
            return res.status(200).json({message : "Post Deleted Successfully"})
        }
    } catch (error) {
        console.log(`Error in Fetching Post Controller : ${error.message}`)
        res.status(500).json({message : "Internal Server Error"})
    }
}

 const updatePosts = async (req , res)=>{
    try {
        const {id} = req.params;
        const post = await Post.findById(id);
        if(!post){
            return res.status(400).json({message : "No Post Found"})
        }

        const {username , title , body} = req.body;

        const updatedPost = {
            username : username || post.username,
            title : title || post.title,
            body : body || post.body
        }

        const update = await Post.findByIdAndUpdate(id , updatedPost , {new : true});

        if(update){
            return res.status(200).json({message : "Post Updated Successfully"})
        }

    } catch (error) {
        console.log( `Error in update Post Controller : ${error.message}`)
        res.status(500).json({message : "Internal Server Error"})
    }
}

module.exports = {
    getAllPosts,
    postPosts,
    deletePosts,
    updatePosts 
}