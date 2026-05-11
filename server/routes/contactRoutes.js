import express from "express";
import {
  createContact,
  getAllContacts,
} from "../controllers/contactController.js";

import { contactLimiter } from "../middleware/rateLimiter.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// 🌐 PUBLIC (with limiter)
router.post("/", contactLimiter, createContact);

// 🔒 ADMIN ONLY
router.get("/", protect, getAllContacts);

export default router;