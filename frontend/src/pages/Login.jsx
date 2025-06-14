import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // If you're using routing
import { UserContext } from "../context/UserContext";
import axios from "axios";
import toast from "react-hot-toast";

function Login() {
  let { BACKEND_URL, setCurrentUser } = useContext(UserContext);
  let navigate = useNavigate();
  let [input, setInput] = useState({
    email: "",
    password: "",
  });

  // Creating JSON file to send to server
  const handleInput = (e) => {
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // SignIn Handler
  const handleLogIn = async (e) => {
    try {
      e.preventDefault();
      let res = await axios.post(`${BACKEND_URL}/api/v2/login`, input, {
        withCredentials: true,
      });
      toast.success("Log In Successful");
      setInput({
        email: "",
        password: "",
      });
      navigate("/");
      // console.log(res.data);
      // console.log(res.data.user.id);
      // console.log(res.data.user.userName);

      setCurrentUser({
        userId: res.data.user.id,
        userName: res.data.user.userName,
      });
      
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-6">
      <div className="bg-gray-900 p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          Log In
        </h2>

        <form className="space-y-5" onSubmit={handleLogIn}>
          {/* Email */}
          <div>
            <label className="block text-gray-300 mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={input.email}
              onChange={handleInput}
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-xl bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-300 mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={input.password}
              onChange={handleInput}
              placeholder="Enter your password"
              className="w-full px-4 py-2 rounded-xl bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-xl transition duration-300"
          >
            Login
          </button>
        </form>

        {/* Don't have an account */}
        <p className="text-gray-400 text-center mt-6">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-500 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
