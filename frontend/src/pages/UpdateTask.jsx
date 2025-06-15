import { useNavigate, useParams } from "react-router-dom";
import { IoMdCloseCircle } from "react-icons/io";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import { toast } from "react-hot-toast";
import { FaPencil } from "react-icons/fa6";
import { BiReset } from "react-icons/bi";
import axios from "axios";

function UpdateTask() {
  const navigate = useNavigate();
  const { BACKEND_URL } = useContext(UserContext);
  const { id } = useParams();

  const [updateData, setupdateData] = useState({
    title: "",
    description: "",
    type: "easy",
    progress: "pending",
    isFavourite: false,
  });

  const handleInput = (e) => {
    const { name, value, type, checked } = e.target;
    setupdateData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const res = await axios.get(`${BACKEND_URL}/api/v2/fetchtask/${id}`, {
          withCredentials: true,
        });
        setupdateData(res.data.data);
      } catch (error) {
        toast.error("Failed to load task data");
        console.error(error);
      }
    };
    fetchTask();
  }, [BACKEND_URL, id]);

  const updateCompleteTask = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${BACKEND_URL}/api/v2/updateTask/${id}`, updateData, {
        withCredentials: true,
      });
      toast.success("✅ Task Updated Successfully!");
      navigate("/");
    } catch (error) {
      toast.error("❌ Update Failed");
      console.error(error);
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
          <FaPencil /> Update Task
        </h2>

        <form className="space-y-4" onSubmit={updateCompleteTask}>
          <div>
            <label htmlFor="title" className="text-gray-400 text-sm mb-1 block">
              Task Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              required
              value={updateData.title}
              onChange={handleInput}
              placeholder="Update task title"
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
              value={updateData.description}
              onChange={handleInput}
              placeholder="Update task description"
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
              value={updateData.progress}
              onChange={handleInput}
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
              value={updateData.type}
              onChange={handleInput}
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
              checked={updateData.isFavourite}
              onChange={handleInput}
              className="w-4 h-4 accent-yellow-500"
            />
            <label htmlFor="isFavourite" className="text-sm text-gray-300">
              Mark as Favourite ⭐
            </label>
          </div>

          <div className="text-center mt-4 flex justify-center items-center">
            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-600 px-6 py-2 rounded-md text-black font-semibold text-sm shadow-lg transition"
            >
              <BiReset /> Update Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateTask;
