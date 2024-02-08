const SECRET = require("../SECRET");
const { readFile } = require("../utils/utility");

const auth = readFile("auth");
const users = readFile("users");

function checkAlreadyLoggedIn(req, res, nx) {
   const { username, password } = req.body;

   // Check user already logged in
   const userIndex = auth.findIndex(
      (user) => user.username === username && user.password === password
   );

   if (userIndex >= 0) {
      return res.json({
         message: `You're already logged in!`,
         data: SECRET,
      });
   } else {
      return nx();
   }
}

function authenticate(req, res, nx) {
   const token = req.headers.authorization;
   if (!token || (typeof token === "string" && !token.startsWith("Bearer"))) {
      return res.sendStatus(401);
   } else {
      // checking token ( DO NOT USE IN REAL WORLD)
      const checkAuth = new RegExp(SECRET);

      checkAuth.test(token.split("Bearer")[1]);

      if (!checkAuth) return res.sendStatus(400);

      const checkUser = users.findIndex(
         (user) =>
            user.username === req.body.username &&
            user.password === req.body.password
      );

      if (checkUser < 0) return res.sendStatus(400);

      const isUserLoggedIn = auth.findIndex(
         (user) =>
            user.id === users[checkUser].id &&
            user.password === users[checkUser].password
      );
      if (isUserLoggedIn < 0) return res.sendStatus(401);

      req.userLogInIndex = isUserLoggedIn;
      nx();
   }
}

function checkBody(req, res, nx) {
   if (req.baseUrl.includes("users")) {
      if (!req.body.username || !req.body.password) {
         res.status(400);
         return res.send("Invalid data");
      } else {
         nx();
      }
   } else if (req.url.includes("new-post")) {
      if (
         !req.body.body ||
         !req.body.title ||
         !req.body.tag ||
         typeof req.body.body !== "string" ||
         typeof req.body.title !== "string" ||
         !Array.isArray(req.body.tag)
      ) {
         res.status(400);
         return res.send("Invalid data");
      } else {
         nx();
      }
   } else if (req.url.includes("edit-post-body")) {
      if (!req.body.body || !req.body.id) {
         res.status(400);
         return res.send("Both Id & Body are required to edit");
      } else {
         nx();
      }
   } else if (req.url.includes("edit-post-tag")) {
      if (!req.body.tag || !req.body.id) {
         res.status(400);
         return res.send("Both Id & tag are required to edit");
      } else {
         nx();
      }
   } else {
      if (!req.body.id) {
         res.status(400);
         return res.send("ID is required");
      } else {
         nx();
      }
   }
}

function checkParam(req, res, nx) {
   if (req.baseUrl.includes("users")) {
      const username = req.query.username;
      if (!username) {
         res.status(400);
         return res.send("Invalid data");
      } else {
         nx();
      }
   } else if (
      req.baseUrl.includes("posts") &&
      req.url.includes("post-filter")
   ) {
      // title, tag, author but at least one must be included
      const { title } = req.query;
      if (!title) {
         res.status(400);
         return res.send("Invalid data");
      } else {
         nx();
      }
   } else {
      const id = req.param.id;
      if (!id) {
         res.status(400);
         return res.send("Id is required");
      } else {
         nx();
      }
   }
}

module.exports = {
   authenticate,
   checkBody,
   checkParam,
   checkAlreadyLoggedIn,
};
