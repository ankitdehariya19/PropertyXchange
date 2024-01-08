import React from "react";
import { BiBed, BiBath, BiArea, BiMap } from "react-icons/bi";

const House = ({ house }) => {
  const {
    image,
    type,
    country,
    address,
    bedrooms,
    bathrooms,
    surface,
    price,
    plotSize,
  } = house;

  return (
    <div className="bg-white border rounded-lg overflow-hidden mx-auto my-4 max-w-xl cursor-pointer hover:shadow-md transition duration-300 flex flex-col md:flex-row lg:flex-row xl:flex-row">
      <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 m-1 rounded-lg overflow-hidden border">
        <img
          src={image}
          alt={address}
          className="object-cover w-full h-full rounded-lg"
        />
      </div>
      <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 p-6 ">
        <div className="text-xl h-16 font-semibold mb-2">{address}</div>
        <div className="text-2xl font-semibold text-violet-600 mb-4">
          ${price}
        </div>
        <div className="flex items-center gap-x-2 text-base mb-4">
          <div className="text-gray-700 bg-gray-200 py-1 px-3 rounded-md">
            {type}
          </div>
          <div className="text-violet-600 border-violet-600 border rounded-full px-3">
            {country}
          </div>
        </div>
        <div className="flex flex-col md:flex-row  p-2 rounded-md ">
          <div className="flex  flex-col justify-between">
            <FeatureIcon icon={<BiBed />} label="Bedrooms" value={bedrooms} />
            <FeatureIcon icon={<BiBath />} label="Bathrooms" value={bathrooms} />
            <FeatureIcon icon={<BiArea />} label="Area" value={`${surface} `} />
            <FeatureIcon icon={<BiMap />} label="Plot Size" value={`${plotSize} `} />
          </div>
          
        </div>
      </div>
    </div>
  );
};

const FeatureIcon = ({ icon, label, value }) => (
  <div className="flex items-center  text-gray-600 m-2 ">
    <div className="flex  items-center">
      <div className="text-2xl">{icon}</div>
      <div className="text-sm w-full">{value}</div>
    </div>

    <div className="ml-2 ">
      <div className="text-sm font-semibold">{label}</div>
    </div>
  </div>
);

export default House;
