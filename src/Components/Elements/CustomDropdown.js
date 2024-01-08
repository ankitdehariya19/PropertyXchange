import React, { useState } from 'react';

const CustomDropdown = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <div
        className="flex items-center border rounded p-2 cursor-pointer"
        onClick={handleToggle}
      >
        <span className="mr-2">{value || 'Select'}</span>
        <svg
          className={`fill-current h-4 w-4 ${isOpen ? 'rotate-180' : ''}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M14.95 5.95a7 7 0 111.414 1.415l-1.414-1.414A7.007 7.007 0 0114.95 5.95zM2 7a5 5 0 0110 0h2a7 7 0 11-14 0H2z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      {isOpen && (
        <ul className="absolute z-10 left-0 mt-2 bg-white border rounded w-full overflow-hidden">
          {options.map((option) => (
            <li
              key={option}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomDropdown;
