import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  // Set cookie named 'jwt'. Use stricter SameSite in development and
  res.cookie("jwt", token, {
    httpOnly: true,
    secure: false,       // only HTTPS
    sameSite: "none",   // cross-site requests allowed
    path: "/",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });


  return token;
};

