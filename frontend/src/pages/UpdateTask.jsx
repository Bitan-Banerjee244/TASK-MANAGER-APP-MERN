import { useNavigate, useParams } from "react-router-dom";
import { IoMdCloseCircle } from "react-icons/io";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { UserContext } from "../context/UserContext";
import { toast } from "react-hot-toast";

function UpdateTask() {
  const navigate = useNavigate();
  let { BACKEND_URL } = useContext(UserContext);
  let { id } = useParams();

  let [updateData, setupdateData] = useState({
    title: "",
    description: "",
    type: "",
    progress: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setupdateData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ✅ Fetch existing task data
  useEffect(() => {
    const taskToUpdate = async () => {
      try {
        let res = await axios.get(`${BACKEND_URL}/api/v2/fetchtask/${id}`, {
          withCredentials: true,
        });
        setupdateData(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    taskToUpdate();
  }, [BACKEND_URL, id]);

  const updateCompleteTask = async (e) => {
    e.preventDefault();
    try {
      let res = await axios.put(
        `${BACKEND_URL}/api/v2/updateTask/${id}`,
        updateData,
        { withCredentials: true }
      );
      toast.success("Task Updated Successfully");
      navigate("/");
    } catch (error) {
      console.log("An Error Occurred on update", error);
      toast.error("Failed to update task");
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
            ✏️ Update Task
          </h2>

          <form
            className="grid md:grid-cols-2 gap-6"
            onSubmit={updateCompleteTask}
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
                  placeholder="Update task title"
                  className="w-full px-4 py-2 bg-[#1c1c1c] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  required
                  onChange={handleInput}
                  value={updateData.title}
                />
              </div>

              <div>
                <label className="block text-gray-400 mb-1">Status</label>
                <select
                  name="progress"
                  className="w-full px-4 py-2 bg-[#1c1c1c] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  onChange={handleInput}
                  value={updateData.progress}
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
                  onChange={handleInput}
                  value={updateData.type}
                >
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </select>
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
                  placeholder="Update task description"
                  rows="10"
                  className="w-full h-full px-4 py-2 bg-[#1c1c1c] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none"
                  required
                  onChange={handleInput}
                  value={updateData.description}
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2 mt-8 text-center">
              <button
                type="submit"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-6 rounded-lg transition duration-300 shadow-md hover:shadow-lg"
              >
                🔄 Update Task
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateTask;
