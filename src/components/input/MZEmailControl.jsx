// components/form/MZBrandInput.jsx
import React, { forwardRef } from "react";

const MZEmailControl = forwardRef((props, ref) => {
  return (
    <div>
      <label className={props.labelClass}>Name</label>
      <input
        type="email"
        name="email"
        ref={ref}
        placeholder={props.placeholder}
        className={props.inputClass}
        required={props.required}
      />
    </div>
  );
});

export default MZEmailControl;
