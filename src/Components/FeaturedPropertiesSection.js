// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import FeaturedPropertyCard from "./FeaturedPropertyCard";

// const FeaturedPropertiesSection = () => {
//   const featuredPropertiesData = [
//     {
//       title: "Luxury Villa in the Hills",
//       image: require("../assets/img/property11.jpg"),
//       description:
//         "Enjoy breathtaking views and luxurious living in this stunning hillside villa.",
//       bedrooms: 4,
//       bathrooms: 3,
//       surface: 3500,
//       plotSize: 1200,
//       price: 1200000,
//     },
//     {
//       title: "Modern City Apartment",
//       image: require("../assets/img/property2.jpg"),
//       description:
//         "Contemporary design meets urban convenience in this stylish city apartment.",
//       bedrooms: 2,
//       bathrooms: 1,
//       surface: 1200,
//       plotSize: 500,
//       price: 500000,
//     },
//     {
//       title: "Seaside Retreat",
//       image: require("../assets/img/property3.jpg"),
//       description:
//         "Escape to a tranquil seaside paradise with this charming beachfront property.",
//       bedrooms: 3,
//       bathrooms: 2,
//       surface: 2200,
//       plotSize: 800,
//       price: 800000,
//     },
//     {
//       title: "Seaside Retreat",
//       image: require("../assets/img/property3.jpg"),
//       description:
//         "Escape to a tranquil seaside paradise with this charming beachfront property.",
//       bedrooms: 3,
//       bathrooms: 2,
//       surface: 2200,
//       plotSize: 800,
//       price: 800000,
//     },
//     {
//       title: "Seaside Retreat",
//       image: require("../assets/img/property3.jpg"),
//       description:
//         "Escape to a tranquil seaside paradise with this charming beachfront property.",
//       bedrooms: 3,
//       bathrooms: 2,
//       surface: 2200,
//       plotSize: 800,
//       price: 800000,
//     },
//     {
//       title: "Seaside Retreat",
//       image: require("../assets/img/property3.jpg"),
//       description:
//         "Escape to a tranquil seaside paradise with this charming beachfront property.",
//       bedrooms: 3,
//       bathrooms: 2,
//       surface: 2200,
//       plotSize: 800,
//       price: 800000,
//     },
//   ];

//   const cardsToShow = 3;
//   const [startIndex, setStartIndex] = useState(0);

//   const handleScroll = (direction) => {
//     const lastIndex = featuredPropertiesData.length - 1;
//     let newStartIndex;

//     if (direction === "left") {
//       newStartIndex =
//         startIndex === 0 ? lastIndex - (cardsToShow - 1) : startIndex - 1;
//     } else {
//       newStartIndex =
//         startIndex === lastIndex - (cardsToShow - 1) ? 0 : startIndex + 1;
//     }

//     setStartIndex(newStartIndex);
//   };

//   const containerStyle = {
//     display: "flex",
//     width: `${featuredPropertiesData.length * (50 / cardsToShow)}%`,
//     transform: `translateX(-${
//       (startIndex * 100) / (featuredPropertiesData.length - cardsToShow)
//     }%)`,
//     transition: "transform 0.7s ease",
//     gap: "15px",
//   };

//   const buttonStyle = {
//     zIndex: 2,
//   };

//   return (
//     <section className="py-12 px-16 h-screen flex items-center bg-white">
//       <div className="flex flex-col mx-auto bg-red-400 justify-center">
//         <div className="my-14 text-center">
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 text-violet-600">
//             Featured Properties
//           </h2>
//           <p className="text-gray-700 text-sm mb-5 mx-auto max-w-2xl">
//             Elevate your lifestyle with our carefully curated selection of
//             premier properties. Immerse yourself in the epitome of luxurious
//             living and discover prime investment opportunities. Explore a world
//             where unparalleled quality meets unmatched convenience, all in the
//             heart of real estate excellence.
//           </p>
//           <p className="text-lg text-gray-700 mb-5 font-semibold underline">
//             Hottest Selling Properties That{" "}
//             <span className="text-red-600">Can't Be Missed</span>
//           </p>
//         </div>
//         <div className="flex justify-center">
//           <div className="flex justify-between w-full items-center overflow-hidden">
//             <button
//               className="mr-4 px-4 py-2 bg-white rounded-full shadow-md"
//               onClick={() => handleScroll("left")}
//               style={buttonStyle}
//             >
//               {"<"}
//             </button>
//             <motion.div className="flex w-full " style={containerStyle}>
//               {featuredPropertiesData.map((property, index) => (
//                 <div
//                   key={index}
//                   className={`flex-shrink-0 w-fit  bg-red-100  duration-700 transform `}
//                   style={{ width: `${100 / cardsToShow}%` }}
//                 >
//                   <FeaturedPropertyCard property={property} />
//                 </div>
//               ))}
//             </motion.div>
//             <button
//               className="ml-4 px-4 py-2 bg-white rounded-full shadow-md"
//               onClick={() => handleScroll("right")}
//               style={buttonStyle}
//             >
//               {">"}
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
// // kdsflk dlskfja asdkfjl;as aldsfjl
// export default FeaturedPropertiesSection;





import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import FeaturedPropertyCard from './FeaturedPropertyCard'; // Make sure the path is correct
import {  Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';


const featuredPropertiesData = [
  {
    title: "Luxury Villa in the Hills",
    image: require("../assets/img/property11.jpg"),
    description: "Enjoy breathtaking views and luxurious living in this stunning hillside villa.",
    bedrooms: 4,
    bathrooms: 3,
    surface: 3500,
    plotSize: 1200,
    price: 1200000,
  },
  {
    title: "Modern City Apartment",
    image: require("../assets/img/property2.jpg"),
    description: "Contemporary design meets urban convenience in this stylish city apartment.",
    bedrooms: 2,
    bathrooms: 1,
    surface: 1200,
    plotSize: 500,
    price: 500000,
  },
  {
    title: "Seaside Retreat",
    image: require("../assets/img/property3.jpg"),
    description: "Escape to a tranquil seaside paradise with this charming beachfront property.",
    bedrooms: 3,
    bathrooms: 2,
    surface: 2200,
    plotSize: 800,
    price: 800000,
  },
  {
    title: "Seaside Retreat",
    image: require("../assets/img/property3.jpg"),
    description: "Escape to a tranquil seaside paradise with this charming beachfront property.",
    bedrooms: 3,
    bathrooms: 2,
    surface: 2200,
    plotSize: 800,
    price: 800000,
  },
  {
    title: "Seaside Retreat",
    image: require("../assets/img/property3.jpg"),
    description: "Escape to a tranquil seaside paradise with this charming beachfront property.",
    bedrooms: 3,
    bathrooms: 2,
    surface: 2200,
    plotSize: 800,
    price: 800000,
  },
  {
    title: "Seaside Retreat",
    image: require("../assets/img/property3.jpg"),
    description: "Escape to a tranquil seaside paradise with this charming beachfront property.",
    bedrooms: 3,
    bathrooms: 2,
    surface: 2200,
    plotSize: 800,
    price: 800000,
  },
];

const PropertySlider = ({ data, children }) => {
  const swiperParams = {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  };

  return (
    <Swiper    
    // spaceBetween={50}
  
    // autoplay={{
    //   delay: 2500,
    //   disableOnInteraction: false,
    // }}
  
    pagination={{
      clickable: true,
    }}
    navigation={true}
    modules={[ Navigation]} {...swiperParams}>
      {data.map((property, index) => (
        <SwiperSlide key={index}>{
          children({ property, index })
        
        }</SwiperSlide>
      ))}
    </Swiper>

    
  );
};

const PropertySliderSection = () => {
  return (
    <div className=" container items-center h-fit  mx-auto my-8 ">
     
      <div className="my-14 text-center ">
          <h2 className=" my-14 text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 text-[#F76C00]">
            Featured Properties
          </h2>
          <p className="text-gray-700  text-sm mb-5 mx-auto max-w-2xl">
            Elevate your lifestyle with our carefully curated selection of
            premier properties. Immerse yourself in the epitome of luxurious
            living and discover prime investment opportunities. Explore a world
            where unparalleled quality meets unmatched convenience, all in the
            heart of real estate excellence.
          </p>
          <p className="text-lg text-gray-700 mb-5 font-semibold underline">
            Hottest Selling Properties That{" "}
            <span className="text-red-600">Can't Be Missed</span>
          </p>
        </div>
       <div className=' mt-20 h-full   w-full items-center '>
       <PropertySlider data={featuredPropertiesData}>
        {({ property, index }) => <FeaturedPropertyCard key={index} property={property} />}
      </PropertySlider>
       </div>
    </div>
  );
};
// jdfh kasdfj kdsfjk skldfj askdfj sdkjf asklfdj 
export default PropertySliderSection;
