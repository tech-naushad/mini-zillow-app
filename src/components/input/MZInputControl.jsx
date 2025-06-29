import React, { forwardRef } from "react";

const MZInputControl = forwardRef((props, ref) => {
  return (
    <div>
      <label className={props.labelClass}>Name</label>
      <input
        type="text"
        name="name"
        ref={ref}
        placeholder={props.placeholder}
        className={props.inputClass}
        required={props.required}
      />
    </div>
  );
});

export default MZInputControl;
