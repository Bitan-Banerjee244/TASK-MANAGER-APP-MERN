import { FaSearch } from "react-icons/fa";
import { MdAdd } from "react-icons/md";

function Nav() {
  return (
    <>
      <nav className="fixed top-3 left-1/2 transform -translate-x-1/2 w-[90%] h-[50px] bg-gray-800 flex items-center justify-around">
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
          />
          <button className="text-cyan-400 hover:text-white transition w-[7%] md:text-md text-sm mr-3 md:mr-0">
            <FaSearch />
          </button>
        </div>

        <div>
          <button className="md:w-8 md:h-8 w-5 h-5 flex items-center justify-center rounded-full border-2 border-dotted border-cyan-400 text-cyan-400 text-2xl hover:bg-cyan-400 hover:text-black transition">
            <MdAdd />
          </button>
        </div>
        {/* Add Task  */}
      </nav>
    </>
  );
}

export default Nav;
