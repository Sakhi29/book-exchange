import React, { useState } from "react";
import axios from "axios";

function BookForm({ fetchBooks }) {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    genre: "",
    image: null,
  });

  const { title, author, genre, image } = formData;

  const onChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    const formDataObj = new FormData();
    formDataObj.append("title", title);
    formDataObj.append("author", author);
    formDataObj.append("genre", genre);
    formDataObj.append("image", image);

    try {
      await axios.post("http://localhost:5000/api/books", formDataObj, {
        headers: {
          "x-auth-token": token,
          "Content-Type": "multipart/form-data",
        },
      });
      fetchBooks(); // Fetch the updated list of books after adding a new one
    } catch (err) {
      console.error(err.response?.data?.message || err.message);
    }
  };

  const handleBookAdd = () => {
    console.log("Book added on cloudinary");
  };
  return (
    <form
      onSubmit={onSubmit}
      className="max-w-md mx-auto p-4 mb-4 bg-white shadow-lg rounded-lg"
    >
      <h2 className="text-2xl font-bold mb-4">Add a Book</h2>
      <input
        type="text"
        name="title"
        value={title}
        onChange={onChange}
        placeholder="Title"
        className="block w-full mb-3 p-2 border rounded"
        required
      />
      <input
        type="text"
        name="author"
        value={author}
        onChange={onChange}
        placeholder="Author"
        className="block w-full mb-3 p-2 border rounded"
        required
      />
      <input
        type="text"
        name="genre"
        value={genre}
        onChange={onChange}
        placeholder="Genre"
        className="block w-full mb-3 p-2 border rounded"
        required
      />
      <input
        type="file"
        name="image"
        onChange={onChange}
        className="block w-full mb-3 p-2 border rounded"
        required
      />
      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded"
        onClick={handleBookAdd}
      >
        Add Book
      </button>
    </form>
  );
}

export default BookForm;
