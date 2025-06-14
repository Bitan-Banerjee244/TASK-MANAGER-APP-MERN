import { createContext, useState } from "react";

export const UserContext = createContext();
const BACKEND_URL = "http://localhost:5000"

function UserContextProvider({ children }) {
  let value = {BACKEND_URL};
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export default UserContextProvider;
