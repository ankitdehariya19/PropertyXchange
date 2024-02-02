
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { sampleProperties } from '../common/sampleProperties';
import PropertySearchCard from '../components/cards/PropertySearchCard';
import PropertyCard from '../components/cards/PropertyCard';

const SearchResults = () => {
  const location = useLocation();
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    console.log('Location state:', location.state);

    const searchCriteria = location.state?.searchCriteria;
    console.log('Search criteria:', searchCriteria);

    if (!searchCriteria) {
      console.log('No search criteria, showing all properties.');
      setSearchResults(sampleProperties);
      return;
    }

    const filteredResults = sampleProperties.filter(property => {

      const propertyLocation = property.location?.toLowerCase();
      const searchLocation = searchCriteria.location?.toLowerCase();

      if (searchLocation && propertyLocation !== searchLocation) {
        return false;
      }

      const propertyType = getPropertyType(property);
      if (
        (searchCriteria.propertyType.residential?.length > 0 &&
          !searchCriteria.propertyType.residential.includes(propertyType)) ||
        (searchCriteria.propertyType.commercial?.length > 0 &&
          !searchCriteria.propertyType.commercial.includes(propertyType)) ||
        (searchCriteria.propertyType.villa?.length > 0 &&
          !searchCriteria.propertyType.villa.includes(propertyType)) ||
        (searchCriteria.propertyType.agricultural?.length > 0 &&
          !searchCriteria.propertyType.agricultural.includes(propertyType))
      ) {
        return false;
      }

      if (
        property.budget < searchCriteria.budget[0] ||
        property.budget > searchCriteria.budget[1]
      ) {
        return false;
      }

      return true;
    });

    console.log('Filtered Results:', filteredResults);
    setSearchResults(filteredResults);
  }, [location.state]);

  const getPropertyType = property => {
    if (property.propertyType === 'Residential') {
      return property.subtype === 'Flat' ? 'Flat' : 'House/Villa';
    } else {
      return property.propertyType;
    }
  };

  return (
    <div className="flex flex-col items-center mx-auto mt-8 h-full w-full py-10  min-h-screen">
      <div className='flex justify-center my-5 items-start w-full '>
        <h2 className="text-3xl font-bold mb-4">Search Results</h2>
      </div>
       <div className='w-full h-full'>
        {/* <PropertyCard/> */}
       </div>
      {searchResults.length === 0 ? (
        <p className="text-gray-600">No results found.</p>
      ) : (
        <div className="flex justify-center items-center w-full h-full bg-fuchsia-400">
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1  gap-x-8 gap-y-8">
          {searchResults.map((property, index) => (
            <PropertySearchCard key={index} property={property} />
          ))}
        </div>
      </div>
      
      )}
    </div>
  );
};

export default SearchResults;


