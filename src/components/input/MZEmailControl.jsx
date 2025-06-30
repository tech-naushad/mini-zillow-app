// components/form/MZBrandInput.jsx
import React, { forwardRef } from "react";

const MZEmailControl = forwardRef((props, ref) => {
  return (
    <div>
      <label className={props.labelClass}>{props?.title}</label>
      <input
        type="email"
        name={props?.name}
        ref={ref}
        placeholder={props.placeholder}
        className={props.inputClass}
        required={props.required}
      />
    </div>
  );
});

export default MZEmailControl;
