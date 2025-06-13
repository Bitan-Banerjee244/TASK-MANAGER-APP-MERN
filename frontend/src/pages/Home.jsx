import Nav from "../components/Nav";
import Filterbar from "../components/Filterbar";
import Card from "../components/Card";

function Home() {
  return (
    <>
      <div className="w-[100vw] h-screen bg-black">
        <Nav />
        <div id="container" className="w-[90%] h-screen  mx-auto pt-[70px]">
          <Filterbar />
          <div id="task-list" className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3 mt-4 w-full overflow-y-auto h-[calc(100vh-140px)] pr-2 hide-scrollbar">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
