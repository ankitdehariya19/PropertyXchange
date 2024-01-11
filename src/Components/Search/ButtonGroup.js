import React, { useState } from 'react';

const search = [
  {
    category: 'Buy',
    items: [
      { id: 1, property_location: 'Item 1.1', property_type: 'Residential', property_budget: 'Description for Residential', search_button: " search button", property_subtype: ['Flat', 'House/Villa', 'Plot'], property_subtype_values: { 'Flat': ['1 Bhk', '2 Bhk', '3 Bhk', '4 Bhk', '5 Bhk', '5+ Bhk'], 'House/Villa': ['1 Bhk', '2 Bhk', '3 Bhk', '4 Bhk', '5 Bhk', '5+ Bhk'], 'Plot': ['sqft', 'Area'] } },
      { id: 2, property_location: 'Item 1.2', property_type: 'Commercial', property_budget: 'Description for Commercial', search_button: " search button", property_subtype: ['Office Space', 'Shop/Showroom', 'Commercial Land', 'Warehouse/Godown', 'Industrial Building', 'Industrial Shed'] },
      { id: 3, property_location: 'Item 1.3', property_type: 'Other Property Types', property_budget: 'Description for Other Property Types', search_button: " search button", property_subtype: ['Agricultural Land', 'Farm House'] },
    ],
  },
  {
    category: 'Rent',
    items: [
      { id: 1, property_location: 'Item 1.1', property_type: 'Residential', property_budget: 'Description for Residential', search_button: " search button", property_subtype: ['Flat', 'House/Villa', 'Plot'], property_subtype_values: { 'Flat': ['1 Bhk', '2 Bhk', '3 Bhk', '4 Bhk', '5 Bhk', '5+ Bhk'], 'House/Villa': ['1 Bhk', '2 Bhk', '3 Bhk', '4 Bhk', '5 Bhk', '5+ Bhk'], 'Plot': ['sqft', 'Area'] } },
      { id: 2, property_location: 'Item 1.2', property_type: 'Commercial', property_budget: 'Description for Commercial', search_button: " search button", property_subtype: ['Office Space', 'Shop/Showroom', 'Commercial Land', 'Warehouse/Godown', 'Industrial Building', 'Industrial Shed'] },
      { id: 3, property_location: 'Item 1.3', property_type: 'Other Property Types', property_budget: 'Description for Other Property Types', search_button: " search button", property_subtype: ['Agricultural Land', 'Farm House'] },
    ],
  },
  {
    category: 'Sell',
    items: [
      { id: 1, property_location: 'Item 1.1', property_type: 'Residential', property_budget: 'Description for Residential', search_button: " search button", property_subtype: ['Flat', 'House/Villa', 'Plot'], property_subtype_values: { 'Flat': ['1 Bhk', '2 Bhk', '3 Bhk', '4 Bhk', '5 Bhk', '5+ Bhk'], 'House/Villa': ['1 Bhk', '2 Bhk', '3 Bhk', '4 Bhk', '5 Bhk', '5+ Bhk'], 'Plot': ['sqft', 'Area'] } },
      { id: 2, property_location: 'Item 1.2', property_type: 'Commercial', property_budget: 'Description for Commercial', search_button: " search button", property_subtype: ['Office Space', 'Shop/Showroom', 'Commercial Land', 'Warehouse/Godown', 'Industrial Building', 'Industrial Shed'] },
      { id: 3, property_location: 'Item 1.3', property_type: 'Other Property Types', property_budget: 'Description for Other Property Types', search_button: " search button", property_subtype: ['Agricultural Land', 'Farm House'] },
    ],
  },
  {
    category: 'Luxury Properties',
    items: [
      { id: 1, property_location: 'Item 1.1', property_type: 'Commercial', property_budget: 'Description for Commercial', search_button: " search button", property_subtype: ['Office Space', 'Shop/Showroom', 'Commercial Land', 'Warehouse/Godown', 'Industrial Building', 'Industrial Shed'] },
    ],
  },
  {
    category: 'Projects',
    items: [
      { id: 1, property_location: 'Item 1.1', property_type: 'Residential', property_budget: 'Description for Residential', search_button: " search button", property_subtype: ['Flat', 'House/Villa', 'Plot'], property_subtype_values: { 'Flat': ['1 Bhk', '2 Bhk', '3 Bhk', '4 Bhk', '5 Bhk', '5+ Bhk'], 'House/Villa': ['1 Bhk', '2 Bhk', '3 Bhk', '4 Bhk', '5 Bhk', '5+ Bhk'], 'Plot': ['sqft', 'Area'] } },
      { id: 2, property_location: 'Item 1.2', property_type: 'Commercial', property_budget: 'Description for Commercial', search_button: " search button", property_subtype: ['Office Space', 'Shop/Showroom', 'Commercial Land', 'Warehouse/Godown', 'Industrial Building', 'Industrial Shed'] },
    ],
  },
];


const ButtonGroup = () => {
  const [selectedCategory, setSelectedCategory] = useState('Buy');

  const categoryData = search.find((category) => category.category === selectedCategory);
  const subtypes = categoryData ? categoryData.items.map((item) => item.property_subtype) : [];

  return (
    <div className="mt-8 mx-auto max-w-2xl">
      <div className="space-x-4">
        {search.map((category) => (
          <button
            key={category.category}
            className={`${
              selectedCategory === category.category ? 'bg-blue-500' : 'bg-gray-300'
            } hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
            onClick={() => setSelectedCategory(category.category)}
          >
            {category.category}
          </button>
        ))}
        <div className="w-full h-24 flex justify-center gap-x-16 bg-red-400">
          <div>Property Location</div>
          <div>Property Type</div>
          <div>Property Budget</div>
          <div>Search Button</div>
        </div>
      </div>

      <div className="flex justify-center mt-4 space-x-4">
        {subtypes.map((subtype) => (
          <div key={subtype} className="bg-gray-300 p-2 rounded">
            {subtype}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ButtonGroup;