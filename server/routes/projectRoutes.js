import express from "express";
import {
  createProject,
  getAllProjects,
  getSingleProject,
  updateProject,
  deleteProject,
} from "../controllers/projectController.js";
import { protect } from "../middleware/authMiddleware.js";


const router = express.Router();

// Protected routes (only admin)
router.post("/", protect, createProject);
router.put("/:id", protect, updateProject);
router.delete("/:id", protect, deleteProject);

// Public routes (everyone)
router.get("/", getAllProjects);
router.get("/:id", getSingleProject);

export default router;