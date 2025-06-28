import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddProperty from "./features/property/pages/add-property/AddProperty";
import PropertyList from "./features/property/pages/property-list/PropertyList";
import Navbar from "./components/navbar/Navbar";
import PropertyDetails from "./features/property/pages/property-details/PropertyDetails";
import Signup from "./features/auth/signup/Signup";
import Login from "./features/auth/login/Login";
import PageLoader from "./components/pageLoader/MZPageLoader";
import {
  LoaderProvider,
  useLoader,
} from "./components/pageLoader/LoaderContext";
import Dashboard from "./features/admin/pages/Dashboard";

const App = () => {
  const [showRight, setShowRight] = useState(true);

  const GlobalLoader = () => {
    const { loading } = useLoader();
    return loading ? <PageLoader /> : null;
  };

  return (
    <>
      <LoaderProvider>
        <div className="m-4">
          <Router>
            <GlobalLoader />
            <Routes>
              <Route path="/" element={<Navbar />}>
                <Route path="/" element={<PropertyList />} />
                <Route path="/property/list" element={<PropertyList />} />
                <Route path="/property/add" element={<AddProperty />} />
                <Route path="/property/details" element={<PropertyDetails />} />
                <Route path="auth/signup" element={<Signup />} />
                <Route path="auth/login" element={<Login />} />
               
            </Route>
             <Route path="admin/dashboard" element={<Dashboard/>}/>
            </Routes>
          </Router>
        </div>
      </LoaderProvider>
    </>
  );
};

export default App;
