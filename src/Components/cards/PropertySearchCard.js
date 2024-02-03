// PropertySearchCard.js
import React from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaPhone } from "react-icons/fa";

const PropertySearchCard = ({ property }) => {
  const getPropertyType = (property) => {
    if (property.propertyType === "Residential") {
      return property.subtype === "Flat" ? "Flat" : "House/Villa";
    } else {
      return property.propertyType;
    }
  };

  return (
    <Link
      to={`/property/${property.id}`}
      key={property.id}
      state={{ property }}
    >
      <div>
        <div
          className="rounded-lg border text-card-foreground shadow-sm flex w-full max-w-4xl h-auto bg-white"
          data-v0-t="card"
        >
          <div className="flex-none w-96">
            <div className="m-2">
              {property.image ? (
                <img
                  className="object-cover w-full h-full"
                  src={property.image}
                  alt={`Property ${property.id}`}
                  width={669}
                  height={398}
                />
              ) : (
                <div className="h-64 w-full bg-gray-300 rounded-t-lg md:h-full md:w-64 md:rounded-l-lg md:rounded-t-none"></div>
              )}
            </div>
          </div>
          <div className="flex flex-col justify-between p-8">
            <div>
              <div className="inline-flex items-center rounded-full whitespace-nowrap border px-2.5 py-0.5 w-fit text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 mb-2">
                FEATURED PROJECT
              </div>
              <h3 className="text-2xl font-semibold">
                {property.bedrooms} Bhk for Sale in {property.city}
              </h3>
              {property.propertyType && (
                <p className="text-base text-gray-500">
                  {property.Address} {property.city}
                </p>
              )}
            </div>
            <div className="flex justify-between items-center mt-6">
              {/* Add a condition to check if the property price exists */}
              {property.price && (
                <div className="text-orange-500 font-bold text-2xl">
                  {/* Display property price */}
                  {property.price}₹
                </div>
              )}
              <div className="text-right text-base font-semibold text-gray-600">
                {property.SQFTPrice} ₹/SQFT
              </div>
            </div>
            {/* Add a condition to check if the property description exists */}
            {property.description && (
              <p className="text-base mt-6 text-gray-500">
                {property.description}
              </p>
            )}
            <div className="flex items-center justify-between mt-6">
              {/* Add conditions for each property attribute */}
              {property.bedrooms && (
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gray-600"
                  >
                    <path d="M2 4v16" />
                    <path d="M2 8h18a2 2 0 0 1 2 2v10" />
                    <path d="M2 17h20" />
                    <path d="M6 8v9" />
                  </svg>
                  <span className="ml-2 text-base text-gray-600">
                    {property.bedrooms}
                  </span>
                </div>
              )}
              {property.bathrooms && (
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gray-600"
                  >
                    <path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5" />
                    <line x1={10} x2={8} y1={5} y2={7} />
                    <line x1={2} x2={22} y1={12} y2={12} />
                    <line x1={7} x2={7} y1={19} y2={21} />
                    <line x1={17} x2={17} y1={19} y2={21} />
                  </svg>
                  <span className="ml-2 text-base text-gray-600">
                    {property.bathrooms}
                  </span>
                </div>
              )}
              {property.area && (
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gray-600"
                  >
                    <path d="M3 3v18h18" />
                    <path d="M7 12v5h12V8l-5 5-4-4Z" />
                  </svg>
                  <span className="ml-2 text-base text-gray-600">
                    {property.area}
                  </span>
                </div>
              )}
              {property.carparking && (
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gray-600"
                  >
                    <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
                    <circle cx={7} cy={17} r={2} />
                    <path d="M9 17h6" />
                    <circle cx={17} cy={17} r={2} />
                  </svg>
                  <span className="ml-2 text-base text-gray-600">
                    {property.carparking}
                  </span>
                </div>
              )}
            </div>
            <div className="flex space-x-4 mt-6">
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 px-4 py-2 flex-1 text-lg">
                Request Call
              </button>
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 flex-1 text-lg">
                Whatsapp
              </button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PropertySearchCard;
