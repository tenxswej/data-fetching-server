const {
   readFile,
   writeFile,
   genUUID,
   hashPassword,
} = require("../utils/utility");

const SECRET = require("../SECRET");

const data = readFile("users");

const auth = readFile("auth");

const getUsers = (_, res) => {
   res.json(data);
};

const getUserDetail = (req, res) => {
   const { username } = req.query;
   const findUser = data.find((user) => (user.username = username));
   if (!findUser) return res.sendStatus(404);
   res.json(findUser);
};

const editUser = (req, res) => {
   const { name, username, password } = req.body;

   data.forEach((user) => {
      if (user.username === username) {
         if (name) user.name = name;
         if (password) user.username = password;
      }
   });
   writeFile("users", data);

   const userCredentials = {
      username,
      password,
      _timestamp: auth[userLogInIndex]._timestamp,
   };

   auth.splice(req.userLogInIndex, 1);
   writeFile("auth", userCredentials);
};

const register = (req, res) => {
   const UUID = genUUID();
   const { name, password } = req.body;
   const newUser = {
      _id: UUID,
      username: "@" + UUID.slice(0, 4) + name, // only for example, because crypto uses many resources
      name: name,
      password, // needs to be hashed
   };

   data.push(newUser);
   writeFile("users", data);
   res.status(201);
   writeFile("users", data);
   res.json({
      message: "New user created",
      data: { username: newUser.username, name },
   });
};

const login = (req, res) => {
   const { username, password } = req.body;

   // Authentication
   const findUser = data.findIndex(
      (user) => user.username === username && user.password === password
   );

   if (findUser < 0) {
      res.status(403);
      return res.send("You're not authenticated.");
   } else {
      const userCredentials = {
         username,
         password,
         _timestamp: new Date().toISOString(),
      };
      auth.push(userCredentials);

      writeFile("auth", auth);
      return res.json({
         message: `Welcome back ${data[findUser].name}!`,
         data: SECRET,
      });
   }
};

const logout = (req, res) => {
   const { username, password } = req.body;
   const userIndex = auth.findIndex(
      (user) => user.username === username && user.password === password
   );

   if (userIndex < 0) {
      res.status(401);
      return res.send("You're not authorized.");
   } else {
      auth.splice(userIndex, 1);
      writeFile("auth", auth);
      return res.send(`See you again ${data[userIndex].name}.`);
   }
};

module.exports = {
   getUsers,
   getUserDetail,
   editUser,
   register,
   login,
   logout,
};
