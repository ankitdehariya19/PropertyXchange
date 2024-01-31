
import React from 'react';
import { FaHome, FaBuilding, FaCubes, FaMap } from 'react-icons/fa';

const PropertySection = ({
  residentialCount,
  commercialCount,
  otherCount,
  plotCount,
}) => {
  return (
    <div className="p-8 rounded-lg ">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
          <FaHome className="text-5xl mb-4 text-orange-500" />
          <h3 className="text-2xl font-semibold mb-2">Residential</h3>
          <p className="text-gray-600">{`Total: ${residentialCount}`}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
          <FaBuilding className="text-5xl mb-4 text-orange-500" />
          <h3 className="text-2xl font-semibold mb-2">Commercial</h3>
          <p className="text-gray-600">{`Total: ${commercialCount}`}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
          <FaCubes className="text-5xl mb-4 text-orange-500" />
          <h3 className="text-2xl font-semibold mb-2">Other Types</h3>
          <p className="text-gray-600">{`Total: ${otherCount}`}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
          <FaMap className="text-5xl mb-4 text-orange-500" />
          <h3 className="text-2xl font-semibold mb-2">Plots</h3>
          <p className="text-gray-600">{`Total: ${plotCount}`}</p>
        </div>
      </div>
    </div>
  );
};

export default PropertySection;
