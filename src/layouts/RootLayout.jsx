// import React, { useState } from "react";
// import SideBar from "./sidebar/Sidebar";
// import RightNav from "./right-nav/RightNav";
// import { NavLink } from "react-router-dom";
// import AddProperty from "../features/property/pages/add-property/AddProperty";
// import PropertyList from "../features/property/pages/property-list/PropertyList";

// const RootLayout = () => {
//   const [showRight, setShowRight] = useState(true);
// // Function to return the appropriate right component
//   const renderRightComponent = () => {
//     const path = location.pathname;

//     if (path.startsWith("/property")) return <AddProperty />;
//     if (path.startsWith("/property/add")) return <AddProperty />;
//     // default
//     return <RightNav />;
//   };

//   return (
//    <div className="flex flex-col md:flex-row h-screen">
//   {/* Left Panel - 30% */}
//   <div className="w-full md:w-[20%] bg-gray-100 p-4 overflow-auto">
//     <button
//       className="md:hidden mb-4 px-4 py-2 bg-blue-500 text-white rounded"
//       onClick={() => setShowRight(!showRight)}
//     >
//       Toggle Nav
//     </button>
//     <SideBar />
//   </div>

//   {/* Right Panel - 70% */}
//   <div
//     className={`w-full md:w-[80%] bg-white border-l p-4 transition-transform duration-300 ease-in-out
//     ${showRight ? "translate-x-0" : "translate-x-full md:translate-x-0"}
//     fixed md:static top-0 right-0 h-full z-50 md:z-auto`}
//   >
//     {renderRightComponent()}
//   </div>
// </div>

//   );
// };

// export default RootLayout;

import React from "react";
import { FaBed, FaBath, FaRulerCombined, FaStar } from "react-icons/fa";
import { FiHeart, FiUser, FiLogOut, FiSettings, FiMessageSquare, FiLock } from "react-icons/fi";

const properties = [
  {
    id: 1,
    image: "/house1.jpg",
    address: "10765 Hillshire Ave, Baton Rouge, LA 70810, USA",
    size: "8000sqf",
    beds: 4,
    baths: 4,
    price: 5000,
    rating: 5.0,
    reviews: 30,
  },
  {
    id: 2,
    image: "/house2.jpg",
    address: "59345 STONEWALL DR, Plaquemine, LA 70764, USA",
    size: "8000sqf",
    beds: 4,
    baths: 4,
    price: 5000,
    rating: 5.0,
    reviews: 30,
  },
  {
    id: 3,
    image: "/house3.jpg",
    address: "3723 SANDBAR DR, Addis, LA 70710, USA",
    size: "8000sqf",
    beds: 4,
    baths: 4,
    price: 5000,
    rating: 5.0,
    reviews: 30,
  },
];

const RootLayout = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-4">
          <button className="text-2xl">☰</button>
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 border rounded-md focus:outline-none w-64"
          />
        </div>

        <div className="flex items-center gap-4 relative">
          <img
            src="https://flagcdn.com/us.svg"
            alt="US Flag"
            className="w-6 h-6 rounded-full"
          />
          <div className="relative group">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="User"
              className="w-8 h-8 rounded-full cursor-pointer"
            />
            <div className="absolute top-10 right-0 bg-white shadow-md rounded-md w-40 opacity-0 group-hover:opacity-100 transition duration-200 pointer-events-none group-hover:pointer-events-auto">
              <ul className="text-sm text-gray-700 divide-y">
                <li className="p-2 flex items-center gap-2 hover:bg-gray-100 cursor-pointer">
                  <FiUser /> Profile
                </li>
                <li className="p-2 flex items-center gap-2 hover:bg-gray-100 cursor-pointer">
                  <FiMessageSquare /> Chat
                </li>
                <li className="p-2 flex items-center gap-2 hover:bg-gray-100 cursor-pointer">
                  <FiSettings /> Settings
                </li>
                <li className="p-2 flex items-center gap-2 hover:bg-gray-100 cursor-pointer">
                  <FiLock /> Lockscreen
                </li>
                <li className="p-2 flex items-center gap-2 hover:bg-gray-100 cursor-pointer">
                  <FiLogOut /> Logout
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Explore Section */}
      <h2 className="text-2xl font-semibold mb-4">Explore Properties</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {properties.map((property) => (
          <div
            key={property.id}
            className="bg-white rounded-xl shadow hover:shadow-md transition p-3"
          >
            <div className="relative">
              <img
                src={property.image}
                alt="property"
                className="w-full h-48 object-cover rounded-lg"
              />
              <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow text-gray-700 hover:text-red-500">
                <FiHeart />
              </button>
            </div>
            <div className="mt-4">
              <p className="font-semibold text-gray-800">{property.address}</p>
              <div className="flex items-center justify-between text-sm text-green-700 mt-2">
                <div className="flex items-center gap-1">
                  <FaRulerCombined /> {property.size}
                </div>
                <div className="flex items-center gap-1">
                  <FaBed /> {property.beds} Beds
                </div>
                <div className="flex items-center gap-1">
                  <FaBath /> {property.baths} Baths
                </div>
              </div>
              <div className="flex justify-between mt-4 text-sm">
                <div>
                  <span className="text-gray-600">Price</span>
                  <p className="text-blue-700 font-semibold">${property.price}</p>
                </div>
                <div>
                  <span className="text-gray-600">Rating</span>
                  <p className="flex items-center text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} size={14} />
                    ))}{" "}
                    <span className="ml-1 text-gray-700">
                      {property.rating}({property.reviews})
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RootLayout;
