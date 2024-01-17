// SearchResults.js
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { sampleProperties } from './sampleProperties'; 

const SearchResults = () => {
  const location = useLocation();
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const searchCriteria = location.state?.searchCriteria;

    if (!searchCriteria) {
      // No search criteria, show all properties
      setSearchResults(sampleProperties);
      return;
    }

    // Filtering logic based on search criteria
    const filteredResults = sampleProperties.filter(property => {
      // Check location
      if (searchCriteria.location && property.location !== searchCriteria.location) {
        return false;
      }

      // Check property type
      const propertyType = getPropertyType(property);
      if (
        (searchCriteria.propertyType.residential.length > 0 &&
          !searchCriteria.propertyType.residential.includes(propertyType)) ||
        (searchCriteria.propertyType.commercial.length > 0 &&
          !searchCriteria.propertyType.commercial.includes(propertyType)) ||
        (searchCriteria.propertyType.villa.length > 0 &&
          !searchCriteria.propertyType.villa.includes(propertyType)) ||
        (searchCriteria.propertyType.agricultural.length > 0 &&
          !searchCriteria.propertyType.agricultural.includes(propertyType))
      ) {
        return false;
      }

      // Check budget
      if (
        property.budget < searchCriteria.budget[0] ||
        property.budget > searchCriteria.budget[1]
      ) {
        return false;
      }

      return true;
    });

    setSearchResults(filteredResults);
  }, [location.state]);

  // Helper function to get the property type based on subtype
  const getPropertyType = (property) => {
    if (property.propertyType === 'Residential') {
      return property.subtype === 'Flat' ? 'Flat' : 'House/Villa';
    } else {
      return property.propertyType;
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-3xl font-bold mb-4">Search Results</h2>

      {searchResults.length === 0 ? (
        <p>No results found.</p>
      ) : (
        <ul>
          {searchResults.map(property => (
            <li key={property.id} className="mb-4">
              <div>
                <strong>{property.location}</strong> - {property.propertyType}
              </div>
              <div>Bedrooms: {property.bedrooms}</div>
              <div>Budget: ${property.budget}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchResults;
