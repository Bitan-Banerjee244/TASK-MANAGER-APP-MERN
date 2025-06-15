import { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import { useState } from "react";
import Nav from "../components/Nav";
import Filterbar from "../components/Filterbar";
import Card from "../components/Card";
import toast from "react-hot-toast";
import axios from "axios";
import NoTaskBanner from "../components/NoTaskBanner";

function Home() {
  let {
    currentUser,
    BACKEND_URL,
    taskData,
    deletedTask,
    filterType,
    setFilterType,
  } = useContext(UserContext);
  let [task, setTask] = useState([]);
  let [word, setWord] = useState({ searchLetter: "" });

  // Fetching Task
  const fetchTask = async () => {
    try {
      let res = await axios.get(
        `${BACKEND_URL}/api/v2/gettask/${currentUser.userId}`,
        { withCredentials: true }
      );
      // console.log(res.data.data);
      setTask(res.data.data);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  // For getting updated task in each dependency changes
  useEffect(() => {
    fetchTask();
  }, [taskData, deletedTask]);

  // Filtering Task
  const getFilteredTasks = () => {
    switch (filterType) {
      case "favourite":
        return task.filter((t) => t.isFavourite);
      case "hard":
        return task.filter((t) => t.type.toLowerCase() === "hard");
      case "completed":
        return task.filter((t) => t.progress.toLowerCase() === "completed");
      case "navfilter":
        return task.filter((t) =>
          t.title
            .toLowerCase()
            .includes(word?.searchLetter.toLowerCase() || " ")
        );
      default:
        return task;
    }
  };

  const filteredTasks = getFilteredTasks();

  return (
    <>
      <div className="w-[100vw] h-screen bg-black  z-2 ">
        <Nav setSearchWord={setWord} filterType={setFilterType} />
        <div id="container" className="w-[90%]  h-screen mx-auto pt-[70px]">
          <Filterbar setFilterType={setFilterType} filtertype={filterType} />

          {/* Welcome Message */}
          <div className="text-white md:text-3xl text-[1rem] font-semibold tracking-wide my-3 ml-2 text-center">
            Welcome back,{" "}
            <span className="text-cyan-400 font-bold">
              {currentUser?.userName}
            </span>{" "}
            👋
          </div>

          {/* Main Card Portion  */}
          <div className="w-full h-[calc(90vh-140px)] overflow-y-scroll pr-2 hide-scrollbar">
            <div
              id="task-list"
              className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-x-3 gap-y-4"
            >
              {filteredTasks.length === 0 ? (
                <NoTaskBanner />
              ) : (
                filteredTasks.map((item, index) => (
                  <div key={item._id || index} className="h-full">
                    <Card task={item} />
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
