import React from "react";

const Checkbox = ({ checked, onClick, className = "" }) => {
  return (
    <div className="w-6 h-6 relative" onClick={onClick}>
      <input
        checked={checked}
        type="checkbox"
        className={`hidden ${className}`}
      />
      <span
        className={`h-6 w-6 absolute rounded-full cursor-pointer ${
          checked ? "bg-blue" : "border-grayish-blue-dark border-2"
        }`}
      ></span>
    </div>
  );
};

export default Checkbox;
