const jwt = require("jsonwebtoken");
const JWT_SECRET = "sadlnananc454@$#knsn";

const fetchuser = (req, res, next) => {
  //Get the user from the jwt token and id to req object

  const token = req.header("auth-token");
  if (!token) {
    res.status(401).send({ error: "Please authenticate using valid token!" });
  }
  try {
    const data = jwt.verify(token, JWT_SECRET);
    req.user = data.user;

    next();
  } catch (err) {
    res.status(401).send({ error: "Please authenticate using valid token!" });
  }
};

module.exports = fetchuser;
