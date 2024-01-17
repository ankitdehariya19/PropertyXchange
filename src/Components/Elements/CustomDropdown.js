// import React, { useState } from 'react';

// const CustomDropdown = ({ options, value, onChange }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleToggle = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleOptionClick = (option) => {
//     onChange(option);
//     setIsOpen(false);
//   };

//   return (
//     <div className="relative">
//       <div
//         className="flex items-center border rounded p-2 cursor-pointer"
//         onClick={handleToggle}
//       >
//         <span className="mr-2">{value || 'Select'}</span>
//         <svg
//           className={`fill-current h-4 w-4 ${isOpen ? 'rotate-180' : ''}`}
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 20 20"
//         >
//           <path
//             fillRule="evenodd"
//             d="M14.95 5.95a7 7 0 111.414 1.415l-1.414-1.414A7.007 7.007 0 0114.95 5.95zM2 7a5 5 0 0110 0h2a7 7 0 11-14 0H2z"
//             clipRule="evenodd"
//           />
//         </svg>
//       </div>
//       {isOpen && (
//         <ul className="absolute z-10 left-0 mt-2 bg-white border rounded w-full overflow-hidden">
//           {options.map((option) => (
//             <li
//               key={option}
//               className="px-4 py-2 cursor-pointer hover:bg-gray-100"
//               onClick={() => handleOptionClick(option)}
//             >
//               {option}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default CustomDropdown;


import React, { useState, useRef, useEffect } from 'react';
import { MdClose } from 'react-icons/md';

const CustomDropdown = ({ options, onSelect ,setIsBudgetVisible,setIsPropertyTypeVisible, }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedValue, setSelectedValue] = useState('');
  const [isOpen, setIsOpen] = useState(true);
  const dropdownRef = useRef(null);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    setIsOpen(true);
  };

  const handleOptionSelect = (option) => {
    onSelect(option);
    setSelectedValue(option); // Update selected value state
    setIsOpen(false);
  };

  const handleRemoveSelected = () => {
    setSelectedValue('');
    setSearchTerm('');
    onSelect('');
  };

  const handleInputClick = () => {
    if (selectedValue) {
      handleRemoveSelected();
    }
    setIsOpen(!isOpen);
    setIsPropertyTypeVisible(false)
    setIsBudgetVisible(false)
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
     
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      setIsOpen(false);
    } else if (event.key === 'Enter') {
      onSelect(filteredOptions[0]);
      setIsOpen(false);
    }
  };

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const divStyle = {
    // backgroundColor: 'rgba(255, 255, 255, 0.2)', 
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
  };
  
  return (
    <div className="relative" ref={dropdownRef}>
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search by location"
          value={selectedValue || searchTerm}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onClick={handleInputClick}
          className="w-full p-2  rounded-md border-none outline-none bg-transparent"
        />
        {selectedValue && (
          <MdClose
            className="ml-2 text-gray-500 cursor-pointer"
            onClick={handleRemoveSelected}
          />
        )}
      </div>
      {isOpen && (
        <div className="absolute mt-2 w-full  rounded-md shadow-md"  style={divStyle}>
          {filteredOptions.map((option) => (
            <div
              key={option}
              onClick={() => handleOptionSelect(option)}
              className={`p-2 cursor-pointer hover:bg-gray-900 ${
                selectedValue === option ? 'bg-gray-100' : ''
              }`}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
