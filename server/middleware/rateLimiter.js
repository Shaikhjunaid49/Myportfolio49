import rateLimit from "express-rate-limit";

export const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 min
  max: 5, // max 5 requests
  message: "Too many messages sent. Try again later.",
});