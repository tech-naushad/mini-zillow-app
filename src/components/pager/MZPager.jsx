import React from "react";

const MZPager = ({ page, totalPages, setPage }) => (
  <div className="flex items-center justify-center gap-2 mt-6">
    {/* Prev Button */}
    <button
      onClick={() => setPage(page - 1)}
      disabled={page === 1}
     className={`focus:ring-2 focus:ring-gray-300`}
    >
       
    </button>

    {/* Page Numbers */}
    {[...Array(totalPages)].map((_, i) => {
      const pageNumber = i + 1;
      return (
        <button
          key={i}
          onClick={() => setPage(pageNumber)}
          className={`w-10 h-10 rounded-full flex items-center justify-center shadow-md 
            font-semibold transition 
            ${
              pageNumber === page
                ? "bg-green-600 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
        >
          {pageNumber}
        </button>
      );
    })}

    {/* Next Button */}
    <button
      onClick={() => setPage(page + 1)}
      disabled={page === totalPages}
      className={`w-10 h-10 rounded-full flex items-center justify-center 
        shadow-md text-gray-600 bg-white disabled:opacity-50`}
    >
      
    </button>
  </div>
);

export default MZPager;