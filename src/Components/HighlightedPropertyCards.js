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
    maskImage:
      "linear-gradient(to right, hsl(0 0% 0% / 0), hsl(0 0% 0% / 1) 10%, hsl(0 0% 0% / 1) 90%, hsl(0 0% 0% / 0))",
  };

  return (
    <section className="warapper w-full h-fit flex items-center justify-center  h-45vh overflow-hidden flex-col">
      <div className="flex justify-center">
        {/* <h1>Highlight Property</h1> */}
      </div>
      <div className="w-fit   flex justify-center items-center flex-col">
        
        <div
          className="  h-fit overflow-hidden flex w-[1200px]   "
          style={cardContainerStyle}
        >
          <div className=" flex-shrink-0  flex items-center justify-around whitespace-nowrap w-full overflow-hidden  home-section-scroll">
            {propertyDatarow1.map((item) => (
              <HighlightProperty key={item.id} {...item} />
            ))}
          </div>
          <div className=" flex-shrink-0  flex items-center justify-around whitespace-nowrap w-full overflow-hidden  home-section-scroll">
            {propertyDatarow1.map((item) => (
              <HighlightProperty key={item.id} {...item} />
            ))}
          </div>
        </div>
        <div
          className="  h-fit overflow-hidden flex w-[1200px]   "
          style={cardContainerStyle}
        >
          <div className=" flex-shrink-0  flex items-center justify-around whitespace-nowrap w-full overflow-hidden  home-section-scroll2">
            {propertyDatarow2.map((item) => (
              <HighlightProperty key={item.id} {...item} />
            ))}
          </div>
          <div className=" flex-shrink-0  flex items-center justify-around whitespace-nowrap w-full overflow-hidden  home-section-scroll2">
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
