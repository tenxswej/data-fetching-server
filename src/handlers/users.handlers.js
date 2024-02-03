const { readFile } = require("../utils/utility");
const data = readFile("users");

const getUsers = (_, res) => {
   res.send(data);
};

const getUserDetail = (req, res) => {
   console.log(req.query)
   res.send("User Detail");
};

const editUser = (req, res) => {
   res.send("User edit");
};

const register = (res, req) => {
   res.send("register");
};

const login = (res, req) => {
   res.send("login");
};

const logout = (res, req) => {
   res.send("logout");
};

module.exports = {
   getUsers,
   getUserDetail,
   editUser,
   register,
   login,
   logout,
};
