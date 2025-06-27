import React, { useState } from "react";
import SideBar from "./sidebar/Sidebar";
import RightNav from "./right-nav/RightNav";
import { NavLink } from "react-router-dom";
import AddProperty from "../features/property/pages/add-property/AddProperty";
import PropertyList from "../features/property/pages/property-list/PropertyList";

const RootLayout = () => {
  const [showRight, setShowRight] = useState(true);
// Function to return the appropriate right component
  const renderRightComponent = () => {
    const path = location.pathname;

    if (path.startsWith("/property")) return <AddProperty />;
    if (path.startsWith("/property/add")) return <AddProperty />;
    // default
    return <RightNav />;
  };

  return (
   <div className="flex flex-col md:flex-row h-screen">
  {/* Left Panel - 30% */}
  <div className="w-full md:w-[20%] bg-gray-100 p-4 overflow-auto">
    <button
      className="md:hidden mb-4 px-4 py-2 bg-blue-500 text-white rounded"
      onClick={() => setShowRight(!showRight)}
    >
      Toggle Nav
    </button>
    <SideBar />
  </div>

  {/* Right Panel - 70% */}
  <div
    className={`w-full md:w-[80%] bg-white border-l p-4 transition-transform duration-300 ease-in-out
    ${showRight ? "translate-x-0" : "translate-x-full md:translate-x-0"}
    fixed md:static top-0 right-0 h-full z-50 md:z-auto`}
  >
    {renderRightComponent()}
  </div>
</div>

  );
};

export default RootLayout;