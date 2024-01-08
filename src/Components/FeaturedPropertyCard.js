import React from "react";
import PropTypes from "prop-types";
import { BiBed, BiBath, BiArea, BiMap } from "react-icons/bi";

const FeaturedPropertyCard = ({ property }) => {
  const { title, image, description, bedrooms, bathrooms, surface, plotSize, price } = property;

  return (
    <div className="bg-white max-w-3xl  h-fit border rounded-lg overflow-hidden my-4 mx-4 cursor-pointer hover:shadow-md transition duration-300 flex flex-col md:flex-row lg:flex-row xl:flex-row">
      <div className="w-full h-96 bg-red-300 md:w-1/2 lg:w-1/2 xl:w-1/2 m-1 rounded-lg overflow-hidden border">
        <img src={image} alt={title} className=" h-full w-full rounded-lg" />
      </div>
      <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 p-6">
        <div className="text-xl h-16 font-semibold mb-2">{title}</div>
        <div className="text-2xl font-semibold text-violet-600 mb-4">
          ${price}
        </div>
        <div className="text-gray-600 line-clamp-3 mb-4">{description}</div>
        <div className="flex flex-col md:flex-row p-2 rounded-md">
          <div className="flex flex-col justify-between">
            <FeatureIcon icon={<BiBed />} label="Bedrooms" value={bedrooms} />
            <FeatureIcon icon={<BiBath />} label="Bathrooms" value={bathrooms} />
            <FeatureIcon icon={<BiArea />} label="Area" value={`${surface} sqft`} />
            <FeatureIcon icon={<BiMap />} label="Plot Size" value={`${plotSize} sqft`} />
          </div>
        </div>
        <div className="mt-4">
          <a
            href="#"
            className="inline-block bg-violet-700 hover:bg-violet-800 text-center py-2 px-4 rounded-md text-white font-semibold transition duration-300"
          >
            View Details
          </a>
        </div>
      </div>
    </div>
  );
};

const FeatureIcon = ({ icon, label, value }) => (
  <div className="flex items-center text-gray-600 m-2">
    <div className="flex items-center">
      <div className="text-2xl">{icon}</div>
      <div className="text-sm w-full">{value}</div>
    </div>
    <div className="ml-2">
      <div className="text-sm font-semibold">{label}</div>
    </div>
  </div>
);

FeaturedPropertyCard.propTypes = {
  property: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    bedrooms: PropTypes.number.isRequired,
    bathrooms: PropTypes.number.isRequired,
    surface: PropTypes.number.isRequired,
    plotSize: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default FeaturedPropertyCard;
