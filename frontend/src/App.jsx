import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import AddtoTask from "./pages/AddtoTask";


function App() {


  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/addtotask" element={<AddtoTask />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
