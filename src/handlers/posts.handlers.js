const { readFile } = require("../utils/utility");

const getPosts = (_, res) => {
   const data = readFile("posts");
   res.send(data);
};

const getPostDetail = (req, res) => {
   res.send("Post Detail");
};

const filterPosts = (req, res) => {
   console.log(req.query)
   res.send("filtered Posts");
};

const newPost = (res, req) => {
   res.send("new post");
};

const editPost = (res, req) => {
   res.send("edit post");
};

const deletePost = (res, req) => {
   res.send("edit post");
};

module.exports = {
   getPosts,
   getPostDetail,
   filterPosts,
   newPost,
   editPost,
   deletePost,
};
