import React from "react";

function Checkbox({ label, isSelected, onCheckboxChange }) {
  return (
    <div className="form-check">
      <label>
        <input
          type="checkbox"
          name={label}
          checked={isSelected}
          onChange={onCheckboxChange}
        />
      </label>
    </div>
  );
}

export default Checkbox;
