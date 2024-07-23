const express = require( 'express')
const { getAllPosts  , postPosts , deletePosts , updatePosts} = require( "../controller/post.contollers.js")

const router = express.Router();

router.get("/" , getAllPosts)
router.post("/post" , postPosts)
router.delete("/delete/:id" , deletePosts)
router.put("/update/:id" , updatePosts)




module.exports  = router;