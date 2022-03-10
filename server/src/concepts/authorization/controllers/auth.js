import "dotenv/config";
import jwt from "jsonwebtoken";

const checkToken = (req, res) => {
  let token = req.headers.token;
  if (!token) {
    token = req.body.token;
  }
  if (!token) return res.status(401).send("Access token is missing");

  return checkToken;
}

export const generateToken = (req, user) => {
  const accessToken = jwt.sign(
    { sub: user._id, rol: user.isAdmin },
    process.env.TOKEN_SECRET,
    { expiresIn: 864000000 }
  );

  return accessToken;
};


export const isAuthenticated = (req, res, next) => {
  checkToken(req, res);

  jwt.verify(token, process.env.TOKEN_SECRET, (err) => {
    if (err) return res.status(401).send("Invalid token");
  });
  next();
};

export const isAdmin = (req, res, next) => {
  checkToken(req, res);

  jwt.verify(token, process.env.TOKEN_SECRET, (err) => {
    if (err) return res.status(401).send("Wrong authorization!");
  });

  const decoded = jwt.decode(token);
  if (!decoded.rol) return res.status(401).send("You have no authorisation!");

  next();
};

export const isThatUser = (req, res, next) => {
  checkToken(req, res);

  jwt.verify(token, process.env.TOKEN_SECRET, (err) => {
    if (err) return res.status(401).send("Wrong authorization!");
  });

  const decoded = jwt.decode(token);
  if (!decoded || decoded.sub !== req.params.id)
    return res.status(401).send("Wrong authorisation data!");

  next();
};

export const activateAccount = (req, user) => {
  const activateToken = jwt.sign(
    { email: user.email },
    process.env.TOKEN_SECRET,
    { expiresIn: 600000 }
  );

  jwt.verify(activateToken, process.env.TOKEN_SECRET, (err) => {
    if (err)
      return res.status(401).send("Email verification failed, possibly the link is invalid or expired");
  });

  return activateAccount;
};
