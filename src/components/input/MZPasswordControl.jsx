import React, { forwardRef } from "react";

const MZPasswordControl = forwardRef((props, ref) => {
  return (
    <div>
      <label className={props.labelClass}>Name</label>
      <input
        type="password"
        name="password"
        ref={ref}
        placeholder={props.placeholder}
        className={props.inputClass}
        required={props.required}
      />
    </div>
  );
});

export default MZPasswordControl;
