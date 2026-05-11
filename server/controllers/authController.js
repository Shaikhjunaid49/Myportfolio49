import Admin from "../models/admin.model.js";
import AppError from "../utils/AppError.js";
import jwt from "jsonwebtoken";

// generate JWT token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};

// 🔐 REGISTER
export const registerAdmin = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      return next(new AppError("Admin already exists", 400)); // ✅ fixed
    }

    await Admin.create({ email, password });

    res.status(201).json({
      success: true,
      message: "Admin registered successfully",
    });

  } catch (err) {
    next(err);
  }
};

// 🔐 LOGIN
export const loginAdmin = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const admin = await Admin.findOne({ email }).select("+password");

    if (!admin) {
      return next(new AppError("Invalid credentials", 401));
    }

    const isMatch = await admin.comparePassword(password); // ✅ fixed

    if (!isMatch) {
      return next(new AppError("Invalid credentials", 401));
    }

    const token = generateToken(admin._id);

    res.status(200).json({
      success: true,
      token,
    });

  } catch (err) {
    next(err);
  }
};