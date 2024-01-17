// PropertySearchComponent.js
import React, { useState } from 'react';
import CustomDropdown from '../Elements/CustomDropdown';

const PropertySearchComponent = ({ locations, onLocationSelect ,setIsBudgetVisible,setIsPropertyTypeVisible}) => {
  const [selectedLocations, setSelectedLocations] = useState([]);

  const handleLocationSelect = (selectedLocation) => {
    if (!selectedLocations.includes(selectedLocation)) {
      setSelectedLocations([...selectedLocations, selectedLocation]);
    }
  };

  const handleRemoveLocation = (removedLocation) => {
    const updatedLocations = selectedLocations.filter(
      (location) => location !== removedLocation
    );
    setSelectedLocations(updatedLocations);
  };

  return (
    <div className="m-5 flex w-full  ">
      <CustomDropdown
        options={locations}
        selectedValues={selectedLocations}
        onSelect={handleLocationSelect}
        onRemove={handleRemoveLocation}
        setIsPropertyTypeVisible={setIsPropertyTypeVisible}
        setIsBudgetVisible={setIsBudgetVisible}
      />
    </div>
  );
};

export default PropertySearchComponent;
