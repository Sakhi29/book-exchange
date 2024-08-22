const express = require("express");
const { register, login, getMe } = require("../controllers/authController");
const router = express.Router();

// Register route
router.post("/register", register);

// Login route
router.post("/login", login);

// Get current user route
router.get("/me", authenticateToken, getMe);

// Middleware to authenticate the token
function authenticateToken(req, res, next) {
  const token = req.header("Authorization");
  if (!token)
    return res.status(401).json({ message: "No token, authorization denied" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
}

module.exports = router;
