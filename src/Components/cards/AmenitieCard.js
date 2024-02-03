import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const AmenitieCard = () => {
  const amenitiesList = [
    "Covered campus", "Club House", "Park", "CCTV Camera", "Security Guard",
    "Lift", "Reserved Parking", "Swimming Pool", "Vastu Compliant", "Gymnasium",
    "Jogging Track", "Intercom Facility", "Tennis Court", "Rain Water Harvesting",
    "Indoor Squash & Badminton Courts", "Multipurpose Hall", "Kids Play Area",
    "Fire Fighting Equipment", "Indoor Games Room", "Air conditioned", "Maintenance Staff",
    "Internet/Wifi connectivity", "Power backup", "Water Storage", "Waste Disposal",
    "Laundry Service", "Banquet hall", "Cafeteria/ Food Court", "Piped Gas",
    "Private Pool", "Cinema Theatre", "Private Garden", "Biometric access",
    "24/7 Water Supply"
  ];

  return (
    <div className="max-w-md mx-auto bg-white p-8 border border-gray-300 rounded-md shadow-md mt-8">
      <h2 className="text-2xl font-semibold mb-4">Amenities</h2>
      <ul className="grid grid-cols-2 gap-4">
        {amenitiesList.map((amenity, index) => (
          <li key={index} className="flex items-center mb-2">
            <FaCheckCircle className="text-green-500 mr-2" />
            <span>{amenity}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AmenitieCard;
