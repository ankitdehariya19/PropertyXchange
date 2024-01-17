import React, { useState } from 'react';

const CustomRangeSelector = ({ onRangeChange }) => {
  const [selectedRange, setSelectedRange] = useState([100, 200]);

  const handleRangeChange = (event) => {
    const value = parseInt(event.target.value);
    setSelectedRange([value, value + 100]); // Adjust the range as needed
    onRangeChange([value, value + 100]);
  };

  return (
    <div className="ml-5  p-4">
      <h1>Square Feet Area</h1>
      <div className="ml-5">
        <input
          type="range"
          min={100}
          max={400}
          step={100}
          value={selectedRange[0]}
          onChange={handleRangeChange}
        />
        <p>
          Selected Range: {selectedRange[0]}-{selectedRange[1]}
        </p>
      </div>
    </div>
  );
};

export default CustomRangeSelector;
