import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

const propertyTypes = [
    {
      name: 'Residential',
      subtypes: [
        {
          name: 'Flat',
          configurations: [
            '1 Bhk',
            '2 Bhk',
            '3 Bhk',
            '4 Bhk',
            '5 Bhk',
            '5+ Bhk',
          ],
        },
        {
          name: 'House/Villa',
          configurations: [
            '1 Bhk',
            '2 Bhk',
            '3 Bhk',
            '4 Bhk',
            '5 Bhk',
            '5+ Bhk',
          ],
        },
        {
          name: 'Plot',
          configurations: ['Range Selector'],
        },
      ],
    },
    {
      name: 'Commercial',
      subtypes: [
        'Office Space',
        'Shop/Showroom',
        'Commercial Land',
        'Warehouse/Godown',
        'Industrial Building',
        'Industrial Shed',
      ],
    },
    {
      name: 'Other Property Types',
      subtypes: ['Agricultural Land', 'Farm House'],
    },
    'Land',
    'Vacation Rentals',
    'Mixed-Use Developments',
  ];
  
  console.log(propertyTypes);
  

const PropertyDropdown = ({ options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option) => {
    setSelectedOption(option);
    onSelect(option);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <span className="rounded-md shadow-sm">
          <button
            type="button"
            className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {selectedOption || 'Select Property Type'}
          </button>
        </span>
      </div>

      <div
        className={`origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 ${
          selectedOption ? 'block' : 'hidden'
        }`}
      >
        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleSelect(option)}
              className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
              role="menuitem"
            >
              {option.name || option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [selectedSubtype, setSelectedSubtype] = useState(null);

  const handlePropertySelect = (property) => {
    setSelectedProperty(property);
    setSelectedSubtype(null);
  };

  const handleSubtypeSelect = (subtype) => {
    setSelectedSubtype(subtype);
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Custom Dropdown in React with Tailwind CSS</h1>
      <PropertyDropdown options={propertyTypes} onSelect={handlePropertySelect} />

      {selectedProperty && selectedProperty.subtypes && (
        <div className="mt-4">
          <PropertyDropdown options={selectedProperty.subtypes} onSelect={handleSubtypeSelect} />
        </div>
      )}

      {selectedSubtype && selectedSubtype.configurations && (
        <div className="mt-4">
          <PropertyDropdown options={selectedSubtype.configurations} onSelect={() => {}} />
        </div>
      )}
    </div>
  );
};

export default App;
