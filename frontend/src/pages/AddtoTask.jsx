import { useNavigate } from "react-router-dom";
import { IoMdCloseCircle } from "react-icons/io";
import axios from "axios";
import toast from "react-hot-toast";
import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";

function AddtoTask() {
  const navigate = useNavigate();
  const { BACKEND_URL, currentUser, setTaskData } = useContext(UserContext);

  // Adding Tasks menu 
  const handleTaskSubmit = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData(e.target);

      const taskData = {
        title: formData.get("title"),
        description: formData.get("description"),
        type: formData.get("type"),
        progress: formData.get("progress"),
        isFavourite: formData.get("isFavourite") === "on", // ✅ Checkbox logic
        userId: currentUser.id,
      };

      setTaskData(taskData);

      const res = await axios.post(
        `${BACKEND_URL}/api/v2/createtask`,
        taskData,
        {
          withCredentials: true,
        }
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
      <div className="p-1 rounded-2xl bg-gradient-to-br from-[#111] via-[#1a1a1a] to-[#222] shadow-[0_0_20px_rgba(255,255,255,0.05)] relative">
        <button
          className="absolute top-4 right-4 text-white text-2xl hover:text-cyan-500 transition"
          title="Close"
          onClick={() => navigate("/")}
        >
          <IoMdCloseCircle />
        </button>

        <div className="bg-[#111111] p-8 rounded-2xl w-[90vw] max-w-5xl shadow-xl border border-[#2a2a2a] text-white">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">
            📝 Add New Task
          </h2>

          <form
            className="grid md:grid-cols-2 gap-6"
            onSubmit={handleTaskSubmit}
          >
            {/* Left Section */}
            <div className="space-y-5">
              <div>
                <label htmlFor="title" className="block text-gray-400 mb-1">
                  Task Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="Enter task title"
                  className="w-full px-4 py-2 bg-[#1c1c1c] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-400 mb-1">Status</label>
                <select
                  name="progress"
                  className="w-full px-4 py-2 bg-[#1c1c1c] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  defaultValue="pending"
                >
                  <option value="pending">Pending</option>
                  <option value="on progress">On Progress</option>
                  <option value="completed">Completed</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-400 mb-1">Difficulty</label>
                <select
                  name="type"
                  className="w-full px-4 py-2 bg-[#1c1c1c] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  defaultValue="easy"
                >
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </select>
              </div>

              {/* ✅ Favourite Checkbox */}
              <div>
                <label className="block text-gray-400 mb-1">
                  Add to Favourite
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="isFavourite"
                    name="isFavourite"
                    className="w-4 h-4 accent-cyan-500"
                  />
                  <label
                    htmlFor="isFavourite"
                    className="text-sm text-gray-300"
                  >
                    Mark this task as Favourite
                  </label>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="space-y-5">
              <div>
                <label
                  htmlFor="description"
                  className="block text-gray-400 mb-1"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  placeholder="Enter task description"
                  rows="10"
                  className="w-full h-full px-4 py-2 bg-[#1c1c1c] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none"
                  required
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2 mt-8 text-center">
              <button
                type="submit"
                className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300 shadow-md hover:shadow-lg"
              >
                ➕ Add Task
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddtoTask;
