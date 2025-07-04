import { createContext, useState } from "react";

export const UserContext = createContext();
const BACKEND_URL = "https://task-manager-app-mern-2et4.onrender.com";

function UserContextProvider({ children }) {
  // Variables
  let [currentUser, setCurrentUser] = useState({});
  let [deletedTask, setDeleted] = useState(false);
  let [favTask, setFavTask] = useState(false);
  const [filterType, setFilterType] = useState("all");
  let [isAuth, setIsAuth] = useState(false);
  let [taskData, setTaskData] = useState({
    title: "",
    description: "",
    type: "",
    progress: "",
    isFavourite: "",
  });

  let value = {
    BACKEND_URL,
    currentUser,
    setCurrentUser,
    taskData,
    setTaskData,
    deletedTask,
    setDeleted,
    favTask,
    setFavTask,
    filterType,
    setFilterType,
    isAuth,
    setIsAuth,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export default UserContextProvider;
