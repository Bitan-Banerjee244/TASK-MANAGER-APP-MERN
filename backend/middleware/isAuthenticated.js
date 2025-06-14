import jwt from "jsonwebtoken";

const isAuthenticated = async (req, res, next) => {
  try {
    let token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ message: "User is not Authenticated" });
    }
    let decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded)
    req.userId = decoded.id;
    next();
  } catch (error) {
    console.error("JWT Verification Error:", error.message);
    return res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};

export default isAuthenticated
