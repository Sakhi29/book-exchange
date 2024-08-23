import React from 'react';

function BookList({ books, deleteBook }) {
  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Your Books</h2>
      {books.length === 0 ? (
        <p>No books listed yet.</p>
      ) : (
        books.map((book) => (
          <div key={book._id} className="mb-4 p-4 border rounded-lg shadow">
            {book.imageUrl && (
              <img src={book.imageUrl} alt={book.title} className="mb-3 w-full h-48 object-cover rounded-lg" />
            )}
            <h3 className="text-xl font-semibold">{book.title}</h3>
            <p>Author: {book.author}</p>
            <p>Genre: {book.genre}</p>
            <button
              onClick={() => deleteBook(book._id)}
              className="mt-2 bg-red-500 text-white px-3 py-1 rounded-lg"
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default BookList;
