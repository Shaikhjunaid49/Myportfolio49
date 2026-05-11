import AppError from "../utils/AppError.js";
import mongoose from "mongoose";
import Project from "../models/Project.js";

// CREATE PROJECT
export const createProject = async (req, res, next) => {
  try {
    const {
      title,
      description,
      techStack,
      githubLink,
      liveLink,
      image,
      category,
    } = req.body;

    // ✅ VALIDATION (IMPORTANT)
    if (!title || !description || !techStack || techStack.length === 0) {
      return next(new AppError("Title, Description & TechStack required", 400));
    }

    if (!category) {
      return next(new AppError("Category is required", 400));
    }

    const project = await Project.create({
      title,
      description,
      techStack,
      githubLink,
      liveLink,
      image,
      category,
    });

    res.status(201).json({
      success: true,
      message: "Project created successfully",
      data: project,
    });
  } catch (err) {
    console.log("CREATE PROJECT ERROR:", err); // 🔥 ADD THIS
    next(err);
  }
};

// GET ALL PROJECTS
export const getAllProjects = async (req, res, next) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: projects.length,
      data: projects,
    });
  } catch (error) {
    next(error);
  }
};

// GET SINGLE PROJECT
export const getSingleProject = async (req, res, next) => {
  try {
    const { id } = req.params;

    // ✅ Validate ID
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return next(new AppError("Invalid project ID", 400));
    }

    const project = await Project.findById(id);

    if (!project) {
      return next(new AppError("Project not found", 404));
    }

    res.status(200).json({
      success: true,
      data: project,
    });
  } catch (err) {
    next(err);
  }
};

// UPDATE PROJECT
export const updateProject = async (req, res, next) => {
  try {
    const { id } = req.params;

    // ✅ Validate ID
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return next(new AppError("Invalid project ID", 400));
    }

    const updatedProject = await Project.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedProject) {
      return next(new AppError("Project not found", 404));
    }

    res.status(200).json({
      success: true,
      message: "Project updated successfully",
      data: updatedProject,
    });
  } catch (err) {
    next(err);
  }
};

// DELETE PROJECT
export const deleteProject = async (req, res, next) => {
  try {
    const { id } = req.params;

    // ✅ Validate ID
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return next(new AppError("Invalid project ID", 400));
    }

    const deletedProject = await Project.findByIdAndDelete(id);

    if (!deletedProject) {
      return next(new AppError("Project not found", 404));
    }

    res.status(200).json({
      success: true,
      message: "Project deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};