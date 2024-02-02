import React from "react";

const CityCard = ({ name, image, propertiesCount }) => (
  <div className="relative bg-white border p-2 rounded-lg shadow-sm mb-6 overflow-hidden">
    <div className="overlay-container group">
      <img
        src={image}
        alt={name}
        className="w-full h-32 object-cover rounded-t-md transition-transform transform group-hover:translate-y-0 group-hover:scale-105"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 transition-transform transform translate-y-full group-hover:translate-y-0">
        <h3 className="text-xl font-semibold mb-1">{name}</h3>
        <p className="text-sm">{`Available: ${propertiesCount}`}</p>
      </div>
    </div>
  </div>
);

export default CityCard;
