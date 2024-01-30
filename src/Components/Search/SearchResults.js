
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { sampleProperties } from './sampleProperties';
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropertySearchCard from './PropertySearchCard';

const SearchResults = () => {
  const location = useLocation();
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    console.log('Location state:', location.state);

    const searchCriteria = location.state?.searchCriteria;
    console.log('Search criteria:', searchCriteria);

    if (!searchCriteria) {
      // No search criteria, show all properties
      console.log('No search criteria, showing all properties.');
      setSearchResults(sampleProperties);
      return;
    }

    // Filtering logic based on search criteria
    const filteredResults = sampleProperties.filter(property => {
      // Check location
      const propertyLocation = property.location?.toLowerCase();
      const searchLocation = searchCriteria.location?.toLowerCase();

      if (searchLocation && propertyLocation !== searchLocation) {
        return false;
      }

      // Check property type
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

      // Check budget
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

  // Helper function to get the property type based on subtype
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
      {searchResults.length === 0 ? (
        <p className="text-gray-600">No results found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-x-8 gap-y-8 w-fit h-full ">
          {searchResults.map((property, index) => (
            // <Link to={`/property/${property.id}`} key={index} state={{ property }}>
            //   <div className="max-w-5xl rounded-lg overflow-hidden shadow-sm border h-full">
            //     <div className="grid grid-cols-1 md:grid-cols-2 h-full">
            //       <div className="md:flex-shrink-0 relative">
            //         {property.image ? (
            //           <img
            //             className="h-64 w-96 object-cover rounded-t-lg md:h-full md:w-96 md:rounded-l-lg md:rounded-t-none"
            //             src={property.image}
            //             alt={`Property ${property.id}`}
            //           />
            //         ) : (
            //           <div className="h-64 w-full bg-gray-300 rounded-t-lg md:h-full md:w-64 md:rounded-l-lg md:rounded-t-none"></div>
            //         )}
            //       </div>
            //       <div className="p-6 text-gray-800">
            //         <div className="mb-4">
            //           <h3 className="text-2xl font-bold">{property.location}</h3>
            //           <p className="text-gray-600">
            //             {getPropertyType(property)} - {property.subtype}
            //           </p>
            //         </div>
        
            //         <div className="grid grid-cols-2 gap-4 mb-4">
            //           <div>
            //             <strong>Bedrooms:</strong>
            //             <span>{property.bhk}</span>
            //           </div>
            //           <div>
            //             <strong>Budget:</strong>
            //             <span>${property.budget}</span>
            //           </div>
            //         </div>
        
            //         {property.contactInfo && (
            //           <div className="mb-4">
            //             <strong>Contact Information:</strong>
            //             <div className="flex items-center">
            //               <FaEnvelope className="inline-block mr-2" />
            //               <span>{property.contactInfo.email}</span>
            //             </div>
            //             <div className="flex items-center">
            //               <FaPhone className="inline-block mr-2" />
            //               <span>{property.contactInfo.phone}</span>
            //             </div>
            //           </div>
            //         )}
        
            //         {property.overview && (
            //           <div className="mb-4">
            //             <strong>Property Overview:</strong>
            //             <div>
            //               <span className="font-semibold">Updated On:</span>{" "}
            //               {property.overview.updatedOn}
            //             </div>
            //             <div>
            //               <span className="font-semibold">Area:</span> {property.overview.area}
            //             </div>
            //             <div>
            //               <span className="font-semibold">Year Built:</span>{" "}
            //               {property.overview.yearBuilt}
            //             </div>
            //           </div>
            //         )}
        
            //         {property.amenities && (
            //           <div className="mb-4">
            //             <strong>Amenities:</strong>
            //             <ul className="list-disc list-inside ml-4">
            //               {property.amenities.map((amenity, amenityIndex) => (
            //                 <li key={amenityIndex}>{amenity}</li>
            //               ))}
            //             </ul>
            //           </div>
            //         )}
            //       </div>
            //     </div>
            //   </div>
            // </Link>
            <PropertySearchCard key={index} property={property} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResults;
