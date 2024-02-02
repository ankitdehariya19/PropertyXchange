// PropertyDetails.js
import React from "react";
import { useLocation } from "react-router-dom";
import BookingForm from "../components/cards/BookingForm";
import ContactInformation from "../components/cards/ContactInformation";
import PropertyOverview from "../components/cards/PropertyOverview";
import Amenities from "../components/cards/Amenities";

const PropertyDetails = () => {
  const handleBookingSubmit = (bookingInfo) => {
    // Implement your booking submission logic here using the bookingInfo data
    console.log("Booking submitted:", bookingInfo);
  };

  const routeLocation = useLocation();
  const { property } = routeLocation.state || {};

  if (!property) {
    return <p>Loading...</p>;
  }

  const {
    propertyLocation,
    propertyType,
    subtype,

    budget,
    contactInfo,
    overview,
    amenities,
    image,
  } = property;

  return (
    <>
      <div className="bg-gray-100">
        <div className="container mx-auto p-8 ">
          <div className="border shadow-sm p-8 rounded-lg mb-8">
            <h1 className="text-4xl font-bold text-gray-800">
              {property.location}
            </h1>
            <p className="text-gray-600">
              {propertyType} - {subtype}
            </p>
            <div className="flex justify-between items-center">
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center">
                  <p className="text-lg text-gray-800 font-semibold">Budget:</p>
                  <p className="text-lg text-gray-800 ml-2">${budget}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
            <div className="aspect-w-3 aspect-h-1 md:flex-shrink-0">
              {image ? (
                <img
                  className="w-full h-auto object-cover rounded-lg border border-gray-300"
                  src={image}
                  alt={`Property ${propertyLocation}`}
                />
              ) : (
                <div className="h-full w-full bg-gray-300 rounded-lg"></div>
              )}
            </div>

            <div>
              <BookingForm onBookingSubmit={handleBookingSubmit} />
              <div className=" ">
                <div className="flex">
                {amenities && <Amenities amenities={amenities} />}
                  {overview && <PropertyOverview overview={overview} />}
                 
                </div>
               
              </div>
            </div>
          </div>
          <div className="flex ">
                  {contactInfo && (
                    <ContactInformation contactInfo={contactInfo} />
                  )}
                </div>
        </div>
      </div>
    </>
  );
};

export default PropertyDetails;
