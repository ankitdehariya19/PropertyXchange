
import React from "react";
import Image from "../../assets/images/homeimg5.png";
import Searchbox from "../Elements/Searchbox";
import Search from "../Elements/Search/Search";
import PropertyType from "../Elements/Search/PropertyType"
import Demofile from "../Elements/Demofile"

const Banner = () => {
  return (
    <div className="relative mx-1 lg:mx-16  rounded-b-[40px] ">
  
      <div
        className="bg-cover bg-center bg-no-repeat relative rounded-b-[40px] overflow-hidden"
        style={{
          backgroundImage: `url(${Image})`,
          minHeight: "calc(100vh - 45vh)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-orange-600 via-orange-400 to-transparent opacity-70 rounded-b-[40px]"></div>
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-end  text-white">
       
        <div className="flex w-full items-center justify-center z-40">
          <Searchbox />
          {/* <Demofile/> */}
        </div>
      </div>

    </div>
  );
};

export default Banner;
