import Skill from "../models/skill.model.js";
import AppError from "../utils/AppError.js";

export const createSkill = async (req, res, next) => {
    try {
        const { name, level, icon } = req.body;

        const skill = await Skill.create({
            name,
            level,  
            icon,
        });

        res.status(200).json({
            success: true,
            message: "Skill created successfully",
            data: skill,
        })
    } catch (err) {
        next(err)
    }
};

export const getAllSkills = async(req, res, next)=>{
try {
    const skills = await Skill.find().sort({ createdAt: -1 });

        res.status(200).json({
      success: true,
      count: skills.length,
      data: skills,
    });

} catch (err) {
 next(err);
}
};

export const deleteSkill = async (req, res, next) => {
  try {
    const { id } = req.params;

    const skill = await Skill.findByIdAndDelete(id);

    if (!skill) {
      return next(new AppError("Skill not found", 404));
    }

    res.status(200).json({
      success: true,
      message: "Skill deleted successfully",
    });
  } catch (err) {
    next(err);
  }
};