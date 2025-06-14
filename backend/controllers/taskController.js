import Task from "../models/task.model.js";

export const createTask = async (req, res) => {
    try {
        let { title, description, type, progress, isFavourite } = req.body;
        let userId = req.userId;

        if (!title || !description || !type || !progress) {
            return res.status(200).json({
                message: "All Fields need to be filled",
                success: "false"
            })
        }

        let newTask = await Task.create({
            title, description, type, progress, isFavourite, userId
        })

        return res.status(200).json({
            message: "Task Created Successfully",
            task: newTask
        })

    } catch (error) {
        console.log(error)
        return res.status(400).json({
            success: false,
            message: error.message
        })
    }
}


export const getAllTasks = async (req, res) => {
    try {

        let id = req.params.id;
        let tasks = await Task.find({ userId: id })

        return res.status(200).json({
            message: "Task Fetched",
            data: tasks
        })

    } catch (error) {
        return res.status(400).json({
            "message": "Do not able to fetch messages",
            success: false
        })
    }
}

export const deleteTask = async (req, res) => {
    try {
        let id = req.params.id;
        await Task.findByIdAndDelete({ _id: id })
        return res.status(200).json({ message: "Task Deleted Successfully" })

    } catch (error) {
        console.log(error)
        return res.status(400).json({ message: "Problem on Deleting Task", error: error.message })
    }
}

export const fetchTask = async (req, res) => {
    try {
        let id = req.params.id;
        const task = await Task.findOne({ _id: id });
        return res.status(200).json({ data: task });
    } catch (error) {
        return res.status(400).json({ message: "Fetching Task Problem", error: error.message });
    }
};


export const updateTask = async (req, res) => {
    try {
        const id = req.params.id;
        const { title, description, type, progress, isFavourite } = req.body;

        if (!title || !description || !type || !progress) {
            return res.status(400).json({
                message: "All fields need to be filled",
                success: false,
            });
        }

        const updatedTask = await Task.findByIdAndUpdate(
            id,
            {
                title,
                description,
                type,
                progress,
                isFavourite,
            },
            { new: true }
        );

        return res.status(200).json({
            message: "Task updated successfully!",
            success: true,
            data: updatedTask,
        });
    } catch (error) {
        return res.status(400).json({
            message: "Error occurred during update",
            success: false,
            error: error.message,
        });
    }
};