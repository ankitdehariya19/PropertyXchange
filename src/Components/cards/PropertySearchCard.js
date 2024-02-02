// PropertySearchCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaPhone } from 'react-icons/fa';

const PropertySearchCard = ({ property }) => {
  const getPropertyType = (property) => {
    if (property.propertyType === 'Residential') {
      return property.subtype === 'Flat' ? 'Flat' : 'House/Villa';
    } else {
      return property.propertyType;
    }
  };

  return (
    <Link to={`/property/${property.id}`} key={property.id} state={{ property }}>
      <div className="max-w-7xl rounded-lg overflow-hidden shadow-sm border w-full h-full bg-red-300">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full bg-yellow-200 p-2 m-2">
          <div className="w-96 h-auto relative">
            {property.image ? (
              <img
                className="h-64 w-96 object-cover rounded-t-lg md:h-full md:w-96 md:rounded-l-lg md:rounded-t-none"
                src={property.image}
                alt={`Property ${property.id}`}
              />
            ) : (
              <div className="h-64 w-full bg-gray-300 rounded-t-lg md:h-full md:w-64 md:rounded-l-lg md:rounded-t-none"></div>
            )}
          </div>
          <div className="p-6 text-gray-800">
            <div className="mb-4">
              <h3 className="text-2xl font-bold">{property.location}</h3>
              <p className="text-gray-600">
                {getPropertyType(property)} - {property.subtype}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <strong>Bedrooms:</strong>
                <span>{property.bhk}</span>
              </div>
              <div>
                <strong>Budget:</strong>
                <span>${property.budget}</span>
              </div>
            </div>

            {property.contactInfo && (
              <div className="mb-4">
                <strong>Contact Information:</strong>
                <div className="flex items-center">
                  <FaEnvelope className="inline-block mr-2" />
                  <span>{property.contactInfo.email}</span>
                </div>
                <div className="flex items-center">
                  <FaPhone className="inline-block mr-2" />
                  <span>{property.contactInfo.phone}</span>
                </div>
              </div>
            )}

            {property.overview && (
              <div className="mb-4">
                <strong>Property Overview:</strong>
                <div>
                  <span className="font-semibold">Updated On:</span> {property.overview.updatedOn}
                </div>
                <div>
                  <span className="font-semibold">Area:</span> {property.overview.area}
                </div>
                <div>
                  <span className="font-semibold">Year Built:</span> {property.overview.yearBuilt}
                </div>
              </div>
            )}

            {property.amenities && (
              <div className="mb-4">
                <strong>Amenities:</strong>
                <ul className="list-disc list-inside ml-4">
                  {property.amenities.map((amenity, amenityIndex) => (
                    <li key={amenityIndex}>{amenity}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PropertySearchCard;
