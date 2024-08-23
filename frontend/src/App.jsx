import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";

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
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          >
            <Route path="form" element={<BookForm />} />
            <Route path="list" element={<BookList />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
