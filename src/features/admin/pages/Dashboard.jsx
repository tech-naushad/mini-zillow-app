import React from "react";
import {
  HomeIcon,
  ClipboardDocumentListIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { LogOut } from "lucide-react";

const Dashboard = () => {
  const handleLogout = () => {
    sessionStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 p-6 shadow-sm">
        <h1 className="text-2xl font-bold text-blue-900 mb-6 tracking-wide">
          Admin Panel
        </h1>
       <hr className="border-t border-gray-300" />
        <nav className="flex flex-col gap-3 text-sm font-medium text-gray-700">
          <NavLink
            to="/admin/managelisting"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-lg transition-all ${
                isActive
                  ? "bg-blue-50 text-blue-700 font-semibold"
                  : "hover:bg-gray-100 hover:text-blue-600"
              }`
            }
          >
            <HomeIcon className="w-5 h-5" />
            Manage Listing
          </NavLink>
          <NavLink
            className="flex items-center gap-3 px-4 py-2 rounded-lg text-red-600 hover:text-red-700 hover:bg-red-50 transition-all"
            onClick={() => handleLogout()}
          >
            <ArrowLeftOnRectangleIcon className="w-5 h-5" />
            Logout
          </NavLink>
        </nav>
      </aside>

      {/* Vertical Divider */}
      <div className="w-px bg-gray-200" />

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-semibold text-gray-800">
          Admin Dashboard
        </h1>
        <p className="text-gray-600 mt-2">
          Welcome back, Admin! Here’s an overview of all listings.
        </p>

        {/* Example Section */}
        <div className="mt-6 p-6 bg-white rounded-xl shadow-md">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
