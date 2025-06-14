import { FaHeart } from "react-icons/fa";
import { BsTrashFill } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Card({ task }) {
  let { BACKEND_URL, setDeleted } = useContext(UserContext);
  let navigate = useNavigate();

  const deletePost = async (id) => {
    try {
      let res = await axios.delete(`${BACKEND_URL}/api/v2/deltask/${id}`, {
        withCredentials: true,
      });
      toast.success(res.data.message);
      setDeleted((prev) => !prev);
    } catch (error) {
      console.log(error);
    }
  };

  // Tag color helpers (Color : Types of Task)
  const getTypeColor = (type) => {
    switch (type.toLowerCase()) {
      case "easy":
        return "bg-[#112d11] text-green-400 border border-green-700";
      case "medium":
        return "bg-[#2e2a11] text-yellow-400 border border-yellow-600";
      case "hard":
        return "bg-[#2d1111] text-red-400 border border-red-600";
      default:
        return "bg-[#1f1f1f] text-gray-300 border border-gray-600";
    }
  };

  // Tag color helpers (Color : Types of Progress)
  const getProgressColor = (progress) => {
    switch (progress.toLowerCase()) {
      case "pending":
        return "bg-[#1f1f1f] text-gray-400 border border-gray-500";
      case "on progress":
        return "bg-[#102a3d] text-blue-400 border border-blue-600";
      case "completed":
        return "bg-[#1e1032] text-purple-400 border border-purple-600";
      default:
        return "bg-[#1a1a1a] text-gray-300 border border-gray-500";
    }
  };

  return (
    <>
      <div
        id="card"
        className="w-full h-[230px] bg-red-100 relative overflow-hidden"
      >
        {/* Card */}
        <div className="w-full h-full bg-[#0a0a0a] text-white p-4 flex flex-col justify-between shadow-md border border-[#404040]">
          {/* Title + Tags */}
          <div>
            <h2 className="text-lg font-semibold relative pb-1 w-fit">
              {task.title}
              <span className="absolute left-0 bottom-0 w-[90%] h-[2px] bg-cyan-500 block"></span>
            </h2>

            <div className="flex gap-2 mt-3">
              {/* Progress Tag */}
              <span
                className={`text-xs ${getProgressColor(
                  task.progress
                )} px-2 py-0.5 uppercase tracking-wide rounded-sm cursor-pointer`}
              >
                {task.progress}
              </span>

              {/* Type Tag */}
              <span
                className={`text-xs ${getTypeColor(
                  task.type
                )} px-2 py-0.5 uppercase tracking-wide rounded-sm cursor-pointer`}
              >
                {task.type}
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-400 text-sm mt-2 border-t border-[#2a2a2a] pt-2 break-words whitespace-pre-wrap leading-relaxed max-h-39 overflow-y-auto scrollbar-thin scrollbar-thumb-[#555] scrollbar-track-[#1a1a1a] hide-scrollbar">
            {task.description}
          </p>

          {/* Action Icons */}
          <div className="flex justify-end items-center gap-4 mt-2 text-xl border-t border-[#2a2a2a] pt-2">
            <button
              title="Edit"
              className="hover:text-cyan-400 transition"
              onClick={() => navigate(`/updatetask/${task._id}`)}
            >
              <FaEdit />
            </button>
            <button
              title="Favorite"
              className="hover:text-pink-500 transition"
              onClick={() => {
                updateFavorite(task._id, task.isFavourite);
              }}
            >
              <FaHeart
                className={task.isFavourite ? "text-pink-500" : "text-gray-400"}
              />
            </button>
            <button
              title="Delete"
              className="hover:text-red-500 transition"
              onClick={() => deletePost(task._id)}
            >
              <BsTrashFill />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
