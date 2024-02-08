const crypto = require("crypto");
const fs = require("fs");
const path = require("path");

function readFile(type) {
   const data = fs.readFileSync(
      path.join(__dirname, `../databases/${type}.json`),
      "utf8"
   );

   return JSON.parse(data);
}

function writeFile(type, data) {
   return fs.writeFileSync(
      path.join(__dirname, `../databases/${type}.json`),
      JSON.stringify(data)
   );
}

function genUUID() {
   return crypto.randomBytes(8).toString("hex");
}

function hashPassword(password, salt) {
   const iterations = 10000;
   const keylen = 8; // Output key length in bytes
   const digest = "sha512"; // Hash algorithm

   const hashedPassword = crypto
      .pbkdf2Sync(password, salt, iterations, keylen, digest)
      .toString("hex");
   return hashedPassword;
}

function isPostExists(id) {
   const data = readFile("posts");
   const postIndex = data.findIndex((post) => post._id === id);
   if (postIndex < 0) return false;
   return postIndex;
}

module.exports = {
   readFile,
   writeFile,
   hashPassword,
   genUUID,
   isPostExists,
};
