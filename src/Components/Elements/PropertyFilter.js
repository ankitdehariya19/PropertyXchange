import React from 'react';
import Selector from './Selector';
import {sampleProperties} from '../../common/sampleProperties'; 
import PropertyType from './PropertyType';
const PropertyFilter = () => {
  // Extract unique cities from sampleProperties
  const uniqueCities = Array.from(new Set(sampleProperties.map(property => property.city)));



  const handleCitySelect = (selectedCity) => {
    // Use the selectedCity or handle the case where nothing is selected
    if (selectedCity) {
      console.log(`Selected city: ${selectedCity}`);
      // You can perform additional actions with the selectedCity
    } else {
      console.log("No city selected, using all data");
      // Handle the case where nothing is selected
      // You can use all the data or perform specific actions
    }
  };

  const options = ['Option 1', 'Option 2', 'Option 3'];
  const handleSelect = (selectedOption) => {
    console.log(`Selected option: ${selectedOption}`);
  };


  return (
    <div className='flex'>
      <Selector options={uniqueCities} onSelect={handleCitySelect}/>
      <PropertyType options={options} onSelect={handleSelect}/>
    </div>
  );
}

export default PropertyFilter;
