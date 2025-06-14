import { useNavigate } from "react-router-dom";
import { IoMdCloseCircle } from "react-icons/io";

function AddtoTask() {
  let navigate = useNavigate();

  return (
    <div className="w-screen h-screen bg-[#0a0a0a] flex items-center justify-center fixed top-0 left-0 z-50">
      {/* Outer Shadow Wrapper */}
      <div className="p-1 rounded-2xl bg-gradient-to-br from-[#111] via-[#1a1a1a] to-[#222] shadow-[0_0_20px_rgba(255,255,255,0.05)] relative">
        {/* ❌ Close Button */}
        <button
          className="absolute top-4 right-4 text-white text-2xl hover:text-cyan-500 transition"
          title="Close"
          onClick={() => navigate("/")}
        >
          <IoMdCloseCircle />
        </button>

        {/* Modal container */}
        <div className="bg-[#111111] p-8 rounded-2xl w-[90vw] max-w-5xl shadow-xl border border-[#2a2a2a] text-white">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">
            📝 Add New Task
          </h2>

          <form className="grid md:grid-cols-2 gap-6">
            {/* Left section */}
            <div className="space-y-5">
              {/* Title */}
              <div>
                <label htmlFor="title" className="block text-gray-400 mb-1">
                  Task Title
                </label>
                <input
                  type="text"
                  id="title"
                  placeholder="Enter task title"
                  className="w-full px-4 py-2 bg-[#1c1c1c] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>

              {/* Status */}
              <div>
                <label className="block text-gray-400 mb-1">Status</label>
                <select className="w-full px-4 py-2 bg-[#1c1c1c] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500">
                  <option>On Progress</option>
                  <option>Completed</option>
                </select>
              </div>

              {/* Difficulty */}
              <div>
                <label className="block text-gray-400 mb-1">Difficulty</label>
                <select className="w-full px-4 py-2 bg-[#1c1c1c] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500">
                  <option>Normal</option>
                  <option>Hard</option>
                </select>
              </div>
            </div>

            {/* Right section */}
            <div className="space-y-5">
              <div>
                <label htmlFor="desc" className="block text-gray-400 mb-1">
                  Description
                </label>
                <textarea
                  id="desc"
                  placeholder="Enter task description"
                  rows="10"
                  className="w-full h-full px-4 py-2 bg-[#1c1c1c] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none"
                ></textarea>
              </div>
            </div>
          </form>

          {/* Submit button */}
          <div className="mt-8 text-center">
            <button
              type="submit"
              className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300 shadow-md hover:shadow-lg"
            >
              ➕ Add Task
            </button>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddtoTask;
