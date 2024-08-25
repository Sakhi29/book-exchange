import React, { useEffect, useState } from "react";
import axios from "axios";

function BookMatching() {
  const [matches, setMatches] = useState({});

  useEffect(() => {
    fetchMatches();
  }, []);

  const fetchMatches = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/matches");
      setMatches(res.data);
    } catch (err) {
      console.error(err.response?.data?.message || err.message);
    }
  };

  const initiateExchangeRequest = async (requesteeBookId, requesterBookId) => {
    try {
      await axios.post("http://localhost:5000/api/exchange", {
        requesteeBookId,
        requesterBookId,
      });
      alert("Exchange request sent!");
    } catch (err) {
      console.error(err.response?.data?.message || err.message);
      alert("Failed to send exchange request.");
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-6">Potential Book Matches</h1>
      {Object.keys(matches).length === 0 ? (
        <p>No matches found.</p>
      ) : (
        Object.entries(matches).map(([userId, books]) => (
          <div key={userId} className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              Matches with User: {userId}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {books.map((book) => (
                <div
                  key={book._id}
                  className="bg-white shadow-lg rounded-lg p-4"
                >
                  {book.imageUrl && (
                    <img
                      src={book.imageUrl}
                      alt={book.title}
                      className="mb-3 w-full h-48 object-cover rounded-lg"
                    />
                  )}
                  <h3 className="text-xl font-semibold">{book.title}</h3>
                  <p>Author: {book.author}</p>
                  <p>Genre: {book.genre}</p>
                  <button
                    onClick={() =>
                      initiateExchangeRequest(book._id, books[0]._id)
                    }
                    className="mt-2 bg-blue-500 text-white px-3 py-1 rounded-lg"
                  >
                    Request Exchange
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default BookMatching;
