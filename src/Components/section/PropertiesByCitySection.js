import React from "react";
import CityCard from "../cards/CityCard";

const CitiesSection = () => {
  const citiesData = [
    {
        name: "Bhopal",
        image: require("../../assets/CityImage/bhopal-image.jpg"),
        propertiesCount: 120,
      },
      {
        name: "Indore",
        image: require("../../assets/CityImage/indore-image.jpg"),
        propertiesCount: 200,
      },
      {
        name: "Mumbai",
        image: require("../../assets/CityImage/mumbai-image.jpg"),
        propertiesCount: 350,
      },
      {
        name: "Delhi",
        image: require("../../assets/CityImage/delhi-image.jpg"),
        propertiesCount: 500,
      },
      {
        name: "Noida",
        image: require("../../assets/CityImage/noida-image.jpg"),
        propertiesCount: 180,
      },
      {
        name: "Gurgaon",
        image: require("../../assets/CityImage/gurgaon-image.jpg"),
        propertiesCount: 250,
      },
      {
        name: "Pune",
        image: require("../../assets/CityImage/pune-image.jpg"),
        propertiesCount: 300,
      },
      {
        name: "Bangalore",
        image: require("../../assets/CityImage/bangalore-image2.jpg"),
        propertiesCount: 400,
      },
      {
        name: "Hyderabad",
        image: require("../../assets/CityImage/hyderabad-image.jpg"),
        propertiesCount: 220,
      },
      {
        name: "Lucknow",
        image: require("../../assets/CityImage/lucknow-image.jpg"),
        propertiesCount: 150,
      },
      {
        name: "Chennai",
        image: require("../../assets/CityImage/chennai-image2.jpg"),
        propertiesCount: 280,
      },
      {
        name: "Jaipur",
        image: require("../../assets/CityImage/jaipur-image.jpg"),
        propertiesCount: 170,
      },
  ];

  return (
    <section className="py-16 ">
      <div className="container mx-auto text-center">

      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F76C00] mb-8 ">
        Properties By City 
        </h2>

        <p className="text-lg text-gray-700 leading-relaxed mb-12">
          Embark on a journey of discovery as you explore exceptional properties in the city of your choice. Whether you desire a serene suburban retreat or a dynamic urban dwelling, our diverse range of listings is curated to captivate your imagination. From luxurious apartments to charming homes and beyond, our platform empowers you to tailor your search according to your unique preferences.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8  p-10">
          {citiesData.map((city, index) => (
            <CityCard key={index} {...city} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CitiesSection;
