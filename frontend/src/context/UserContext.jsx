import { createContext, useState } from "react";

export const UserContext = createContext();
const BACKEND_URL = "http://localhost:5000";

function UserContextProvider({ children }) {
  let [currentUser, setCurrentUser] = useState({});
  let [deletedTask, setDeleted] = useState(false);
  let [favTask, setFavTask] = useState(false);
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
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export default UserContextProvider;
