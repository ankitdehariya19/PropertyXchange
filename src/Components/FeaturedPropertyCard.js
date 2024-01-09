// import React from "react";
// import PropTypes from "prop-types";
// import { BiBed, BiBath, BiArea, BiMap } from "react-icons/bi";

// const FeaturedPropertyCard = ({ property }) => {
//   const { title, image, description, bedrooms, bathrooms, surface, plotSize, price } = property;

//   return (
//     <div className="max-w-xs mx-auto my-4 bg-white rounded-lg overflow-hidden shadow-md cursor-pointer hover:shadow-lg transition duration-300">
//       <img src={image} alt={title} className="w-full h-32 object-cover rounded-t-lg" />
//       <div className="p-4">
//         <div className="text-sm font-semibold mb-2">{title}</div>
//         <div className="text-xs text-gray-600 line-clamp-2 mb-2">{description}</div>
//         <div className="flex flex-wrap mb-2">
//           <FeatureIcon icon={<BiBed />} label="Bedrooms" value={bedrooms} />
//           <FeatureIcon icon={<BiBath />} label="Bathrooms" value={bathrooms} />
//           <FeatureIcon icon={<BiArea />} label="Surface" value={`${surface} sqft`} />
//           <FeatureIcon icon={<BiMap />} label="Plot Size" value={`${plotSize} sqft`} />
//         </div>
//         <div className="text-xs font-semibold text-violet-600 mb-2">
//           ${price}
//         </div>
//         <div className="mt-2">
//           <a
//             href="#"
//             className="inline-block bg-violet-700 hover:bg-violet-800 text-center py-1 px-2 rounded-md text-white font-semibold text-xs transition duration-300"
//           >
//             View Details
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// const FeatureIcon = ({ icon, label, value }) => (
//   <div className="flex items-center text-gray-600 m-1">
//     <div className="flex items-center">
//       <div className="text-xs">{icon}</div>
//       <div className="text-xs ml-1">{value}</div>
//     </div>
//     <div className="ml-1">
//       <div className="text-xs font-semibold">{label}</div>
//     </div>
//   </div>
// );

// FeaturedPropertyCard.propTypes = {
//   property: PropTypes.shape({
//     title: PropTypes.string.isRequired,
//     image: PropTypes.string.isRequired,
//     description: PropTypes.string.isRequired,
//     bedrooms: PropTypes.number.isRequired,
//     bathrooms: PropTypes.number.isRequired,
//     surface: PropTypes.number.isRequired,
//     plotSize: PropTypes.number.isRequired,
//     price: PropTypes.number.isRequired,
//   }).isRequired,
// };
// // asdofkgjh asdkjfk asdf;lksd 
// export default FeaturedPropertyCard;




import React from "react";
import PropTypes from "prop-types";
import { BiBed, BiBath, BiArea, BiMap } from "react-icons/bi";

const FeaturedPropertyCard = ({ property }) => {
  const { title, image, description, bedrooms, bathrooms, surface, plotSize, price } = property;

  return (
    <div className="relative w-full  h-full mb-4 group max-w-xs mx-auto p-1 border  rounded-lg overflow-hidden shadow-md cursor-pointer hover:shadow-lg transition duration-300">
      <img src={image} alt={title} className="w-full h-80 rounded-lg transition-transform transform " />
      <div className="absolute bottom-24  left-0 right-0 bg-white  bg-opacity-100 text-black p-2 transition-transform transform translate-y-full group-hover:translate-y-24">
      <div className="text-xs font-semibold text-[#F76C00] mb-2">
          ${price}
        </div>
         <div className="text-sm font-semibold mb-2">{title}</div>
        <div className="text-xs text-gray-600 line-clamp-2 mb-2">{description}</div>

        <div className="flex flex-wrap mb-2">
          <FeatureIcon icon={<BiBed />} label="Bedrooms" value={bedrooms} />
          <FeatureIcon icon={<BiBath />} label="Bathrooms" value={bathrooms} />
          <FeatureIcon icon={<BiArea />} label="Surface" value={`${surface} sqft`} />
          <FeatureIcon icon={<BiMap />} label="Plot Size" value={`${plotSize} sqft`} />
        </div>

        <div className="mt-2">
          <a
            href="#"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-center py-1 px-2 rounded-md text-white font-semibold text-xs transition duration-300"
          >
            View Details
          </a>
        </div>
      </div>
    </div>
  );
};

const FeatureIcon = ({ icon, label, value }) => (
  <div className="flex items-center text-gray-600 m-1">
    <div className="flex items-center">
      <div className="text-xs">{icon}</div>
      <div className="text-xs ml-1">{value}</div>
    </div>
    <div className="ml-1">
      <div className="text-xs font-semibold">{label}</div>
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
// asdofkgjh asdkjfk asdf;lksd 
export default FeaturedPropertyCard;


