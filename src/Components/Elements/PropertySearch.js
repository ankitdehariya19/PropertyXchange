import React, { useState } from 'react';
import CustomDropdown from './CustomDropdown';

const PropertySearch = () => {
  const [location, setLocation] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [propertySubType, setPropertySubType] = useState('');
  const [budget, setBudget] = useState('');

  const propertyTypesData = {
    residential: ['Flat', 'House/Villa', 'Plot'],
    commercial: ['Office Space', 'Shop/Showroom', 'Commercial Land', 'Warehouse/Godown', 'Industrial Building', 'Industrial Shed'],
    other: ['Agricultural Land', 'Farm House'],
  };

  const bedroomsData = ['1 Bhk', '2 Bhk', '3 Bhk', '4 Bhk', '5 Bhk', '5+ Bhk'];

  const areaUnitsData = ['Sqft', 'Sqyrd', 'Sqm'];

  const budgetRangesData = [
    { label: '0 - 50,000', value: '0-50000' },
    { label: '50,001 - 100,000', value: '50001-100000' },
    // Add more ranges as needed
  ];

  const handlePropertyTypeChange = (selectedType) => {
    setPropertyType(selectedType);
    setPropertySubType('');
  };

  const handlePropertySubTypeChange = (selectedSubType) => {
    setPropertySubType(selectedSubType);
  };

  const handleBudgetChange = (selectedBudget) => {
    setBudget(selectedBudget);
  };

  const handleSearch = () => {
    console.log('Search:', {
      location,
      propertyType,
      propertySubType,
      budget,
    });
  };

  return (
    <div className="container mx-auto mt-8 p-4 bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Location Filter */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Location:</label>
          <input
            className="w-full p-2 border rounded"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        {/* Property Type Filter */}
        <div className="mb-4 col-span-2 relative">
          <label className="block text-sm font-medium text-gray-700">Property Type:</label>
          <div className="flex items-center border rounded p-2 cursor-pointer">
            <span className="mr-2">{propertyType || 'Select'}</span>
            <svg
              className="fill-current h-4 w-4 transform transition-transform duration-300"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              onClick={() => setPropertyType('')}
            >
              <path
                fillRule="evenodd"
                d="M14.95 5.95a7 7 0 111.414 1.415l-1.414-1.414A7.007 7.007 0 0114.95 5.95zM2 7a5 5 0 0110 0h2a7 7 0 11-14 0H2z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          {propertyType && (
            <div className="absolute z-10 left-0 mt-2 bg-white border rounded w-full overflow-hidden">
              <CustomDropdown
                options={propertyTypesData[propertyType]}
                value={propertySubType}
                onChange={handlePropertySubTypeChange}
              />
            </div>
          )}
        </div>

        {/* Bedrooms Filter */}
        <div className="mb-4 col-span-1 relative">
          <label className="block text-sm font-medium text-gray-700">Bedrooms:</label>
          <div className="flex items-center border rounded p-2 cursor-pointer">
            <span className="mr-2">{propertySubType || 'Select'}</span>
            <svg
              className="fill-current h-4 w-4 transform transition-transform duration-300"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              onClick={() => setPropertySubType('')}
            >
              <path
                fillRule="evenodd"
                d="M14.95 5.95a7 7 0 111.414 1.415l-1.414-1.414A7.007 7.007 0 0114.95 5.95zM2 7a5 5 0 0110 0h2a7 7 0 11-14 0H2z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          {propertySubType && (
            <div className="absolute z-10 left-0 mt-2 bg-white border rounded w-full overflow-hidden">
              <CustomDropdown
                options={bedroomsData}
                value={propertySubType}
                onChange={handlePropertySubTypeChange}
              />
            </div>
          )}
        </div>

        {/* Budget Filter */}
        <div className="mb-4 col-span-1 relative">
          <label className="block text-sm font-medium text-gray-700">Budget:</label>
          <CustomDropdown
            options={budgetRangesData.map((range) => range.label)}
            value={budget}
            onChange={handleBudgetChange}
          />
        </div>
      </div>

      <hr className="my-4 border-t" />

      <div className="flex justify-end">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default PropertySearch;
