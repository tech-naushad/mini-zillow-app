import React, { use, useState, useEffect } from "react";
import apiClient from "../../../api/apiClient";
import { useLoader } from "../../../components/pageLoader/LoaderContext";
import Property from "../../property/components/Property";
import MZPager from "../../../components/pager/MZPager";

const ManageListing = () => {
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
          <Property key={property.id} property={property} showDelete="true"  />
          
        ))}
         
      </div>
      <MZPager page={page} totalPages={totalPages} setPage={setPage} />
    </div>
  );
};

export default ManageListing;
