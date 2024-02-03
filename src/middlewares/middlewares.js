function authenticate(req, res, nx) {
   nx();
}

function checkBody(req, res, nx) {
   nx();
}

function checkParam(req, res, nx) {
   if (req.url.includes("users")) {
      // check username
   } else {
      // check id
   }
   nx();
}

module.exports = {
   authenticate,
   checkBody,
   checkParam,
};
