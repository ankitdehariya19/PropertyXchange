import React, { useState } from 'react';

const BudgetRangeSelector = ({ onBudgetChange }) => {
  const [selectedBudget, setSelectedBudget] = useState([50000, 100000]);

  const handleBudgetChange = (event, isMin) => {
    const value = parseInt(event.target.value);
    setSelectedBudget(isMin ? [value, selectedBudget[1]] : [selectedBudget[0], value]);
    onBudgetChange(isMin ? [value, selectedBudget[1]] : [selectedBudget[0], value]);
  };
  const divStyle = {
    // backgroundColor: 'rgba(255, 255, 255, 0.5)', 
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
  };
  return (
    <div className="ml-5  rounded-md p-4" style={divStyle}>
      <h1>Budget Range</h1>
      <div className="ml-5">
        <label className="block text-sm font-medium text-gray-200">Min Budget</label>
        <input
          type="range"
          min={50000}
          max={200000}
          step={10000}
          value={selectedBudget[0]}
          onChange={(e) => handleBudgetChange(e, true)}
          className="w-full"
        />

        <label className="block text-sm font-medium text-gray-200 mt-3">Max Budget</label>
        <input
          type="range"
          min={50000}
          max={200000}
          step={10000}
          value={selectedBudget[1]}
          onChange={(e) => handleBudgetChange(e, false)}
          className="w-full"
        />

        <p className="mt-3">
          Selected Budget Range: ${selectedBudget[0]} - ${selectedBudget[1]}
        </p>
      </div>
    </div>
  );
};

export default BudgetRangeSelector;
