import React, { useState, useRef, useEffect } from 'react';

const CustomDropdown = ({ options, value, onChange, placeholder, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleItemClick = (selectedOption) => {
    onChange(selectedOption);
    setIsOpen(false);
  };
  

  const handleOutsideClick = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div className={`relative inline-block ${className}`} ref={dropdownRef}>
      <div
        className={`border p-2 cursor-pointer ${isOpen ? 'border-b-0 rounded-b-none' : 'rounded-b'}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {value || placeholder}
      </div>
      {isOpen && (
        <ul className="absolute z-10 left-0 w-full border border-t-0 rounded-b-lg bg-white">
          {options.map((option) => (
            <li
              key={option}
              onClick={() => handleItemClick(option)}
              className={`p-2 cursor-pointer hover:bg-gray-100 ${value === option ? 'bg-gray-100' : ''}`}
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
