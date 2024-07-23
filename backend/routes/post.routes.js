const express = require( 'express')
const { getAllPosts  , postPosts , deletePosts , updatePosts} = require( "../controller/post.contollers.js")

const router = express.Router();

router.get("/posts/" , getAllPosts)
router.post("/posts/post" , postPosts)
router.delete("/posts/delete/:id" , deletePosts)
router.put("/posts/update/:id" , updatePosts)




module.exports  = router;