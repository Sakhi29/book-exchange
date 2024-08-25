const User = require("../models/User");
const Book = require("../models/Book");
const ExchangeRequest = require("../models/Exchangerequest");

// Get matching books for a user and potential exchanges
const getBookMatches = async (req, res) => {
  try {
    const userId = req.user.userId;

    // Fetch the user's books
    const userBooks = await Book.find({ user: userId });

    // Define the criteria for matching (e.g., same genre or author)
    const matchCriteria = {
      $or: userBooks.map((book) => ({
        genre: book.genre,
        author: book.author,
      })),
      user: { $ne: userId }, // Exclude the current user's books
    };

    // Find matching books from other users
    const matchingBooks = await Book.find(matchCriteria);

    // Group the matches by user to suggest potential exchange partners
    const matchesByUser = matchingBooks.reduce((acc, book) => {
      if (!acc[book.user]) {
        acc[book.user] = [];
      }
      acc[book.user].push(book);
      return acc;
    }, {});

    res.json(matchesByUser);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// Initiate an exchange request
const initiateExchange = async (req, res) => {
  try {
    const { requesteeBookId, requesterBookId } = req.body;
    const requester = req.user.userId;

    const requesteeBook = await Book.findById(requesteeBookId);
    const requesterBook = await Book.findById(requesterBookId);

    if (!requesteeBook || !requesterBook) {
      return res.status(404).json({ msg: "Book not found" });
    }

    const newExchangeRequest = new ExchangeRequest({
      requester,
      requestee: requesteeBook.user,
      requesterBook: requesterBookId,
      requesteeBook: requesteeBookId,
    });

    await newExchangeRequest.save();
    res.json(newExchangeRequest);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

module.exports = {
  getBookMatches,
  initiateExchange,
};
