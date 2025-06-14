import express from "express"
import isAuthenticated from "../middleware/isAuthenticated.js";
import { createTask, deleteTask, fetchTask, getAllTasks, updateTask } from "../controllers/taskController.js";

let taskRouter = express.Router()

taskRouter.post("/createtask",isAuthenticated,createTask)
taskRouter.get("/gettask/:id",isAuthenticated,getAllTasks)
taskRouter.delete("/deltask/:id",isAuthenticated,deleteTask)
taskRouter.get("/fetchtask/:id",isAuthenticated,fetchTask)
taskRouter.put("/updateTask/:id",isAuthenticated,updateTask)

export default taskRouter;