import React from "react";
import Nav from "../components/Nav";
import Filterbar from "../components/Filterbar";

function Home() {
  return (
    <>
      <div className="w-[100vw] h-screen bg-black">
        <Nav/>
        <Filterbar/>
      </div>
    </>
  );
}

export default Home;
