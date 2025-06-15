import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import axios from "axios";
import toast from "react-hot-toast";

function Signup() {
  let { BACKEND_URL } = useContext(UserContext);
  let navigate = useNavigate();
  let [input, setInput] = useState({
    userName: "",
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
  const handleSignUp = async (e) => {
    try {
      e.preventDefault();
      let res = await axios.post(`${BACKEND_URL}/api/v2/signup`, input, {
        withCredentials: true,
      });
      toast.success("Sign In Successful");
      setInput({
        userName: "",
        email: "",
        password: "",
      });
      navigate("/login");
      // console.log(res);
    } catch (error) {
      toast.error(error.response.data.message)
      // console.log(error.response.data.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-6">
      {/* Glass Effect Card */}
      <div className="backdrop-blur-md bg-gradient-to-br from-blue-800/20 via-purple-800/20 to-indigo-800/20 border border-white/10 p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          Sign Up
        </h2>

        <form className="space-y-5" onSubmit={handleSignUp}>
          {/* Full Name */}
          <div>
            <label className="block text-gray-300 mb-2" htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              value={input.userName}
              name="userName"
              placeholder="Enter your full name"
              className="w-full px-4 py-2 rounded-xl bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={handleInput}
            />
          </div>

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
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-xl bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={handleInput}
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
              placeholder="Enter your password"
              className="w-full px-4 py-2 rounded-xl bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={handleInput}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-xl transition duration-300"
          >
            Sign Up
          </button>
        </form>

        {/* Login Link */}
        <p className="text-gray-300 text-center mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-400 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
