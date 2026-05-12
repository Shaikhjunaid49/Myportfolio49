import express from "express";
import connectDB from "./config/connection.js";
import dotenv from "dotenv";
import cors from "cors";

import errorMiddleware from "./middleware/errorMiddleware.js";
import AppError from "./utils/AppError.js";

// routes
import projectRoutes from "./routes/projectRoutes.js";
import skillRoutes from "./routes/skillRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();

// ✅ middlewares
app.use(express.json());

app.use("/images", express.static("public/images"));
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://shaikhjunaid49.netlify.app",
    ],
    credentials: true,
  })
);
// ✅ routes (CLEAN PREFIX STRUCTURE)
app.use("/api/v1/projects", projectRoutes);
app.use("/api/v1/skills", skillRoutes);
app.use("/api/v1/contact", contactRoutes);
app.use("/api/v1/auth", authRoutes);

// test route
app.get("/", (req, res) => {
  res.send("API is working 🚀");
});

// ❌ NOT FOUND
app.use((req, res, next) => {
  next(new AppError(`Route ${req.originalUrl} not found`, 404));
});

// ❌ ERROR HANDLER (last)
app.use(errorMiddleware);

// DB connect
connectDB();

export default app;


// see latest chat 