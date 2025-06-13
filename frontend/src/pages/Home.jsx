import Nav from "../components/Nav";
import Filterbar from "../components/Filterbar";

function Home() {
  return (
    <>
      <div className="w-[100vw] h-screen bg-black">
        <Nav />
        <div id="container" className="w-[90%] h-screen  mx-auto pt-[70px]">
          <Filterbar />
          <div id="task-list" className="grid grid-cols-4 gap-2 mt-4 w-full">
          
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
