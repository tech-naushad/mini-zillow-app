import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddProperty from "./features/property/pages/add-property/AddProperty";
import PropertyList from "./features/property/pages/property-list/PropertyList";
import Navbar from "./components/navbar/Navbar";
const App = () => {
  const [showRight, setShowRight] = useState(true);

  return (
    <>
      <Navbar />
      <div className="p-6 max-w-7xl mx-auto">
        <Router>
          <Routes>
            <Route path="/" element={<PropertyList />}>
              <Route path="/property" element={<PropertyList />} />
              <Route path="/property/list" element={<PropertyList />} />
            </Route>
          </Routes>
        </Router>
      </div>
    </>
  );
};

export default App;
