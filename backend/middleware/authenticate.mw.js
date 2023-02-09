const jwt = require("jsonwebtoken");
require("dotenv").config();

const authenticate = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token, process.env.jwtKey, (err, user) => {
      if (err) res.status(403).send({ msg: "Token is not valid" });

      req.user = user;
      // console.log(user,"in authenticate");
      next();
    });
  } else {
    res.status(401).send({ msg: "Please Login First" });
  }
};

const verifyTokenAndAuthorization = (req, res, next) => {
    authenticate(req, res, () => {
        // console.log(req.user.id, "in verifytokenandauthorization");
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      
      res.status(403).json({ msg: "You are not Authorized" });
    }
  });
};

const verifyTokenAndAdmin = (req, res, next) => {
  authenticate(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You are not alowed to do that!");
    }
  });
};

module.exports = {
  authenticate,
  verifyTokenAndAdmin,
  verifyTokenAndAuthorization,
};
