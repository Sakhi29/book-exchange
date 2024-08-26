const Book = require("../models/Book");
const ExchangeRequest = require("../models/Exchangerequest");

// Find books that match the user's book's genre or author
const findMatches = async (req, res) => {
  try {
    const { genre, author } = req.query;

    // Find books that match the genre or author, excluding the user's own books
    const matches = await Book.find({
      $or: [{ genre }, { author }],
      user: { $ne: req.user.userId },
    }).populate("user", "name email");

    res.json(matches);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// Create an exchange request
const createExchangeRequest = async (req, res) => {
  try {
    const { requestedBookId, offeredBookId } = req.body;

    const newExchangeRequest = new ExchangeRequest({
      requester: req.user.userId,
      requestedBook: requestedBookId,
      offeredBook: offeredBookId,
    });

    await newExchangeRequest.save();
    res.status(201).json(newExchangeRequest);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// Get notifications for exchange requests
const getNotifications = async (req, res) => {
  try {
    const notifications = await ExchangeRequest.find({
      requestedBook: {
        $in: await Book.find({ user: req.user.userId }).select("_id"),
      },
      recipientNotified: false,
    })
      .populate("requester", "name email")
      .populate("requestedBook", "title");

    res.json(notifications);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

module.exports = {
  findMatches,
  createExchangeRequest,
  getNotifications,
};
