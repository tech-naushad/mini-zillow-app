import React, { forwardRef } from "react";

const MZInputControl = forwardRef((props, ref) => {
  return (
    <div>
      <label className={props?.labelClass}>{props?.title}</label>
      <input
        type="text"
        name={props?.name}
        ref={ref}
        placeholder={props?.placeholder}
        className={props?.inputClass}
        required={props?.required}
      />
    </div>
  );
});

export default MZInputControl;
