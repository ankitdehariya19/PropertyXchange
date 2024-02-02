import React from "react";
import { FaHome, FaBuilding, FaUsers } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <section className="py-16 flex items-center   h-screen">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-orange-500 mb-8 ">
          Why Choose PropertyXchange
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-12">
          At PropertyXchange, we stand out as your premier destination for all your real estate needs. Whether you're selling your property, searching for your dream home, or securing reliable tenants for your rental, our platform provides a seamless and comprehensive solution. Committed to excellence, we employ effective strategies to maximize profits in sales, offer an extensive range of properties for your dream home, and ensure hassle-free rental income. Choose PropertyXchange for a trusted and rewarding real estate experience where your property goals become a reality.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceItem
            icon={<FaHome className="text-5xl mb-4 text-orange-500 mx-auto" />}
            title="Verified Listings"
            reason="Each property undergoes a thorough verification process, ensuring accuracy and trustworthiness."
          />
          <ServiceItem
            icon={<FaBuilding className="text-5xl mb-4 text-orange-500 mx-auto" />}
            title="Diverse Portfolio"
            reason="Explore a wide range of properties to cater to different preferences and requirements."
          />
          <ServiceItem
            icon={<FaUsers className="text-5xl mb-4 text-orange-500 mx-auto" />}
            title="Expert Team"
            reason="Rely on our team's deep understanding of the market and industry trends."
          />
        </div>
      </div>
    </section>
  );
};

const ServiceItem = ({ icon, title, reason }) => {
  return (
    <div className="p-6 rounded-md shadow-md transition duration-300 transform hover:scale-105">
      <div className="text-5xl text-orange-700 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700">{reason}</p>
    </div>
  );
};

export default WhyChooseUs;
