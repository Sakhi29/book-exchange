import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";

function BookDiscovery() {
  const [books, setBooks] = useState([]);
  const [filters, setFilters] = useState({
    genre: "",
    author: "",
  });

  useEffect(() => {
    fetchBooks();
  }, [filters]);

  const fetchBooks = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/books", {
        params: filters, // Pass the filters as query parameters
      });
      setBooks(res.data);
    } catch (err) {
      console.error(err.response?.data?.message || err.message);
    }
  };

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Header />
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold mb-6">Discover Books</h1>

        {/* Filter Section */}
        <div className="mb-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-gray-700">Genre:</label>
              <input
                type="text"
                name="genre"
                value={filters.genre}
                onChange={handleFilterChange}
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Enter genre"
              />
            </div>
            <div>
              <label className="block text-gray-700">Author:</label>
              <input
                type="text"
                name="author"
                value={filters.author}
                onChange={handleFilterChange}
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Enter author"
              />
            </div>
          </div>
        </div>

        {/* Books Display Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {books.map((book) => (
            <div key={book._id} className="bg-white shadow-lg rounded-lg p-4">
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
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default BookDiscovery;
