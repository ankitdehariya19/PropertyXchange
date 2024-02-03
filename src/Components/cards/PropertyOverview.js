// PropertyOverview.js
import React from "react";
import {
  FaCalendarAlt,
  FaRuler,
  FaBuilding,
  FaBed,
  FaBath,
  FaCar,
} from "react-icons/fa";

const PropertyOverview = ({ overview }) => {
  // Use conditional rendering to handle undefined or missing overview
  if (!overview) {
    return null; // You can return null or display a message for missing overview
  }

  return (
    <div className="p-4 rounded-md ">
      <p className="text-lg font-semibold text-gray-800">Property Overview</p>
      <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-600">
        <DetailItem
          icon={<FaCalendarAlt />}
          label="Last Updated"
          value={overview.updatedOn}
        />
        <DetailItem icon={<FaRuler />} label="Area" value={overview.area} />
        <DetailItem
          icon={<FaBuilding />}
          label="Year Built"
          value={overview.yearBuilt}
        />
        <DetailItem icon={<FaBed />} label="BHK" value={overview.bhk} />
        <DetailItem icon={<FaBed />} label="Bedrooms" value={overview.bedrooms} />
        <DetailItem
          icon={<FaBath />}
          label="Bathrooms"
          value={overview.bathrooms}
        />
        <DetailItem icon={<FaCar />} label="Garages" value={overview.garages} />
      </div>
    </div>
  );
};

const DetailItem = ({ icon, label, value }) => {
  // Use conditional rendering to handle missing values
  if (!value && value !== 0) {
    return null; // You can return null or display a placeholder for missing values
  }

  return (
    <div className="flex flex-col items-center  p-1 rounded-md shadow-md">
      <div className="flex justify-start items-start text-start w-full">
        <p className="font-semibold text-gray-700 mb-1">{label}:</p>
      </div>
      <div className="flex  justify-start items-start text-start  w-full">
        {icon && <span className="text-orange-500 text-2xl mr-4">{icon}</span>}
        <p className="text-gray-600 w-full ">{value}</p>
      </div>
    </div>
  );
};

export default PropertyOverview;
