import React, { useState } from "react";
import { FcFilledFilter } from "react-icons/fc";

const PropertyTypeFilter = ({ onChange, propertyTypes }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPropertyType, setSelectedPropertyType] = useState(null);

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectPropertyType = (propertyType) => {
    setSelectedPropertyType(propertyType);
    onChange(propertyType);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full md:w-auto"
        type="button"
        onClick={handleToggleDropdown}
      >
        <FcFilledFilter />
        Property Type
      </button>
      {isOpen && (
        <div className="absolute mt-2 w-full rounded-md bg-white shadow-lg">
          <ul className="py-1">
            {propertyTypes.map((propertyType, index) => (
              <li
                key={index}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleSelectPropertyType(propertyType)}
              >
                {propertyType}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PropertyTypeFilter;
