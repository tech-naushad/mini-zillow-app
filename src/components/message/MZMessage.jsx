import React from "react";

const typeClasses = {
  success: "bg-green-100 text-green-800 border-green-300",
  error: "bg-red-100 text-red-800 border-red-300",
  warning: "bg-yellow-100 text-yellow-800 border-yellow-300",
  info: "bg-blue-100 text-blue-800 border-blue-300",
};

const MZMessage = ({ type = "info", message, className = "" }) => {
  return (
    <div
      className={`w-full border rounded-lg px-4 py-3 text-sm font-medium ${typeClasses[type]} ${className}`}
      role="alert"
    >
      {message}
    </div>
  );
};

export default MZMessage;
