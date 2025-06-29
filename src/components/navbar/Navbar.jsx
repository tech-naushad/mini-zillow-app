import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import ManagePropertiesMenu from "./ManagePropertiesMenu";
import UserProfileMenu from "./UserProfileMenu";
import useJwtValidator from "../../hooks/useMZAuth";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const token = sessionStorage.getItem("token");
   const { decoded, isValid, isExpired } = useJwtValidator(token);

  return (
    <>
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <div className="flex-shrink-0 text-blue-600 text-2xl font-bold">
              <a href="/">Mini-Zillow</a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6">
              <ManagePropertiesMenu />
            </div>

            <div className="hidden md:flex items-center space-x-4">
              {decoded ===null ? (
                <NavLink
                  to="/auth/login"
                  className="relative text-blue-600 hover:text-blue-800 transition-colors duration-200"
                >
                  Sign In
                </NavLink>
              ) : (
                <UserProfileMenu name={decoded?.payload.name} />
              )}
            </div>           

            {/* Mobile Toggle */}
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden px-4 pb-4">
            <div className="flex flex-col space-y-3">
              <ManagePropertiesMenu />
            </div>
          </div>
        )}
      </nav>
      {/* This is where child routes will be rendered */}
      <Outlet />
    </>
  );
};

export default Navbar;
