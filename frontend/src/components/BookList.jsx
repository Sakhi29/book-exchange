import React from "react";
import Header from "./Header";

function BookList({ books, deleteBook }) {
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
            Your Books
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
              <li className="text-white uppercase ml-2">Your Books</li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="container mx-auto p-8 max-w-screen-xl">
        <div className="w-full">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-3xl font-bold text-indigo-900">
              Find your books here
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5">
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
                  <button
                    onClick={() => deleteBook(book._id)}
                    className="mt-2 bg-red-500 text-white px-3 py-1 rounded-lg"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default BookList;
