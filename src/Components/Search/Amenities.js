// Amenities.js
import React from 'react';
import { FaCheck } from 'react-icons/fa';

const Amenities = ({ amenities }) => (
  <div className="p-4 rounded-md">
    <p className="text-lg font-semibold text-gray-800">Amenities:</p>
    <ul className="list-disc list-inside mt-2 text-gray-600">
      {amenities.map((amenity, index) => (
        <li key={index} className="flex items-center">
          <FaCheck className="text-green-500 mr-2" />
          <span>{amenity}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default Amenities;
