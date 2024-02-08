const {
   readFile,
   genUUID,
   writeFile,
   isPostExists,
} = require("../utils/utility");

const auth = readFile("auth");
const data = readFile("posts");

const getPosts = (_, res) => {
   res.send(data);
};

const getPostDetail = (req, res) => {
   const { id } = req.param;
   const post = data.find((post) => post._id === id);
   if (!post) {
      res.status(404);
      return res.send("Post not found");
   } else {
      res.json(post);
   }
};

const filterPosts = (req, res) => {
   const { title, tag, author } = req.query;

   let response;

   if (tag) {
      const filterPosts = data.filter((post) => post.includes(tag));
      response = filterPosts;
   } else if (author) {
      const filterPosts = data.filter((post) => post.author === author);
      response = filterPosts;
   } else {
      const filterPosts = data.filter((post) => post.title === title);
      response = filterPosts;
   }

   res.json(response);
};

const newPost = (req, res) => {
   const { title, body, tag } = req.body;

   const loggedSessionIndex = req.userLogInIndex;
   const newPost = {
      _id: genUUID(),
      title,
      body,
      tag,
      author: auth[loggedSessionIndex].username,
   };

   writeFile("posts", newPost);
   res.status(201);
   res.json(newPost);
};

const editPost = (req, res) => {
   const { body, tag, id } = req.body;

   const postIndex = isPostExists(id);

   if (!postIndex) {
      return res.send("Post not found");
   } else {
      // check the owner
      const user = auth[req.userLogInIndex].username;
      const isOwner = data[postIndex].author === user;

      if (!isOwner) {
         res.status(401);
         return res.send("You can not edit other users' posts");
      }

      if (body) data[postIndex].body = body;
      if (tag) data[postIndex].tag = tag;
      writeFile(data, "posts");
      return res.json(data[postIndex]);
   }
};

const deletePost = (req, res) => {
   const { id } = req.param;
   const postIndex = isPostExists(id);

   if (!postIndex) {
      res.status(404);
      return res.send("Post not found");
   } else {
      const deletedPost = data[postIndex].title;
      data.splice(postIndex, 1);
      writeFile(data, "posts");
      res.send(`A post title of ${deletedPost} was deleted.`);
   }
};

module.exports = {
   getPosts,
   getPostDetail,
   filterPosts,
   newPost,
   editPost,
   deletePost,
};
