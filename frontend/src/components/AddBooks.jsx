import React, { useState } from "react";
import axios from "axios";
import Header from "./Header";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddBooks() {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    genre: "",
    image: null,
  });

  const { title, author, genre, image } = formData;

  const fetchBooks = async () => {
    try {
      const token = localStorage.getItem("token");
      console.log("Fetching books with token:", token);
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/books/user`,
        {
          headers: { "x-auth-token": token },
        }
      );
      console.log("Books fetched:", res.data);
    } catch (err) {
      console.error(
        "Error fetching books:",
        err.response?.data?.message || err.message
      );
    }
  };

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
      await axios.post(
        `${import.meta.env.VITE_API_URL}/api/books`,
        formDataObj,
        {
          headers: {
            "x-auth-token": token,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      fetchBooks(); // Fetch the updated list of books after adding a new one
      toast.success("Book added successfully!"); // Display success toast
    } catch (err) {
      console.error(err.response?.data?.message || err.message);
      toast.error("Failed to add book. Please try again."); // Display error toast
    }
  };

  const handleBookAdd = () => {
    console.log("Book added on cloudinary");
  };

  return (
    <>
      <Header />
      <ToastContainer />
      <div
        className="relative w-full h-[450px] bg-cover bg-center md:h-[300px] sm:h-[230px]"
        style={{ backgroundImage: "url('/hero-section.jpg')" }}
      >
        <div className="absolute inset-0 bg-blue-950 opacity-80 clip-path-polygon"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          <h1 className="text-white text-[3.5rem] font-bold md:text-[40px] sm:text-[30px]">
            Add Your Books
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
              <li className="text-white uppercase ml-2">Add Books</li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center">
        {/* Left Side - Image */}
        <div className="w-full lg:w-1/2 p-8 flex items-center justify-center">
          <img
            src="/images/background/bg1.jpg"
            alt="Book Image"
            className="max-w-full h-[500px] rounded-lg shadow-md"
          />
        </div>

        {/* Right Side - Form */}
        <div className="w-full lg:w-1/2 p-8">
          <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-blue-950 mb-4">
              Add a New Book
            </h2>
            <form onSubmit={onSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="title"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={title}
                  onChange={onChange}
                  placeholder="Title"
                  className="block w-full mb-3 p-2 border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="author"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Author
                </label>
                <input
                  type="text"
                  name="author"
                  value={author}
                  onChange={onChange}
                  placeholder="Author"
                  className="block w-full mb-3 p-2 border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="genre"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Genre
                </label>
                <input
                  type="text"
                  name="genre"
                  value={genre}
                  onChange={onChange}
                  placeholder="Genre"
                  className="block w-full mb-3 p-2 border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="file"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  Choose File
                </label>
                <input
                  type="file"
                  name="image"
                  onChange={onChange}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={handleBookAdd}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddBooks;
