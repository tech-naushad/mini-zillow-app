import React, { useState, useEffect } from "react";
import apiClient from "../../../../api/apiClient";
import { useLoader } from "../../../../components/pageLoader/LoaderContext";
import Property from "../../components/Property";
import MZPager from "../../../../components/pager/MZPager";

const PropertyList = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1); // current page
  const [totalPages, setTotalPages] = useState(1);
  const { showLoader, hideLoader } = useLoader();
  const pageSize = 9;

  const fetchProperties = async (pageNumber) => {
    try {
      showLoader();
      const response = await apiClient.get(`/properties?page=${page}&limit=${pageSize}`);
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
      <div className="max-w-7xl pl-0 pr-4 sm:pr-6 lg:pr-8 mt-10">
        <h2 className="text-2xl font-semibold text-gray-800">
          Property Listing
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {properties.map((property) => (
          <Property key={property.id} property={property} />
        ))}
      </div>
      <MZPager page={page} totalPages={totalPages} setPage={setPage} />
    </div>
  );
};

export default PropertyList;
