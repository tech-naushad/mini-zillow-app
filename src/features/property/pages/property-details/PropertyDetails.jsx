import React, { useState, useEffect } from "react";
import { FiHome } from "react-icons/fi";
import apiClient from "../../../../api/apiClient";
import { useLocation } from "react-router-dom";
import PropertyRating from "../rating/PropertyRating";

const PropertyDetails = () => {
  const [property, setProperty] = useState([]);
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const propertyId = queryParams.get("id");

  const fetchProperty = async () => {
    try {
      const respose = await apiClient.get(`/properties/${propertyId}`);
      setProperty(respose.data);
    } catch (error) {
    } finally {
      //setLoading(false);
    }
  };

  useEffect(() => {
    fetchProperty();
  }, [propertyId]);

  return (
    <>
    <div className="max-w-6xl mx-auto p-4 sm:p-8 bg-white rounded-lg shadow">
      {/* Title */}
      <h1 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
        <FiHome className="text-blue-600" size={24} />
        {property.title}
      </h1>

      <div className="overflow-hidden rounded-lg shadow-md w-full max-h-[450px] mb-6">
        <img
          src={property.imageUrl}
          alt="Property"
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Description */}
      <p className="text-gray-700 text-lg mb-4">{property.description}</p>

      {/* Property Details Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-700 text-base mb-6">
        <div>
          <span className="font-semibold">📍 Location:</span>
          {property.streetAddress}
        </div>
        <div>
          <span className="font-semibold">📐 Size:</span> {property.size}
        </div>
        <div>
          <span className="font-semibold">🛏️ Beds:</span> {property.beds}
        </div>
        <div>
          <span className="font-semibold">🛁 Baths:</span> {property.baths}
        </div>
        <div>
          <span className="font-semibold">💵 Price:</span> {property.price}
        </div>
        <div className="flex items-center gap-2">
          <span className="font-semibold">⭐ Rating:</span>
          {property.rating ? (
            <span>{property.rating}</span>
          ) : (
            <span className="text-gray-400 italic">(Not rated yet)</span>
          )}
        </div>
      </div>
    </div>

    <div className="max-w-6xl mx-auto p-4 sm:p-8 bg-white rounded-lg shadow">
      {/* Title */}
      <h1 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">      
       <span className="font-semibold">⭐ Rate this property:</span>    
      </h1>
          <PropertyRating/>
       
       
    </div>
    </>
  );
};

export default PropertyDetails;
