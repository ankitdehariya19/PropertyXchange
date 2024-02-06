// import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import { sampleProperties } from '../common/sampleProperties';
// import PropertySearchCard from '../components/cards/PropertySearchCard';
// import PropertyCard from '../components/cards/PropertyCard';
// import Test2 from '../components/cards/test2';

// const SearchResults = () => {
//   const location = useLocation();
//   const [searchResults, setSearchResults] = useState([]);

//   useEffect(() => {
//     console.log('Location state:', location.state);

//     const searchCriteria = location.state?.searchCriteria;
//     console.log('Search criteria:', searchCriteria);

//     if (!searchCriteria) {
//       console.log('No search criteria, showing all properties.');
//       setSearchResults(sampleProperties);
//       return;
//     }

//     const filteredResults = sampleProperties.filter(property => {

//       const propertyLocation = property.location?.toLowerCase();
//       const searchLocation = searchCriteria.location?.toLowerCase();

//       if (searchLocation && propertyLocation !== searchLocation) {
//         return false;
//       }

//       const propertyType = getPropertyType(property);
//       if (
//         (searchCriteria.propertyType.residential?.length > 0 &&
//           !searchCriteria.propertyType.residential.includes(propertyType)) ||
//         (searchCriteria.propertyType.commercial?.length > 0 &&
//           !searchCriteria.propertyType.commercial.includes(propertyType)) ||
//         (searchCriteria.propertyType.villa?.length > 0 &&
//           !searchCriteria.propertyType.villa.includes(propertyType)) ||
//         (searchCriteria.propertyType.agricultural?.length > 0 &&
//           !searchCriteria.propertyType.agricultural.includes(propertyType))
//       ) {
//         return false;
//       }

//       if (
//         property.budget < searchCriteria.budget[0] ||
//         property.budget > searchCriteria.budget[1]
//       ) {
//         return false;
//       }

//       return true;
//     });

//     console.log('Filtered Results:', filteredResults);
//     setSearchResults(filteredResults);
//   }, [location.state]);

//   const getPropertyType = property => {
//     if (property.propertyType === 'Residential') {
//       return property.subtype === 'Flat' ? 'Flat' : 'House/Villa';
//     } else {
//       return property.propertyType;
//     }
//   };

//   return (
//     <div className="flex flex-col items-center mx-auto mt-8 h-full w-full py-10  min-h-screen">
//       <div className='flex justify-center my-5 items-start w-full '>
//         <h2 className="text-3xl font-bold mb-4">Search Results</h2>
//       </div>
//        <div className='w-full h-full'>
//         {/* <PropertyCard/> */}
//         {/* <Test2/> */}
//        </div>
//       {searchResults.length === 0 ? (
//         <p className="text-gray-600">No results found.</p>
//       ) : (
//         <div className="flex justify-center items-center w-full h-full ">
//         <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1  gap-x-8 gap-y-8">
//           {searchResults.map((property, index) => (
//             <PropertySearchCard key={index} property={property} />
//           ))}
//         </div>
//       </div>

//       )}
//     </div>
//   );
// };

// export default SearchResults;

// // SearchResults.js

// import React from 'react';
// import { useLocation } from 'react-router-dom';

// // Sample data, replace this with your actual data fetching logic
// import  {sampleProperties}  from '../common/sampleProperties';
// import PropertySearchCard from '../components/cards/PropertySearchCard';

// const SearchResults = () => {
//   const location = useLocation();
//   const queryParams = new URLSearchParams(location.search);
//   const city = queryParams.get('city');
//   const propertyType = queryParams.get('propertyType');
//   const subType = queryParams.get('subType');
//   const bedroom = queryParams.get('bedroom');
//   const minPrice = queryParams.get('minPrice');
//   const maxPrice = queryParams.get('maxPrice');

//   console.log('Location state:', location.state);
//   console.log('Search criteria:', {
//     city,
//     propertyType,
//     subType,
//     bedroom,
//     minPrice,
//     maxPrice,
//   });

//   // Filter properties based on search criteria
//   const filteredProperties = sampleProperties.filter((property) => {
//     return (
//       (!city || property.city === city) &&
//       (!propertyType || property.propertyType === propertyType) &&
//       (!subType || property.subType === subType) &&
//       (!bedroom || property.bedroom === bedroom) &&
//       property.price >= minPrice &&
//       property.price <= maxPrice
//     );
//   });

//   return (
//     <div>
//       <h2>Search Results</h2>
//       {filteredProperties.length > 0 ? (
//         <div>
//           {filteredProperties.map((property, index) => (
//             // Replace the li element with the PropertySearchCard component
//             <PropertySearchCard key={index} property={property} />
//           ))}
//         </div>
//       ) : (
//         <p>No properties match the search criteria.</p>
//       )}
//     </div>
//   );
// };