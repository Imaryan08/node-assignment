const jwt = require("jsonwebtoken");

const authenticateToken = (req,res,next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (token) {
    jwt.verify(token, "secret", (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: "Invalid token", error: err });
      }
      console.log({decoded});
      req.user = decoded;
      next();
    });
  } else {
    return res.status(401).json({ message: "Missing token" });
  }
};

module.exports = authenticateToken;
