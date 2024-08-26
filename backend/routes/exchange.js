// const express = require("express");
// const router = express.Router();
// const authMiddleware = require("../middleware/authMiddleware");
// const {
//   findMatches,
//   createExchangeRequest,
// } = require("../controllers/exchangeController");

// // Route to find matching books
// router.get("/matches", authMiddleware, findMatches);

// // Route to create an exchange request
// router.post("/request", authMiddleware, createExchangeRequest);

// module.exports = router;

const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const {
  findMatches,
  createExchangeRequest,
  getNotifications,
} = require("../controllers/exchangeController");

// Route to find matching books
router.get("/matches", authMiddleware, findMatches);

// Route to create an exchange request
router.post("/request", authMiddleware, createExchangeRequest);

// Route to get notifications
router.get("/notifications", authMiddleware, getNotifications);

module.exports = router;
