const Book = require("../models/Book");
const { cloudinary } = require("../config/cloudinaryConfig");

// Add a new book
const addBook = async (req, res) => {
  try {
    const { title, author, genre } = req.body;
    const image = req.file;

    // Upload image to Cloudinary
    const result = await cloudinary.uploader.upload(image.path);

    const newBook = new Book({
      user: req.user.userId,
      title,
      author,
      genre,
      imageUrl: result.secure_url, // Store the URL of the uploaded image
    });
    const book = await newBook.save();
    res.json(book);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// Get all books for the authenticated user
const getBooks = async (req, res) => {
  try {
    const books = await Book.find({ user: req.user.userId });
    res.json(books);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// Delete a book
const deleteBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);

    if (!book) {
      return res.status(404).json({ msg: "Book not found" });
    }

    // Ensure user owns the book
    if (book.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "User not authorized" });
    }

    await book.remove();
    res.json({ msg: "Book removed" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

const updateBook = async (req, res) => {
  try {
    const { title, author, genre } = req.body;
    const image = req.file;

    let book = await Book.findById(req.params.id);

    if (!book) {
      return res.status(404).json({ msg: "Book not found" });
    }

    // Ensure user owns the book
    if (book.user.toString() !== req.user.userId) {
      return res.status(401).json({ msg: "User not authorized" });
    }

    // If a new image is uploaded, replace the old one
    if (image) {
      const public_id = book.imageUrl.split("/").pop().split(".")[0];
      await cloudinary.uploader.destroy(public_id); // Delete the old image
      const result = await cloudinary.uploader.upload(image.path); // Upload the new image
      book.imageUrl = result.secure_url;
    }

    // Update the other fields
    book.title = title || book.title;
    book.author = author || book.author;
    book.genre = genre || book.genre;

    await book.save();
    res.json(book);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

const getAllBooks = async (req, res) => {
  try {
    const { genre, author } = req.query;

    let query = {};
    if (genre) {
      query.genre = genre;
    }
    if (author) {
      query.author = author;
    }

    const books = await Book.find(query);
    res.json(books);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

module.exports = {
  addBook,
  getBooks,
  deleteBook,
  updateBook,
  getAllBooks,
};
