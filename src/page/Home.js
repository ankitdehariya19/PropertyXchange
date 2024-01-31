
import React from "react";
import Banner from "../Components/Banner";
import PropertiesByCitySection from "../Components/PropertiesByCitySection";
import FeaturedPropertiesSection from "../Components/FeaturedPropertiesSection";
import BookMyStay from "../Components/BookMyStay";
import PropertySection from "../Components/PropertySection";

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
