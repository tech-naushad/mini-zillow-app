import React from "react";
import { Routes, Route } from "react-router-dom";
import PropertyList from "./property-list/PropertyList";    
import AddProperty from "./add-property/AddProperty";
import PropertyDetail from "./property-detail/PropertyDetail";  

const PropertyRoutes = () => {
    return (
        <Routes>
            <Route path="/property" element={<PropertyList />} />
            <Route path="/property/add" element={<AddProperty />} />
            <Route path="/property/list" element={<PropertyDetail />} />
        </Routes>
    );
};

export default PropertyRoutes;