import React, { useEffect, useState } from "react";
import BookList from "./BookList";
import axios from "axios";

function YourBooksPage() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/books/user`,
        {
          headers: { "x-auth-token": token },
        }
      );
      setBooks(res.data);
    } catch (err) {
      console.error(err.response?.data?.message || err.message);
    }
  };

  const deleteBook = async (id) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`${import.meta.env.VITE_API_URL}/api/books/${id}`, {
        headers: { "x-auth-token": token },
      });
      fetchBooks(); // Refresh the book list after deletion
    } catch (err) {
      console.error(err.response?.data?.message || err.message);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <>
      <div className="flex h-screen bg-gray-100">
        <div className="flex-1">
          <BookList books={books} deleteBook={deleteBook} />
        </div>
      </div>
    </>
  );
}

export default YourBooksPage;
