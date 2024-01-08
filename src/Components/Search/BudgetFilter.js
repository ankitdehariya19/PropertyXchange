// BudgetFilter.js
import React from 'react';

const BudgetFilter = ({ budget, budgetRanges, minPrice, maxPrice, onBudgetChange, onMinPriceChange, onMaxPriceChange }) => (
  <div className="w-full md:w-1/3 px-2 mb-4">
    <label className="block mb-2" htmlFor="budget">
      Budget:
    </label>
    <div className="flex">
      <select
        className="w-1/2 p-2 border rounded mr-2"
        id="budget"
        value={budget}
        onChange={(e) => onBudgetChange(e.target.value)}
      >
        <option value="">Select</option>
        {budgetRanges.map((range) => (
          <option key={range.value} value={range.value}>
            {range.label}
          </option>
        ))}
      </select>
      <div className="w-1/2 flex">
        <input
          className="w-1/2 p-2 border rounded mr-2"
          type="text"
          placeholder="Min Price"
          value={minPrice}
          onChange={onMinPriceChange}
        />
        <input
          className="w-1/2 p-2 border rounded"
          type="text"
          placeholder="Max Price"
          value={maxPrice}
          onChange={onMaxPriceChange}
        />
      </div>
    </div>
  </div>
);

export default BudgetFilter;
