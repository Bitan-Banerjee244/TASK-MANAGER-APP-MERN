import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import UserContextProvider from "./context/UserContext.jsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <UserContextProvider>
    <Toaster position="top-center" reverseOrder={false} />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </UserContextProvider>
);
