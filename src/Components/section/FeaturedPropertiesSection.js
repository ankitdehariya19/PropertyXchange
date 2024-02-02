
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import FeaturedPropertyCard from '../cards/FeaturedPropertyCard'; 
import {  Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';

const featuredPropertiesData = [
  {
    title: "Luxury Villa in the Hills",
    image: require("../../assets/PropertiesImage/property11.jpg"),
    description: "Enjoy breathtaking views and luxurious living in this stunning hillside villa.",
    bedrooms: 4,
    bathrooms: 3,
    surface: 3500,
    plotSize: 1200,
    price: 1200000,
  },
  {
    title: "Modern City Apartment",
    image: require("../../assets/PropertiesImage/property2.jpg"),
    description: "Contemporary design meets urban convenience in this stylish city apartment.",
    bedrooms: 2,
    bathrooms: 1,
    surface: 1200,
    plotSize: 500,
    price: 500000,
  },
  {
    title: "Seaside Retreat",
    image: require("../../assets/PropertiesImage/property3.jpg"),
    description: "Escape to a tranquil seaside paradise with this charming beachfront property.",
    bedrooms: 3,
    bathrooms: 2,
    surface: 2200,
    plotSize: 800,
    price: 800000,
  },
  {
    title: "Seaside Retreat",
    image: require("../../assets/PropertiesImage/property3.jpg"),
    description: "Escape to a tranquil seaside paradise with this charming beachfront property.",
    bedrooms: 3,
    bathrooms: 2,
    surface: 2200,
    plotSize: 800,
    price: 800000,
  },
  {
    title: "Seaside Retreat",
    image: require("../../assets/PropertiesImage/property3.jpg"),
    description: "Escape to a tranquil seaside paradise with this charming beachfront property.",
    bedrooms: 3,
    bathrooms: 2,
    surface: 2200,
    plotSize: 800,
    price: 800000,
  },
  {
    title: "Seaside Retreat",
    image: require("../../assets/PropertiesImage/property3.jpg"),
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
export default PropertySliderSection;
