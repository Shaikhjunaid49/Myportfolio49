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
    origin: "http://localhost:5173",
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

// in this add all other feacture and ask gpt and take help
// now see new chat and you crate sme file and add forget password func and moer 

// step three is on going in mian chat next is 4 no we done some of thse chech 

// and in nav chat add some routes

