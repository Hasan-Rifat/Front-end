import React from "react";

const InputField = ({ name, placeholder, type, className }) => {
  return (
    <input
      type={type}
      name={name}
      className={`mt-[35px] block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-neutral dark:focus:border-secondary focus:outline-none focus:ring-0 focus:border-secondary peer ${className}`}
      placeholder={placeholder}
    />
  );
};

export default InputField;
