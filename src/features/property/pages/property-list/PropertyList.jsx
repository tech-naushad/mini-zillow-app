import React, { use, useState, useEffect } from "react";
import { FaBed, FaBath, FaRulerCombined, FaStar } from "react-icons/fa";
import { FiHeart, FiMapPin, FiChevronRight } from "react-icons/fi";
import apiClient from "../../../../api/apiClient";
import {
  LoaderProvider,
  useLoader,
} from "../../../../components/pageLoader/LoaderContext";
import { NavLink } from "react-router-dom";

const PropertyList = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1); // current page
  const [totalPages, setTotalPages] = useState(1);
  const { showLoader, hideLoader } = useLoader();

  const fetchProperties = async (pageNumber) => {
    try {
      showLoader();
      const response = await apiClient.get(`/properties?page=${page}&limit=5`);
      setProperties(response.data.results);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      setError("Failed to fetch properties");
    } finally {
      hideLoader();
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProperties(page);
  }, [page]);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Explore Properties</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {properties.map((property) => (
          <div
            key={property.id}
            className="bg-white rounded-xl shadow hover:shadow-md transition p-3"
          >
            <div className="relative">
              <NavLink to={`/property/details?id=${property?._id}`}>
                <img
                  src={property?.imageUrl}
                  alt={property?.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </NavLink>
              <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow text-gray-700 hover:text-red-500">
                <FiHeart />
              </button>
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm text-gray-500 mt-1">
                <FiChevronRight className="mr-1 text-red-500" />
                <p className="text-gray-500">{property.title}</p>
                {property.streetAddress}
              </div>
              <div className="flex items-center text-sm text-gray-500 mt-1">
                <FiMapPin className="mr-1 text-red-500" />
                {property.streetAddress}
              </div>
              <hr className="my-4 border-t border-gray-200"></hr>
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
                  <p className="text-blue-700 font-semibold">
                    ${property.price}
                  </p>
                </div>
                <div>
                  <span className="text-gray-600">Rating</span>
                  <p className="flex items-center text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} size={14} />
                    ))}
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

export default PropertyList;
