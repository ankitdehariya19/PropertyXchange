// LocationFilter.js
import React from 'react';

const LocationFilter = ({ location, onLocationChange }) => (
  <div className="w-full md:w-1/3 px-2 mb-4">
    <label className="block mb-2" htmlFor="location">
      Location:
    </label>
    <input
      className="w-full p-2 border rounded"
      type="text"
      id="location"
      value={location}
      onChange={onLocationChange}
    />
  </div>
);

export default LocationFilter;
