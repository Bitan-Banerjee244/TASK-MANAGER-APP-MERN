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

  return (
    <>
      <div id="card" className="w-full h-[220px] bg-red-100 relative ">
        {/* Card content with flat black design */}
        <div className="w-full h-full bg-[#0a0a0a] text-white p-4 flex flex-col justify-between shadow-md border border-[#404040]">
          {/* Title + Tags */}
          <div>
            {/* Title with 90% underline */}
            <h2 className="text-lg font-semibold relative pb-1 w-fit">
              {task.title}
              <span className="absolute left-0 bottom-0 w-[90%] h-[2px] bg-cyan-500 block"></span>
            </h2>

            {/* Tags */}
            <div className="flex gap-2 mt-3">
              <span className="text-xs border border-yellow-400 bg-[#1f2937] text-yellow-300 px-2 py-0.5 uppercase tracking-wide rounded-sm cursor-pointer">
                {task.progress}
              </span>
              <span className="text-xs border border-red-400 bg-[#3d1e27] red-purple-300 px-2 py-0.5 uppercase tracking-wide rounded-sm cursor-pointer">
                {task.type}
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-400 text-sm mt-2 border-t border-[#2a2a2a] pt-2">
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
            <button title="Favorite" className="hover:text-pink-500 transition">
              <FaHeart />
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
