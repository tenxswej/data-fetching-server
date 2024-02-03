const fs = require("fs");
const path = require("path");

function readFile(type) {
   const data = fs.readFileSync(
      path.join(__dirname, `../databases/${type}.json`),
      "utf8"
   );

   return data;
}

module.exports = {
   readFile,
};
