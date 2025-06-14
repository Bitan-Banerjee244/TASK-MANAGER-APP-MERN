// filtertype, setFilterType  appearing from parent and getback to the parent 
function Filterbar({ filtertype, setFilterType }) {
  const isActive = (type) =>
    filtertype === type ? "border-b-2 border-cyan-400 font-bold" : "";

  return (
    <div
      className="md:w-[60%] w-[100%] lg:h-[6vh] h-[5vh] bg-gray-800 top-[70px] mx-auto lg:text-[18px] md:text-[10px] text-[8px] flex"
      id="Filter-bar"
    >
      <button
        className={`px-1 w-[25%] h-[inherit] bg-[#0d1b2a] text-blue-400 hover:bg-[#1b263b] transition ${isActive(
          "all"
        )}`}
        onClick={() => setFilterType("all")}
      >
        All Tasks
      </button>
      <button
        className={`px-1 w-[25%] h-[inherit] bg-[#0d2a1b] text-green-400 hover:bg-[#1b3b26] transition ${isActive(
          "completed"
        )}`}
        onClick={() => setFilterType("completed")}
      >
        Completed Task
      </button>
      <button
        className={`px-1 w-[25%] h-[inherit] bg-[#2a1f0d] text-yellow-400 hover:bg-[#3b2b1b] transition ${isActive(
          "favourite"
        )}`}
        onClick={() => setFilterType("favourite")}
      >
        Favorite Task
      </button>
      <button
        className={`px-1 w-[25%] h-[inherit] bg-[#1b0d2a] text-purple-400 hover:bg-[#2e1b3b] transition ${isActive(
          "hard"
        )}`}
        onClick={() => setFilterType("hard")}
      >
        Hard Task
      </button>
    </div>
  );
}

export default Filterbar;
