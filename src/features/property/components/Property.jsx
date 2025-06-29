import React, { useState } from "react";
import { FaBed, FaBath, FaRulerCombined, FaStar } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { FiTrash } from "react-icons/fi";
import apiClient from "../../../api/apiClient";
import { useLoader } from "../../../components/pageLoader/LoaderContext";
import MZMessage from "../../../components/message/MZMessage";

const Property = ({ property, showDelete = false }) => {
  const { showLoader, hideLoader } = useLoader();
  const [message, setMessage] = useState({ text: "", type: "" });

  const handleDelete = async (id) => {
    try {
      showLoader();
      const response = await apiClient.delete(`/properties/${id}`, {});
      setMessage({ type: "success", text: "Property deleted successfully!" });
      window.location.href = "/admin/managelisting";
    } catch (error) {
      console.error("error:", error);
      setMessage({
        type: "error",
        text: "Failed to delete. Please try again.",
      });
    } finally {
      hideLoader();
    }
  };

  return (
    <>
      <div className="bg-white rounded-xl shadow p-4">
        <NavLink to={`/property/details?id=${property?._id}`}>
          <img
            src={property.imageUrl}
            alt={property.title}
            className="w-full h-48 object-cover rounded-lg"
          />
        </NavLink>
        <h3 className="mt-3 text-sm font-medium text-gray-800">
          {property.title}
        </h3>

        <div className="flex items-center text-sm text-green-600 mt-3 gap-4">
          <div className="flex items-center gap-1">
            <FaRulerCombined /> {property.size}
          </div>
          <div className="flex items-center gap-1">
            <FaBed /> {property.beds} Beds
          </div>
          <div className="flex items-center gap-1">
            <FaBath /> {property.baths} Baths
          </div>
          <div className="flex items-center gap-1">
            {showDelete && (
              <button
                className="text-red-600 hover:text-red-800 cursor-pointer"
                onClick={() => handleDelete(property._id)}
                title="Delete"
              >
                <FiTrash size={25} />
              </button>
            )}
          </div>
        </div>

        <div className="flex justify-between items-center mt-4 text-sm">
          <div>
            <p className="text-gray-600">Price</p>
            <p className="text-blue-600 font-semibold">${property.price}</p>
          </div>

          <div>
            <p className="text-gray-600">Rating</p>
            <div className="flex items-center text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} size={14} />
              ))}
              <span className="ml-1 text-gray-700">
                {property.rating} ({property.reviews})
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Property;
