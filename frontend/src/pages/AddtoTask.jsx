import { useNavigate } from "react-router-dom";
import { IoMdCloseCircle } from "react-icons/io";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { MdEditDocument } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import axios from "axios";
import toast from "react-hot-toast";

function AddtoTask() {
  const navigate = useNavigate();
  const { BACKEND_URL, currentUser, setTaskData } = useContext(UserContext);

  const handleTaskSubmit = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData(e.target);

      const taskData = {
        title: formData.get("title"),
        description: formData.get("description"),
        type: formData.get("type"),
        progress: formData.get("progress"),
        isFavourite: formData.get("isFavourite") === "on",
        userId: currentUser.id,
      };

      setTaskData(taskData);

      const res = await axios.post(
        `${BACKEND_URL}/api/v2/createtask`,
        taskData,
        { withCredentials: true }
      );

      toast.success(res.data.message);
      navigate("/");
    } catch (error) {
      console.error(error.message);
      toast.error("Failed to create task");
    }
  };

  return (
    <div className="w-screen h-screen bg-[#0a0a0a] flex items-center justify-center fixed top-0 left-0 z-50">
      <div className="relative w-[95vw] max-w-md p-6 bg-gradient-to-br from-[#111] via-[#1a1a1a] to-[#222] rounded-2xl shadow-xl border border-[#2a2a2a] text-white">
        <button
          className="absolute top-3 right-3 text-2xl hover:text-cyan-500 transition"
          onClick={() => navigate("/")}
        >
          <IoMdCloseCircle />
        </button>

        <h2 className="text-2xl font-bold text-center mb-6 flex items-center justify-center gap-2">
          <MdEditDocument /> Add New Task
        </h2>

        <form className="space-y-4" onSubmit={handleTaskSubmit}>
          <div>
            <label htmlFor="title" className="text-gray-400 text-sm mb-1 block">
              Task Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              required
              placeholder="Enter task title"
              className="w-full px-4 py-2 rounded-md bg-[#1c1c1c] text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          <div>
            <label htmlFor="description" className="text-gray-400 text-sm mb-1 block">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              required
              rows="4"
              placeholder="Task details..."
              className="w-full px-4 py-2 rounded-md bg-[#1c1c1c] text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none"
            ></textarea>
          </div>

          <div>
            <label htmlFor="progress" className="text-gray-400 text-sm mb-1 block">
              Status
            </label>
            <select
              id="progress"
              name="progress"
              defaultValue="pending"
              className="w-full px-4 py-2 rounded-md bg-[#1c1c1c] text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            >
              <option value="pending">Pending</option>
              <option value="on progress">On Progress</option>
              <option value="completed">Completed</option>
            </select>
          </div>

          <div>
            <label htmlFor="type" className="text-gray-400 text-sm mb-1 block">
              Difficulty
            </label>
            <select
              id="type"
              name="type"
              defaultValue="easy"
              className="w-full px-4 py-2 rounded-md bg-[#1c1c1c] text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="isFavourite"
              name="isFavourite"
              className="w-4 h-4 accent-cyan-500"
            />
            <label htmlFor="isFavourite" className="text-sm text-gray-300">
              Mark as Favourite
            </label>
          </div>

          <div className="text-center mt-4 flex justify-center items-center">
            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 px-6 py-2 rounded-md text-white font-semibold text-sm shadow-lg transition"
            >
              <FaPlus /> Add Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddtoTask;
