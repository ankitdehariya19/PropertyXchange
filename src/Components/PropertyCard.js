// PropertyCard.jsx
import React from "react";

const PropertyCard = ({ name, image }) => {
  return (
    <div className="relative w-52 h-32 mb-4 overflow-hidden group">
      <img
        src={image}
        alt={name}
        className="w-full h-32 object-cover transition-transform transform group-hover:scale-105"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 transition-transform transform translate-y-full group-hover:translate-y-0">
        <h4 className="text-sm font-semibold">{name}</h4>
      </div>
    </div>
  );
};

export default PropertyCard;
