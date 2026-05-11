import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Project title is required"],
      trim: true,
    },

    description: {
      type: String,
      required: [true, "Project description is required"],
    },

    techStack: [
      {
        type: String,
        required: true,
      },
    ],

    githubLink: {
      type: String,
      default: "",
    },

    liveLink: {
      type: String,
      default: "",
    },

    image: {
      type: String,
      default: "",
    },

    status: {
      type: String,
      enum: ["completed", "in-progress", "planned"],
      default: "completed",
    },

    featured: {
      type: Boolean,
      default: false,
    },

    category: {
      type: String,
      enum: ["frontend", "backend", "fullstack"],
      required: true,
    },

    createdBy: {
      type: String,
      default: "Junaid",
    },
  },
  {
    timestamps: true,
  }
);

const Project = mongoose.model("Project", projectSchema);

export default Project;