// Home.js
import React from "react";
import Banner from "../Components/Banner";
import PropertiesByCitySection from "../Components/PropertiesByCitySection";
import FeaturedPropertiesSection from "../Components/FeaturedPropertiesSection";
import BookMyStay from "../Components/BookMyStay";
import HighlightedPropertyCards from "../Components/HighlightedPropertyCards";

const Home = () => {
  const HomeStyle = {
    minHeight: "calc(100vh - 10vh)",
  };

  return (
    <div className="min-h-[1800px]">
      <div className="h-fit" style={HomeStyle}>
        <Banner />
        <div className="w-full h-full flex justify-center items-center">
          <HighlightedPropertyCards />

        </div>
      </div>

      {/* Remaining Sections */}
      <PropertiesByCitySection />
      <FeaturedPropertiesSection />
      <BookMyStay />
    </div>
  );
};

export default Home;
