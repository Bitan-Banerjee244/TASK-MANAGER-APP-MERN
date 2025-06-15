import { FaSearch } from "react-icons/fa";
import { MdAdd } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { IoExit } from "react-icons/io5";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import toast from "react-hot-toast";
import axios from "axios";

function Nav({ setSearchWord, filterType }) {
  let navigate = useNavigate();
  let { BACKEND_URL,setIsAuth } = useContext(UserContext);

  // Log Out Handler
  const handleLogOut = async () => {
    try {
      let res = await axios.post(
        `${BACKEND_URL}/api/v2/logout`,
        {},
        {
          withCredentials: true,
        }
      );
      // console.log(res);
      navigate("/login");
      setIsAuth(false)
      toast.success(res.data.message);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <>
      <nav className="fixed top-3 left-1/2 transform -translate-x-1/2 w-[90%] h-[50px] bg-gray-800 flex items-center justify-around px-4">
        {/* Logo */}
        <div id="logo" className="text-white md:text-2xl text-xl font-bold">
          Task<span className="text-cyan-400">Lite</span>
        </div>
        {/* Search Bar */}
        <div className="flex items-center justify-between bg-gray-700 rounded-full md:px-2 py-1 md:w-[40%] max-w-[50%]">
          <input
            type="text"
            placeholder="Search tasks..."
            className="flex-grow bg-transparent md:text-md text-sm outline-none text-white placeholder-gray-400 px-3  overflow-hidden w-[92%]"
            onChange={(e) => {
              setSearchWord({
                searchLetter: e.target.value,
              });
              filterType("navfilter");
            }}
          />
          <button className="text-cyan-400 hover:text-white transition w-[7%] md:text-md text-sm mr-3 md:mr-0">
            <FaSearch />
          </button>
        </div>

        {/* Add Task  and Logout */}
        <div className="w-[10%] flex gap-2 items-center ">
          <button
            className="md:w-8 md:h-8 w-5 h-5 flex items-center justify-center rounded-full border-2 border-dotted border-cyan-400 text-cyan-400 text-2xl hover:bg-cyan-400 hover:text-black transition"
            onClick={() => navigate("/addtotask")}
          >
            <MdAdd />
          </button>
          <button
            className="md:w-8 md:h-8  w-5 h-5 flex items-center justify-center rounded-full border-2 border-red-400 text-red-400 text-xl hover:bg-red-400 hover:text-black transition duration-300"
            onClick={handleLogOut}
          >
            <IoExit />
          </button>
        </div>
      </nav>
    </>
  );
}

export default Nav;
