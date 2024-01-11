import React, { useState, useEffect } from "react";
import Header from "./Header";
import Image from "../assets/img/hero.jpeg";
import Search from "./Elements/Search";
import ButtonGroup from "./Search/ButtonGroup";
import NestedDropdown from "./Search/NestedDropdown";
import DependentSearch from "./Search/DependentSearch";



const Banner = () => {
  const bannerStyle = {
    position: "relative",
    backgroundImage: `url(${Image})`,
    backgroundSize: "cover",
    // backgroundPosition: "center",
    minHeight: "calc(100vh - 45vh)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: "#fff",
    // backgroundRepeat: "no-repeat"
    // margin: "-60px 0 0 0", 
    padding: "20px 0 0 0" 
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(247, 108, 0, 0.2)",
    zIndex: 0,
    borderBottomLeftRadius: "40px", 
    borderBottomRightRadius: "40px",
    zIndex:""
  };


  return (
    <div className="">
      <section style={bannerStyle} className="relative mx-16 rounded-b-[40px] h-full ">
        <div style={overlayStyle}></div>
  

        <div className="w-full mt-20 ">
          <Search className="absolute bottom-10" />
          {/* <ButtonGroup/> */}
          {/* <NestedDropdown/> */}
       
        </div>
      </section>
    </div>
  );
};

export default Banner;
