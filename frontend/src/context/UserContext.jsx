import { createContext, useState } from "react";

export const UserContext = createContext();


function UserContextProvider({ children }) {
  let value = {};
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export default UserContextProvider;
