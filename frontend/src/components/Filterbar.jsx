function Filterbar() {
  return (
    <>
      <div
        className="md:w-[60%] w-[100%] lg:h-[7vh] h-[5vh] bg-gray-800 top-[70px] mx-auto lg:text-[18px] md:text-[10px] text-[8px]"
        id="Filter-bar"
      >
        <button className="px-1 w-[25%] h-[inherit]  bg-[#0d1b2a] text-blue-400 hover:bg-[#1b263b] transition">
          All Tasks
        </button>
        <button className="px-1 w-[25%] h-[inherit] bg-[#0d2a1b] text-green-400 hover:bg-[#1b3b26] transition">
          Completed Task
        </button>
        <button className="px-1 w-[25%] h-[inherit] bg-[#2a1f0d] text-yellow-400 hover:bg-[#3b2b1b] transition">
          Favorite Task
        </button>
        <button className="px-1 w-[25%] h-[inherit] bg-[#1b0d2a] text-purple-400 hover:bg-[#2e1b3b] transition">
          Hard Task
        </button>
      </div>
    </>
  );
}

export default Filterbar;
