import {
  ArrowDownNarrowWide,
  BookIcon,
  ChevronDown,
  ChevronDownCircle,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = (e) => {
    if (dropdownOpen && !e.target.closest(".dropdown")) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUsername = localStorage.getItem("name");
    console.log("Token from localStorage:", token); // Debug log
    console.log("Username from localStorage:", storedUsername); // Debug log
    if (token && storedUsername) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
      console.log("User is logged in");
    } else {
      setIsLoggedIn(false);
      console.log("User is not logged in");
    }

    // Close dropdown when clicking outside
    document.addEventListener("click", closeDropdown);
    return () => {
      document.removeEventListener("click", closeDropdown);
    };
  }, [dropdownOpen]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    setIsLoggedIn(false);
    setUsername("");
    navigate("/login");
  };

  return (
    <div>
      <header className="text-primary-foreground px-4 lg:px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-bold">
          <BookIcon className="h-6 w-6" />
          Book Exchange
        </Link>
        <nav className="flex items-center gap-4 sm:gap-6">
          <Link
            to="/discover"
            className="text-blue-950 font-bold hover:text-orange-400"
          >
            Discover books
          </Link>
          <Link
            to="/add-book"
            className="text-blue-950 font-bold hover:text-orange-400"
          >
            Add books
          </Link>
          <Link
            to="#"
            className="text-blue-950 font-bold hover:text-orange-400"
          >
            Match books
          </Link>
        </nav>
        <nav className="flex items-center gap-4 sm:gap-6">
          {isLoggedIn ? (
            <div className="relative inline-block text-left dropdown">
              <button
                onClick={toggleDropdown}
                className="flex gap-1 bg-orange-400 rounded-lg p-2 text-blue-950 font-bold hover:bg-orange-500 focus:outline-none"
              >
                Hello, {username}
                <ChevronDown />
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-10">
                  <div
                    className="block px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100"
                    onClick={() => {
                      setDropdownOpen(false);
                      navigate("/your-books");
                    }}
                  >
                    Your Books
                  </div>
                  <div
                    className="block px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100"
                    onClick={handleLogout}
                  >
                    Logout
                  </div>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link
                to="/register"
                className="inline-flex h-9 items-center justify-center rounded-md bg-primary-foreground px-4 py-2 text-sm font-medium text-primary shadow transition-colors hover:bg-orange-400 hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                Register
              </Link>
              <Link
                to="/login"
                className="inline-flex h-9 items-center justify-center rounded-md border border-primary-foreground bg-orange-400 hover:bg-orange-500 px-4 py-2 text-sm text-white font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                Log in
              </Link>
            </>
          )}
        </nav>
      </header>
    </div>
  );
};

export default Header;
