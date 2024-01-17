// Import React and other necessary modules
import React from "react";
import { propertyDatarow1, propertyDatarow2 } from "../Data2";
import HighlightProperty from "./HighlightProperty";

// Import the CSS file where you define the animation class
import "./HomeSection.css";

const HomeSection = () => {
  const cardContainerStyle = {
    display: "flex",
    justifyContent: "space-between",
    
  };

  return (
    <section className="warapper w-full h-fit flex items-center justify-center  h-45vh overflow-hidden flex-col">
      <div className="flex justify-center">
        <h1>sdfgasd</h1>
        <p>asdfasd</p>
      </div>
      <div className="w-fit px-6   flex justify-center items-center flex-col">
        <div
          className="border bg-white w-[1200px]  h-fit overflow-hidden flex  home-section-container "
          style={cardContainerStyle}
        >
          <div className=" bg-white flex-shrink-0  flex items-center justify-around whitespace-nowrap w-full overflow-hidden  home-section-scroll">
            {propertyDatarow1.map((item) => (
              <HighlightProperty key={item.id} {...item} />
            ))}
          </div>
          <div className="bg-white flex-shrink-0  flex items-center justify-around whitespace-nowrap w-full overflow-hidden  home-section-scroll">
            {propertyDatarow1.map((item) => (
              <HighlightProperty key={item.id} {...item} />
            ))}
          </div>
        </div>
        <div
          className="border  w-[1200px] h-fit overflow-hidden flex  "
          style={cardContainerStyle}
        >
          <div className="border-black flex-shrink-0  flex items-center justify-around whitespace-nowrap w-full overflow-hidden  home-section-scroll2">
            {propertyDatarow2.map((item) => (
              <HighlightProperty key={item.id} {...item} />
            ))}
          </div>
          <div className="border-black flex-shrink-0  flex items-center justify-around whitespace-nowrap w-full overflow-hidden  home-section-scroll2">
            {propertyDatarow2.map((item) => (
              <HighlightProperty key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
