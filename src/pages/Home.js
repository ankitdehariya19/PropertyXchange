
import React from "react";
import Banner from "../components/section/Banner";
import PropertiesByCitySection from "../components/section/PropertiesByCitySection";
import FeaturedPropertiesSection from "../components/section/FeaturedPropertiesSection";
import BookMyStay from "../components/section/BookMyStay";
import PropertySection from "../components/section/PropertySection";
import Hero from "../components/section/Hero";
import Hero2 from "../components/section/Hero2";

const Home = () => {
  const HomeStyle = {
    minHeight: "calc(100vh - 10vh)",
  };

  const residentialCount = 50;
  const commercialCount = 30;
  const otherCount = 20;

  return (
    <div className="min-h-[1800px] ">
      <div className="h-fit " style={HomeStyle}>
        {/* <Banner /> */}
        {/* <Hero/> */}
        <Hero2/>
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
