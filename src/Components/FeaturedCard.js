import React from 'react';
import { FaEnvelope, FaPhone } from 'react-icons/fa';

const FeaturedCard = ({
  property: {
    image,
    location,
    propertyType,
    subtype,
    bhk,
    budget,
    overview,
    amenities,
    contactInfo,
    id,
  },
}) => {
  return (
    <div className="max-w-3xl  mx-auto bg-white rounded-lg overflow-hidden shadow-md my-4 border border-gray-300">
      <div className="grid md:grid-cols-2">
        <div className="md:flex-shrink-0">
          {image ? (
            <img
              className="h-full w-full object-cover rounded-t-lg"
              src={image}
              alt={`Property ${id}`}
            />
          ) : (
            <div className="h-64 w-full bg-gray-300 rounded-t-lg"></div>
          )}
        </div>
        <div className="p-6 text-gray-800">
          <div className="mb-4">
            <h3 className="text-2xl font-bold">{location}</h3>
            <p className="text-gray-600">
              {propertyType} - {subtype}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <strong>Bedrooms:</strong>
              <span>{bhk}</span>
            </div>
            <div>
              <strong>Budget:</strong>
              <span>${budget}</span>
            </div>
          </div>

          {contactInfo && (
            <div className="mb-4">
              <strong>Contact Information:</strong>
              <div>
                <FaEnvelope className="inline-block mr-2" />
                <span>{contactInfo.email}</span>
              </div>
              <div>
                <FaPhone className="inline-block mr-2" />
                <span>{contactInfo.phone}</span>
              </div>
            </div>
          )}

          {overview && (
            <div className="mb-4">
              <strong>Property Overview:</strong>
              <div><span className="font-semibold">Updated On:</span> {overview.updatedOn}</div>
              <div><span className="font-semibold">Area:</span> {overview.area}</div>
              <div><span className="font-semibold">Year Built:</span> {overview.yearBuilt}</div>
            </div>
          )}

          {amenities && (
            <div className="mb-4">
              <strong>Amenities:</strong>
              <ul className="list-disc list-inside ml-4">
                {amenities.map((amenity, index) => (
                  <li key={index}>{amenity}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
