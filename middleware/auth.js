const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function (req, res, next) {
  // Get the token from the header
  const token = req.header("x-auth-token");

  //check if not tokeen
  if (!token) {
    return res.status(400).json({ msg: "No token, authorization denied" });
  }

  // verify tokens
  try {
    const decoded = jwt.verify(token, config.get("jwtSecret"));

    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(400).json({ msg: "Token is not valid" });
  }
};
