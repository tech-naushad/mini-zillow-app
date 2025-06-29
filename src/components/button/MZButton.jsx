import React from 'react';

const MZButton = (props) => {
    const heightClass = props.height || "h-16";
  return (
     <button
      type={props.type || 'button'}
      onClick={props.onClick}
       className={`w-full ${heightClass} flex items-center justify-center
        text-sm md:text-base lg:text-lg font-semibold 
        text-white bg-blue-600 hover:bg-blue-700 
        rounded-xl transition duration-200 ease-in-out 
        shadow-sm hover:shadow-md cursor-pointer ${props.className}`}
    >
      {props.label}
    </button>
  );
};

export default MZButton;
