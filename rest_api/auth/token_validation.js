const jwt = require("jsonwebtoken");
module.exports = {
  checkToken: (req, res, next) => {
    let token = req.get("authorization");
    if (token) {
      // Remove Bearer from string
      token = token.slice(7);
      jwt.verify(token, process.env.ENCRYPTION_KEY, (err, decoded) => {
        if (err) {
          return res.status(400).send("Error: Invalid Token.");
        } else {
          req.decoded = decoded;
          next();
        }
      });
    } else {
      return res.status(401).send("Error: Unauthorized user.");
    }
  }, checkAdmin: (req, res, next) => {
    let token = req.get("authorization");
    if (token) {
      // Remove Bearer from string
      token = token.slice(7);
      jwt.verify(token, process.env.ENCRYPTION_KEY, (err, decoded) => {
        if (err) {
          return res.status(400).send("Error: Invalid Token.");
        } else {
          req.decoded = decoded;
          if (decoded.role == "ADMIN"){
            next(); 
          } else {
            return res.status(401).send("Error: You do not have permission to do that!");
          }
        }
      });
    } else {
      return res.status(401).send("Error: Unauthorized user.");
    }
  }
};