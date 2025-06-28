import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddProperty from "./features/property/pages/add-property/AddProperty";
import PropertyList from "./features/property/pages/property-list/PropertyList";
import Navbar from "./components/navbar/Navbar";
import PropertyDetails from "./features/property/pages/property-details/PropertyDetails";
import Signup from "./features/auth/signup/Signup";
import Login from "./features/auth/login/Login";

const App = () => {
  const [showRight, setShowRight] = useState(true);

  return (
    <>
      <Navbar />
      <div className="p-6 max-w-7xl mx-auto">
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/property" element={<PropertyList />} />
            <Route path="/property/list" element={<PropertyList />} />
          </Routes>
        </Router>
      </div>
    </>
  );
};

export default App;
