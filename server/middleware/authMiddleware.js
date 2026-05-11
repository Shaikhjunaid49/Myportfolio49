import jwt from "jsonwebtoken";
import AppError from "../utils/AppError.js";
import Admin from "../models/admin.model.js";

export const protect = async (req, res, next) => {
  try {
    let token;

    // get token
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
      return next(new AppError("Not authorized, no token", 401));
    }

    // verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const admin = await Admin.findById(decoded.id);

    if (!admin) {
      return next(new AppError("Admin not found", 401));
    }

    // attach admin
    req.admin = admin;

    next(); // ✅ THIS WAS MISSING
  } catch (err) {
    next(new AppError("Not authorized, invalid token", 401));
  }
};