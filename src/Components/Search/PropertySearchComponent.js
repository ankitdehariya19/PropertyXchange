// // PropertySearchComponent.js
// import React, { useState } from "react";
// import CustomDropdown from "../Elements/CustomDropdown";

// const PropertySearchComponent = ({
//   locations,
//   onLocationSelect,
//   setIsBudgetVisible,
//   setIsPropertyTypeVisible,
// }) => {
//   const [selectedLocations, setSelectedLocations] = useState([]);

//   const handleLocationSelect = (selectedLocation) => {
//     if (!selectedLocations.includes(selectedLocation)) {
//       setSelectedLocations([...selectedLocations, selectedLocation]);
//     }
//   };

//   const handleRemoveLocation = (removedLocation) => {
//     const updatedLocations = selectedLocations.filter(
//       (location) => location !== removedLocation
//     );
//     setSelectedLocations(updatedLocations);
//   };
//   // console.log(onSelect)
//   return (
//     <div className="m-5 flex w-full  ">
//       <CustomDropdown
//         options={locations}
//         selectedValues={selectedLocations}
//         onSelect={(selectedLocation) => {
//           handleLocationSelect(selectedLocation);
//           // Pass the selected value to PropertySearchComponent
//           console.log("Selected Value:", selectedLocation);
//         }}
//         onRemove={handleRemoveLocation}
//         setIsPropertyTypeVisible={setIsPropertyTypeVisible}
//         setIsBudgetVisible={setIsBudgetVisible}
//       />
//     </div>
//   );
// };

// export default PropertySearchComponent;







import React, { useState, useRef, useEffect } from 'react';
import { MdClose } from 'react-icons/md';

const PropertySearchComponent = ({
  sampleProperties,
  onLocationSelect,
  setIsBudgetVisible,
  setIsPropertyTypeVisible,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedValue, setSelectedValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const locations = Array.from(new Set(sampleProperties.map(property => property.location)));

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    setIsOpen(true);
  };

  const handleOptionSelect = (option) => {
    onLocationSelect(option);
    setSelectedValue(option);
    setIsOpen(false);
  };

  const handleRemoveSelected = () => {
    setSelectedValue('');
    setSearchTerm('');
    onLocationSelect('');
  };

  const handleInputClick = () => {
    if (selectedValue) {
      handleRemoveSelected();
    }
    setIsOpen(!isOpen);
    setIsPropertyTypeVisible(false);
    setIsBudgetVisible(false);
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
      onLocationSelect(locations[0]); // Assuming locations is an array of options
      setIsOpen(false);
    }
  };

  const filteredOptions = locations.filter((option) =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const divStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    maxHeight: '150px', // Adjust the maximum height as needed
    overflow: 'hidden',
  };
  

  return (
    <div className="m-5 flex w-full relative" ref={dropdownRef}>
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search by location"
          value={selectedValue || searchTerm}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onClick={handleInputClick}
          className="w-full p-2 rounded-md border-none outline-none bg-transparent"
        />
        {selectedValue && (
          <MdClose
            className="ml-2 text-gray-500 cursor-pointer"
            onClick={handleRemoveSelected}
          />
        )}
      </div>
      {isOpen && (
        <div className="absolute mt-[60px] w-full rounded-md shadow-md" style={divStyle}>
          {searchTerm === '' ? (
            locations.map((option) => (
              <div
                key={option}
                onClick={() => handleOptionSelect(option)}
                className={`p-2 cursor-pointer hover:bg-gray-900 ${
                  selectedValue === option ? 'bg-gray-100' : ''
                }`}
              >
                {option}
              </div>
            ))
          ) : (
            filteredOptions.map((option) => (
              <div
                key={option}
                onClick={() => handleOptionSelect(option)}
                className={`p-2 cursor-pointer hover:bg-gray-900 ${
                  selectedValue === option ? 'bg-gray-100' : ''
                }`}
              >
                {option}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default PropertySearchComponent;