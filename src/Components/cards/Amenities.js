// Amenities.js
import React from 'react';
import { FaCheckCircle   } from 'react-icons/fa';

const Amenities = ({ amenities }) => {
  // Use conditional rendering to handle empty or undefined amenities
  if (!amenities || amenities.length === 0) {
    return null; // You can return null or display a message for no amenities
  }

  return (
    <div className="p-4 rounded-md border my-4 ">
      <p className="text-lg font-semibold text-gray-800 mb-2">Amenities:</p>
      <div className='bg-white p-4 rounded-md '>
        <ul className="list-disc list-inside mt-2 flex flex-wrap gap-x-3 gap-y-4 text-gray-700">
          {amenities.map((amenity, index) => (
            <li key={index} className="flex items-center mb-2 shadow-md  p-4">
              <FaCheckCircle   className="text-green-500 mr-2" />
              <span>{amenity}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Amenities;
