import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BookForm from "./AddBooks";
import BookList from "./BookList";
import axios from "axios";
import Sidebar from "./SideBar";

function Dashboard() {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  const fetchBooks = async () => {
    try {
      const token = localStorage.getItem("token");
      console.log("Fetching books with token:", token);
      const res = await axios.get("http://localhost:5000/api/books/user", {
        headers: { "x-auth-token": token },
      });
      console.log("Books fetched:", res.data);
      setBooks(res.data);
    } catch (err) {
      console.error(
        "Error fetching books:",
        err.response?.data?.message || err.message
      );
    }
  };

  const deleteBook = async (id) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`http://localhost:5000/api/books/${id}`, {
        headers: { "x-auth-token": token },
      });
      fetchBooks(); // Refresh the book list after deletion
    } catch (err) {
      console.error(
        "Error deleting book:",
        err.response?.data?.message || err.message
      );
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-4xl font-bold">Welcome to your Dashboard</h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-500 text-white rounded-lg"
          >
            Logout
          </button>
        </div>
        <BookForm fetchBooks={fetchBooks} />
        <BookList books={books} deleteBook={deleteBook} />
      </div>
    </div>
  );
}

export default Dashboard;
