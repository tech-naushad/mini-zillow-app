import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import axios from "axios";

const PropertyRating = ({ propertyId }) => {
  const [grouped, setGrouped] = useState({ 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 });
  const [average, setAverage] = useState(0);
  const [selectedRating, setSelectedRating] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const fetchRatings = async () => {
    try {
      const res = await axios.get(`/api/ratings/${propertyId}`);
      setGrouped(res.data.grouped);
      setAverage(res.data.average);
    } catch (err) {
      console.error("Error fetching ratings:", err);
    }
  };

  useEffect(() => {
    fetchRatings();
  }, [propertyId]);

  const handleRating = async (rating) => {
    try {
      await axios.post("/api/ratings", {
        propertyId,
        rating,
      });
      setSelectedRating(rating);
      setSubmitted(true);
      fetchRatings();  
    } catch (err) {
      console.error("Rating failed", err);
    }
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-md max-w-md mx-auto space-y-4">
      <div>
        <h2 className="text-lg font-semibold">Rate this property</h2>
        <div className="flex gap-1 mt-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <FaStar
              key={star}
              onClick={() => handleRating(star)}
              className={`h-6 w-6 cursor-pointer transition-colors ${
                star <= (selectedRating || 0)
                  ? "text-yellow-400"
                  : "text-gray-300 hover:text-yellow-400"
              }`}
            />
          ))}
        </div>
        {submitted && (
          <p className="text-sm text-green-600 mt-1">
            Thank you! You rated this {selectedRating} star
            {selectedRating > 1 ? "s" : ""}.
          </p>
        )}
      </div>

      <div>
        <h3 className="text-md font-medium text-gray-800">Average Rating</h3>
        <p className="text-xl font-bold text-yellow-500">
          {average?.toFixed(1)} / 5
        </p>
      </div>

      <div>
        <h3 className="text-md font-medium text-gray-800 mb-1">
          Rating Breakdown
        </h3>
        {grouped &&
          Object.keys(grouped)
            .sort((a, b) => b - a)
            .map((star) => (
              <div key={star} className="flex items-center gap-2 text-sm">
                <span className="w-12 flex justify-end">
                  {Array(parseInt(star))
                    .fill(0)
                    .map((_, i) => (
                      <FaStar key={i} className="inline text-yellow-400" />
                    ))}
                </span>
                <span className="text-gray-700">
                  {grouped[star]} vote{grouped[star] !== 1 ? "s" : ""}
                </span>
              </div>
            ))}
      </div>
    </div>
  );
};

export default PropertyRating;
