import "dotenv/config";
import jwt from "jsonwebtoken";
import sendEmail from "../../../services/mail/index.js";

export const generateToken = (req, res, user) => {
  const accessToken = jwt.sign(
    { sub: user._id, rol: user.isAdmin },
    process.env.TOKEN_SECRET,
    { expiresIn: 864000000 }
  );
  res.send(accessToken);
  // return accessToken;
};

export const isAuthenticated = (req, res, next) => {
  let token = req.headers.token;
  if (!token) {
    token = req.body.token;
  }
  if (!token) return res.status(401).send("Access token is missing");

  jwt.verify(token, process.env.TOKEN_SECRET, (err) => {
    if (err) return res.status(400).send("Invalid token");
    next();
  });
};

export const isAdmin = (req, res, next) => {
  let token = req.headers.token;
  if (!token) {
    token = req.body.token;
  }
  if (!token) return res.status(401).send("Access denied");

  jwt.verify(token, process.env.TOKEN_SECRET, (err) => {
    if (err) return res.status(401).send("Wrong authorization!");
  });

  const decoded = jwt.decode(token);
  if (!decoded.rol) return res.status(401).send("You have no authorisation!");

  next();
};

export const isThatUser = (req, res, next) => {
  let token = req.headers.token;
  if (!token) {
    token = req.body.token;
  }
  if (!token) return res.status(401).send("Access denied");

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
    { expiresIn: 3600000 }
  );

  jwt.verify(activateToken, process.env.TOKEN_SECRET, (err) => {
    if (err) return res.status(401).send("Email verification failed, possibly the link is invalid or expired");
  });

  const emailData = {
    to: user.email,
    text: "Your account was successfully activated!",
    subject: "Account activate - confirmation",
  };
  sendEmail(emailData);
};
