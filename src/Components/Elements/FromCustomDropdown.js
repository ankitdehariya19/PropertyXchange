import React, { useState, useEffect, useRef } from "react";
import useOutsideClick from "./useOutsideClick"; // Adjust the path as needed

const CustomDropdown = ({ options, value, onChange, label }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState(value);
  const dropdownRef = useRef(null);

  useOutsideClick(dropdownRef, () => {
    setIsOpen(false);
  });

  const handleInputChange = (newValue) => {
    setInputValue(newValue);
    onChange(newValue);
    setIsOpen(false);
  };

  const handleOptionClick = (option) => {
    setInputValue(option);
    onChange(option);
    setIsOpen(false);
  };

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  return (
    <div className="mb-4" ref={dropdownRef}>
      <label htmlFor={label} className="block text-sm font-medium text-gray-600">
        {label}:
      </label>
      <div className="relative">
        <input
          id={label}
          type="text"
          value={inputValue}
          onChange={(e) => handleInputChange(e.target.value)}
          onClick={() => setIsOpen(!isOpen)}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none  "
          placeholder={`Select ${label}`}
        />

        {isOpen && (
          <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg">
            {options.map((option) => (
              <div
                key={option}
                className="p-2 hover:bg-orange-300 cursor-pointer"
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomDropdown;
