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

// export default SearchResults;

import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { FcFilledFilter } from "react-icons/fc";
import { IoMdSearch } from "react-icons/io";
import PropertySearchCard from "../components/cards/PropertySearchCard";
// Sample data, replace this with your actual data fetching logic
import { sampleProperties } from "../common/sampleProperties";
import Filtertopbar from "../components/Elements/Filtertopbar";
import SearchPagination from "../components/Elements/SearchPagination";
import PropertyTypeFilter from "../components/Elements/PropertyTypeFilterBtn";

const SearchResults = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const city = queryParams.get("city");
  const propertyType = queryParams.get("propertyType");
  const subType = queryParams.get("subType");
  const bedroom = queryParams.get("bedroom");
  const bathroom = queryParams.get("bathroom"); // Add bathroom
  const minPrice = queryParams.get("minPrice");
  const maxPrice = queryParams.get("maxPrice");
  const [selectedPropertyType, setSelectedPropertyType] = useState(null);

  const propertyTypes = [...new Set(sampleProperties.map(property => property.propertyType))];

  console.log("Location state:", location.state);
  console.log("Search criteria:", {
    city,
    propertyType,
    subType,
    bedroom,
    bathroom,
    minPrice,
    maxPrice,
  });


  const handlePropertyTypeChange = (propertyType) => {
    setSelectedPropertyType(propertyType);
  };

  // Filter properties based on search criteria
  const filteredProperties = sampleProperties.filter((property) => {
    return (
      (!city || property.city === city) &&
      (!propertyType || property.propertyType === propertyType) &&
      (!subType || property.subType === subType) &&
      (!bedroom || property.bedrooms === bedroom) &&
      (!bathroom || property.bathrooms === bathroom) && // Filter by bathroom
      property.price >= minPrice &&
      property.price <= maxPrice
    );
  });

  return (
    <div>
      <div className="flex flex-col w-full min-h-screen">
        <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 p-4 border-t md:gap-8 md:p-10">
          <div className="grid gap-6 md:gap-8">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
              <div className="grid gap-1">
                <h1 className="text-2xl font-bold tracking-tight">
                  Search Results
                </h1>
                <p className="text-gray-500 dark:text-gray-400">
                  Showing properties based on your search criteria.
                </p>
              </div>
              <div className="flex flex-col md:flex-row gap-4 md:gap-8">
              <PropertyTypeFilter onChange={handlePropertyTypeChange} propertyTypes={propertyTypes} />
                <button
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full md:w-auto"
                  type="button"
                  id="radix-:r4p:"
                  aria-haspopup="menu"
                  aria-expanded="false"
                  data-state="closed"
                >
                  <FcFilledFilter />
                  Price Range
                </button>
                <button
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full md:w-auto"
                  type="button"
                  id="radix-:r4r:"
                  aria-haspopup="menu"
                  aria-expanded="false"
                  data-state="closed"
                >
                  <FcFilledFilter />
                  Bedrooms
                </button>
              </div>
              <form className="flex-1 ml-auto sm:flex-initial relative">
                <div className="relative">
                  <IoMdSearch className="absolute left-3 top-3 " />
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                    placeholder="Search location..."
                    type="search"
                  />
                </div>
              </form>
            </div>
            <div className="flex justify-center mt-10">
              {filteredProperties.length > 0 ? (
                <div>
                  {filteredProperties.map((property, index) => (
                    // Replace the li element with the PropertySearchCard component
                    <PropertySearchCard key={index} property={property} />
                  ))}
                </div>
              ) : (
                <p>No properties match the search criteria.</p>
              )}
            </div>

            <SearchPagination />
          </div>
        </main>
      </div>
    </div>
  );
};

export default SearchResults;
