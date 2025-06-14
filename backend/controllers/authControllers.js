import bcrypt from "bcrypt";
import User from "../models/user.model.js";
import generateToken from "../config/token.js";

export const signup = async (req, res) => {
  try {
    const { userName, email, password } = req.body;

    // 🛑 Check for missing fields
    if (!userName || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All felids need to be filled",
      });
    }

    // 🔍 Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "User already exists with this email",
      });
    }

    // 🔐 Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 🆕 Create new user
    const newUser = await User.create({
      userName,
      email,
      password: hashedPassword,
    });

    let token;
    try {
      token = await generateToken({ id: newUser._id });
    } catch (error) {
      console.log("Token generation Error", error);
      return res
        .status(500)
        .json({ success: false, message: "Token creation failed" });
    }

    if (!token) {
      return res.status(500).json({ message: "Token is undefined" });
    }
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(201).json({
      success: true,
      message: "User Created Successfully!!",
      user: {
        id: newUser._id,
        userName: newUser.userName,
        email: newUser.email,
      },
    });
    
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Signup Error",
      error: error.message,
    });
  }
};


export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields need to be filled",
      });
    }

    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      return res.status(404).json({
        success: false,
        message: "No user found with this email",
      });
    }

    const isValidPassword = await bcrypt.compare(password, existingUser.password);

    if (!isValidPassword) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    const token = await generateToken({ id: existingUser._id });

    if (!token) {
      return res.status(500).json({
        success: false,
        message: "Token is undefined",
      });
    }

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({
      success: true,
      message: "User logged in successfully!",
      user: {
        id: existingUser._id,
        userName: existingUser.userName,
        email: existingUser.email,
      },
    });

  } catch (error) {
    console.log("Login error:", error);
    return res.status(500).json({
      success: false,
      message: "Login failed due to server error",
      error: error.message,
    });
  }
};


export const logout = async (req, res) => {
 await res.clearCookie("token", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
  });
  return res.status(200).json({ success: true, message: "User Logged Out" });
};
