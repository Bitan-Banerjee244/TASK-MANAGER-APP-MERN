import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";
import UserContextProvider from "./context/UserContext.jsx";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <UserContextProvider>
    <Toaster position="top-center" reverseOrder={false} />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </UserContextProvider>
);
