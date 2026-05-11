import Contact from "../models/contact.model.js";
import AppError from "../utils/AppError.js";
import sendEmail from "../utils/sendEmail.js";

// CREATE CONTACT MESSAGE
export const createContact = async (req, res, next) => {
  try {
    const { name, email, message } = req.body;

    // ✅ VALIDATION
    if (!name || !email || !message) {
      return next(new AppError("All fields are required", 400));
    }

    // ✅ SAVE TO DB
    const contact = await Contact.create({
      name,
      email,
      message,
    });

    // ✅ SEND EMAIL (🔥 THIS WAS MISSING)
    await sendEmail({ name, email, message });

    res.status(201).json({
      success: true,
      message: "Message sent successfully",
      data: contact,
    });
  } catch (err) {
    console.log("CONTACT ERROR:", err); // debug
    next(err);
  }
};

// GET ALL MESSAGES (ADMIN)
export const getAllContacts = async (req, res, next) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: contacts.length,
      data: contacts,
    });
  } catch (err) {
    next(err);
  }
};