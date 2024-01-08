// PropertySearch.js
import React, { useState, useEffect } from 'react';
import LocationFilter from './LocationFilter';
import PropertyTypeFilter from './PropertyTypeFilter';
import BudgetFilter from './BudgetFilter';

const PropertySearch = () => {
  const [location, setLocation] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [propertySubType, setPropertySubType] = useState('');
  const [subTypeOptions, setSubTypeOptions] = useState([]);
  const [propertyDetails, setPropertyDetails] = useState('');
  const [budget, setBudget] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const propertyTypesData = {
    residential: ['Flat', 'House/Villa', 'Plot'],
    commercial: ['Office Space', 'Shop/Showroom', 'Commercial Land', 'Warehouse/Godown', 'Industrial Building', 'Industrial Shed'],
    other: ['Agricultural Land', 'Farm House'],
  };

  const budgetRangesData = [
    { label: '0 - 50,000', value: '0-50000' },
    { label: '50,001 - 100,000', value: '50001-100000' },
    // Add more ranges as needed
  ];

  useEffect(() => {
    setSubTypeOptions(propertyTypesData[propertyType] || []);
  }, [propertyType]);

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handlePropertyTypeChange = (selectedType) => {
    setPropertyType(selectedType);
    setPropertySubType('');
    setPropertyDetails('');
  };

  const handlePropertySubTypeChange = (selectedSubType) => {
    setPropertySubType(selectedSubType);
    setPropertyDetails('');
  };

  const handlePropertyDetailsChange = (e) => {
    setPropertyDetails(e.target.value);
  };

  const handleBudgetChange = (selectedBudget) => {
    setBudget(selectedBudget);
    setMinPrice('');
    setMaxPrice('');
  };

  const handleMinPriceChange = (e) => {
    setMinPrice(e.target.value);
  };

  const handleMaxPriceChange = (e) => {
    setMaxPrice(e.target.value);
  };

  const handleSearch = () => {
    console.log('Search:', {
      location,
      propertyType,
      propertySubType,
      propertyDetails,
      budget,
      minPrice,
      maxPrice,
    });
  };

  return (
    <div className="container mx-auto mt-8 p-4 bg-gray-100">
      <div className="flex flex-wrap -mx-2">
        <LocationFilter location={location} onLocationChange={handleLocationChange} />
        <PropertyTypeFilter
          propertyType={propertyType}
          subTypeOptions={subTypeOptions}
          onPropertyTypeChange={handlePropertyTypeChange}
          onPropertySubTypeChange={handlePropertySubTypeChange}
          propertyDetails={propertyDetails}
        />
        <BudgetFilter
          budget={budget}
          budgetRanges={budgetRangesData}
          minPrice={minPrice}
          maxPrice={maxPrice}
          onBudgetChange={handleBudgetChange}
          onMinPriceChange={handleMinPriceChange}
          onMaxPriceChange={handleMaxPriceChange}
        />
      </div>

      {/* Search Button */}
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default PropertySearch;
