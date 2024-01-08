// PropertyTypeFilter.js
import React from 'react';

const PropertyTypeFilter = ({ propertyType, subTypeOptions, onPropertyTypeChange, onPropertySubTypeChange, propertyDetails }) => (
  <div className="w-full md:w-1/3 px-2 mb-4">
    <label className="block mb-2" htmlFor="propertyType">
      Property Type:
    </label>
    <div className="relative">
      <select
        className="w-full p-2 border rounded appearance-none"
        id="propertyType"
        value={propertyType}
        onChange={(e) => onPropertyTypeChange(e.target.value)}
      >
        <option value="">Select</option>
        {Object.keys(subTypeOptions).map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg
          className="fill-current h-4 w-4"
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
    </div>
  </div>
);

export default PropertyTypeFilter;
