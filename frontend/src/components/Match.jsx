import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";

function Match() {
  const [matches, setMatches] = useState([]);
  const [offeredBookId, setOfferedBookId] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedAuthor, setSelectedAuthor] = useState("");
  const [userBooks, setUserBooks] = useState([]); // State for user's books
  const [notifications, setNotifications] = useState([]); // State for notifications

  const fetchMatches = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(
        "http://localhost:5000/api/exchange/matches",
        {
          headers: { "x-auth-token": token },
          params: {
            genre: selectedGenre,
            author: selectedAuthor,
          },
        }
      );
      setMatches(res.data);
    } catch (err) {
      console.error(
        "Error fetching matches:",
        err.response?.data?.message || err.message
      );
    }
  };

  const fetchUserBooks = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get("http://localhost:5000/api/books/user", {
        headers: { "x-auth-token": token },
      });
      setUserBooks(res.data);
    } catch (err) {
      console.error(
        "Error fetching user books:",
        err.response?.data?.message || err.message
      );
    }
  };

  const fetchNotifications = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(
        "http://localhost:5000/api/exchange/notifications",
        {
          headers: { "x-auth-token": token },
        }
      );
      setNotifications(res.data);
    } catch (err) {
      console.error(
        "Error fetching notifications:",
        err.response?.data?.message || err.message
      );
    }
  };

  const handleRequestExchange = async (requestedBookId) => {
    if (!offeredBookId) {
      alert("Please select a book to offer in exchange.");
      return;
    }
    try {
      const token = localStorage.getItem("token");
      await axios.post(
        "http://localhost:5000/api/exchange/request",
        { requestedBookId, offeredBookId },
        { headers: { "x-auth-token": token } }
      );
      alert("Exchange request sent successfully!");
    } catch (err) {
      console.error(
        "Error sending exchange request:",
        err.response?.data?.message || err.message
      );
    }
  };

  const handleSearch = () => {
    fetchMatches();
  };

  useEffect(() => {
    fetchMatches();
    fetchUserBooks(); // Fetch user's books on component mount
    fetchNotifications(); // Fetch notifications on component mount
  }, []);

  return (
    <>
      <Header />
      <div className="flex">
        {/* Notification Side Panel */}
        <div className="w-1/4 h-screen bg-gray-100 p-4">
          <h2 className="text-lg font-bold mb-4">Notifications</h2>
          {notifications.length === 0 ? (
            <p>No new notifications.</p>
          ) : (
            notifications.map((notification) => (
              <div
                key={notification._id}
                className="mb-4 p-2 bg-white shadow-md rounded-md"
              >
                <p>
                  You have a new exchange request from{" "}
                  {notification.requester.name} for your book "
                  {notification.requestedBook.title}".
                </p>
              </div>
            ))
          )}
        </div>

        {/* Matches Panel */}
        <div className="w-3/4 p-6">
          <h2 className="text-2xl font-bold mb-4">Matching Books</h2>
          <div>
            <input
              type="text"
              placeholder="Enter genre"
              value={selectedGenre}
              onChange={(e) => setSelectedGenre(e.target.value)}
              className="mb-2 p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Enter author"
              value={selectedAuthor}
              onChange={(e) => setSelectedAuthor(e.target.value)}
              className="mb-2 p-2 border rounded"
            />
            <button
              onClick={handleSearch}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Search
            </button>
          </div>

          <div>
            <h2 className="text-xl font-bold mt-6">
              Select a book to offer in exchange:
            </h2>
            <select
              value={offeredBookId}
              onChange={(e) => setOfferedBookId(e.target.value)}
              className="mb-4 p-2 border rounded"
            >
              <option value="">Select your book</option>
              {userBooks.map((book) => (
                <option key={book._id} value={book._id}>
                  {book.title} by {book.author}
                </option>
              ))}
            </select>
          </div>

          <div>
            <h2>Matching Books</h2>
            {matches.map((book) => (
              <div key={book._id} className="book-item">
                <img
                  src={book.imageUrl}
                  alt={book.title}
                  className="book-image"
                  style={{
                    width: "100px",
                    height: "150px",
                    objectFit: "cover",
                  }}
                />
                <h3>{book.title}</h3>
                <p>Author: {book.author}</p>
                <p>Genre: {book.genre}</p>
                <p>Owner: {book.user.name}</p>
                <button onClick={() => handleRequestExchange(book._id)}>
                  Request Exchange
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Match;
