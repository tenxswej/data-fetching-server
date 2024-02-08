const router = require("express").Router;
const {
   authenticate,
   checkBody,
   checkParam,
   checkAlreadyLoggedIn,
} = require("../middlewares/middlewares");

const {
   editUser,
   getUserDetail,
   getUsers,
   login,
   logout,
   register,
} = require("../handlers/users.handlers");

const route = router();

const userRoutes = route
   .get("/", getUsers)
   .get("/detail/:username", checkParam, getUserDetail)
   .get("/edit-user", authenticate, checkParam, editUser)
   .post("/register", checkBody, register)
   .post("/login", checkAlreadyLoggedIn, checkBody, login)
   .delete("/logout", authenticate, logout);

module.exports = userRoutes;
