import React, { useState } from "react";
import FeaturedPropertyCard from "./FeaturedPropertyCard"; // Adjust the path accordingly

const FeaturedPropertiesSection = () => {
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
    // ... Add more featured properties as needed
  ];

  const [startIndex, setStartIndex] = useState(0);

  const handleScroll = (direction) => {
    const lastIndex = featuredPropertiesData.length - 1;
    let newStartIndex;

    if (direction === "left") {
      newStartIndex = startIndex === 0 ? lastIndex - 1 : startIndex - 1;
    } else {
      newStartIndex = startIndex === lastIndex - 1 ? 0 : startIndex + 1;
    }

    setStartIndex(newStartIndex);
  };

  return (
    <section className="py-12 px-16  h-screen flex items-center ">
      <div className="flex flex-col mx-auto ">
      <div className="my-14 text-center">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 text-violet-600">Featured Properties</h2>
  <p className=" text-gray-700 text-sm mb-5 mx-auto max-w-2xl">
    Elevate your lifestyle with our carefully curated selection of premier properties. Immerse yourself in the epitome of luxurious living and discover prime investment opportunities. Explore a world where unparalleled quality meets unmatched convenience, all in the heart of real estate excellence.
  </p>
  <p className="text-lg text-gray-700 mb-5 font-semibold underline">
    Hottest Selling Properties That <span className="text-red-600">Can't Be Missed</span>
  </p>
</div>



        <div className="flex justify-between items-center overflow-hidden">
          <button
            className="mr-4 px-4 py-2 bg-white rounded-full shadow-md"
            onClick={() => handleScroll("left")}
          >
            {"<"}
          </button>
          <div className="flex w-fit transition-transform duration-300 transform translate-x-[0%]">
            {featuredPropertiesData.slice(startIndex, startIndex + 2).map((property, index) => (
              <div
                key={index}
                className={`flex-shrink-0 duration-700 transform`}
                style={{ width: "50%" }}
              >
                <FeaturedPropertyCard property={property} />
              </div>
            ))}
          </div>
          <button
            className="ml-4 px-4 py-2 bg-white rounded-full shadow-md"
            onClick={() => handleScroll("right")}
          >
            {">"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPropertiesSection;
