const express = require("express");
const router = express.Router();
const {
  addBook,
  getBooks,
  deleteBook,
  updateBook,
  getAllBooks,
} = require("../controllers/bookController");
const authMiddleware = require("../middleware/authMiddleware");
const { upload } = require("../config/cloudinaryConfig");

// Route to add a new book with image upload
router.post("/", authMiddleware, upload.single("image"), addBook);

// Route to get all books for the authenticated user
router.get("/user", authMiddleware, getBooks);

// Route to delete a book
router.delete("/:id", authMiddleware, deleteBook);

router.put("/:id", authMiddleware, upload.single("image"), updateBook);

router.get("/", getAllBooks);

module.exports = router;
