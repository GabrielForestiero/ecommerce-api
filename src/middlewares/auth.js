import jwt from "jsonwebtoken";

export function auth(req, _res, next) {
  const header = req.headers.authorization;
  if (!header) return next(); // 👈 guest permitido

  const token = header.split(" ")[1];
  if (!token) return next();

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // { id }
  } catch {
    req.user = null;
  }

  next();
}
