import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ["easy", "medium", "hard"],
      default: "easy",
    },
    progress: {
      type: String,
      enum: ["pending", "on progress", "completed"],
      default: "pending",
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    isFavourite:{
      type:Boolean
    }
  },
  { timestamps: true } 
);

const Task = mongoose.model("Task", taskSchema); 
export default Task;
