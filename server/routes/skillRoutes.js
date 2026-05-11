import express from "express";
import {
  createSkill,
  getAllSkills,
  deleteSkill,
} from "../controllers/skillController.js";
import { protect } from "../middleware/authMiddleware.js";



const router = express.Router();

router.post("/", createSkill);
router.get("/", getAllSkills);
router.delete("/:id", protect, deleteSkill);

export default router;