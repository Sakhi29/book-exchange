import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import PrivateRoute from "./components/PrivateRoute";
import BookDiscovery from "./components/BookDiscovery";
import YourBooksPage from "./components/YourBooks";
import AddBooks from "./components/AddBooks";
import Match from "./components/Match";

function App() {
  const isAuthenticated = !!localStorage.getItem("token");
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/add-book"
            element={
              <PrivateRoute>
                <AddBooks />
              </PrivateRoute>
            }
          />
          <Route
            path="/your-books"
            element={
              <PrivateRoute>
                <YourBooksPage />
              </PrivateRoute>
            }
          />
          <Route path="/discover" element={<BookDiscovery />} />
          <Route path="/match" element={<Match />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
