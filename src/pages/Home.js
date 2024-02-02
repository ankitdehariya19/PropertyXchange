
import React from "react";
import Banner from "../components/section/Banner";
import PropertiesByCitySection from "../components/section/PropertiesByCitySection";
import FeaturedPropertiesSection from "../components/section/FeaturedPropertiesSection";
import BookMyStay from "../components/section/BookMyStay";
import PropertySection from "../components/section/PropertySection";

const Home = () => {
  const HomeStyle = {
    minHeight: "calc(100vh - 10vh)",
  };

  const residentialCount = 50;
  const commercialCount = 30;
  const otherCount = 20;

  return (
    <div className="min-h-[1800px]">
      <div className="h-fit" style={HomeStyle}>
        <Banner />
        <div className="w-full mt-10 h-full flex justify-center ">
          <PropertySection
            residentialCount={residentialCount}
            commercialCount={commercialCount}
            otherCount={otherCount}
          />
        </div>
      </div>
      <PropertiesByCitySection />
      <FeaturedPropertiesSection />
      <BookMyStay />
    </div>
  );
};

export default Home;
