import React,{useState } from "react";
import "./App.css";
import SideBar from "./layouts/sidebar/Sidebar";
import RightNav from "./layouts/right-nav/RightNav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import AddProperty from "./features/property/pages/add-property/AddProperty";
import PropertyList from "./features/property/pages/property-list/PropertyList";

const App = () => {
  const [showRight, setShowRight] = useState(true);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootLayout />}>
        <Route path="/property" element={<PropertyList />} />
          <Route path="/property/add" element={<AddProperty />} />
          {/* <Route index element={<Dashboard />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} /> */}
         
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
