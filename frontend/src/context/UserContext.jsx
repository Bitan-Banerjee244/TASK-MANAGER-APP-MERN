import { createContext } from "react";

let UserContext = createContext();


function UserContextProvider({ children }) {
  let value = {};
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export default UserContextProvider;
