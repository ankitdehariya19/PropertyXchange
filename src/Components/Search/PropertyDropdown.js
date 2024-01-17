import React, { useState, useEffect } from 'react';

const PropertyDropdown = ({ propertyTypes, onSelectionChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedType, setSelectedType] = useState(null);
  const [selectedName, setSelectedName] = useState(null);
  const [selectedSubItem, setSelectedSubItem] = useState(null);

  useEffect(() => {
    // Update selectedName and selectedSubItem when isOpen changes to false
    if (!isOpen) {
      setSelectedName(null);
      setSelectedSubItem(null);
    }
  }, [isOpen]);

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleTypeClick = (type) => {
    if (selectedType === type) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
      setSelectedType(type);
      setSelectedName(null);
      setSelectedSubItem(null);
    }
  };

  const handleItemClick = (name, subItems) => {
    setIsOpen(!!subItems); // Show subItems only if they exist
    setSelectedName(name);
  };

  const handleSubItemClick = (subItem) => {
    setSelectedSubItem(subItem);
  };

  const handleApplyClick = () => {
    if (onSelectionChange) {
      onSelectionChange({
        type: selectedType,
        name: selectedName,
        subItem: selectedSubItem,
      });
    }

    setIsOpen(false);
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
            {selectedType ? `Type: ${selectedType}` : 'Select Property Type'}
          </button>
        </span>
      </div>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none transition-transform duration-300 ease-out"
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
                <div className="pl-4 transition-transform duration-300 ease-out">
                  {propertyType.items.map((item) => (
                    <React.Fragment key={item.name}>
                      <div className="flex items-center">
                        <p
                          className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer ${
                            selectedName === item.name ? 'bg-gray-200' : ''
                          }`}
                          role="menuitem"
                          onClick={() => handleItemClick(item.name, item.subItems)}
                        >
                          {item.name}
                        </p>
                        {item.subItems && selectedName === item.name && (
                          <div className="ml-4 flex flex-col space-y-2 transition-opacity duration-300 ease-out">
                            {item.subItems.map((subItem) => (
                              <p
                                key={subItem}
                                className={`block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer ${
                                  selectedSubItem === subItem ? 'bg-gray-200' : ''
                                }`}
                                role="menuitem"
                                onClick={() => handleSubItemClick(subItem)}
                              >
                                {subItem}
                              </p>
                            ))}
                          </div>
                        )}
                      </div>
                    </React.Fragment>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="p-4">
            <button
              onClick={handleApplyClick}
              className="bg-blue-500 text-white py-2 px-4"
            >
              Apply
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertyDropdown;
