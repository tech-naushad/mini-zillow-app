import React, { useRef, useEffect } from 'react';

const MZInput = (
  { 
    name, 
    label,
    labelClassName = 'block font-medium mb-1', 
    icon: Icon, 
    placeholder, 
    onChange, 
    defaultValue = '', 
    type = 'text', 
    min = 0,
    className,
    ref
  }) => {
  const inputRef = useRef();

  useEffect(() => {
    if (defaultValue) {
      inputRef.current.value = defaultValue;
    }
  }, [defaultValue]);

  // const handleChange = () => {
  //   onChange(name, inputRef.current.value);
  // };

  return (
    <div className="mb-4">
      <label className={labelClassName}>{label}</label>
      <div className="flex items-center border rounded px-3 py-2">
        {Icon && <Icon className="mr-2 text-green-600" />}
        <input
          type={type}
          min={min}
          ref={ref}           
          placeholder={placeholder}
          className= {className}
        />
      </div>
    </div>
  );
};

export default MZInput;
