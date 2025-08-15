import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
  // res.cookie("jwt", token, {
  //   maxAge: 7 * 24 * 60 * 1000,
  //   httpOnly: true,
  //   sameSite: "none",
  // });
  res.cookie("jwt", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production", // true only in production (HTTPS)
    sameSite: process.env.NODE_ENV === "production" ? "none" : "lax", // none for cross-site in prod
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  });
  return token;
}; //strict
