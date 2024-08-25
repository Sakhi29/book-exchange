const express = require("express");
const {
  getBookMatches,
  initiateExchange,
} = require("../controllers/exchangeRequestController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// GET /api/matches - Get matching books for the authenticated user
router.get("/matches", authMiddleware, getBookMatches);

// POST /api/exchange - Initiate an exchange request
router.post("/exchange", authMiddleware, initiateExchange);

module.exports = router;
