// import React, { useState } from "react";
// import Selector from "./Selector";
// import { sampleProperties } from "../../common/sampleProperties";
// import PropertyType2 from "./PropertyType2";
// const PropertyFilter = () => {
//   // Extract unique cities from sampleProperties
//   const uniqueCities = Array.from(
//     new Set(sampleProperties.map((property) => property.city))
//   );

//   const [selectedValues, setSelectedValues] = useState({
//     propertyType: "",
//     subType: "",
//     bedroom: "",
//   });

//   const handleCitySelect = (selectedCity) => {
//     // Use the selectedCity or handle the case where nothing is selected
//     if (selectedCity) {
//       console.log(`Selected city: ${selectedCity}`);
//       // You can perform additional actions with the selectedCity
//     } else {
//       console.log("No city selected, using all data");
//       // Handle the case where nothing is selected
//       // You can use all the data or perform specific actions
//     }
//   };

//   const handleSelect = (values) => {
//     setSelectedValues(values);
//     // Do something with the selected values, e.g., update state or perform other actions
//   };

//   return (
//     <>
//       <div className="flex">
//         <Selector options={uniqueCities} onSelect={handleCitySelect} />
//         <PropertyType2 onSelect={handleSelect} />

//       </div>

//       <div>
//         Selected Property Type: {selectedValues.propertyType}
//         Selected Sub Type: {selectedValues.subType}
//         Selected Bedroom: {selectedValues.bedroom}
//       </div>
//     </>
//   );
// };

// export default PropertyFilter;




// import React, { useState } from "react";
// import Selector from "./Selector";
// import { sampleProperties } from "../../common/sampleProperties";
// import PropertyType2 from "./PropertyType2";
// import PriceRangeDropdown from "./PriceRangeDropdown"; // Import the new RangeSelector component

// const PropertyFilter = () => {
//   // Extract unique cities from sampleProperties
//   const uniqueCities = Array.from(
//     new Set(sampleProperties.map((property) => property.city))
//   );

//   const [selectedValues, setSelectedValues] = useState({
//     propertyType: "",
//     subType: "",
//     bedroom: "",
//     minPrice: 0,
//     maxPrice: 1000000, // Set a default maximum price
//   });

//   const handleCitySelect = (selectedCity) => {
//     // Use the selectedCity or handle the case where nothing is selected
//     if (selectedCity) {
//       console.log(`Selected city: ${selectedCity}`);
//       // You can perform additional actions with the selectedCity
//     } else {
//       console.log("No city selected, using all data");
//       // Handle the case where nothing is selected
//       // You can use all the data or perform specific actions
//     }
//   };

//   const handleSelect = (values) => {
//     setSelectedValues((prevValues) => ({
//       ...prevValues,
//       ...values,
//     }));
//     // Do something with the selected values, e.g., update state or perform other actions
//   };

//   const handleRangeSelect = (minPrice, maxPrice) => {
//     setSelectedValues((prevValues) => ({
//       ...prevValues,
//       minPrice,
//       maxPrice,
//     }));
//   };

//   return (
//     <>
//       <div className="flex bg-red-300">
//         <Selector options={uniqueCities} onSelect={handleCitySelect} />
//         <PropertyType2 onSelect={handleSelect} />
//         <PriceRangeDropdown onRangeSelect={handleRangeSelect} />
//       </div>

//       <div>
//         Selected Property Type: {selectedValues.propertyType}
//         Selected Sub Type: {selectedValues.subType}
//         Selected Bedroom: {selectedValues.bedroom}
//         Selected Min Price: {selectedValues.minPrice}
//         Selected Max Price: {selectedValues.maxPrice}
//       </div>
//     </>
//   );
// };

// export default PropertyFilter;



// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Selector from "./Selector";
// import { sampleProperties } from "../../common/sampleProperties";
// import PropertyType from "./PropertyType";
// import PriceRangeDropdown from "./PriceRangeDropdown";


// const PropertyFilter = () => {
//   const navigate = useNavigate();

//   const uniqueCities = Array.from(
//     new Set(sampleProperties.map((property) => property.city))
//   );

//   const [selectedValues, setSelectedValues] = useState({
//     city: "", // Add city to selectedValues
//     propertyType: "",
//     subType: "",
//     bedroom: "",
//     minPrice: 0,
//     maxPrice: 1000000,
//   });

//   const handleCitySelect = (selectedCity) => {
//     setSelectedValues((prevValues) => ({
//       ...prevValues,
//       city: selectedCity,
//     }));
//   };

//   const handleSelect = (values) => {
//     setSelectedValues((prevValues) => ({
//       ...prevValues,
//       ...values,
//     }));
//   };

//   const handleRangeSelect = (minPrice, maxPrice) => {
//     setSelectedValues((prevValues) => ({
//       ...prevValues,
//       minPrice,
//       maxPrice,
//     }));
//   };

//   const handleSearch = () => {
//     const {
//       city,
//       propertyType,
//       subType,
//       bedroom,
//       minPrice,
//       maxPrice,
//     } = selectedValues;
  
//     const query = `/search-results?city=${encodeURIComponent(city)}&propertyType=${encodeURIComponent(
//       propertyType
//     )}&subType=${encodeURIComponent(subType)}&bedroom=${encodeURIComponent(
//       bedroom
//     )}&minPrice=${encodeURIComponent(minPrice)}&maxPrice=${encodeURIComponent(
//       maxPrice
//     )}`;
  
//     console.log("Constructed Query:", query);
//     navigate(query);
//   };
  

//   return (
//     <>
// <div className="flex items-center justify-between h-20 bg-gradient-to-r from-blue-500 to-blue-700  gap-x-5 px-10 rounded-full">
//   <Selector options={uniqueCities} onSelect={handleCitySelect} />
//   <PropertyType onSelect={handleSelect} />
//   <PriceRangeDropdown onRangeSelect={handleRangeSelect} />
//   <button className="py-2 px-6 bg-orange-500 rounded-full text-white hover:bg-orange-600 focus:outline-none" onClick={handleSearch}>
//     Search
//   </button>
// </div>


//       {/* <div>
//         Selected City: {selectedValues.city}
//         Selected Property Type: {selectedValues.propertyType}
//         Selected Sub Type: {selectedValues.subType}
//         Selected Bedroom: {selectedValues.bedroom}
//         Selected Min Price: {selectedValues.minPrice}
//         Selected Max Price: {selectedValues.maxPrice}
//       </div> */}
//     </>
//   );
// };

// export default PropertyFilter;






// PropertyFilter.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Selector from './Selector';
import { sampleProperties } from '../../common/sampleProperties';
import PropertyType from './PropertyType';
import PriceRangeDropdown from './PriceRangeDropdown';

const PropertyFilter = () => {
  const navigate = useNavigate();

  const uniqueCities = Array.from(
    new Set(sampleProperties.map((property) => property.city))
  );

  const [selectedValues, setSelectedValues] = useState({
    city: '',
    propertyType: '',
    subType: '',
    bedroom: '',
    minPrice: 0,
    maxPrice: 1000000,
  });

  const handleCitySelect = (selectedCity) => {
    setSelectedValues((prevValues) => ({
      ...prevValues,
      city: selectedCity,
    }));
  };

  const handleSelect = (values) => {
    setSelectedValues((prevValues) => ({
      ...prevValues,
      ...values,
    }));
  };

  const handleRangeSelect = (minPrice, maxPrice) => {
    setSelectedValues((prevValues) => ({
      ...prevValues,
      minPrice,
      maxPrice,
    }));
  };

  const handleSearch = () => {
    const { city, propertyType, subType, bedroom, minPrice, maxPrice } = selectedValues;

    const query = `/search-results?city=${encodeURIComponent(city)}&propertyType=${encodeURIComponent(
      propertyType
    )}&subType=${encodeURIComponent(subType)}&bedroom=${encodeURIComponent(
      bedroom
    )}&minPrice=${encodeURIComponent(minPrice)}&maxPrice=${encodeURIComponent(maxPrice)}`;

    navigate(query);
  };

  return (
    // style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
    <>
      <div className="flex items-center justify-between h-20 bg-gradient-to-r gap-x-5 px-10 rounded-full bg-white" >
        <Selector options={uniqueCities} onSelect={handleCitySelect} />
        <PropertyType onSelect={handleSelect} />
        <PriceRangeDropdown onRangeSelect={handleRangeSelect} />
        <button
          className="py-2 px-6  rounded-full text-white bg-orange-500  focus:outline-none"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </>
  );
};

export default PropertyFilter;
