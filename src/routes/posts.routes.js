const router = require("express").Router;
const {
   authenticate,
   checkBody,
   checkParam,
} = require("../middlewares/middlewares");
const {
   deletePost,
   editPost,
   getPostDetail,
   getPosts,
   newPost,
   filterPosts,
} = require("../handlers/posts.handlers");

const route = router();

const postRoutes = route
   .get("/", getPosts)
   .get("/post-detail/:id", checkParam, getPostDetail)
   .get("/posts-filter/", checkParam, filterPosts)
   .post("/new-post", authenticate, checkBody, newPost)
   .put("/edit-post", authenticate, checkBody, editPost)
   .delete("/delete-post/:id", authenticate, checkParam, deletePost);

module.exports = postRoutes;
