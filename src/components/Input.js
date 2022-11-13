import React from "react";

const Input = ({
  type = "text",
  placeholder = "",
  value,
  onChange,
  onKeyDown = () => {},
}) => {
  return (
    <div className="relative">
      <input
        className="bg-[#25273c] px-5 pl-14 py-4 rounded w-full text-lg text-white ring-0 outline-none"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      <div className="absolute left-7 top-0 bottom-0 flex justify-center items-center">
        <input type="checkbox" className="hidden" />
        <span className="h-6 w-6 rounded-full absolute cursor-pointer border-grayish-blue-dark border-2"></span>
      </div>
    </div>
  );
};

export default Input;
