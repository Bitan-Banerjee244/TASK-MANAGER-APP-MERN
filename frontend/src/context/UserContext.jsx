import { createContext, useState } from "react";

export const UserContext = createContext();
const BACKEND_URL = "http://localhost:5000";

function UserContextProvider({ children }) {
  let [currentUser, setCurrentUser] = useState({});
  let value = { BACKEND_URL, currentUser, setCurrentUser };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export default UserContextProvider;
