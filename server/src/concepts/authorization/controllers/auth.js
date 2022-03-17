import "dotenv/config";
import jwt from "jsonwebtoken";

export const isTokenValid = async (req, res) => {
  const token = req.headers.token;
  if(!token) {
    await res.status(401).send("Access denied");
    console.log("odmowa dostępu");
  } 

  try {
    // const verify = Boolean(jwt.verify(token, process.env.TOKEN_SECRET));
    const verify = jwt.verify(token, process.env.TOKEN_SECRET);
    res.status(200).send("Authorization correct");
    console.log(verify);
  } catch (err) {
    res.status(400).send("Wrong authorization!")
    console.log("NOOO");
  }

}

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
  const token = req.headers.token;
  if (!isTokenValid(token)) return res.status(401).send("You have no access to this resource!");

  next();
};

export const isAdmin = (req, res, next) => {
  const token = req.headers.token;
  if (!isTokenValid(token)) return res.status(401).send("You have no access to this resource!");

  const decoded = jwt.decode(token);
  if (!decoded.rol) return res.status(401).send("You have no authorisation!");

  next();
};

export const isThatUser = (req, res, next) => {
  const token = req.headers.token;
  if (!isTokenValid(token)) return res.status(401).send("You have no access to this resource!");

  const decoded = jwt.decode(token);
  if (!decoded || decoded.sub !== req.params.id)
    return res.status(401).send("Wrong authorisation data!");

  next();
};












export const activateAccount = (req, res, user) => {
  const activateToken = jwt.sign(
    { email: user.email },
    process.env.TOKEN_SECRET,
    { expiresIn: 600000 }
  );
  jwt.verify(activateToken, process.env.TOKEN_SECRET, (err) => {
    if (err)
      return res.status(401).send("Email verification failed, possibly the link is invalid or expired");
  });
  return activateToken;
};
