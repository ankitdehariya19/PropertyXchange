import React, { useState } from "react";
import CustomDropdown from "../Search/CustomDropdown";
import PropertyDropdown from "../Search/PropertyDropdown";

const customDemoData = [
  {
    location: "City A",
    propertyTypes: ["Apartment", "House", "Condo"],
  },
  {
    location: "City B",
    propertyTypes: ["Apartment", "Condo", "Townhouse"],
  },
  // Add more locations with property types as needed
];

const propertyTypes = [
  {
    type: 'Residential',
    items: [
      {
        name: 'Flat',
        subItems: [
          '1 Bhk',
          '2 Bhk',
          '3 Bhk',
          '4 Bhk',
          '5 Bhk',
          '5+ Bhk'
        ]
      },
      {
        name: 'House/Villa',
        subItems: [
          '1 Bhk',
          '2 Bhk',
          '3 Bhk',
          '4 Bhk',
          '5 Bhk',
          '5+ Bhk'
        ]
      },
      {
        name: 'Plot',
        subItems: [
          'Sqft',
          'Area range create is'
        ]
      }
    ]
  },
  {
    type: 'Commercial',
    items: [
      {
        name: 'Office Space',
      },
      {
        name: 'Shop/Showroom',

      },
      {
        name: 'Commercial Land',

      },
      {
        name: 'Warehouse/Godown',

      },
      {
        name: 'Industrial Building',

      },
      {
        name: 'Industrial Shed',

      },
    ]
  },
  {
    type: 'Other Property Types',
    items: [
      {
        name: 'Agricultural Land',

      },
      {
        name: 'Farm House',

      },
    ]
  }
];

console.log(propertyTypes);


const PropertySearch = () => {
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [budget, setBudget] = useState("");
  const [locationData, setLocationData] = useState(null);

  const handleSearch = () => {
    // Implement your search logic here based on location, propertyType, and budget
    // For this example, we'll just log the selected values

    console.log("Location:", location);
    console.log("Property Type:", propertyType);
    console.log("Budget:", budget);
    // Perform your actual search or API call here
  };

  const handleLocationChange = (e) => {
    const selectedLocation = e.target.value;
    setLocation(selectedLocation);

    // Filter property types based on the selected location
    const data = customDemoData.find(
      (item) => item.location === selectedLocation
    );
    console.log("Selected Location:", selectedLocation);
    console.log("Location Data:", data);

    if (data) {
      console.log("Property Types:", data.propertyTypes);
      setLocationData(data);
      setPropertyType(data.propertyTypes[0] || ""); // Set the first property type as default
    } else {
      console.log("Location not found or has no property types.");
      setLocationData({ propertyTypes: [] });
      setPropertyType("");
    }
  };

  return (
    <div className="flex p-4">
      <div className="mr-4">
        <label className="block mb-2 text-lg font-bold">Location:</label>
        <input
          type="text"
          value={location}
          onChange={(e) => handleLocationChange(e)}
          className="border p-2"
          placeholder="Search by location"
        />
      </div>

      <div className="mr-4">
        <label className="block mb-2 text-lg font-bold">Property Type:</label>
        <CustomDropdown
          options={locationData ? locationData.propertyTypes : []}
          value={propertyType}
          onChange={(selectedOption) => setPropertyType(selectedOption)}
          placeholder="Select a property type"
          className="custom-styles"
        />
      </div>
      <div className="mr-4">
      <PropertyDropdown propertyTypes={propertyTypes} />
      </div>

      <div className="mr-4">
        <label className="block mb-2 text-lg font-bold">Budget:</label>
        <CustomDropdown
          options={["< $500", "$500 - $1000", "$1000 - $1500", ">$1500"]}
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          placeholder="Select a budget range"
        />
      </div>

      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white py-2 px-4"
      >
        Search
      </button>
    </div>
  );
};

export default PropertySearch;
