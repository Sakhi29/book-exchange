import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 bg-gray-800 text-white h-full p-4">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <ul>
        <li className="mb-2">
          <Link to="/dashboard/form" className="hover:underline">
            Add Book
          </Link>
        </li>
        <li>
          <Link to="/dashboard/list" className="hover:underline">
            Book List
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
