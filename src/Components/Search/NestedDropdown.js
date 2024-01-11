import React, { useState } from 'react';

const NestedDropdown = () => {
  const propertyTypes = ['Residential', 'Commercial', 'Other Property Types'];

  const [location, setLocation] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [subPropertyType, setSubPropertyType] = useState('');
  const [area, setArea] = useState('');
  const [budget, setBudget] = useState('');

  const handleFilterButtonClick = () => {
    // Handle filter logic here based on selected filters (location, propertyType, subPropertyType, area, budget)
    console.log('Filter Button Clicked');
    console.log('Location:', location);
    console.log('Property Type:', propertyType);
    console.log('Sub Property Type:', subPropertyType);
    console.log('Area:', area);
    console.log('Budget:', budget);
  };

  const propertyTypeOptions = {
    Residential: ['Flat', 'House/Villa', 'Plot'],
    Commercial: [
      'Office Space',
      'Shop/Showroom',
      'Commercial Land',
      'Warehouse/Godown',
      'Industrial Building',
      'Industrial Shed',
    ],
    'Other Property Types': ['Agricultural Land', 'Farm House'],
  };

  const subPropertyTypeOptions = {
    Flat: ['1 BHK', '2 BHK', '3 BHK', '4 BHK', '5 BHK', '5+ BHK'],
    'House/Villa': ['1 BHK', '2 BHK', '3 BHK', '4 BHK', '5 BHK', '5+ BHK'],
    Plot: ['Select Area'],
  };

  return (
    <div className="container mx-auto mt-8 p-4 bg-gray-100 rounded-md shadow-md">
      <div className="flex space-x-4">
        <select
          className="p-2 border rounded flex-1"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        >
          <option value="">Select Location</option>
          {/* Add location options */}
        </select>

        <div className="relative flex-1">
          <select
            className="p-2 border rounded w-full"
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
          >
            <option value="">Select Property Type</option>
            {propertyTypes.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </select>

          {propertyType && (
            <div className="absolute top-full left-0 w-full bg-white border rounded shadow-md">
              {propertyTypeOptions[propertyType]?.map((type, index) => (
                <div
                  key={index}
                  className="p-2 cursor-pointer hover:bg-gray-200"
                  onClick={() => setSubPropertyType(type)}
                >
                  {type}
                </div>
              ))}
            </div>
          )}
        </div>

        {subPropertyType && (
          <div className="relative flex-1">
            <select
              className="p-2 border rounded w-full"
              value={subPropertyType}
              onChange={(e) => setSubPropertyType(e.target.value)}
            >
              <option value="">Select Sub Property Type</option>
              {subPropertyTypeOptions[subPropertyType]?.map((type, index) => (
                <option key={index} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
        )}

        {subPropertyType === 'Plot' && (
          <div className="relative flex-1">
            <input
              type="text"
              className="p-2 border rounded w-full"
              placeholder="Enter Area (sqft)"
              value={area}
              onChange={(e) => setArea(e.target.value)}
            />
          </div>
        )}

        <div className="relative flex-1">
          <select
            className="p-2 border rounded w-full"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
          >
            <option value="">Select Budget</option>
            {/* Add budget options */}
          </select>
        </div>

        <button
          className="bg-green-500 text-white font-bold py-2 px-4 rounded"
          onClick={handleFilterButtonClick}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default NestedDropdown;
