import { FaHeart } from "react-icons/fa";
import { BsTrashFill } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
function Card() {
  return (
    <>
      <div
        id="card"
        className="w-full min-h-[230px] bg-red-100 relative overflow-hidden shadow-sm shadow-blue-100"
      >
        {/* Card content with flat black design */}
        <div className="w-full h-full bg-[#0a0a0a] text-white p-4 flex flex-col justify-between shadow-md border border-[#404040]">
          {/* Title + Tags */}
          <div>
            {/* Title with 90% underline */}
            <h2 className="text-lg font-semibold relative pb-1 w-fit">
              Task Title
              <span className="absolute left-0 bottom-0 w-[90%] h-[2px] bg-cyan-500 block"></span>
            </h2>

            {/* Tags */}
            <div className="flex gap-2 mt-3">
              <span className="text-xs border border-yellow-400 bg-[#1f2937] text-yellow-300 px-2 py-0.5 uppercase tracking-wide rounded-sm cursor-pointer">
                On Progress
              </span>
              <span className="text-xs border border-red-400 bg-[#3d1e27] red-purple-300 px-2 py-0.5 uppercase tracking-wide rounded-sm cursor-pointer">
                Hard
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-400 text-sm mt-2 border-t border-[#2a2a2a] pt-2">
            Build a dark, professional card UI with tags and action icons.
          </p>

          {/* Action Icons */}
          <div className="flex justify-end items-center gap-4 mt-2 text-xl border-t border-[#2a2a2a] pt-2">
            <button title="Edit" className="hover:text-cyan-400 transition">
              <FaEdit />
            </button>
            <button title="Favorite" className="hover:text-pink-500 transition">
              <FaHeart />
            </button>
            <button title="Delete" className="hover:text-red-500 transition">
              <BsTrashFill />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
