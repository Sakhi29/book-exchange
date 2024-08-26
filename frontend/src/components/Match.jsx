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
        `${import.meta.env.VITE_API_URL}/api/exchange/matches`,
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
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/books/user`,
        {
          headers: { "x-auth-token": token },
        }
      );
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
        `${import.meta.env.VITE_API_URL}/api/exchange/notifications`,
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
        `${import.meta.env.VITE_API_URL}/api/exchange/request`,
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
      <div
        className="relative w-full h-[450px] bg-cover bg-center md:h-[300px] sm:h-[230px]"
        style={{ backgroundImage: "url('/hero-section.jpg')" }}
      >
        <div className="absolute inset-0 bg-blue-950 opacity-80 clip-path-polygon"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          <h1 className="text-white text-[3.5rem] font-bold md:text-[40px] sm:text-[30px]">
            Match Books
          </h1>
          <nav
            aria-label="breadcrumb"
            className="relative z-10 flex justify-center"
          >
            <ul className="flex p-4 rounded-md mt-4">
              <li className="text-white uppercase mr-2">
                <a href="/" className="hover:text-gray-200">
                  Home
                </a>
              </li>
              <li className="text-white uppercase">›</li>
              <li className="text-white uppercase ml-2">Match Books</li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="container mx-auto p-8 max-w-7xl">
        {/* Books Display Section */}
        <div className="container mx-auto p-4">
          <div className="flex gap-20">
            {/* Filter Options */}
            <div className="w-1/4 pr-4">
              <h2 className="text-3xl font-bold mb-4 text-indigo-900">
                Notifications
              </h2>
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
            <div className="w-3/4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-3xl font-bold text-indigo-900">
                  Find Matches and send exchange requests
                </h2>
              </div>

              <div className="w-3/4 p-6">
                <h2 className="text-2xl text-indigo-900 font-bold mb-4">
                  Find Matching Books
                </h2>
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
                    className="bg-orange-400 hover:bg-orange-500 text-white px-4 py-2 rounded"
                  >
                    Search
                  </button>
                </div>

                <div>
                  <h2 className="text-xl text-indigo-900 font-bold mt-6">
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

                <h2 className="text-lg font-bold text-indigo-900 ">
                  Matching Books
                </h2>
                <div className="grid grid-cols-3 gap-4 mt-5">
                  {matches.map((book) => (
                    <div
                      key={book._id}
                      className="border border-gray-200 rounded-lg overflow-hidden"
                    >
                      <div className="relative">
                        {book.imageUrl && (
                          <img
                            src={book.imageUrl}
                            alt={book.title}
                            className="w-full h-64 object-contain hover:text-orange-500"
                          />
                        )}
                        <button className="absolute top-2 right-2 bg-white rounded-full p-1">
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                            />
                          </svg>
                        </button>
                      </div>
                      <div className="">
                        <h3 className="font-bold text-lg text-center text-blue-950 hover:text-orange-500">
                          Title: {book.title}
                        </h3>
                        <p className="text-sm text-blue-950 text-center">
                          Author: {book.author}
                        </p>
                        <p className="text-sm text-blue-950 text-center">
                          Genre: {book.genre}
                        </p>
                        <p className="text-sm text-blue-950 text-center">
                          Owner: {book.user.name}
                        </p>
                        <button
                          onClick={() => handleRequestExchange(book._id)}
                          className="mt-2 bg-orange-400 hover:bg-orange-500 text-white px-2 py-2 rounded-lg"
                        >
                          Request Exchange
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                {/* <div>
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
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="flex">
        
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
      </div> */}
    </>
  );
}

export default Match;
