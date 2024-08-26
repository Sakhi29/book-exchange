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
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/books`, {
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
      <div className="container mx-auto p-8 max-w-7xl">
        {/* Books Display Section */}
        <div className="container mx-auto p-4">
          <div className="flex">
            {/* Filter Options */}
            <div className="w-1/4 pr-4">
              <h2 className="text-3xl font-bold mb-4 text-indigo-900">
                Filter Option
              </h2>

              <div className="mb-4">
                <div>
                  <label className="block text-blue-900 font-bold">
                    Genre:
                  </label>
                  <input
                    type="text"
                    name="genre"
                    value={filters.genre}
                    onChange={handleFilterChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="Enter genre"
                  />
                </div>
              </div>

              <div className="mb-4">
                <div>
                  <label className="block text-blue-900 font-bold">
                    Author:
                  </label>
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
            <div className="w-3/4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-3xl font-bold text-indigo-900">
                  Explore Books
                </h2>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-5">
                {books.map((book, index) => (
                  <div
                    key={index}
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
                    <div className="p-4">
                      <h3 className="font-bold text-lg text-center text-blue-950 hover:text-orange-500">
                        {book.title}
                      </h3>
                      <p className="text-sm text-blue-950 text-center">
                        {book.author}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookDiscovery;
