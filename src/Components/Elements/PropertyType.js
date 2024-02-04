import React, { useState, useCallback } from 'react';

const PropertyType = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPropertyType, setSelectedPropertyType] = useState('');
  const [selectedSubProperty, setSelectedSubProperty] = useState('');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handlePropertyTypeSelect = useCallback((propertyType) => {
    setIsOpen(!isOpen);
    setSelectedPropertyType(propertyType);
    setSelectedSubProperty('');
  }, [isOpen]);

  const handleSubPropertySelect = useCallback((subProperty) => {
    setIsOpen(false);
    setSelectedSubProperty(subProperty);
  }, []);

  const getPropertySubProperties = (propertyType) => {
    switch (propertyType) {
      case 'Residential':
        return ['None', 'Flat', 'Home', 'Plot'];
      case 'Commercial':
        return ['None', 'Office Space', 'Shop/Showroom', 'Commercial Land', 'Warehouse/Godown', 'Industrial Building', 'Industrial Shed'];
      case 'Other':
        return ['None', 'Agricultural Land', 'Farm House'];
      default:
        return [];
    }
  };

  const renderDropdownItem = (propertyType) => (
    <div
      key={propertyType}
      onClick={() => handlePropertyTypeSelect(propertyType)}
      className={`px-4 py-2 cursor-pointer hover:bg-gray-100 relative ${
        selectedPropertyType === propertyType ? 'bg-gray-100' : ''
      }`}
    >
      {propertyType}
      {selectedPropertyType === propertyType && (
        <div className="flex flex-col gap-2">
          {getPropertySubProperties(propertyType).map((subProperty) => (
            <div
              key={`${propertyType}-${subProperty}`}
              onClick={() => handleSubPropertySelect(subProperty)}
              className={`pl-6 py-1 cursor-pointer hover:bg-gray-100 ${
                selectedSubProperty === subProperty ? 'bg-gray-100' : ''
              }`}
            >
              {subProperty}
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const filterData = () => {
    console.log('Filtering data:', selectedPropertyType, selectedSubProperty);
    // Implement your logic to filter data based on selectedPropertyType and selectedSubProperty
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="inline-flex justify-center items-center w-full px-4 py-2 border border-gray-300 shadow-sm bg-white rounded-md text-sm font-medium text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
      >
        {selectedPropertyType || 'Select Property Type'}
        <svg
          className="-mr-1 ml-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M7.293 5.293a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 7.414l-4.793 4.793a1 1 0 01-1.414-1.414l5-5z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-2 w-56 bg-white border border-gray-300 divide-y divide-gray-200 rounded-md shadow-lg">
          {['Residential', 'Commercial', 'Other'].map(renderDropdownItem)}
        </div>
      )}

      {selectedPropertyType && selectedSubProperty && (
        <div className="mt-2">
          <p className="text-sm text-gray-500">
            Selected Property Type: {selectedPropertyType} - Selected Subproperty: {selectedSubProperty}
          </p>
          {filterData()}
        </div>
      )}
    </div>
  );
};

export default PropertyType;
