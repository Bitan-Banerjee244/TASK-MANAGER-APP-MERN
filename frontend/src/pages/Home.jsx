import Nav from "../components/Nav";
import Filterbar from "../components/Filterbar";
import Card from "../components/Card";
import { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import NoTaskBanner from "../components/NoTaskBanner";

function Home() {
  let { currentUser, BACKEND_URL, taskData ,deletedTask} = useContext(UserContext);
  let [task, setTask] = useState([]);

  const fetchTask = async () => {
    try {
      console.log(`${BACKEND_URL}/api/v2/gettask/${currentUser.userId}`);
      let res = await axios.get(
        `${BACKEND_URL}/api/v2/gettask/${currentUser.userId}`,
        { withCredentials: true }
      );
      console.log(res.data.data);
      setTask(res.data.data);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchTask();
  }, [taskData,deletedTask]);

  return (
    <>
      <div className="w-[100vw] h-screen bg-black  z-2 ">
        <Nav />
        <div id="container" className="w-[90%]  h-screen mx-auto pt-[70px]">
          <Filterbar />

          {/* Welcome Message */}
          <div className="text-white text-2xl md:text-3xl font-semibold tracking-wide my-3 ml-2 text-center">
            Welcome back,{" "}
            <span className="text-cyan-400 font-bold">
              {currentUser?.userName}
            </span>{" "}
            👋
          </div>

          {/* Main Card Portion  */}
          <div
            id="task-list"
            className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3 mt-4 w-full overflow-y-scroll h-[calc(85vh-140px)] pr-2 hide-scrollbar"
          >
            {task.length === 0 ? (
              <NoTaskBanner />
            ) : (
              task.map((item, index) => (
                <Card key={item._id || index} task={item} />
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
