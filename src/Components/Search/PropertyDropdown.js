import React, { useState } from 'react';

const PropertyDropdown = ({ propertyTypes }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedType, setSelectedType] = useState(null);

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleTypeClick = (type) => {
    if (selectedType === type) {
      // If the same type is clicked again, close the dropdown
      setIsOpen(false);
    } else {
      setSelectedType(type);
    }
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <span className="rounded-md shadow-sm">
          <button
            type="button"
            onClick={handleToggleDropdown}
            className={`inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
              isOpen ? 'bg-gray-200' : ''
            }`}
          >
            {selectedType ? selectedType : 'Select Property Type'}
          </button>
        </span>
      </div>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
        >
          {propertyTypes.map((propertyType) => (
            <div key={propertyType.type}>
              <p
                onClick={() => handleTypeClick(propertyType.type)}
                className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer ${
                  selectedType === propertyType.type ? 'bg-gray-200' : ''
                }`}
                role="menuitem"
              >
                {propertyType.type}
              </p>
              {selectedType === propertyType.type && propertyType.items && (
                <div className="pl-4">
                  {propertyType.items.map((item) => (
                    <React.Fragment key={item.name}>
                      <p
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
                        role="menuitem"
                        onClick={() => handleTypeClick(item.name)} // Clicking on item toggles the dropdown
                      >
                        {item.name}
                      </p>
                      {item.subItems && selectedType === item.name && (
                        <div className="pl-4">
                          {item.subItems.map((subItem) => (
                            <p
                              key={subItem}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
                              role="menuitem"
                            >
                              {subItem}
                            </p>
                          ))}
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PropertyDropdown;
