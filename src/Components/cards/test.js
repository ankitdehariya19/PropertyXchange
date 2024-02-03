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
          className="rounded-lg border text-card-foreground shadow-sm flex w-full max-w-lg bg-white"
          data-v0-t="card"
        >
          <div className="flex-none w-48">
            <div className="">
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
          </div>
          <div className="flex flex-col justify-between p-4">
            <div>
              <div className="inline-flex items-center rounded-full whitespace-nowrap border px-2.5 py-0.5 w-fit text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 mb-2">
                FEATURED PROJECT
              </div>
              <h3 className="text-lg font-semibold">
                3 BHK For Sale in Regal Kalash Phase III
              </h3>
              <p className="text-sm text-gray-500">BAWDIYA KALAN, BHOPAL</p>
            </div>
            <div className="flex items-baseline space-x-2">
              <span className="text-2xl font-semibold text-[#bd1e59]">
                ₹36 - 47 Lac
              </span>
              <span className="text-sm text-gray-500">₹3,898 /SQFT</span>
            </div>
            <p className="text-sm mt-2">
              The first impression counts. And this one is truly mighty and
              majestic. The palatial elevation of Paras Emperor piques the
              curiosity of visitors. What they will see inside will simply
              exceed their expectations! Welcome to our spa
            </p>
            <div className="flex items-center space-x-4 mt-2">
              <div className="flex items-center space-x-1">
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
                  className="text-gray-500"
                >
                  <path d="M2 4v16" />
                  <path d="M2 8h18a2 2 0 0 1 2 2v10" />
                  <path d="M2 17h20" />
                  <path d="M6 8v9" />
                </svg>
                <span className="text-sm text-gray-700">2</span>
              </div>
              {/* Add other icons here */}
            </div>
            <div className="flex space-x-2 mt-2">
              <button className="call-to-action-button">Request Call</button>
              <button className="call-to-action-button">Whatsapp</button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PropertySearchCard;
