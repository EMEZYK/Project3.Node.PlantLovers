import "dotenv/config";
import jwt from "jsonwebtoken";

const isTokenValid = (token) => {
  if (!token) {
    return false;
  }

  try {
    jwt.verify(token, process.env.TOKEN_SECRET);
    return true;
  } catch (err) {
    return false;
  }
};

export const generateToken = (user, expiresIn) => {
  const accessToken = jwt.sign(
    { sub: user._id, rol: user.isAdmin },
    process.env.TOKEN_SECRET,
    { expiresIn: expiresIn }
  );
  return accessToken;
};

export const isAuthenticated = (req, res, next) => {
  const token = req.headers.token;
  const check = isTokenValid(token);
  if (!check) {
    return res.status(401).send("Access denied!");
  }

  next();
};

export const isAdmin = (req, res, next) => {
  const token = req.headers.token;
  const isCorrect = isTokenValid(token);

  if (!isCorrect) {
    return res.status(401).send("Access denied!");
  }

  const decoded = jwt.decode(token);
  if (!decoded.rol) {
    return res.status(401).send("You have no authorisation!");
  }

  next();
};

export const isThatUser = (req, res, next) => {
  const token = req.headers.token;
  const isCorrect = isTokenValid(token);

  if (!isCorrect) {
    return res.status(401).send("Access denied!");
  }

  const decoded = jwt.decode(token);
  if (!decoded || decoded.sub !== req.params.id) {
    return res.status(401).send("Wrong authorisation data!");
  }

  next();
};

export const isThatUserOrAdmin = (req, res, next) => {
  const token = req.headers.token;
  const isCorrect = isTokenValid(token);

  if (!isCorrect) {
    return res.status(401).send("Access denied!");
  }

  const decoded = jwt.decode(token);
  if (!decoded || (!decoded.rol && decoded.sub !== req.params.id)) {
    return res
      .status(401)
      .send("You are not authorized to perform this action!");
  }

  next();
};
